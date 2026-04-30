import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { sampleKitSchema } from '@/lib/validations/sample-kit.schema'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = sampleKitSchema.parse(body)

    const supabase = await createClient()

    const { error } = await supabase
      .from('sample_kit_requests')
      .insert([validatedData])

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}
