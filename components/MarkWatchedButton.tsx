'use client'

import { useState, useEffect, useSyncExternalStore } from 'react'

function getViewerId() {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('viewer_id')
}

function subscribeToStorage(callback: () => void) {
  window.addEventListener('storage', callback)
  return () => window.removeEventListener('storage', callback)
}

export default function MarkWatchedButton({
  courseId,
  lessonId,
}: {
  courseId: string
  lessonId: string
}) {
  const viewerId = useSyncExternalStore(subscribeToStorage, getViewerId, () => null)
  const [watched, setWatched] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!viewerId) return

    let cancelled = false
    fetch(`/api/progress?viewer_id=${viewerId}&course_id=${courseId}`)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return
        const isWatched = data.progress?.some(
          (p: { lesson_id: string }) => p.lesson_id === lessonId
        )
        setWatched(!!isWatched)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => { cancelled = true }
  }, [viewerId, courseId, lessonId])

  const handleClick = async () => {
    const viewerId = localStorage.getItem('viewer_id')
    if (!viewerId) return

    setLoading(true)
    const res = await fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        viewer_id: viewerId,
        course_id: courseId,
        lesson_id: lessonId,
      }),
    })

    if (res.ok) {
      setWatched(true)
    }
    setLoading(false)
  }

  if (loading) {
    return (
      <button
        disabled
        className="inline-flex shrink-0 items-center gap-2 rounded border border-border px-4 py-2.5 text-sm font-bold text-muted-foreground"
      >
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground/30 border-t-muted-foreground" />
        読み込み中...
      </button>
    )
  }

  if (watched) {
    return (
      <div className="inline-flex shrink-0 items-center gap-2 rounded border border-accent/30 bg-accent-light px-4 py-2.5 text-sm font-bold text-accent">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
        視聴済み
      </div>
    )
  }

  return (
    <button
      onClick={handleClick}
      className="inline-flex shrink-0 items-center gap-2 rounded bg-primary px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-hover active:scale-[0.98]"
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      視聴済みにする
    </button>
  )
}
