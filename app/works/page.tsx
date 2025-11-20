import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function WorksPage() {
	return (
		<section className='mx-auto max-w-[1200px] px-4 py-20'>
			<Button
				asChild
				className='cursor-pointer border text-sm duration-200 hover:border-[#7383BF] hover:bg-[#7383BF] hover:text-white'
			>
				<Link href='/'>トップページに戻る</Link>
			</Button>
			<div className='mt-6'>
				<h1 className='font-bold text-3xl'>Works</h1>
				<span className='text-xs'>制作物一覧</span>
			</div>
			<div>ここに制作物一覧を表示します。</div>
		</section>
	)
}
