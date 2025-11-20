import type { Metadata } from 'next'
export const metadata: Metadata = {
	title: 'プロフィールページ',
	description:
		'ポートフォリオサイトのプロフィールページです。自己紹介や経歴を紹介しています。',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <div>{children}</div>
}
