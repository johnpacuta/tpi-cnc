import { z } from 'zod'

// Base schema with common fields
const BaseFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  address: z.string().optional(),
  message: z.string().optional(),
  company: z.string().optional(),
  comments: z.string().optional(),
  category: z.string().optional(),
  serviceType: z.string().optional().nullable(),
  formType: z.string().optional(),
})

export const SubscribeSchema = z.object({
    email: z.string().email('Invalid email address'),
})

// Contact form schema (uses base schema as-is)
export const ContactFormSchema = BaseFormSchema

// Quote form schema (could extend base schema with quote-specific fields)
export const QuoteFormSchema = BaseFormSchema.extend({
  equipment: z.string().min(1, 'Equipment details are required'),
  requirements: z.string().optional(),
  // Add any other quote-specific fields here
})

// Spare Parts form schema (extends base schema with spare parts specific fields)
export const SparePartsFormSchema = BaseFormSchema.extend({
  brand: z.string().min(1, 'Brand is required'),
  category: z.string().min(1, 'Category is required'),
  equipment: z.string().min(1, 'Equipment details are required'),
  parts: z.string().min(1, 'Parts details are required'),
  location: z.string().optional(),
  comments: z.string().optional(),
})
  
// Export types for each form
export type ContactFormData = z.infer<typeof ContactFormSchema>
export type QuoteFormData = z.infer<typeof QuoteFormSchema>
export type SparePartsFormData = z.infer<typeof SparePartsFormSchema>
