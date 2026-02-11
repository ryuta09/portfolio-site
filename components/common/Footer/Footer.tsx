import Link from 'next/link'

const menuItems = [
  { name: 'Profile', href: '/profile' },
  { name: 'Works', href: '/works' },
  { name: 'Blog', href: '/blog' },
]

export default function Footer() {
  return (
    <footer className='mt-auto h-full w-full flex-col py-6 bg-[#1a1a1a] text-white rounded-t-[36px]'>
      <div className='text-center text-2xl font-bold pb-4'>
        <Link href='/'>Ryuta Koga</Link>
      </div>
      <nav>
        <ul className='flex justify-center gap-6 '>
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className='font-semibold duration-200 hover:text-[#2faa8a]'
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <p className='mt-2 text-center'>
        <small>© 2025 Ryuta Koga</small>
      </p>
    </footer>
  )
}
