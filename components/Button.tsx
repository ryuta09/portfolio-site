import Image from 'next/image'
import Link from 'next/link'

export default function Button({link}: {link: string}) {
  return (
    <Link
      href={link}
      className='group flex items-center justify-center gap-2 bg-[#2faa8a] rounded-xl text-sm text-white max-w-[140px] mx-auto py-3 transition-all hover:bg-[#259174]'
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
  )
}
