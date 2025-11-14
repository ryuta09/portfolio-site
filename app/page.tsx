import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
export default function Home() {
	return (
		<main>
			<section className='mx-auto max-w-[800px] px-4'>
				<div className='py-32'>
					<h2 className='font-bold text-5xl md:text-6xl'>
						Web
						<br className='block md:hidden' /> Engineer
					</h2>
					<p className='mt-4 font-semibold text-sm md:mt-6 md:text-base'>
						フロントエンド開発 & Web制作コーディング
					</p>
					<div className='mt-4 flex items-center gap-4 md:mt-6'>
						<Button
							asChild
							variant='outline'
							size='lg'
							className='group cursor-pointer text-sm hover:bg-black/5'
						>
							<Link href='/' className='flex items-center gap-3'>
								制作物一覧
								<FaArrowRight className='w-3 duration-200 group-hover:translate-x-1.5' />
							</Link>
						</Button>
						<Button
							size='lg'
							asChild
							variant='outline'
							className='group cursor-pointer text-sm hover:bg-black/5'
						>
							<Link href='/' className='flex items-center gap-3'>
								ブログ一覧
								<FaArrowRight className='w-3 duration-200 group-hover:translate-x-1.5' />
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</main>
	)
}
