# TechAmply

TechAmply は、microCMS をヘッドレス CMS として利用する技術ブログです。  
Next.js App Router で記事一覧、記事詳細、タグ一覧、カテゴリ別一覧、RSS フィード、サイトマップを提供しています。

## 技術スタック

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Sass
- microcms-js-sdk
- Biome

## 主な機能

- microCMS からの記事・タグ取得
- 記事一覧と記事詳細ページ
- カテゴリ別ページ (`web`, `design`, `infra`, `meeting`, `license` など)
- タグ一覧 / タグ別絞り込み
- RSS フィード (`/feed`)
- サイトマップ (`/sitemap.ts`)
- OGP / X(Twitter) 用画像生成

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local` を作成し、以下を設定してください。

```bash
API_KEY=your_microcms_api_key
NEXT_PUBLIC_GA_TRACKING_ID=your_ga_id
NEXT_PUBLIC_SITE_DOMAIN=http://localhost:3000
NEXT_PUBLIC_SITE_DOMIN=http://localhost:3000
```

`API_KEY` は microCMS の API キーです。  
`NEXT_PUBLIC_SITE_DOMAIN` は一部のサイトマップ生成処理で使用されます。  
`NEXT_PUBLIC_SITE_DOMIN` は別実装でも参照されているため、現状は両方設定しておくのが安全です。

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認します。

## 利用可能なコマンド

```bash
npm run dev
npm run dev:turbo
npm run build
npm run start
npm run lint
npm run format
```

- `npm run dev`: 開発サーバーを起動
- `npm run dev:turbo`: Turbopack で開発サーバーを起動
- `npm run build`: 本番ビルドを作成
- `npm run start`: 本番ビルドを起動
- `npm run lint`: Biome による静的チェック
- `npm run format`: Biome でコード整形

## ディレクトリ構成

```text
.
├── lib/                 # microCMS client, GA helpers
├── public/              # 静的アセット
├── src/
│   ├── api/             # microCMS 取得ラッパー
│   ├── app/             # App Router のページ / ルート
│   ├── component/       # UI コンポーネント
│   ├── constants/       # 定数
│   ├── lib/             # ユーティリティ
│   ├── style/           # グローバルスタイル
│   └── types/           # 型定義
├── biome.json           # Biome 設定
├── next.config.js       # Next.js 設定
└── tailwind.config.js   # Tailwind 設定
```

## コード規約

- 2 スペースインデント
- ダブルクォート
- TypeScript `strict: true`
- `@/*` は `src/*` へのエイリアス
- フォーマットと静的チェックは Biome を使用

## 確認事項

このリポジトリには現時点で専用のテストスクリプトはありません。  
変更後は最低限、以下の実行を推奨します。

```bash
npm run lint
npm run build
```
