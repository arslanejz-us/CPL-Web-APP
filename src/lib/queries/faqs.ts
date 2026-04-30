import { createClient } from '@/lib/supabase/server'

export async function getProductFAQs(productId: string) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('product_faqs')
    .select('*')
    .eq('product_id', productId)
    .order('sort_order', { ascending: true })

  if (error) { console.error('getProductFAQs error:', error.message); return [] }
  return data ?? []
}
