'use server'

import { neon } from '@neondatabase/serverless'
import { QuoteFormSchema } from '@/lib/schema'
import type { z } from 'zod'
import { sendContactEmails } from './email';

// Define FormErrors type
type FormErrors = {
  [K in keyof z.infer<typeof QuoteFormSchema>]?: string[];
};

export type QuoteFormData = z.infer<typeof QuoteFormSchema>;

export async function submitQuoteForm(formData: FormData) {
  try {
    const validatedFields = QuoteFormSchema.safeParse({
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      company: formData.get('company'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      address: formData.get('location'), // mapping location to address
      message: formData.get('requirements'), // mapping requirements to message
      equipment: formData.get('equipment'),
      comments: formData.get('comments'),
    });

    if (!validatedFields.success) {
      // Transform Zod errors into field errors
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
      formType: 'quote',
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      address: data.address || '', // Handle potential null
      message: data.message,
      company: data.company || '', // Handle potential null
      equipment: data.equipment,
      comments: data.comments || '', // Handle potential null
    };

    const result = await sql`
      INSERT INTO form_submissions 
      (form_type, first_name, last_name, email, phone, address, message, company, equipment, comments) 
      VALUES 
      (${values.formType}, ${values.firstName}, ${values.lastName}, 
       ${values.email}, ${values.phone}, ${values.address}, 
       ${values.message}, ${values.company}, ${values.equipment}, ${values.comments}) 
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
      data: result[0] // Return the inserted data
    };

  } catch (error) {
    console.error('Detailed error in submitQuoteForm:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });

    return {
      success: false,
      error: 'Failed to submit quote request - please try again later'
    };
  }
} 