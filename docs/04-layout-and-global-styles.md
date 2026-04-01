# 04: ルートレイアウト & グローバルスタイル

## 概要
アプリ全体の共通レイアウト（ヘッダー、フッター）とグローバルスタイルを整備する。

## Todo

### ルートレイアウト (`app/layout.tsx`)
- [x]`<html lang="ja">` に変更
- [x]メタデータ（title, description）をプラットフォーム用に更新
- [x]共通ヘッダーコンポーネントを配置（サイト名 + ナビゲーション）
- [x]共通フッターコンポーネントを配置

### コンポーネント
- [x]`components/Header.tsx` を作成（Server Component）
- [x]`components/Footer.tsx` を作成（Server Component）

### グローバルスタイル (`app/globals.css`)
- [x]Tailwind CSS v4 の `@import "tailwindcss"` を確認
- [x]プラットフォーム用のカスタムテーマカラーを `@theme inline` で定義

### 動作確認
- [x]`npm run dev` でヘッダー・フッターが表示されることを確認
- [x]レスポンシブ対応を確認（モバイル / デスクトップ）
