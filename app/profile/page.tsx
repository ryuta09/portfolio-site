import Image from 'next/image'
import SectionHeading from '@/components/SectionHeading'

export default function ProfilePage() {
  return (
    <div className='mx-auto max-w-[800px] px-4 py-20'>
      <section className='mt-4 md:mt-6'>
        <SectionHeading as='h1' mainTitle='自己紹介' subTitle='Profile' />
        <section className='flex flex-col items-center md:flex-row gap-6 mt-5 md:mt-10'>
          <div className='w-40 shrink-0'>
            <Image
              src='/profile-icon.webp'
              width={160}
              height={160}
              alt='プロフィール画像'
              className='rounded-full mx-auto border-[#2faa8a] border'
            />
          </div>
          <div>
            <h3>
              <span className='font-bold text-2xl'>古賀龍太</span>(こが
              りゅうた)
            </h3>
            <div className='flex flex-col gap-2 mt-3'>
              <p className=''>
                フロントエンドエンジニアとして自社サービスのメディアサイトの開発から、コーポレートサイトの保守・運用からグループ会社のECサイトのコーディングなど幅広く担当しています。
              </p>
              <p>デザインデータからのコーディングを担当してます。</p>
            </div>
          </div>
        </section>

        <section className='mt-5 md:mt-10 bg-white py-10 md:py-20 ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] pl-[calc(50vw-50%)] pr-[calc(50vw-50%)] border-b border-[#f0efec]'>
          <SectionHeading mainTitle='経歴' subTitle='CAREER' />
          <dl className='mt-6 flex flex-col gap-6'>
            <div className='flex flex-col md:flex-row gap-2 py-4 border-b border-b-[#f0efec]'>
              <dt className='md:w-[150px] text-[#2faa8a] font-bold'>
                2023/04~
              </dt>
              <dd className='md:w-[calc(100%-150px)]'>
                <p className='text-lg font-bold'>株式会社ゼロアクセル</p>
                <p className='text-sm mt-2'>
                  自社サービスの開発・改修からグループ会社が運用しているECサイト(ecforce)のコーディング・改修・保守、メディアサイトの改修など幅広く対応
                </p>
              </dd>
            </div>
            <div className='flex flex-col md:flex-row gap-2 py-4 border-b border-b-[#f0efec]'>
              <dt className='md:w-[150px] text-[#2faa8a] font-bold'>
                2017/04~2023/03
              </dt>
              <dd className='md:w-[calc(100%-150px)]'>
                <p className='text-lg font-bold'>販売員時代</p>
                <p className='text-sm mt-2'>
                  大学卒業まで地元である群馬県高崎市にて過ごした後、大学卒業と同時に上京。
                  <br />
                  誰もが知っている大手通信会社の代理店の社員として在籍し、店舗の販売員として従事。
                  <br />
                  来店されるお客様への対応や、スタッフの教育、店舗運営などを担当しました。
                </p>
              </dd>
            </div>
          </dl>
        </section>

        <section className='pt-10 md:pt-20'>
          <SectionHeading mainTitle='できること' subTitle='SKILLS' />
          <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:mt-6'>
            <section className='rounded-3xl bg-white p-6'>
              <Image
                src='/icon/icon-frontend.webp'
                width={48}
                height={48}
                alt=''
              />
              <h4 className='font-bold text-lg mt-4'>フロントエンド開発</h4>
              <ul className='mt-4 flex flex-col gap-2'>
                <li className='ml-4 list-disc text-sm'>
                  Next.js・React を用いた Web アプリケーション開発
                </li>
                <li className='ml-4 list-disc text-sm'>
                  TypeScript による型安全な実装
                </li>
                <li className='ml-4 list-disc text-sm'>
                  継続的にコードの読みやすさ・保守性を意識した実装
                </li>
              </ul>
            </section>
            <section className='rounded-3xl bg-white p-6'>
              <Image
                src='/icon/icon-site-create.webp'
                width={48}
                height={48}
                alt=''
              />
              <h4 className='font-bold text-lg mt-4'>Webサイト制作</h4>
              <ul className='mt-4 flex flex-col gap-2'>
                <li className='ml-4 list-disc text-sm'>
                  HTML / CSS / JavaScript を用いた静的サイトのコーディング
                </li>
                <li className='ml-4 list-disc text-sm'>
                  セマンティックなHTML・レスポンシブ対応
                </li>
              </ul>
            </section>
            <section className='rounded-3xl bg-white p-6'>
              <Image
                src='/icon/icon-wordpress.webp'
                width={48}
                height={48}
                alt=''
              />
              <h4 className='font-bold text-lg mt-4'>WordPress制作</h4>
              <ul className='mt-4 flex flex-col gap-2'>
                <li className='ml-4 list-disc text-sm'>
                  カスタム投稿・タクソノミーを使用したオリジナルテーマの作成
                </li>
                <li className='ml-4 list-disc text-sm'>
                  クライアントの運用方法に合わせた構造設計
                </li>
              </ul>
            </section>
            <section className='rounded-3xl bg-white p-6'>
              <Image src='/icon/icon-cart.webp' width={48} height={48} alt='' />
              <h4 className='font-bold text-lg mt-4'>ECサイトの開発</h4>
              <ul className='mt-4 flex flex-col gap-2'>
                <li className='ml-4 list-disc text-sm'>
                  ecforceの仕様に則った実装・カスタマイズ
                </li>
                <li className='ml-4 list-disc text-sm'>
                  Shopify
                  を学習中で、基本的なGUIでの操作からテーマ構造やLiquidの知識を活かしたセクションの追加・カスタマイズが可能
                </li>
              </ul>
            </section>
          </div>
        </section>
      </section>
    </div>
  )
}
