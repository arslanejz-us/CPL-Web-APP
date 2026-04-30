import { z } from 'zod'

export const quoteSchema = z.object({
  full_name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company_name: z.string().optional(),
  product_id: z.string().uuid().optional(),
  industry_id: z.string().uuid().optional(),
  product_name: z.string().optional(),
  quantity: z.number().int().positive().optional(),
  size: z.string().optional(),
  material: z.string().optional(),
  printing: z.string().optional(),
  finishing: z.string().optional(),
  message: z.string().optional(),
  artwork_url: z.string().url().optional(),
})

export type QuoteFormValues = z.infer<typeof quoteSchema>
