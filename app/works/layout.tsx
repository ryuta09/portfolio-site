import type { Metadata } from 'next'
export const metadata: Metadata = {
	title: '制作物一覧ページ',
	description:
		'ポートフォリオサイトの制作物一覧ページです。過去に制作したプロジェクトや作品を紹介しています。',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <div>{children}</div>
}
