import Link from 'next/link'

const menuItems = [
	{ name: 'Profile', href: '/profile' },
	{ name: 'Works', href: '/works' },
	{ name: 'Blog', href: '/blog' },
]

export default function Footer() {
	return (
		<footer className='mt-auto flex h-full w-full flex-col py-6'>
			<nav>
				<ul className='flex justify-center gap-6 md:gap-8'>
					{menuItems.map((item) => (
						<li key={item.href}>
							<Link
								href={item.href}
								className='font-semibold duration-200 hover:text-[#7383BF]'
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
