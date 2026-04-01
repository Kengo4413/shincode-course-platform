# 07: 動画視聴ページ

## 概要
動画視聴ページ (`/courses/[courseId]/[lessonId]`) で YouTube 動画を埋め込み表示し、「視聴済みにする」ボタンで進捗を記録する。

## Todo

### ページ (`app/courses/[courseId]/[lessonId]/page.tsx`)
- [x]`params` を `Promise` として await する（Next.js 16 対応）
- [x]`getLesson(courseId, lessonId)` でレッスンデータを取得
- [x]レッスンが存在しない場合は `notFound()` を呼ぶ
- [x]レッスンタイトル・説明を表示
- [x]`VideoPlayer` コンポーネントで YouTube 動画を表示
- [x]「視聴済みにする」ボタンを表示
- [x]前後のレッスンへのナビゲーションリンクを表示

### コンポーネント
- [x]`components/VideoPlayer.tsx` を作成
  - YouTube iframe 埋め込み（`youtubeId` を受け取る）
  - レスポンシブ対応（16:9 アスペクト比維持）
  - `allow` 属性に適切な値を設定

### 視聴済み機能
- [x]「視聴済みにする」ボタンの実装（Client Component）
- [x]クリック時に Supabase `progress` テーブルへ upsert
- [x]既に視聴済みの場合はチェック済み状態で表示
- [x]視聴済み登録後に UI を即時更新

### ナビゲーション
- [x]前のレッスンへのリンク（最初のレッスンでは非表示）
- [x]次のレッスンへのリンク（最後のレッスンでは非表示）
- [x]コース詳細ページへの戻るリンク

### 動作確認
- [x]YouTube 動画が正しく埋め込み表示される
- [x]「視聴済みにする」ボタンで progress に記録される
- [x]コース詳細に戻るとチェックマークが反映されている
- [x]前後レッスンへのナビゲーションが正しく動作する
