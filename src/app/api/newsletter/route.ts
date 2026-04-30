import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { newsletterSchema } from '@/lib/validations/newsletter.schema'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = newsletterSchema.parse(body)

    const supabase = await createClient()

    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert([validatedData])

    // Duplicate email error code is 23505 in Postgres
    if (error) {
       if (error.code === '23505') {
         return NextResponse.json({ error: "Email already subscribed." }, { status: 409 })
       }
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}
