export default function AdminViewersPage() {
  return (
    <div>
      <h2 className="mb-4 text-lg font-extrabold text-[#2d2f31]">視聴者管理</h2>
      <div className="rounded-lg border border-[#e8e9eb] bg-white p-8 text-center">
        <svg className="mx-auto h-12 w-12 text-[#d1d7dc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
        <p className="mt-4 text-sm font-medium text-[#6a6f73]">
          Supabase の viewers テーブルと連携して、登録済み視聴者の一覧を表示します。
        </p>
        <p className="mt-1 text-xs text-[#6a6f73]/60">Coming soon</p>
      </div>
    </div>
  )
}
