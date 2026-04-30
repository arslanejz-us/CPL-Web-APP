import { createClient } from '@/lib/supabase/server'

export async function getBlogs() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('blogs')
    .select('*, blog_categories(name, slug)')
    .eq('is_published', true)
    .order('published_at', { ascending: false })

  if (error) { console.error('getBlogs error:', error.message); return [] }
  return data ?? []
}

export async function getBlogBySlug(slug: string) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('blogs')
    .select('*, blog_categories(name, slug)')
    .eq('slug', slug)
    .eq('is_published', true)
    .single()

  if (error) { console.error('Supabase error:', error.message); return null }
  return data
}
