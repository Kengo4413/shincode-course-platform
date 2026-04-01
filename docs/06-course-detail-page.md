# 06: コース詳細ページ

## 概要
コース詳細ページ (`/courses/[courseId]`) にコース情報とレッスン一覧を表示する。視聴済みレッスンにはチェックマークを表示する。

## Todo

### ページ (`app/courses/[courseId]/page.tsx`)
- [x]Server Component として実装
- [x]`params` を `Promise` として await する（Next.js 16 対応）
- [x]`getCourse(courseId)` でコースデータを取得
- [x]コースが存在しない場合は `notFound()` を呼ぶ
- [x]コース情報（タイトル、説明、サムネイル）を表示
- [x]`LessonList` コンポーネントでレッスン一覧を表示

### コンポーネント
- [x]`components/LessonList.tsx` を作成
  - レッスン一覧をリスト形式で表示
  - 各レッスンに視聴ページへの `<Link>`
  - 視聴済みのレッスンにはチェックマーク表示
  - 現在の進捗率サマリーを表示

### 進捗データ
- [x]viewer_id をもとに Supabase から当該コースの progress を取得
- [x]各レッスンの視聴済み状態を判定

### エラーハンドリング
- [x]`app/courses/[courseId]/not-found.tsx` を作成

### 動作確認
- [x]レッスン一覧が正しく表示される
- [x]視聴済みレッスンにチェックマークが付く
- [x]存在しないコースIDで404ページが表示される
- [x]レッスンクリックで動画視聴ページに遷移する
