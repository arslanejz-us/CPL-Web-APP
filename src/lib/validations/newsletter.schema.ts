import { z } from 'zod'

export const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
  source: z.string().optional(),
})

export type NewsletterFormValues = z.infer<typeof newsletterSchema>
