import Link from 'next/link'
import { CiHeart } from 'react-icons/ci'
import getArticle from '@/lib/api'
import type { Article } from '../types/article'
export default async function BlogPage() {
	const articleData = await getArticle()
	return (
		<section className='mx-auto max-w-[1200px] px-4 py-20'>
			<div className='mt-6'>
				<h1 className='font-bold text-3xl'>Blog</h1>
				<span className='text-xs'>ブログ</span>
			</div>
			<div className='mt-6 grid grid-cols-4 gap-6'>
				{articleData.map((article: Article) => (
					<Link
						href={`https://zenn.dev${article.path}`}
						target='_blank'
						key={article.id}
						className='cursor-pointer rounded-md border border-gray-200 p-4 duration-200 hover:border-[#7383BF]'
					>
						<div className='flex h-full flex-col gap-2'>
							<div className='flex flex-col items-center gap-4'>
								<div className='text-2xl'>{article.emoji}</div>
								<div className='text-sm'>{article.title}</div>
							</div>
							<div className='mt-auto flex justify-start gap-1'>
								<CiHeart className='h-5 w-5' />
								<div className='text-sm'>{article.liked_count}</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</section>
	)
}
