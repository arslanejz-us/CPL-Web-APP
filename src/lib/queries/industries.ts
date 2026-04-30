import { createClient } from '@/lib/supabase/server'

export async function getIndustries() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('industries')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })

  if (error) throw new Error(error.message)
  return data
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

  if (error) throw new Error(error.message)
  return data
}
