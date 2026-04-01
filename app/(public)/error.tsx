'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="mb-2 text-4xl font-bold text-foreground">Error</h1>
      <p className="mb-6 text-muted-foreground">
        {error.message || '予期しないエラーが発生しました。'}
      </p>
      <button
        onClick={reset}
        className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
      >
        もう一度試す
      </button>
    </div>
  )
}
