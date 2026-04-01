import Link from 'next/link'
import { getCourses } from '@/data/courses'

export default function AdminCoursesPage() {
  const courses = getCourses()

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-extrabold text-[#2d2f31]">全コース</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Link
            key={course.id}
            href={`/admin/courses/${course.id}`}
            className="group rounded-lg border border-[#e8e9eb] bg-white p-5 transition-shadow hover:shadow-md"
          >
            <h3 className="font-bold text-[#2d2f31] group-hover:text-[#a435f0]">
              {course.title}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm text-[#6a6f73]">
              {course.description}
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="rounded bg-[#f7f9fa] px-2 py-0.5 text-xs font-bold text-[#6a6f73]">
                {course.lessons.length} レッスン
              </span>
              <span className="font-mono text-xs text-[#6a6f73]">{course.id}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
