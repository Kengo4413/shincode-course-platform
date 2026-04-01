# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 重要: Next.js 16 の破壊的変更

Next.js 16.2.1 + React 19 を使用。API・規約・ファイル構成が以前のバージョンと異なる。コードを書く前に `node_modules/next/dist/docs/` のドキュメントを参照し、非推奨警告に従うこと。

## ビルド & 実行

```bash
npm run dev      # 開発サーバー起動 (localhost:3000)
npm run build    # 本番ビルド
npm start        # 本番サーバー起動
npm run lint     # ESLint チェック (v9 flat config)
```

## アーキテクチャ

- **フレームワーク**: Next.js 16 App Router (`app/` ディレクトリ)
- **スタイリング**: Tailwind CSS v4 (`@tailwindcss/postcss` 経由) — `@import "tailwindcss"` / `@theme inline` 構文を使用（v3 の `@tailwind` ディレクティブは不可）
- **TypeScript**: strict モード有効
- **ESLint**: v9 flat config (`eslint.config.mjs`、`.eslintrc.*` ではない)
- **フォント**: Geist / Geist Mono を `next/font/google` でルートレイアウトに読み込み

## 規約

- パスエイリアス: `@/*` → プロジェクトルート (例: `@/app/page`)
- パッケージマネージャ: npm (package-lock.json)

---

## Next.js 16 ベストプラクティス

### Server / Client コンポーネント
- デフォルトは Server Component。`useState`, `useEffect`, イベントハンドラ等が必要な場合のみ `'use client'` を付与
- `'use client'` はファイル先頭（import より上）に記述。配下の全 import がクライアントバンドルに含まれる
- インタラクティブな末端コンポーネントだけに `'use client'` を付け、バンドルサイズを最小化
- Server → Client へ渡す props はシリアライズ可能な値のみ

### params / searchParams は Promise（破壊的変更）
```tsx
// 正しい（v16）
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
}
// 誤り（v15以前の書き方）— 型エラーになる
// const { id } = params
```

### データ取得
- Server Component 内で直接 fetch / DB クエリを行う
- 並列取得には `Promise.all` を使う
- 逐次取得が必要な場合は `<Suspense>` でストリーミング
- Client Component には Server Component から Promise を渡し `React.use()` で受け取る

### キャッシュ（Cache Components モデル）
- `'use cache'` + `cacheLife()` で関数/コンポーネント単位のキャッシュを宣言
- キャッシュされていないランタイムデータ（`cookies()`, `headers()` 等）は `<Suspense>` で囲む
- ミューテーション後は `updateTag()` または `revalidatePath()` でキャッシュ無効化
- Route Handler 内で直接 `'use cache'` は使えない — ヘルパー関数に抽出すること

### Server Actions（データ変更）
- `'use server'` ディレクティブで定義。`<form action={fn}>` でプログレッシブエンハンスメント
- バリデーションエラー等の想定内エラーは throw せず戻り値として返す → `useActionState` で表示
- Server Action 内では必ず認証/認可チェック（POST で直接到達可能なため）
- ミューテーション後: `revalidatePath()` → `redirect()` の順

### ルーティング & ナビゲーション
- 内部リンクには必ず `<Link>` を使う（`<a>` タグ禁止）
- 動的ルートの静的生成には `generateStaticParams()` を使用
- 同一ディレクトリに `page.tsx` と `route.ts` を共存させない

### エラーハンドリング
- 想定内エラー → Server Action の戻り値 + `useActionState`
- 想定外エラー → throw して `error.tsx`（Client Component）でキャッチ
- 404 → `notFound()` + `not-found.tsx`
- `global-error.tsx` には `<html>` と `<body>` タグを含める

---

## Supabase SSR 認証ルール

### パッケージ
```bash
npm install @supabase/supabase-js @supabase/ssr
```

### クライアント構成（`lib/supabase/` 配下に分離）

**`lib/supabase/client.ts`** — Client Component 用（ブラウザ）
```ts
import { createBrowserClient } from '@supabase/ssr'
export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  )
```

**`lib/supabase/server.ts`** — Server Component / Server Action 用
```ts
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
export const createClient = async () => {
  const cookieStore = await cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll() },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options))
          } catch { /* Server Component では書き込み不可 */ }
        },
      },
    }
  )
}
```

