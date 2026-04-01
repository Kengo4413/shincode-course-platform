import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#2d2f31]">
      <div className="mx-auto max-w-[1340px] px-6 py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="text-lg font-black text-white">
            <span className="text-[#a435f0]">N</span>demy
          </Link>
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Ndemy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
