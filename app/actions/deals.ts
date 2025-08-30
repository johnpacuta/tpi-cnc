'use server'

import { ContactFormSchema } from '@/lib/schema';
import { neon } from '@neondatabase/serverless';
import type { z } from 'zod';
import { sendContactEmails } from './email';

type FormErrors = {
  [K in keyof z.infer<typeof ContactFormSchema>]?: string[];
};

export async function submitDealForm(formData: FormData) {
  try {
    const validatedFields = ContactFormSchema.safeParse({
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      message: formData.get('message'),
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

    // Use parameterized values in an object for clarity
    const values = {
      formType: 'deals',
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      company: data.company || '', // Handle potential null
      message: data.message || '', // Handle potential null
      address: data.address || '', // Handle potential null
    };

    const result = await sql`
      INSERT INTO form_submissions 
      (form_type, first_name, last_name, email, phone, company, message) 
      VALUES 
      (${values.formType}, ${values.firstName}, ${values.lastName}, 
       ${values.email}, ${values.phone}, ${values.company}, ${values.message}) 
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
    console.error('Detailed error in submitDealForm:', {
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