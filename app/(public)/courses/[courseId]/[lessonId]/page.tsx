import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCourse, getLesson } from '@/data/courses'
import VideoPlayer from '@/components/VideoPlayer'
import MarkWatchedButton from '@/components/MarkWatchedButton'

export default async function LessonPage({
  params,
}: {
  params: Promise<{ courseId: string; lessonId: string }>
}) {
  const { courseId, lessonId } = await params
  const course = getCourse(courseId)
  const lesson = getLesson(courseId, lessonId)

  if (!course || !lesson) {
    notFound()
  }

  const currentIndex = course.lessons.findIndex((l) => l.id === lessonId)
  const prevLesson = currentIndex > 0 ? course.lessons[currentIndex - 1] : null
  const nextLesson =
    currentIndex < course.lessons.length - 1
      ? course.lessons[currentIndex + 1]
      : null

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Main content */}
      <div className="flex-1">
        {/* Video - full width */}
        <div className="bg-black">
          <div className="mx-auto max-w-5xl">
            <VideoPlayer youtubeId={lesson.youtubeId} />
          </div>
        </div>

        {/* Lesson info */}
        <div className="mx-auto max-w-5xl px-6 py-6">
          {/* Breadcrumb */}
          <Link
            href={`/courses/${courseId}`}
            className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-heading"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {course.title} に戻る
          </Link>

          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="mb-1 text-xs font-bold text-primary">
                レッスン {currentIndex + 1} / {course.lessons.length}
              </p>
              <h1 className="text-xl font-extrabold text-heading sm:text-2xl">
                {lesson.title}
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {lesson.description}
              </p>
            </div>
            <MarkWatchedButton courseId={courseId} lessonId={lessonId} />
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between border-t border-border-light pt-5">
            {prevLesson ? (
              <Link
                href={`/courses/${courseId}/${prevLesson.id}`}
                className="group flex items-center gap-2 text-sm font-bold text-heading transition-colors hover:text-primary"
              >
                <svg className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span className="max-w-[200px] truncate">{prevLesson.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {nextLesson ? (
              <Link
                href={`/courses/${courseId}/${nextLesson.id}`}
                className="group flex items-center gap-2 text-sm font-bold text-heading transition-colors hover:text-primary"
              >
                <span className="max-w-[200px] truncate">{nextLesson.title}</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
