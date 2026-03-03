import SectionHeading from '@/components/SectionHeading'

export default function WorksPage() {
  return (
    <section className=''>
      <div className='mt-16 bg-white w-full py-8 md:py-16'>
        <SectionHeading as='h1' mainTitle='制作物一覧' subTitle='Works' />
        <p className='mt-2 md:mt-3 text-sm text-center'>
          これまでに制作した制作物をご紹介します
        </p>
      </div>
      <div className='mx-auto max-w-[1200px]'>
        <div className='text-center mt-6'>ここに制作物一覧を表示します。</div>
      </div>
    </section>
  )
}
