# 01: Supabase プロジェクト & DB セットアップ

## 概要
Supabase プロジェクトの作成、環境変数の設定、テーブルの作成を行う。

## Todo

### Supabase プロジェクト
- [x]Supabase でプロジェクトを作成
- [x]`.env.local` を作成し環境変数を設定
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### テーブル作成
- [x]`viewers` テーブルを作成
  - `id` (uuid, PK, default gen_random_uuid())
  - `name` (text, not null)
  - `email` (text, unique, not null)
  - `created_at` (timestamptz, default now())
- [x]`progress` テーブルを作成
  - `id` (uuid, PK, default gen_random_uuid())
  - `viewer_id` (uuid, FK → viewers, on delete cascade)
  - `course_id` (text, not null)
  - `lesson_id` (text, not null)
  - `watched_at` (timestamptz, default now())
  - unique(viewer_id, course_id, lesson_id)

### RLS (Row Level Security)
- [x]`viewers` テーブルの RLS ポリシーを設定
- [x]`progress` テーブルの RLS ポリシーを設定

### 動作確認
- [x]Supabase ダッシュボードでテーブルが作成されていることを確認
- [x]`.env.local` の値で接続できることを確認
