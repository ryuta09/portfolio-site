import SectionHeading from '@/components/SectionHeading'

export default function WorksPage() {
  return (
    <section className='mx-auto max-w-[1200px] px-4 py-20'>
      <div className='mt-6'>
        <SectionHeading as='h1' mainTitle='制作物一覧' subTitle='Works' />
      </div>
      <div className='text-center mt-6'>ここに制作物一覧を表示します。</div>
    </section>
  )
}
