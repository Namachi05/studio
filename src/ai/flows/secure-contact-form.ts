'use server';

/**
 * @fileOverview Implements a secure contact form flow with AI-powered content filtering.
 *
 * - secureContactForm -  A function that handles the secure contact form submission process.
 * - SecureContactFormInput - The input type for the secureContactForm function.
 * - SecureContactFormOutput - The return type for the secureContactForm function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SecureContactFormInputSchema = z.object({
  name: z.string().describe('The name of the person submitting the form.'),
  email: z.string().email().describe('The email address of the person submitting the form.'),
  message: z.string().describe('The message content from the contact form.'),
});
export type SecureContactFormInput = z.infer<typeof SecureContactFormInputSchema>;

const SecureContactFormOutputSchema = z.object({
  isAbusive: z.boolean().describe('Whether the message is considered abusive or not.'),
  reason: z.string().optional().describe('The reason why the message was flagged as abusive.'),
});
export type SecureContactFormOutput = z.infer<typeof SecureContactFormOutputSchema>;

export async function secureContactForm(input: SecureContactFormInput): Promise<SecureContactFormOutput> {
  return secureContactFormFlow(input);
}

const abusiveLanguageCheckPrompt = ai.definePrompt({
  name: 'abusiveLanguageCheckPrompt',
  input: {schema: SecureContactFormInputSchema},
  output: {schema: SecureContactFormOutputSchema},
  prompt: `You are an AI assistant tasked with identifying abusive language in contact form submissions.

  Analyze the following message and determine if it contains any abusive language, hate speech, or harmful content.

  Message: {{{message}}}

  Email: {{{email}}}

  Name: {{{name}}}

  Respond with a JSON object indicating whether the message is abusive and, if so, provide a reason.
  Return a boolean value for isAbusive; if the message contains abusive content, isAbusive should be true; otherwise, it should be false.
  If isAbusive is true, provide a brief explanation in the reason field as to what constitutes abusive content in the message.
  If isAbusive is false, do not populate the reason field.
  `,
});

const secureContactFormFlow = ai.defineFlow(
  {
    name: 'secureContactFormFlow',
    inputSchema: SecureContactFormInputSchema,
    outputSchema: SecureContactFormOutputSchema,
  },
  async input => {
    const {output} = await abusiveLanguageCheckPrompt(input);
    return output!;
  }
);
