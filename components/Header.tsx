import Link from 'next/link'

export default function Header() {
  return (
    <header className="h-[70px] border-b border-[#d1d7dc] bg-white shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex h-full max-w-[1340px] items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <span className="text-[22px] font-black tracking-tight text-[#2d2f31]">
            <span className="text-[#a435f0]">N</span>demy
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-[#2d2f31] hover:text-[#a435f0]"
          >
            コース一覧
          </Link>
        </nav>
      </div>
    </header>
  )
}
