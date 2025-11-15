'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	return (
		<header className='mx-auto flex max-w-[1200px] items-center justify-between p-4'>
			<div>
				<Link href='/' className='font-bold text-2xl'>
					ryuta.dev
				</Link>
			</div>
			<nav
				className={`-translate-x-full fixed top-0 left-0 z-50 flex h-full w-[200px] rounded-md bg-white px-6 py-8 shadow duration-200 md:static md:flex md:h-auto md:w-auto md:translate-x-0 md:flex-row md:bg-transparent md:px-0 md:py-0 md:shadow-none ${isOpen ? 'translate-x-0' : ''}`}
			>
				<ul className='flex flex-col items-center gap-4 md:flex-row md:gap-6'>
					<li className=''>
						<Link href='/profile' className='font-semibold'>
							Profile
						</Link>
					</li>
					<li>
						<Link href='/works' className='font-semibold'>
							Works
						</Link>
					</li>
					<li>
						<Link href='/blog' className='font-semibold'>
							Blog
						</Link>
					</li>
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
