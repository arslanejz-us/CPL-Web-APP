import { createClient } from '@/lib/supabase/server'

export async function getTestimonials() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })

  if (error) { console.error('getTestimonials error:', error.message); return [] }
  return data ?? []
}
