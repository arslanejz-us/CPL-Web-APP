import { createClient } from '@/lib/supabase/server'

export async function getIndustries() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('industries')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })

  if (error) { console.error('getIndustries error:', error.message); return [] }
  return data ?? []
}

export async function getIndustryBySlug(slug: string) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('industries')
    .select(`
      *,
      industry_products(
        products(*)
      )
    `)
    .eq('slug', slug)
    .eq('is_active', true)
    .single()

  if (error) { console.error('Supabase error:', error.message); return null }
  return data
}
