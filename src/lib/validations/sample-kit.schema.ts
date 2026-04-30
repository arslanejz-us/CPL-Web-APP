import { z } from 'zod'

export const sampleKitSchema = z.object({
  full_name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company_name: z.string().optional(),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  country: z.string().min(2, "Country is required"),
  postal_code: z.string().min(4, "Postal code is required"),
  message: z.string().optional(),
})

export type SampleKitFormValues = z.infer<typeof sampleKitSchema>
