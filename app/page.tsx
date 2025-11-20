import Image from 'next/image'
import Link from 'next/link'
import { BsTwitterX } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa6'
import Header from '@/components/common/Header/Header'
import { Button } from '@/components/ui/button'

export default async function Home() {
	const skills = [
		{ name: 'HTML5', iconPath: '/icon/html5.svg' },
		{ name: 'CSS3', iconPath: '/icon/css3.svg' },
		{ name: 'Sass', iconPath: '/icon/sass.svg' },
		{ name: 'Tailwind CSS', iconPath: '/icon/tailwindcss.svg' },
		{ name: 'JavaScript', iconPath: '/icon/js.svg' },
		{ name: 'TypeScript', iconPath: '/icon/typescript.svg' },
		{ name: 'React', iconPath: '/icon/react.svg' },
		{ name: 'Next.js', iconPath: '/icon/nextjs.svg' },
		{ name: 'Astro', iconPath: '/icon/astro.svg' },
	]

	const skillTools = [
		{ name: 'Git', iconPath: '/icon/git.svg' },
		{ name: 'GithubActions', iconPath: '/icon/githubactions.svg' },
	]

	const skillBackendOrm = [{ name: 'Prisma', iconPath: '/icon/prisma.svg' }]

	return (
		<>
			<Header />
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
								size='lg'
								className='group cursor-pointer border text-sm duration-200 hover:border-[#7383BF] hover:bg-[#7383BF] hover:text-white'
							>
								<Link href='/works' className='flex items-center gap-3'>
									制作物一覧
									<FaArrowRight className='w-3 duration-200 group-hover:translate-x-1.5' />
								</Link>
							</Button>
							<Button
								size='lg'
								asChild
								variant='outline'
								className='group cursor-pointer text-sm duration-200 hover:border-[#7383BF] hover:bg-[#7383BF] hover:text-white'
							>
								<Link href='/blog' className='flex items-center gap-3'>
									ブログ一覧
									<FaArrowRight className='w-3 duration-200 group-hover:translate-x-1.5' />
								</Link>
							</Button>
						</div>
					</div>
				</section>

				<section
					className='mx-auto max-w-[800px] px-4 py-10 md:py-20'
					id='profile'
				>
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
								<h2 className='font-bold text-3xl'>About me</h2>
								<span className='text-xs'>わたしについて</span>
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
										className='group cursor-pointer text-sm duration-200 hover:border-[#7383BF] hover:bg-[#7383BF] hover:text-white'
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

				<section id='skills' className='border-t border-b px-4 py-10 md:py-20'>
					<div className='mx-auto max-w-5xl'>
						<h2 className='font-bold text-3xl'>Skills</h2>
						<span className='text-xs'>スキル</span>
						<section className='mt-8'>
							<h3 className='font-bold text-2xl'>FrontEnd</h3>
							<div className='mt-4 grid grid-cols-2 gap-4 md:grid-cols-5'>
								{skills.map((skill) => (
									<div
										className='group rounded-md border border-gray-200 p-4 duration-200 hover:border-[#7383BF]'
										key={skill.name}
									>
										<Image
											src={skill.iconPath}
											width={30}
											height={30}
											alt={skill.name}
											className='duration-200 group-hover:scale-110'
										/>
										<p className='mt-3 text-sm'>{skill.name}</p>
									</div>
								))}
							</div>
						</section>
						<section className='mt-8'>
							<h3 className='font-bold text-2xl'>Backend / ORM</h3>
							<div className='mt-4 grid grid-cols-2 gap-4 md:grid-cols-5'>
								{skillBackendOrm.map((_skill) => (
									<div
										className='group rounded-md border border-gray-200 p-4 duration-200 hover:border-[#7383BF]'
										key={_skill.name}
									>
										<Image
											src={_skill.iconPath}
											width={30}
											height={30}
											alt={_skill.name}
											className='duration-200 group-hover:scale-110'
										/>
										<p className='mt-3 text-sm'>{_skill.name}</p>
									</div>
								))}
							</div>
						</section>
						<section className='mt-8'>
							<h3 className='font-bold text-2xl'>Tools</h3>
							<div className='mt-4 grid grid-cols-2 gap-4 md:grid-cols-5'>
								{skillTools.map((_skill) => (
									<div
										className='group rounded-md border border-gray-200 p-4 duration-200 hover:border-[#7383BF]'
										key={_skill.name}
									>
										<Image
											src={_skill.iconPath}
											width={30}
											height={30}
											alt={_skill.name}
											className='duration-200 group-hover:scale-110'
										/>
										<p className='mt-3 text-sm'>{_skill.name}</p>
									</div>
								))}
							</div>
						</section>
					</div>
				</section>

				<section id='works' className='px-4 py-10 md:py-20'>
					<div className='mx-auto max-w-5xl'>
						<h2 className='font-bold text-3xl'>Works</h2>
						<span className='text-xs'>制作物</span>
						<div>ここに制作物を掲載する予定です</div>
					</div>
				</section>

				<section id='blog' className='px-4 py-10 md:py-20'>
					<div className='mx-auto max-w-5xl'>
						<h2 className='font-bold text-3xl'>Blog</h2>
						<span className='text-xs'>ブログ</span>
						<div>ここにブログを掲載する予定です</div>
					</div>
				</section>
			</main>
		</>
	)
}
