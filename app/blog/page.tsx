import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function BlogPage() {
	return (
		<section className='mx-auto max-w-[1200px] px-4 py-20'>
			<Button
				asChild
				className='cursor-pointer border text-sm duration-200 hover:border-[#7383BF] hover:bg-[#7383BF] hover:text-white'
			>
				<Link href='/'>トップページに戻る</Link>
			</Button>

			<div className='mt-6'>
				<h1 className='font-bold text-3xl'>Blog</h1>
				<span className='text-xs'>ブログ</span>
			</div>
			<div>ここにブログ一覧を表示します</div>
		</section>
	)
}
