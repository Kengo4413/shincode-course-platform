import Link from 'next/link'
import type { Lesson } from '@/data/courses'
import ProgressBar from './ProgressBar'

export default function LessonList({
  courseId,
  lessons,
  completedLessonIds,
}: {
  courseId: string
  lessons: Lesson[]
  completedLessonIds: string[]
}) {
  return (
    <div className="flex flex-col gap-4">
      <ProgressBar
        completed={completedLessonIds.length}
        total={lessons.length}
      />
      <div className="stagger border border-border">
        {lessons.map((lesson, index) => {
          const isCompleted = completedLessonIds.includes(lesson.id)
          return (
            <Link
              key={lesson.id}
              href={`/courses/${courseId}/${lesson.id}`}
              className="group flex items-center gap-4 border-b border-border-light px-5 py-3.5 transition-colors last:border-b-0 hover:bg-muted"
            >
              {/* Number / Check */}
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                isCompleted
                  ? 'bg-accent-light text-accent'
                  : 'bg-muted text-muted-foreground'
              }`}>
                {isCompleted ? (
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  index + 1
                )}
              </span>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-heading group-hover:text-primary">
                  {lesson.title}
                </p>
                <p className="mt-0.5 truncate text-xs text-muted-foreground">
                  {lesson.description}
                </p>
              </div>

              {/* Play icon */}
              <svg className="h-4 w-4 shrink-0 text-muted-foreground/40 transition-colors group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
