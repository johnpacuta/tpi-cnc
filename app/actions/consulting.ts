'use server'

import { ContactFormSchema } from '@/lib/schema';
import { neon } from '@neondatabase/serverless';
import type { z } from 'zod';
import { sendContactEmails } from './email';

type FormErrors = {
  [K in keyof z.infer<typeof ContactFormSchema>]?: string[];
};

export async function submitConsultingForm(formData: FormData) {
  try {
    const validatedFields = ContactFormSchema.safeParse({
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      // Map null to undefined so optional schema doesn't error on null
      serviceType: (formData.get('serviceType') ?? undefined) as string | undefined,
    });

    if (!validatedFields.success) {
      const fieldErrors: FormErrors = {};
      validatedFields.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FormErrors;
        if (!fieldErrors[field]) {
          fieldErrors[field] = [];
        }
        fieldErrors[field]?.push(issue.message);
      });
      
      return {
        success: false,
        error: 'Please fix the form errors',
        fieldErrors
      };
    }

    const { data } = validatedFields;
    
    const sql = neon(process.env.DATABASE_URL!);

    const values = {
      formType: 'consulting',
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      category: data.serviceType,
      message: `Service Type: ${data.serviceType}\n\nAdditional Information: ${data.message || ''}`,
    };

    const result = await sql`
      INSERT INTO form_submissions 
      (form_type, first_name, last_name, email, phone, message, category) 
      VALUES 
      (${values.formType}, ${values.firstName}, ${values.lastName}, 
       ${values.email}, ${values.phone}, ${values.message}, ${values.category}) 
      RETURNING *`;

    if (!result || result.length === 0) {
      throw new Error('Insert succeeded but returned no data');
    }

    const emailResult = await sendContactEmails(values);
    if (!emailResult.success) {
      console.error('Failed to send emails:', emailResult.error);
      // Continue execution - don't fail the submission just because emails failed
    }
    
    return { 
      success: true,
      data: result[0]
    };

  } catch (error) {
    console.error('Detailed error in submitConsultingForm:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });

    return {
      success: false,
      error: 'Failed to submit form - please try again later'
    };
  }
}