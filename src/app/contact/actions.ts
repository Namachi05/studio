'use server'

import { z } from 'zod'
import { secureContactForm } from '@/ai/flows/secure-contact-form'

const schema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
})

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  type?: 'success' | 'error';
}

export async function submitContactForm(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = schema.safeParse(formData);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.message);
    return {
      message: 'Invalid form data. Please check the fields below.',
      fields: formData as Record<string, string>,
      issues,
      type: 'error',
    }
  }

  const { name, email, message } = parsed.data;

  try {
    const result = await secureContactForm({ name, email, message });

    if (result.isAbusive) {
      return {
        message: `Message not sent. Reason: ${result.reason || 'Content policy violation.'}`,
        type: 'error',
      }
    }

    // Here you would typically send the email, e.g., using SendGrid
    // For this demo, we'll just log it and return a success message.
    console.log('Secure contact form submitted:', { name, email, message });

    return {
      message: 'Thank you for your message! I will get back to you soon.',
      type: 'success',
    }
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      message: 'An unexpected error occurred on the server. Please try again later.',
      type: 'error',
    }
  }
}
