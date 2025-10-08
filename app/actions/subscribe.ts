'use server'

import { neon } from '@neondatabase/serverless'
import {SubscribeSchema} from '@/lib/schema'

export async function submitSubscription(formData: FormData) {
  try {
    const email = formData.get('email')
    const validatedFields = SubscribeSchema.safeParse({ email })

    if (!validatedFields.success) {
      return { success: false, error: 'Please enter a valid email address' }
    }

    const sql = neon(process.env.DATABASE_URL!)

    const existingSubscriber = await sql`
      SELECT email FROM subscribers 
      WHERE email = ${email as string}
    `

    if (existingSubscriber.length > 0) {
      return { success: false, error: 'Email already subscribed' }
    }

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