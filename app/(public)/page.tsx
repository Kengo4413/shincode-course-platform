import Image from 'next/image'
import { getCourses } from '@/data/courses'
import CourseListWithProgress from '@/components/CourseListWithProgress'

export default function Home() {
  const courses = getCourses()

  return (
    <>
      {/* Hero Banner - Udemy style with image card */}
      <div className="relative bg-[#2d2f31]">
        <div className="mx-auto flex max-w-[1340px] items-center gap-10 px-6 py-10 lg:py-14">
          {/* Text */}
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-[40px]">
              AIプログラミングを学んで
              <br />
              新しいキャリアを切り開こう
            </h1>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/60">
              実践的なYouTube動画講座で、Claude Code・Next.js・TypeScriptなど最新技術を習得。あなたのペースで学び、スキルアップを実現しましょう。
            </p>
          </div>

          {/* Image card */}
          <div className="relative hidden shrink-0 overflow-hidden rounded-sm shadow-2xl lg:block">
            <Image
              src="/hero-study.jpg"
              alt="プログラミングを学ぶ人々"
              width={420}
              height={280}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="mx-auto max-w-[1340px] px-6 py-12">
        <h2 className="mb-1 text-2xl font-extrabold text-[#2d2f31]">
          すべてのコース
        </h2>
        <p className="mb-8 text-sm text-[#6a6f73]">
          {courses.length} コースが利用可能
        </p>
        <CourseListWithProgress courses={courses} />
      </div>
    </>
  )
}
