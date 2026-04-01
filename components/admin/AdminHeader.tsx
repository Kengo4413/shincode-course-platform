'use client'

import { usePathname } from 'next/navigation'

const pageTitles: Record<string, string> = {
  '/admin': 'ダッシュボード',
  '/admin/courses': 'コース管理',
  '/admin/viewers': '視聴者管理',
  '/admin/analytics': 'アナリティクス',
}

export default function AdminHeader() {
  const pathname = usePathname()

  const title =
    pageTitles[pathname] ??
    Object.entries(pageTitles).find(([key]) =>
      pathname.startsWith(key) && key !== '/admin'
    )?.[1] ??
    'Admin'

  return (
    <header className="flex h-[70px] shrink-0 items-center justify-between border-b border-[#d1d7dc] bg-white px-6">
      <h1 className="text-lg font-extrabold text-[#2d2f31]">{title}</h1>
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2d2f31] text-xs font-bold text-white">
          SC
        </div>
      </div>
    </header>
  )
}
