import Image from 'next/image'
import Link from 'next/link'
import { BsTwitterX } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { SiZenn } from 'react-icons/si'
import { Button } from '@/components/ui/button'
import {
	Item,
	ItemContent,
	ItemDescription,
	ItemTitle,
} from '@/components/ui/item'
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
	// const articleData = await getArticle()

	const linkMenu = [
		{ label: '@gdk0918', href: 'https://x.com/gdk0918', icon: BsTwitterX },
		{ label: 'ryuta09', href: 'https://github.com/ryuta09', icon: FaGithub },
		{ label: 'ryuta09', href: 'https://zenn.dev/ryuta09', icon: SiZenn },
	]

	return (
		<main className='mt-16'>
			<section className='mt-6'>
				<div className='flex items-center gap-4'>
					<figure>
						<Image
							src='/profile-icon.webp'
							width={120}
							height={120}
							alt=''
							className='rounded-full'
						/>
					</figure>
					<div>
						<h1 className='font-bold text-3xl'>Ryuta Koga</h1>
						<p className='mt-2 text-sm'>埼玉県在住のエンジニア？です。</p>
						<Button
							asChild
							className='mt-4 bg-[#7383BF] text-white hover:bg-[#5e6fa3]'
						>
							<Link href='/profile'>詳しいプロフィールはこちら</Link>
						</Button>
					</div>
				</div>
			</section>

			<div className='mt-6 flex flex-col items-center gap-4 md:flex-row'>
				{linkMenu.map((link) => (
					<Item
						asChild
						key={link.href}
						className='w-full flex-1 bg-[#7383BF] text-white hover:bg-[#5e6fa3]'
					>
						<Link href={link.href} target='_blank'>
							<ItemContent>
								<div className='flex items-center justify-between'>
									<div className='flex items-center gap-3'>
										<ItemTitle>
											<link.icon className='h-6 w-6' />
										</ItemTitle>
										<ItemDescription className='self-end'>
											{link.label}
										</ItemDescription>
									</div>
									<FaArrowUpRightFromSquare className='h-4 w-4' />
								</div>
							</ItemContent>
						</Link>
					</Item>
				))}
			</div>

			<section className='mt-10'>
				<div className='flex gap-2'>
					<h2 className='font-bold text-3xl'>Skill</h2>
					<p className='self-end pb-1 text-sm'>スキル</p>
				</div>
				<div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
					<section>
						<h3 className='font-semibold text-lg'>フロントエンド</h3>
						<div className='mt-2 flex flex-wrap gap-3'>
							{skills.map((skill) => (
								<div
									className='flex items-center gap-1 rounded-4xl border border-[#7383BF] p-2 px-3'
									key={skill.name}
								>
									<Image src={skill.iconPath} width={20} height={20} alt='' />
									<div className='text-sm'>{skill.name}</div>
								</div>
							))}
						</div>
					</section>
					<section>
						<h3 className='font-semibold text-lg'>バックエンド</h3>
						<div className='mt-2 flex flex-wrap gap-3'>
							{skillBackendOrm.map((skill) => (
								<div
									className='flex items-center gap-1 rounded-4xl border border-[#7383BF] p-2 px-3'
									key={skill.name}
								>
									<Image src={skill.iconPath} width={20} height={20} alt='' />
									<div className='text-sm'>{skill.name}</div>
								</div>
							))}
						</div>
					</section>
					<section>
						<h3 className='font-semibold text-lg'>ツール</h3>
						<div className='mt-2 flex flex-wrap gap-3'>
							{skillTools.map((skill) => (
								<div
									className='flex items-center gap-1 rounded-4xl border border-[#7383BF] p-2 px-3'
									key={skill.name}
								>
									<Image src={skill.iconPath} width={20} height={20} alt='' />
									<div className='text-sm'>{skill.name}</div>
								</div>
							))}
						</div>
					</section>
				</div>
			</section>
		</main>
	)
}
