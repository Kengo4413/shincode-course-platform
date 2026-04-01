export type Lesson = {
  id: string
  title: string
  description: string
  youtubeId: string
}

export type Course = {
  id: string
  title: string
  description: string
  thumbnail: string
  lessons: Lesson[]
}

const courses: Course[] = [
  // ── Claude Code 実践講座 ──────────────────────────────
  {
    id: 'claude-code',
    title: 'Claude Code 実践講座',
    description:
      'Claude Code を活用した業務自動化・AI駆動開発を学ぶ実践コースです。日常業務の自動化からAgent Teams、Cowork、Skills、MCP連携まで幅広くカバーします。',
    thumbnail: '/thumbnails/claude-code.svg',
    lessons: [
      { id: 'daily-automation', title: 'Claude Codeで日常業務を自動化する方法', description: 'Claude Codeを使って日常業務を革命的に自動化する方法を解説します。', youtubeId: '2ZRQeFUxRsU' },
      { id: 'ai-company', title: 'Claude Codeで会社を作ってAI社員に仕事を任せる', description: '一人社長としてClaude CodeでAI社員に仕事を任せる方法を紹介します。', youtubeId: 'cfoE_8Llde0' },
      { id: 'cowork-intro', title: 'Claude Coworkで業務効率を10倍にする方法', description: 'Claude Coworkを使って仕事・業務効率を劇的に向上させる方法を解説します。', youtubeId: 'KDjuxsWCaD8' },
      { id: 'agent-teams', title: 'Claude Code Agent Teamsで1人起業する方法', description: 'Claude Opus 4.6とAgent Teamsを活用して1人起業する方法を解説します。', youtubeId: '6u-euXGNl-o' },
      { id: 'skills-cheat', title: '個人開発のチートスキル！Claude Code Skills 5選', description: '個人開発を加速させるチート級のClaude Code Skillsを5つ紹介します。', youtubeId: 'gkcUAtAfw1I' },
      { id: 'opus-web-app', title: 'Claude Opus 4.6で30分でWebアプリを作る', description: 'Claude Opus 4.6を使ってたったの30分でWebアプリを作る実演です。', youtubeId: 'GCAH3RFXh7g' },
      { id: 'one-day-startup', title: '友人と1日スタートアップをやってみた', description: '1日でアプリを開発し、収益が発生するか検証するスモールスタートアップの実録です。', youtubeId: 'SPtaarieyps' },
      { id: 'skills-intro', title: 'Claude Code Skills入門', description: 'AIコーディングに革命を起こすClaude Code Skillsの使い方を解説します。', youtubeId: 'MLkCQEhPDyk' },
      { id: 'context-engineering', title: 'コンテキストエンジニアリング入門', description: 'AIコーディング精度が劇的に変わるコンテキストエンジニアリングの手法を解説します。', youtubeId: 'yhkFVqTCx-w' },
      { id: 'mcp-9-tools', title: '今すぐ導入すべき9つのMCP', description: 'Claude Codeと組み合わせて使うべき9つのMCPツールを紹介します。', youtubeId: '7fxguUgpIPs' },
      { id: 'codex-vs-claude', title: 'CodexとGPT-5を賢く使ったAIコーディングワークフロー', description: 'Codex vs Claude Codeの比較と、賢く使い分けるワークフローを紹介します。', youtubeId: '5MwExvt7dfQ' },
      { id: 'figma-mcp', title: 'Claude Code × Figmaで「AI感を消す」UI作成', description: 'Figma MCPを使ってAI感のないWebサイト・UIを作る方法を解説します。', youtubeId: 'BQLRduuiGR4' },
      { id: 'expo-mobile', title: 'Claude CodeとExpoでスマホアプリを量産する', description: 'Expo/React Nativeを使ってClaude Codeでスマホアプリを量産する方法です。', youtubeId: 'c46iIqF5GyQ' },
      { id: 'advanced-tips', title: '開発効率を3倍にする7つの上級者向けTips', description: 'Claude Codeの開発効率を劇的に引き上げる上級者向けTipsを紹介します。', youtubeId: '4AMjoQsOLOg' },
      { id: 'infinite-ui', title: 'Claude Codeで無限にUIデザインを構築する方法', description: 'バイブコーディングでUIデザインを無限に生成・構築する手法を紹介します。', youtubeId: '8vWRCYvLr94' },
    ],
  },

  // ── Next.js 入門 ─────────────────────────────────────
  {
    id: 'nextjs',
    title: 'Next.js 入門',
    description:
      'Next.jsの基礎からApp Router、SSR/SSG/ISR、認証、デプロイまで網羅する実践コースです。ブログやコーポレートサイトの構築を通じてNext.jsを体系的に学びます。',
    thumbnail: '/thumbnails/nextjs.svg',
    lessons: [
      { id: 'nextjs-first-app', title: '初めてのNext.js入門！簡単なアプリ実装でNext.jsを基礎から学ぶ', description: 'Next.jsの基礎を簡単なアプリ実装を通じて学びます。', youtubeId: 'eEP7CLqnRr0' },
      { id: 'nextjs-portfolio', title: 'ライト/ダークモード切替えポートフォリオサイトを作る', description: 'Next.jsでモード切替機能付きポートフォリオサイトを構築します。', youtubeId: 'VYiMU_xB9LY' },
      { id: 'nextjs-socket-chat', title: 'Next.jsとSocket.ioでチャットアプリを構築', description: 'リアルタイムチャットアプリをSocket.ioで簡単に構築します。', youtubeId: 'dSllP4TRJls' },
      { id: 'nextjs-microcms-blog', title: 'Next.jsで自作ブログを作る【MicroCMS利用】', description: 'MicroCMSをヘッドレスCMSとして活用したブログの構築方法です。', youtubeId: 'dNpONz4Yi04' },
      { id: 'nextjs-typescript', title: 'TypescriptとNext.jsをアプリ開発しながら学ぶ', description: 'TypeScriptとNext.jsを実践的なアプリ開発を通じて習得します。', youtubeId: 'MZclBqhCB6A' },
      { id: 'nextjs-notion-blog', title: 'Next.jsとNotionAPIで爆速ブログ構築', description: 'Notion APIを使ってNext.jsでブログを爆速で構築します。', youtubeId: 'My9rXHRn8zc' },
      { id: 'nextjs13-intro', title: 'Next.js13入門 — 新しくなったNext.jsをキャッチアップ', description: 'Next.js 13の新機能と変更点を学びます。', youtubeId: 'dvRLrsPGqto' },
      { id: 'nextjs-nodemailer', title: 'Next.jsとNodemailerでGmailにお問い合わせメール送信', description: 'Nodemailerを使ってお問い合わせフォームからGmailに送信する方法です。', youtubeId: 'ERo_JwWohoQ' },
      { id: 'nextjs-corporate1', title: 'Next.jsでコーポレートサイト（前編）', description: 'Next.jsでコーポレートサイトを作成。ソースコードとFigmaデザインを解説します。', youtubeId: 'tsZrciJBsBs' },
      { id: 'nextjs-corporate2', title: 'Next.jsでコーポレートサイト（後編）', description: 'コーポレートサイト構築の続き。ソースコードとFigmaデザインを解説します。', youtubeId: 'V0fNSj4R8tQ' },
      { id: 'nextjs-supabase-todo', title: 'Supabase入門 — TodoアプリでSupabaseを学ぶ', description: 'SupabaseをNext.jsとTypeScriptで学ぶTodoアプリ構築チュートリアルです。', youtubeId: 'CZlZgRo0bZ4' },
      { id: 'nextjs-chatgpt', title: 'ChatGPTを作ってみた', description: 'Next.jsでChatGPTライクなアプリを構築する方法を紹介します。', youtubeId: '-ti_Li9j7HE' },
      { id: 'nextjs-rails-blog', title: 'Next.jsとRuby on Railsでフルスタックブログ開発', description: 'Next.jsフロント × Railsバックエンドのフルスタック開発体験です。', youtubeId: 'XQtkP8it9Ag' },
      { id: 'nextjs13-todo', title: 'Todoアプリを作りながらNext.js13の新機能を理解', description: 'Next.js 13の新機能をTodoアプリ構築を通じて理解します。', youtubeId: 'VcMW2C9VNtI' },
      { id: 'nextjs-prisma-blog', title: 'モダン技術でフルスタックブログ開発', description: 'Next.js 13/Prisma/Supabase/TypeScriptを利用したブログ開発です。', youtubeId: 'wF3g76z14Gs' },
      { id: 'nextjs-t3-stack', title: 'T3 Stack入門 — 型安全にアプリ開発を学ぶ', description: 'Next.js/tRPC/TailwindCSS/TypeScript/PrismaによるT3 Stack入門です。', youtubeId: 'g6K3SKSYuoM' },
      { id: 'nextjs-use-client-server', title: '"use client"と"use server"をいつ使うべきか', description: 'Server Actionsまで含めたuse clientとuse serverの使い分けを解説します。', youtubeId: 'JE5xfZo7_Qc' },
      { id: 'nextjs-rendering', title: 'CSR/SSR/SSG/ISRを図解で解説', description: '各レンダリングパターンの違いと選び方を図解で分かりやすく解説します。', youtubeId: 'QckiJezDS_E' },
      { id: 'nextjs-directory', title: 'Next.jsのディレクトリ構成ベストプラクティス', description: 'Next.jsプロジェクトのディレクトリ構成のベストプラクティスを解説します。', youtubeId: 'ekUQ043k2TQ' },
      { id: 'nextjs14-bbs', title: 'Next.js14で掲示板Webアプリを作る', description: 'Supabase/react-hook-form/zod/shadcnを利用した掲示板アプリ構築です。', youtubeId: '8b6iqmo_2Os' },
      { id: 'nextjs-nextauth', title: 'NextAuth.js入門 — 認証機能をサクッと実装', description: 'Auth.js v5対応のNextAuth.jsでユーザー認証を実装します。', youtubeId: '2xexm8VXwj8' },
      { id: 'nextjs-react19-hooks', title: 'React19の新Hooksを解説', description: 'React 19で新登場したHooksをNext.js App Routerで実践的に学びます。', youtubeId: '_whls1Kc74c' },
      { id: 'nextjs-mistakes', title: 'Next.jsエンジニアが間違える5つの勘違い', description: 'Next.jsでよくある5つの間違いと正しいアプローチを解説します。', youtubeId: 'awCBhvJ0NLw' },
      { id: 'nextjs-best-practices', title: 'Next.js App Routerのベストプラクティス', description: 'App Routerのベストプラクティスを完全保存版として解説します。', youtubeId: 'Ca1h3KUfQ5k' },
      { id: 'nextjs-streaming-ppr', title: 'ストリーミングとPPR(Partial Pre Rendering)', description: 'Next.jsの新時代を担うストリーミングとPPRを解説します。', youtubeId: 'gkINyO22kdk' },
      { id: 'nextjs-clerk', title: 'Clerk入門 — 爆速でユーザー認証機能を実装', description: 'Clerkを使って認証機能を高速に実装する方法を紹介します。', youtubeId: '9xNczyCRRKs' },
      { id: 'nextjs-cursor', title: 'Cursor入門 — AIでアプリ開発する方法', description: 'Cursorエディタを使ったAI駆動開発の全てを解説します。', youtubeId: 'rAsovLKXCXo' },
      { id: 'nextjs-ai-x', title: 'AIを使ってX(旧Twitter)を作ってみた', description: 'AI駆動開発/Vibe CordingでSNSアプリを構築する実演です。', youtubeId: '3zz8ayun0Tw' },
      { id: 'nextjs-ai-workflow', title: 'AI爆速アプリ開発コーディングワークフロー', description: 'バイブコーディング/AI駆動開発の実践的なワークフローを紹介します。', youtubeId: '3RFQZsgZ3nA' },
      { id: 'nextjs-deploy', title: 'Next.js App Routerのデプロイ先はこれで決まり', description: 'App Routerに最適なデプロイ先を比較・解説します。', youtubeId: '-e1-k7ll1vo' },
      { id: 'nextjs16-use-cache', title: 'Next.js16 "use cache"の全てが分かる解説', description: 'Next.js 16の新機能"use cache"を初心者向けに解説します。', youtubeId: 'niqdY8Nyxho' },
    ],
  },

  // ── TypeScript 入門 ──────────────────────────────────
  {
    id: 'typescript',
    title: 'TypeScript 入門',
    description:
      'TypeScriptの基礎から実践まで学ぶコースです。Webpack環境構築、React/Next.jsとの連携、Supabase、tRPCなど実務で活躍する技術を網羅します。',
    thumbnail: '/thumbnails/typescript.svg',
    lessons: [
      { id: 'ts-basics', title: 'TypeScript入門 — 初心者からWebpack環境構築まで', description: '本当の初心者からTypeScript×Webpackの開発環境構築まで学びます。', youtubeId: 'ECc1EXnx7VQ' },
      { id: 'ts-react-todo', title: 'TypescriptとReactでTodoリストを作る', description: 'TypeScriptとReactを組み合わせてTodoアプリを構築します。', youtubeId: 'ANcopd8Bmao' },
      { id: 'ts-nextjs-app', title: 'TypescriptとNext.jsでアプリ開発', description: 'TypeScriptとNext.jsの連携をアプリ開発を通じて学びます。', youtubeId: 'MZclBqhCB6A' },
      { id: 'ts-pagination', title: 'ReactとTypescriptでページネーション実装', description: 'react-paginateを使ったページネーションの実装方法です。', youtubeId: 'BBpW5MLw29U' },
      { id: 'ts-nodemailer', title: 'Next.jsとNodemailerでGmailに問い合わせメール送信', description: 'Nodemailerを使ったメール送信をTypeScriptで実装します。', youtubeId: 'ERo_JwWohoQ' },
      { id: 'ts-supabase-todo', title: 'Supabase入門 — TodoアプリでSupabaseを学ぶ', description: 'Next.jsとTypeScriptでSupabaseを活用したTodoアプリを構築します。', youtubeId: 'CZlZgRo0bZ4' },
      { id: 'ts-trpc', title: 'tRPC入門 — 型安全なプロジェクト開発', description: '型安全なAPI通信を実現するtRPCの基礎を学びます。', youtubeId: 'bwVjCPmhAN8' },
      { id: 'ts-t3-stack', title: 'T3 Stack入門 — 型安全にアプリ開発', description: 'Next.js/tRPC/TailwindCSS/TypeScript/PrismaによるT3 Stack入門です。', youtubeId: 'g6K3SKSYuoM' },
    ],
  },

  // ── React Native ────────────────────────────────────
  {
    id: 'react-native',
    title: 'React Native',
    description:
      'React Nativeでスマホアプリ開発を学ぶコースです。Expoを使った開発手法やAI駆動開発との組み合わせを解説します。',
    thumbnail: '/thumbnails/react-native.svg',
    lessons: [
      { id: 'rn-intro', title: 'React Native入門 — スマホアプリ開発の流れを理解', description: 'React Nativeの基礎をハンズオン形式で学びます。', youtubeId: 'VhiH1votwm8' },
      { id: 'rn-claude-expo', title: 'Claude CodeとExpoでスマホアプリを量産する', description: 'Claude CodeとExpo/React Nativeでアプリを量産する方法です。', youtubeId: 'c46iIqF5GyQ' },
      { id: 'rn-figma-mcp', title: 'Claude Code × Figmaで「AI感を消す」UI作成', description: 'Figma MCPを使ってAI感のないUIを作る方法を解説します。', youtubeId: 'BQLRduuiGR4' },
      { id: 'rn-ai-mass-produce', title: 'AIに「喋るだけ」でスマホアプリを量産する', description: 'Cursor/Expo/Claude 4.5 Opusを活用したアプリ量産手法です。', youtubeId: 'WSlZGkFHCSo' },
    ],
  },

  // ── Tailwind CSS 入門 ───────────────────────────────
  {
    id: 'tailwindcss',
    title: 'Tailwind CSS 入門',
    description:
      'Tailwind CSSの基礎からshadcn/ui、v0、tailwind-mergeまで、モダンなCSSフレームワークの使い方を実践的に学ぶコースです。',
    thumbnail: '/thumbnails/tailwindcss.svg',
    lessons: [
      { id: 'tw-basics', title: 'Tailwindcss入門 — 簡単なウェブサイトを作る', description: 'Tailwind CSSの基礎を学びながら簡単なウェブサイトを構築します。', youtubeId: '4wTVdlL_YGU' },
      { id: 'tw-react-portfolio', title: 'React × TailwindCSSでポートフォリオサイト構築', description: 'ReactとTailwind CSSでポートフォリオサイトを作ります。', youtubeId: '82cN8zwDhbY' },
      { id: 'tw-shadcn', title: 'shadcn/ui入門 — 今までで1番最高なUIコンポーネント', description: 'shadcn/uiの使い方と魅力を解説します。', youtubeId: 'Kh4Fk-1_JcA' },
      { id: 'tw-v0-shadcn', title: 'たった数秒で高品質UIが作れるAIサービス【v0/shadcn】', description: 'v0とshadcnを使ったAI駆動のUI生成を紹介します。', youtubeId: 'ctmCLOTpWew' },
      { id: 'tw-merge-clsx', title: 'さらに賢いTailwindCSSの使い方【tailwind-merge/clsx】', description: 'tailwind-merge/clsx/cn()を使った実践的なTailwind CSSの活用法です。', youtubeId: 'Ix_gYhfB_9Q' },
    ],
  },

  // ── フルスタック開発 ────────────────────────────────
  {
    id: 'fullstack',
    title: 'フルスタック開発',
    description:
      'フロントからバックエンドまで一気通貫で学ぶフルスタック開発コースです。Next.js、Prisma、Supabaseなどモダンな技術スタックを使った実践プロジェクトを通じて学びます。',
    thumbnail: '/thumbnails/fullstack.svg',
    lessons: [
      { id: 'fs-node-mongo-bbs', title: 'Node.js × MongoDBで簡易掲示板を作る', description: 'Node.jsとMongoDBで簡易掲示板を作りフルスタック開発を体験します。', youtubeId: 'DcGHrM7fdPw' },
      { id: 'fs-corporate1', title: 'Next.jsでコーポレートサイト作成（前編）', description: 'Next.jsでコーポレートサイトのソースコードとFigmaデザインを解説します。', youtubeId: 'tsZrciJBsBs' },
      { id: 'fs-corporate2', title: 'Next.jsでコーポレートサイト作成（後編）', description: 'コーポレートサイト構築の続編です。', youtubeId: 'V0fNSj4R8tQ' },
      { id: 'fs-nextjs-rails', title: 'Next.jsとRuby on Railsでフルスタックブログ開発', description: 'Next.jsフロント × Railsバックエンドの実践的なフルスタック開発です。', youtubeId: 'XQtkP8it9Ag' },
      { id: 'fs-prisma-supabase', title: 'モダン技術でフルスタックブログ開発', description: 'Next.js 13/Prisma/Supabase/TypeScriptを活用したブログ開発です。', youtubeId: 'wF3g76z14Gs' },
      { id: 'fs-t3-stack', title: 'T3 Stackでブログを作りながら型安全アプリ開発', description: 'Next.js/tRPC/TailwindCSS/TypeScript/PrismaによるT3 Stack入門です。', youtubeId: 'g6K3SKSYuoM' },
      { id: 'fs-nextjs14-bbs', title: 'Next.js14で掲示板Webアプリケーション', description: 'Supabase/react-hook-form/zod/shadcnを利用した掲示板アプリです。', youtubeId: '8b6iqmo_2Os' },
    ],
  },

  // ── データベース入門 ────────────────────────────────
  {
    id: 'database',
    title: 'データベース入門',
    description:
      'MongoDB、MySQL、PostgreSQL、Prismaなど主要なデータベース技術をハンズオンで学ぶコースです。API構築と連携した実践的な内容です。',
    thumbnail: '/thumbnails/database.svg',
    lessons: [
      { id: 'db-mongodb', title: 'MongoDB入門 — Node.jsと連携してWebAPIを作る', description: 'MongoDBとNode.jsを連携させて簡単なWebAPIを作ります。', youtubeId: 'JBCykXLfvv0' },
      { id: 'db-mongo-bbs', title: 'Node.js × MongoDBで簡易掲示板を作る', description: 'Node.jsとMongoDBでフルスタックな掲示板開発を体験します。', youtubeId: 'DcGHrM7fdPw' },
      { id: 'db-mysql-upload', title: 'Node.jsとMySQLで画像アップロードアプリ', description: 'MySQLと連携した画像アップロードアプリを構築します。', youtubeId: 'qU2-vnx0t8s' },
      { id: 'db-php-bbs', title: 'PHP入門 — 2ちゃんねる風掲示板を作る', description: 'PHPとXAMPPを使って掲示板を構築しながらPHPの基礎を学びます。', youtubeId: '3QxtIrakwKk' },
      { id: 'db-postgresql', title: 'PostgreSQL入門 — データベースの基礎からAPI構築まで', description: 'PostgreSQLの基礎からAPIの構築までを学びます。', youtubeId: 'SyVw6Vjsf8E' },
      { id: 'db-prisma', title: 'Prisma入門 — 次世代ORMでデータベース管理', description: '次世代ORMのPrismaを使ったデータベース管理を学びます。', youtubeId: '9mE1j1vzUAQ' },
    ],
  },

  // ── API チュートリアル ──────────────────────────────
  {
    id: 'api-tutorial',
    title: 'API チュートリアル',
    description:
      'REST API、GraphQL、JWT認証、Hono、Postmanなど、Web API開発に必要な知識を実践的に学ぶコースです。',
    thumbnail: '/thumbnails/api.svg',
    lessons: [
      { id: 'api-strapi', title: 'Strapi入門 — バックエンドAPIをCMSでサクッと実装', description: 'StrapiとNext.jsを使ったヘッドレスCMSのAPI構築方法です。', youtubeId: 'gSwSKEDGPkQ' },
      { id: 'api-react-search', title: 'React × JSONPlaceholderで検索アプリ', description: 'JSONPlaceholderを使ったReact検索アプリの構築方法です。', youtubeId: 'q_VgmKym5_A' },
      { id: 'api-graphql', title: 'GraphQL入門 — REST APIとの違いを解説', description: 'GraphQLの基礎をREST APIとの違いを交えて学びます。', youtubeId: 'u8vD2NESjC0' },
      { id: 'api-pixabay', title: 'ReactとWebAPIでPixabayクローンを作る', description: 'Web APIを使った画像検索アプリの構築方法です。', youtubeId: '-jx9PykKpYo' },
      { id: 'api-graphql-dog', title: 'GraphQLとReactで犬画像ギャラリーを作る', description: 'GraphCMSとGraphQLを使った画像ギャラリーの構築です。', youtubeId: 'B3zkmtjjzEs' },
      { id: 'api-jwt', title: 'JWT入門 — ユーザー登録・ログイン認証の流れ', description: 'JWTを使った認証の仕組みをWebAPI構築を通じて学びます。', youtubeId: 'IaCQqCIqZ6U' },
      { id: 'api-postgresql', title: 'PostgreSQL入門 — APIの構築まで', description: 'PostgreSQLの基礎からAPI構築までを一気に学びます。', youtubeId: 'SyVw6Vjsf8E' },
      { id: 'api-postman', title: 'Postmanの新機能とAPIテスト手法', description: 'Postmanの最新機能とAPIテスト手法を紹介します。', youtubeId: 'a9gFPWrDky0' },
      { id: 'api-serverless', title: 'Serverless FrameworkでAWSへデプロイ', description: 'Node.js/ExpressをServerless FrameworkでAWSにデプロイします。', youtubeId: 'qzFKV9-jnFM' },
      { id: 'api-hono', title: 'Hono入門 — 爆速API開発からデプロイまで', description: 'HonoとCloudFlare Workersで高速API開発を体験します。', youtubeId: 'ZXBbmU9Z1cg' },
    ],
  },

  // ── Redux 入門 ──────────────────────────────────────
  {
    id: 'redux',
    title: 'Redux 入門',
    description:
      'Reactの状態管理ライブラリであるReduxとRecoilを学ぶコースです。Redux Toolkitを使った実践的なアプリ構築を行います。',
    thumbnail: '/thumbnails/redux.svg',
    lessons: [
      { id: 'redux-toolkit', title: 'Redux入門 — Redux Toolkitで状態管理を学ぶ', description: 'Redux Toolkitを使ったReduxの仕組みを初学者向けに解説します。', youtubeId: 'KuRu5wOyY_c' },
      { id: 'redux-bbs', title: 'ReactとReduxで掲示板アプリを構築', description: 'Redux Toolkitを実践的に使って掲示板アプリを構築します。', youtubeId: 'p4oHHzqjRMg' },
      { id: 'redux-recoil', title: 'Recoil入門 — Reactの状態管理ライブラリを学ぶ', description: 'Recoilの基礎を学び、状態管理のアプローチの違いを理解します。', youtubeId: 'S93hsNFmIcM' },
    ],
  },
]

export function getCourses(): Course[] {
  return courses
}

export function getCourse(courseId: string): Course | undefined {
  return courses.find((c) => c.id === courseId)
}

export function getLesson(
  courseId: string,
  lessonId: string
): Lesson | undefined {
  const course = getCourse(courseId)
  return course?.lessons.find((l) => l.id === lessonId)
}
