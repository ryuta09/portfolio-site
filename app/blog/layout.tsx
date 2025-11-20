import type { Metadata } from 'next'
export const metadata: Metadata = {
	title: 'ブログ一覧ページ',
	description:
		'ポートフォリオサイトのブログ一覧ページです。過去に執筆したブログ記事を紹介しています。',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <div>{children}</div>
}
