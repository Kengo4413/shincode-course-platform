'use client'

export default function ProgressBar({
  completed,
  total,
}: {
  completed: number
  total: number
}) {
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100)
  const isComplete = percent === 100

  return (
    <div className="flex flex-col gap-1">
      <div className="h-1 w-full overflow-hidden rounded-full bg-border-light">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            isComplete ? 'bg-success' : 'bg-primary'
          }`}
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">
          {percent}% 完了
        </span>
        <span className="text-xs text-muted-foreground">
          {completed}/{total} レッスン
        </span>
      </div>
    </div>
  )
}
