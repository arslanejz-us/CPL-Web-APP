import { createClient } from '@/lib/supabase/server'

export async function getProducts() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      product_categories(name, slug),
      product_images(image_url, alt_text, sort_order)
    `)
    .eq('is_active', true)
    .order('created_at', { ascending: false })

  if (error) { console.error('getProducts error:', error.message); return [] }
  return data ?? []

}

export async function getProductBySlug(slug: string) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      product_categories(name, slug),
      product_images(*),
      product_materials(*),
      product_finishes(*),
      product_faqs(*)
    `)
    .eq('slug', slug)
    .eq('is_active', true)
    .single()

  if (error) { console.error('getProductBySlug error:', error.message); return null }
  return data
}
