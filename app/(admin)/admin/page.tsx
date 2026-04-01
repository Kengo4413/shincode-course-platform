import { getCourses } from '@/data/courses'

export default function AdminDashboard() {
  const courses = getCourses()
  const totalLessons = courses.reduce((sum, c) => sum + c.lessons.length, 0)

  const stats = [
    { label: 'コース数', value: courses.length, color: 'bg-[#a435f0]' },
    { label: 'レッスン数', value: totalLessons, color: 'bg-[#5624d0]' },
    { label: '視聴者数', value: '—', color: 'bg-[#2d2f31]' },
    { label: '総視聴完了', value: '—', color: 'bg-[#1e6055]' },
  ]

  return (
    <div>
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-[#e8e9eb] bg-white p-5">
            <p className="text-sm font-medium text-[#6a6f73]">{stat.label}</p>
            <p className="mt-1 text-3xl font-extrabold text-[#2d2f31]">{stat.value}</p>
            <div className={`mt-3 h-1 w-12 rounded-full ${stat.color}`} />
          </div>
        ))}
      </div>

      {/* Recent courses */}
      <div className="mt-8">
        <h2 className="mb-4 text-lg font-extrabold text-[#2d2f31]">コース一覧</h2>
        <div className="overflow-hidden rounded-lg border border-[#e8e9eb] bg-white">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-[#e8e9eb] bg-[#f7f9fa]">
              <tr>
                <th className="px-5 py-3 font-bold text-[#2d2f31]">コース名</th>
                <th className="px-5 py-3 font-bold text-[#2d2f31]">レッスン数</th>
                <th className="px-5 py-3 font-bold text-[#2d2f31]">ID</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id} className="border-b border-[#e8e9eb] last:border-b-0">
                  <td className="px-5 py-3 font-medium text-[#2d2f31]">{course.title}</td>
                  <td className="px-5 py-3 text-[#6a6f73]">{course.lessons.length}</td>
                  <td className="px-5 py-3 font-mono text-xs text-[#6a6f73]">{course.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
