# 09: 進捗管理 API

## 概要
視聴進捗の記録・取得を行う API エンドポイント（Route Handler）を作成する。

## Todo

### Route Handler
- [x]`app/api/progress/route.ts` を作成
  - **GET**: viewer_id に紐づく進捗一覧を取得
    - クエリパラメータ: `viewer_id`, `course_id`（任意）
    - Supabase から `progress` テーブルを検索
  - **POST**: 視聴済みを記録
    - リクエストボディ: `{ viewer_id, course_id, lesson_id }`
    - Supabase `progress` テーブルへ upsert
    - 重複登録防止（unique 制約で担保）

### バリデーション
- [x]`viewer_id` の存在チェック（`viewers` テーブルに存在するか）
- [x]`course_id` / `lesson_id` が `courses.ts` に存在するかチェック
- [x]不正なリクエストには適切なエラーレスポンスを返す

### レスポンス形式
- [x]GET: `{ progress: [{ course_id, lesson_id, watched_at }] }`
- [x]POST: `{ success: true }` or `{ error: "..." }`

### 動作確認
- [x]GET で進捗データが正しく返る
- [x]POST で progress レコードが作成される
- [x]同じレッスンを2回 POST しても重複しない
- [x]不正な viewer_id でエラーが返る