**`lib/supabase/middleware.ts`** — セッション更新ヘルパー
```ts
import { createServerClient } from '@supabase/ssr'
import { NextRequest, NextResponse } from 'next/server'
export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({ request: { headers: request.headers } })
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() { return request.cookies.getAll() },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options))
        },
      },
    }
  )
  await supabase.auth.getUser()
  return response
}
```

### Middleware（`middleware.ts` — プロジェクトルート）
```ts
import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'
export async function middleware(request: NextRequest) {
  return await updateSession(request)
}
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.png|.*\\.svg).*)'],
}
```

### セキュリティ上の注意
- サーバー側では `supabase.auth.getSession()` を信用しない — `supabase.auth.getUser()` または `supabase.auth.getClaims()` を使って JWT を検証する
- 認証が必要なページの保護は middleware または Server Component 内で `getUser()` をチェック

---

## プロジェクト概要

YouTube動画を教材としたUdemyライクな動画講座プラットフォーム（MVP）。
1人運営（講師は自分のみ）、ログイン不要で誰でも閲覧可能。
初回アクセス時に名前/メールアドレスを入力し、UUIDをlocalStorageに保持して視聴者を識別する。

## 技術スタック

| レイヤー | 技術 |
|---------|------|
| フレームワーク | Next.js 16 App Router / React 19 / TypeScript (strict) |
| スタイリング | Tailwind CSS v4 |
| DB | Supabase (PostgreSQL) |
| ホスティング | Vercel |
| 動画 | YouTube 限定公開リンクを iframe 埋め込み |
| コンテンツ管理 | `/data/courses.ts` に静的定義 |

## ルーティング

```
/                              # コース一覧ページ
/courses/[courseId]            # コース詳細ページ（レッスン一覧）
/courses/[courseId]/[lessonId] # 動画視聴ページ
```

## ディレクトリ構成

```
app/
├── page.tsx                          # コース一覧
├── courses/
│   └── [courseId]/
│       ├── page.tsx                  # コース詳細
│       └── [lessonId]/
│           └── page.tsx              # 動画視聴
└── layout.tsx
components/
├── CourseCard.tsx                     # コース一覧カード
├── LessonList.tsx                    # レッスン一覧
├── VideoPlayer.tsx                   # YouTube埋め込みプレイヤー
├── ProgressBar.tsx                   # 進捗バー
└── ViewerModal.tsx                   # 初回アクセス時の名前/メール入力モーダル
data/
└── courses.ts                        # コース・レッスン定義（静的）
lib/
└── supabase.ts                       # Supabase クライアント初期化
```

## データ設計

### コンテンツデータ (`/data/courses.ts` — 静的)

```ts
{
  id: string,           // e.g. "react-basics"
  title: string,
  description: string,
  thumbnail: string,    // e.g. "/thumbnails/react-basics.jpg"
  lessons: [{ id, title, description, youtubeId }]
}
```

### Supabase テーブル

**viewers** — 視聴者情報
- `id` (uuid, PK)
- `name` (text)
- `email` (text, unique)
- `created_at` (timestamptz)

**progress** — 視聴進捗
- `id` (uuid, PK)
- `viewer_id` (uuid, FK → viewers)
- `course_id` (text) — `courses.ts` の id と紐付け
- `lesson_id` (text) — lessons の id と紐付け
- `watched_at` (timestamptz)
- unique(viewer_id, course_id, lesson_id)

## ユーザーフロー

1. 初回アクセス → 名前/メール入力モーダル → Supabase `viewers` に登録 → `viewer_id` を localStorage に保存
2. コース一覧 → `courses.ts` から表示 + Supabase `progress` から進捗率を算出して表示
3. 動画視聴 → YouTube iframe 表示 →「視聴済みにする」ボタン → Supabase `progress` に記録 → コース詳細でチェックマーク表示

## 環境変数

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## 将来の拡張方針

`viewers` テーブルに `paid boolean default false` カラムを追加するだけで課金によるアクセス制御を実装可能な設計。将来的にはコメント/Q&A、修了証明書、複数講師対応、管理画面UIを追加予定。
