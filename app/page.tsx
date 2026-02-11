import Image from 'next/image'
import Link from 'next/link'
import ArticleList from '@/components/ArticleList'
import WorkList from '@/components/WorkLilst'
import { getArticleThreeData } from '@/lib/api'
export default async function Home() {

  const linkMenu = [
    {
      label: '@gdk0918',
      href: 'https://x.com/gdk0918',
      path: '/icon/github.svg',
    },
    {
      label: '@gdk0918',
      href: 'https://github.com/ryuta09',
      path: '/icon/x.svg',
    },
    {
      label: '@gdk0918',
      href: 'https://zenn.dev/ryuta09',
      path: '/icon/zenn.svg',
    },
  ]

  const articleData = await getArticleThreeData()

  return (
    <main className='mt-16'>
      <section className='py-[100px]'>
        <div className=''>
          <Image
            src='/profile-icon.webp'
            width={160}
            height={160}
            alt=''
            className='rounded-full mx-auto border-[#2faa8a] border'
          />

          <div>
            <h1 className='font-bold text-4xl text-center mt-4'>Ryuta Koga</h1>
            <p className='mt-3 text-sm text-center text-[#2faa8a] font-bold'>
              フロントエンドエンジニア
            </p>
            <p className='mt-6 text-xs text-center'>
              Web制作とWeb開発、どちらも手がけています
            </p>
            <div className='flex justify-center gap-4 mt-4'>
              {linkMenu.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  target='_blank'
                  className=''
                >
                  <Image
                    src={link.path}
                    width={48}
                    height={48}
                    alt={link.label}
                    className='w-5 h-5'
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <WorkList />
      </section>

      <section className='mt-4 md:mt-20 px-4 pb-20'>
        <ArticleList data={articleData} />
        <div className='mt-6'>
          <Link
            href='/blog'
            className='group flex items-center justify-center gap-2 bg-[#2faa8a] rounded-2xl text-sm text-white max-w-[140px] mx-auto py-3 transition-all hover:bg-[#259174]'
          >
            もっと見る
            <Image
              src='/icon/icon-arrow-right.webp'
              width={16}
              height={16}
              alt=''
              className='group-hover:translate-x-2 transition-all'
            />
          </Link>
        </div>
      </section>
    </main>
  )
}
