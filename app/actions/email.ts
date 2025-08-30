'use server';

import sgMail from '@sendgrid/mail';
import type { ContactFormData } from './contact';
import type { QuoteFormData } from './quote';
import type { SparePartsFormData } from './spare-parts';
// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function sendContactEmails(formData: ContactFormData | QuoteFormData | SparePartsFormData) {
  try {
    // Prepare the admin notification email with conditional fields
    const adminMsg = {
      to: process.env.ADMIN_EMAIL!,
      from: process.env.ADMIN_EMAIL!, // Verified sender email
      templateId: process.env.SENDGRID_ADMIN_TEMPLATE_ID!,
      dynamicTemplateData: {
        // Common fields
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address || 'Not provided',
        message: formData.message || 'Not provided',
        
        // Optional fields - set default values for all possible fields
        company: 'company' in formData ? formData.company : 'Not provided',
        equipment: 'equipment' in formData ? formData.equipment : 'Not provided',
        requirements: 'requirements' in formData ? formData.requirements : 'Not provided',
        comments: 'comments' in formData ? formData.comments : 'Not provided',
        brand: 'brand' in formData ? formData.brand : 'Not provided',
        category: 'category' in formData ? formData.category : 'Not provided',
        parts: 'parts' in formData ? formData.parts : 'Not provided',
        location: 'location' in formData ? formData.location : 'Not provided',
        formType: 'formType' in formData? formData.formType : 'Not provided'
      },
    };

    // Prepare the user confirmation email
    const userMsg = {
      to: formData.email,
      from: process.env.SENDFROM_EMAIL!, // Verified sender email
      templateId: process.env.SENDGRID_USER_TEMPLATE_ID!,
      dynamicTemplateData: {},
    };

    // Send both emails
    await Promise.all([
      sgMail.send(adminMsg),
      sgMail.send(userMsg),
    ]);

    return { success: true };
  } catch (error) {
    console.error('Error sending emails:', error);
    return { 
      success: false, 
      error: 'Failed to send emails'
    };
  }
}
