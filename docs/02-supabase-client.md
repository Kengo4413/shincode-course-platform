# 02: Supabase クライアント構成

## 概要
`@supabase/ssr` を使い、Server / Client / Middleware 用のクライアントユーティリティを作成する。

## Todo

### パッケージ
- [x]`@supabase/supabase-js` と `@supabase/ssr` をインストール

### ユーティリティファイル作成
- [x]`lib/supabase/client.ts` を作成（Client Component 用 — `createBrowserClient`）
- [x]`lib/supabase/server.ts` を作成（Server Component / Server Action 用 — `createServerClient` + cookies）
- [x]`lib/supabase/middleware.ts` を作成（セッション更新ヘルパー — `updateSession`）

### Middleware
- [x]プロジェクトルートに `middleware.ts` を作成
- [x]matcher パターンを設定（静的アセットを除外）

### 動作確認
- [x]`npm run dev` でミドルウェアがエラーなく動作することを確認
- [x]Server Component から `createClient()` でSupabase に接続できることを確認
