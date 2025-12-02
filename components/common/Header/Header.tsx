'use client'
import Link from 'next/link'

import { useState } from 'react'

const menuItems = [
	{ name: 'Profile', href: '/profile' },
	{ name: 'Works', href: '/works' },
	{ name: 'Blog', href: '/blog' },
]

export default function Header() {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	return (
		<header className='fixed top-0 left-0 z-50 mx-auto flex w-full items-center justify-between border-gray-200 p-4 backdrop-blur-sm'>
			<div>
				<Link href='/' className='font-bold text-2xl'>
					Ryuta Koga
				</Link>
			</div>
			<nav
				className={`-translate-x-full fixed top-0 left-0 z-50 flex h-full w-[200px] rounded-md bg-white px-6 py-8 shadow duration-200 md:static md:flex md:h-auto md:w-auto md:translate-x-0 md:flex-row md:bg-transparent md:px-0 md:py-0 md:shadow-none ${isOpen ? 'translate-x-0' : ''}`}
			>
				<ul className='flex w-full flex-col items-center gap-4 md:w-auto md:flex-row md:gap-8'>
					{menuItems.map((item) => (
						<li key={item.name} className='text-center'>
							<Link
								href={item.href}
								className='block w-full py-3 font-semibold duration-200 hover:text-[#7383BF] md:py-0'
							>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</nav>

			<button
				type='button'
				className='relative z-50 block h-6 w-8 cursor-pointer md:hidden'
				onClick={() => setIsOpen(!isOpen)}
			>
				<span
					className={`absolute top-0 left-0 block h-0.5 w-full bg-black duration-200 ${isOpen ? 'top-[50%] translate-y-[-50%] rotate-45' : ''}`}
				></span>
				<span
					className={`block h-0.5 w-full bg-black duration-200 ${isOpen ? 'opacity-0' : ''}`}
				></span>
				<span
					className={`absolute bottom-0 left-0 block h-0.5 w-full bg-black duration-200 ${isOpen ? '-rotate-45 bottom-1/2 translate-y-1/2' : ''}`}
				></span>
			</button>
		</header>
	)
}
