import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getCourse, getLesson } from '@/data/courses'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const viewerId = searchParams.get('viewer_id')
  const courseId = searchParams.get('course_id')

  if (!viewerId) {
    return NextResponse.json(
      { error: 'viewer_id is required' },
      { status: 400 }
    )
  }

  const supabase = await createClient()

  let query = supabase
    .from('progress')
    .select('course_id, lesson_id, watched_at')
    .eq('viewer_id', viewerId)

  if (courseId) {
    query = query.eq('course_id', courseId)
  }

  const { data, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ progress: data })
}

export async function POST(request: NextRequest) {
  let body: { viewer_id?: string; course_id?: string; lesson_id?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { viewer_id, course_id, lesson_id } = body

  if (!viewer_id || !course_id || !lesson_id) {
    return NextResponse.json(
      { error: 'viewer_id, course_id, and lesson_id are required' },
      { status: 400 }
    )
  }

  // コース・レッスンの存在チェック
  if (!getCourse(course_id)) {
    return NextResponse.json(
      { error: 'Invalid course_id' },
      { status: 400 }
    )
  }
  if (!getLesson(course_id, lesson_id)) {
    return NextResponse.json(
      { error: 'Invalid lesson_id' },
      { status: 400 }
    )
  }

  const supabase = await createClient()

  // viewer の存在チェック
  const { data: viewer } = await supabase
    .from('viewers')
    .select('id')
    .eq('id', viewer_id)
    .single()

  if (!viewer) {
    return NextResponse.json(
      { error: 'Invalid viewer_id' },
      { status: 400 }
    )
  }

  const { error } = await supabase.from('progress').upsert(
    { viewer_id, course_id, lesson_id },
    { onConflict: 'viewer_id,course_id,lesson_id' }
  )

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
