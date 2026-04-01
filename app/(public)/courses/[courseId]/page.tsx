import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getCourse } from '@/data/courses'
import LessonListWithProgress from '@/components/LessonListWithProgress'

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ courseId: string }>
}) {
  const { courseId } = await params
  const course = getCourse(courseId)

  if (!course) {
    notFound()
  }

  return (
    <>
      {/* Course Header - Dark banner */}
      <div className="border-b border-border-light bg-heading">
        <div className="mx-auto max-w-[1340px] px-6 py-8">
          {/* Breadcrumb */}
          <Link
            href="/"
            className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-primary-foreground/60 transition-colors hover:text-primary-foreground"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            コース一覧に戻る
          </Link>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
            {/* Info */}
            <div className="flex-1">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
                {course.title}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70">
                {course.description}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <span className="text-sm font-medium text-white/50">
                  {course.lessons.length} レッスン
                </span>
                <span className="text-white/30">|</span>
                <span className="text-sm font-medium text-white/50">
                  プログラミングチュートリアル
                </span>
              </div>
            </div>

            {/* Thumbnail */}
            <div className="w-full shrink-0 overflow-hidden border border-white/10 lg:w-80">
              <div className="relative aspect-video w-full bg-black">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 320px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lesson List */}
      <div className="mx-auto max-w-[1340px] px-6 py-8">
        <h2 className="mb-5 text-xl font-extrabold text-heading">
          コース内容
        </h2>
        <div className="max-w-3xl">
          <LessonListWithProgress
            courseId={course.id}
            lessons={course.lessons}
          />
        </div>
      </div>
    </>
  )
}
