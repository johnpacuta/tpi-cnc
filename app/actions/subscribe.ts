'use server'

import { z } from 'zod'
import { sql } from '@vercel/postgres'

const SubscribeSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

export async function submitSubscription(formData: FormData) {
  try {
    const email = formData.get('email')
    const validatedFields = SubscribeSchema.safeParse({ email })

    if (!validatedFields.success) {
      return { success: false, error: 'Please enter a valid email address' }
    }

    // Check if email already exists
    const existingSubscriber = await sql`
      SELECT email FROM subscribers 
      WHERE email = ${email as string}
    `

    if (existingSubscriber.rows.length > 0) {
      return { success: false, error: 'Email already subscribed' }
    }

    // Create new subscriber
    await sql`
      INSERT INTO subscribers (email, created_at)
      VALUES (${email as string}, NOW())
    `

    return { success: true }
  } catch (error) {
    console.error('Subscription error:', error)
    return { success: false, error: 'Failed to subscribe. Please try again.' }
  }
} 