import './globals.css'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
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
        className={`${geistSans.variable} ${geistMono.variable} bg-linear-to-b from-[#F8FAF9] to-[#E0F2EC] antialiased`}
      >
        <div className='mx-auto flex min-h-screen flex-col'>
          <Header />
          <div className=''>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
