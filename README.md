# ShinCode Courses

YouTube動画を教材としたUdemyライクな動画講座プラットフォーム（MVP）。

## 技術スタック

- Next.js 16 (App Router) / React 19 / TypeScript
- Tailwind CSS v4
- Supabase (PostgreSQL / 認証なし)
- Vercel (ホスティング)

## 前提条件

- Node.js 20 以上
- npm
- Supabase プロジェクト（作成済み）

## セットアップ手順

### 1. リポジトリのクローン

```bash
git clone <repository-url>
cd shincode-course-platform
```

### 2. パッケージのインストール

```bash
npm install
```

### 3. 環境変数の設定

プロジェクトルートに `.env.local` を作成し、以下を設定:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_xxxx
```

Supabase ダッシュボード > Settings > API から取得できます。

### 4. Supabase テーブルの作成

Supabase の SQL Editor で以下を実行:

```sql
-- viewers テーブル
create table public.viewers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text unique not null,
  created_at timestamptz default now()
);

-- progress テーブル
create table public.progress (
  id uuid primary key default gen_random_uuid(),
  viewer_id uuid not null references public.viewers(id) on delete cascade,
  course_id text not null,
  lesson_id text not null,
  watched_at timestamptz default now(),
  unique(viewer_id, course_id, lesson_id)
);

-- RLS 有効化
alter table public.viewers enable row level security;
alter table public.progress enable row level security;

create policy "viewers_select" on public.viewers for select using (true);
create policy "viewers_insert" on public.viewers for insert with check (true);
create policy "progress_select" on public.progress for select using (true);
create policy "progress_insert" on public.progress for insert with check (true);
```

### 5. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開きます。

### 6. 本番ビルド & 起動

```bash
npm run build
npm start
```

## npm スクリプト一覧

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバー起動 (localhost:3000) |
| `npm run build` | 本番ビルド |
| `npm start` | 本番サーバー起動 |
| `npm run lint` | ESLint チェック |

## ディレクトリ構成

```
app/
├── page.tsx                          # コース一覧
├── loading.tsx                       # ローディング UI
├── not-found.tsx                     # グローバル 404
├── error.tsx                         # グローバルエラーバウンダリ
├── layout.tsx                        # ルートレイアウト
├── globals.css                       # グローバルスタイル
├── api/progress/route.ts             # 進捗 API (GET/POST)
└── courses/[courseId]/
    ├── page.tsx                      # コース詳細
    ├── not-found.tsx                 # コース 404
    ├── loading.tsx
    └── [lessonId]/
        ├── page.tsx                  # 動画視聴
        ├── not-found.tsx             # レッスン 404
        └── loading.tsx
components/
├── Header.tsx                        # 共通ヘッダー
├── Footer.tsx                        # 共通フッター
├── CourseCard.tsx                     # コースカード
├── CourseListWithProgress.tsx         # コース一覧（進捗付き）
├── LessonList.tsx                    # レッスン一覧
├── LessonListWithProgress.tsx        # レッスン一覧（進捗付き）
├── VideoPlayer.tsx                   # YouTube 埋め込み
├── ProgressBar.tsx                   # 進捗バー
├── MarkWatchedButton.tsx             # 視聴済みボタン
└── ViewerModal.tsx                   # 視聴者登録モーダル
data/
└── courses.ts                        # コース・レッスン定義（静的）
lib/supabase/
├── client.ts                         # Client Component 用
├── server.ts                         # Server Component 用
└── middleware.ts                     # Middleware 用
middleware.ts                          # セッション管理
```

## ユーザーフロー

1. 初回アクセス → 名前/メール入力モーダル → 視聴者登録 → viewer_id を localStorage に保存
2. コース一覧 → コースカードに進捗バー表示
3. コース詳細 → レッスン一覧に視聴済みチェックマーク表示
4. レッスン視聴 → YouTube 動画再生 →「視聴済みにする」ボタンで進捗記録
