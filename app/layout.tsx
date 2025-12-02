import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Footer from '@/components/common/Footer/Footer'
import Header from '@/components/common/Header/Header'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: {
		default: 'ポートフォリオサイト',
		template: '%s | ポートフォリオサイト',
	},
	description: '古賀龍太のポートフォリオサイトです。',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ja' className='scroll-smooth'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} bg-[#F2F3F5] antialiased`}
			>
				<div className='mx-auto flex min-h-screen max-w-[1000px] flex-col px-4'>
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	)
}
