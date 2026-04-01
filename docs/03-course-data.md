# 03: コースデータ定義

## 概要
コースとレッスンの静的データを TypeScript ファイルで定義し、型を整備する。

## Todo

### 型定義
- [x]`Lesson` 型を定義（id, title, description, youtubeId）
- [x]`Course` 型を定義（id, title, description, thumbnail, lessons）

### データファイル
- [x]`data/courses.ts` を作成
- [x]サンプルコースを1つ以上定義（仮の YouTube ID で可）
- [x]コース取得用ヘルパー関数を作成
  - `getCourses()` — 全コース一覧
  - `getCourse(courseId)` — 単一コース取得
  - `getLesson(courseId, lessonId)` — 単一レッスン取得

### サムネイル
- [x]`public/thumbnails/` ディレクトリを作成
- [x]サンプルサムネイル画像を配置（または placeholder を用意）

### 動作確認
- [x]型エラーなくビルドが通ることを確認
