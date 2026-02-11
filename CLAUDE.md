# CLAUDE.md

## プロジェクト概要

Next.js 16 (App Router) を使用した個人ポートフォリオサイト。React 19、TypeScript、Tailwind CSS 4 で構築。

## コマンド

```bash
npm run dev
npm run build
npm run start
```

### ディレクトリ構成

- `app/` - Next.js App Router のページとレイアウト
- `components/ui/` - shadcn/ui ベースの再利用可能なUIコンポーネント（Button, Card, Badge等）
- `components/common/` - サイト共通コンポーネント（Header, Footer）
- `lib/` - ユーティリティ関数とAPI呼び出し
- `app/types/` - TypeScript型定義

### 外部API連携

`lib/api.ts` で Zenn API (`https://zenn.dev/api/articles`) から記事データを取得し、ブログページで表示。

### スタイリング

- Tailwind CSS 4 + PostCSS
- `lib/utils.ts` の `cn()` 関数で条件付きクラス名を結合
- shadcn/ui コンポーネントは `class-variance-authority` でバリアント管理

### Biome設定

- インデント: タブ
- クォート: シングルクォート
- セミコロン: 必要な場合のみ
- JSXクォート: シングルクォート
