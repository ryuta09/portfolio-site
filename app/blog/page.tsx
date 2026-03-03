import Link from 'next/link'
import SectionHeading from '@/components/SectionHeading'
import { getArticle } from '@/lib/api'
import type { Article } from '../types/article'
export default async function BlogPage() {
  const articleData = await getArticle()
  return (
    <section>
      <div className='mt-16 bg-[#E8F5EC]  w-full py-8 md:py-16'>
        <SectionHeading as='h1' mainTitle='ブログ' subTitle='Blog' />
        <p className='mt-2 md:mt-3 text-sm text-center'>
          これまでに執筆した記事をご紹介します
        </p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mx-auto max-w-[1200px] px-4 py-10'>
        {articleData.map((article: Article) => (
          <article
            key={article.id}
            className='hover:-translate-y-1.5 cursor-pointer rounded-md border border-[#2faa8a] p-4 duration-200 bg-white'
          >
            <Link href={`https://zenn.dev${article.path}`} target='_blank'>
              <div className='flex h-full flex-col gap-2'>
                <div className='flex flex-col items-center gap-4'>
                  <div className='text-2xl'>{article.emoji}</div>
                  <div className='text-sm'>{article.title}</div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
