export default function AdminAnalyticsPage() {
  return (
    <div>
      <h2 className="mb-4 text-lg font-extrabold text-[#2d2f31]">アナリティクス</h2>
      <div className="rounded-lg border border-[#e8e9eb] bg-white p-8 text-center">
        <svg className="mx-auto h-12 w-12 text-[#d1d7dc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
        <p className="mt-4 text-sm font-medium text-[#6a6f73]">
          コース別の視聴率、完了率、人気レッスンなどの分析データを表示します。
        </p>
        <p className="mt-1 text-xs text-[#6a6f73]/60">Coming soon</p>
      </div>
    </div>
  )
}
