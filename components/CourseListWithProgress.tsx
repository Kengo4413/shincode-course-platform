'use client'

import { useState, useEffect } from 'react'
import type { Course } from '@/data/courses'
import CourseCard from './CourseCard'

type ProgressRecord = {
  course_id: string
  lesson_id: string
}

export default function CourseListWithProgress({
  courses,
}: {
  courses: Course[]
}) {
  const [progressMap, setProgressMap] = useState<Record<string, number>>({})

  useEffect(() => {
    const viewerId = localStorage.getItem('viewer_id')
    if (!viewerId) return

    fetch(`/api/progress?viewer_id=${viewerId}`)
      .then((res) => res.json())
      .then((data) => {
        const map: Record<string, number> = {}
        data.progress?.forEach((p: ProgressRecord) => {
          map[p.course_id] = (map[p.course_id] || 0) + 1
        })
        setProgressMap(map)
      })
  }, [])

  return (
    <div className="stagger grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          completedCount={progressMap[course.id] || 0}
        />
      ))}
    </div>
  )
}
