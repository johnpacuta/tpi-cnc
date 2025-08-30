'use server'

import { SparePartsFormSchema } from '@/lib/schema';
import { neon } from '@neondatabase/serverless';
import type { z } from 'zod';
import { sendContactEmails } from './email';

type FormErrors = {
  [K in keyof z.infer<typeof SparePartsFormSchema>]?: string[];
};

export type SparePartsFormData = z.infer<typeof SparePartsFormSchema>;

export async function submitSparePartsForm(formData: FormData) {
  try {
    const validatedFields = SparePartsFormSchema.safeParse({
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      brand: formData.get('brand'),
      category: formData.get('category'),
      equipment: formData.get('equipment'),
      parts: formData.get('parts'),
      location: formData.get('location'),
      comments: formData.get('comments'),
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
      formType: 'spare-parts',
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      address: data.location || '',
      brand: data.brand,
      category: data.category,
      equipment: data.equipment,
      parts: data.parts,
      comments: data.comments || '',
    };

    const result = await sql`
      INSERT INTO form_submissions 
      (form_type, first_name, last_name, email, phone, address,
       brand, category, equipment, parts, comments) 
      VALUES 
      (${values.formType}, ${values.firstName}, ${values.lastName}, 
       ${values.email}, ${values.phone}, ${values.address},
       ${values.brand}, ${values.category}, ${values.equipment}, 
       ${values.parts}, ${values.comments}) 
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
    console.error('Detailed error in submitSparePartsForm:', {
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