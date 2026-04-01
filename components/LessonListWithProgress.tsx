'use client'

import { useState, useEffect } from 'react'
import type { Lesson } from '@/data/courses'
import LessonList from './LessonList'

type ProgressRecord = {
  lesson_id: string
}

export default function LessonListWithProgress({
  courseId,
  lessons,
}: {
  courseId: string
  lessons: Lesson[]
}) {
  const [completedIds, setCompletedIds] = useState<string[]>([])

  useEffect(() => {
    const viewerId = localStorage.getItem('viewer_id')
    if (!viewerId) return

    fetch(`/api/progress?viewer_id=${viewerId}&course_id=${courseId}`)
      .then((res) => res.json())
      .then((data) => {
        const ids = data.progress?.map((p: ProgressRecord) => p.lesson_id) || []
        setCompletedIds(ids)
      })
  }, [courseId])

  return (
    <LessonList
      courseId={courseId}
      lessons={lessons}
      completedLessonIds={completedIds}
    />
  )
}
