import { createClient } from '@/lib/supabase/server'

export async function getBlogs() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('blogs')
    .select('*, blog_categories(name, slug)')
    .eq('is_published', true)
    .order('published_at', { ascending: false })

  if (error) throw new Error(error.message)
  return data
}

export async function getBlogBySlug(slug: string) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('blogs')
    .select('*, blog_categories(name, slug)')
    .eq('slug', slug)
    .eq('is_published', true)
    .single()

  if (error) throw new Error(error.message)
  return data
}
