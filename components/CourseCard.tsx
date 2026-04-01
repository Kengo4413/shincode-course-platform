import Image from 'next/image'
import Link from 'next/link'
import type { Course } from '@/data/courses'
import ProgressBar from './ProgressBar'

export default function CourseCard({
  course,
  completedCount,
}: {
  course: Course
  completedCount: number
}) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="group block"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden border border-border-light bg-muted">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="mt-2 flex flex-col gap-1">
        <h2 className="line-clamp-2 text-[15px] font-bold leading-tight text-heading group-hover:text-primary">
          {course.title}
        </h2>
        <p className="text-xs text-muted-foreground">
          プログラミングチュートリアル
        </p>
        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {course.description}
        </p>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground">
            {course.lessons.length} レッスン
          </span>
          {completedCount > 0 && (
            <>
              <span className="text-xs text-muted-foreground/50">|</span>
              <span className="text-xs font-medium text-primary">
                {completedCount} 完了
              </span>
            </>
          )}
        </div>
        <div className="mt-1.5">
          <ProgressBar completed={completedCount} total={course.lessons.length} />
        </div>
      </div>
    </Link>
  )
}
