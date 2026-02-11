import Link from 'next/link'
import type { Article } from '@/app/types/article'
import SectionHeading from './SectionHeading'

interface ArticleListProps {
  data: Article[]
}

export default async function ArticleList({data}: ArticleListProps) {
  return (
    <div className=''>
      <SectionHeading mainTitle='ブログ' subTitle='Blog' />
      <div className='mt-6 grid grid-col-1 md:grid-cols-3 gap-6'>
        {data.map((article: Article) => (
          <Link
            href={`https://zenn.dev${article.path}`}
            target='_blank'
            key={article.id}
            className='hover:-translate-y-1.5 cursor-pointer rounded-md border border-[#2faa8a] p-4 duration-200 bg-white'
          >
            <div className='flex h-full flex-col gap-2'>
              <div className='flex flex-col items-center gap-4'>
                <div className='text-2xl'>{article.emoji}</div>
                <div className='text-sm'>{article.title}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
