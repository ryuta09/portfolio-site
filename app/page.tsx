import Image from 'next/image'
import Link from 'next/link'
import { BsTwitterX } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
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

			<section className='mx-auto max-w-[800px] px-4 py-10 md:py-20'>
				<div className='flex flex-col items-center gap-6 md:flex-row md:gap-16'>
					<Image
						src='/profile-icon.webp'
						width={200}
						height={200}
						alt=''
						className='shrink-0 rounded-full border border-black'
					/>
					<div>
						<div>
							<h2 className='font-bold text-3xl'>わたしについて</h2>
							<span className='text-sm'>About me</span>
						</div>
						<div>
							<p className='mt-3 text-sm leading-6'>
								こんにちは！2017年から新卒で通信販売代理店での販売を経験し、2023年にWebメディア運営会社に転職。Web制作におけるコーディング業務に従事し、スキル向上に励んでいます。Next.jsやReactを用いたフロントエンドWeb開発はもちろん、Webデザインから完成までの幅広い対応が可能です。
							</p>
							<div className='mt-4 flex items-center gap-4'>
								<Button
									size='lg'
									asChild
									variant='outline'
									className='group cursor-pointer text-sm hover:bg-black/5'
								>
									<Link href='/profile' className='flex items-center gap-3'>
										もっと見る
										<FaArrowRight className='w-3 duration-200 group-hover:translate-x-1.5' />
									</Link>
								</Button>
								<Link
									href='https://github.com/ryuta09?tab=repositories'
									className='duration-200 hover:scale-125'
								>
									<FaGithub className='h-5 w-5' />
								</Link>
								<Link
									href='https://x.com/gdk0918'
									className='duration-200 hover:scale-125'
								>
									<BsTwitterX className='h-5 w-5' />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
