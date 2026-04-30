import { createClient } from '@/lib/supabase/server'

export async function getSiteSettings(key?: string) {
  const supabase = await createClient()

  if (key) {
    const { data, error } = await supabase
      .from('site_settings')
      .select('*')
      .eq('key', key)
      .single()

    if (error) throw new Error(error.message)
    return data
  }

  const { data, error } = await supabase
    .from('site_settings')
    .select('*')

  if (error) throw new Error(error.message)
  return data
}
