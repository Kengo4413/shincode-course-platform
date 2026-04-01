'use client'

import { useState, useSyncExternalStore } from 'react'
import { createClient } from '@/lib/supabase/client'

function getHasViewer() {
  if (typeof window === 'undefined') return true
  return !!localStorage.getItem('viewer_id')
}

function subscribeToStorage(callback: () => void) {
  window.addEventListener('storage', callback)
  return () => window.removeEventListener('storage', callback)
}

export default function ViewerModal() {
  const hasViewer = useSyncExternalStore(subscribeToStorage, getHasViewer, () => true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  if (hasViewer || dismissed) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!name.trim() || !email.trim()) {
      setError('名前とメールアドレスを入力してください。')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('正しいメールアドレスを入力してください。')
      return
    }

    setLoading(true)
    const supabase = createClient()

    const { data: existing } = await supabase
      .from('viewers')
      .select('id')
      .eq('email', email)
      .single()

    if (existing) {
      localStorage.setItem('viewer_id', existing.id)
      setDismissed(true)
      return
    }

    const { data, error: insertError } = await supabase
      .from('viewers')
      .insert({ name: name.trim(), email: email.trim() })
      .select('id')
      .single()

    if (insertError) {
      setError('登録に失敗しました。もう一度お試しください。')
      setLoading(false)
      return
    }

    localStorage.setItem('viewer_id', data.id)
    setDismissed(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="animate-fade-in-up mx-4 w-full max-w-md border border-border bg-white shadow-2xl">
        {/* Header */}
        <div className="border-b border-border-light bg-muted px-6 py-4">
          <h2 className="text-lg font-extrabold text-heading">
            ようこそ！
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            視聴の進捗を記録するために、お名前とメールアドレスを入力してください。
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 px-6 py-5">
          <div>
            <label className="mb-1 block text-xs font-bold text-heading">お名前</label>
            <input
              type="text"
              placeholder="名前を入力"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-border bg-white px-3 py-2.5 text-sm text-heading placeholder:text-muted-foreground/50 focus:border-heading focus:outline-none focus:ring-1 focus:ring-heading"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-bold text-heading">メールアドレス</label>
            <input
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-border bg-white px-3 py-2.5 text-sm text-heading placeholder:text-muted-foreground/50 focus:border-heading focus:outline-none focus:ring-1 focus:ring-heading"
            />
          </div>
          {error && (
            <p className="text-sm font-medium text-red-600">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="mt-1 w-full bg-primary py-3 text-sm font-extrabold text-white transition-colors hover:bg-primary-hover disabled:opacity-50"
          >
            {loading ? '登録中...' : '始める'}
          </button>
        </form>
      </div>
    </div>
  )
}
