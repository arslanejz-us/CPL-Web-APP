import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { quoteSchema } from '@/lib/validations/quote.schema'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = quoteSchema.parse(body)

    const supabase = await createClient()

    const { error } = await supabase
      .from('quote_requests')
      .insert([validatedData])

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Invalid request'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
