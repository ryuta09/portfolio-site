import Link from 'next/link'
import { BsTwitterX } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
export default function Footer() {
	return (
		<footer className='w-full'>
			<div className='border-gray-200 border-t border-b py-10 md:py-20'>
				<div className='px-4 text-center'>
					<div className='text-3xl md:text-5xl'>Let's Work Together</div>
					<p className='mt-6 text-center text-sm md:text-base'>
						お仕事のご相談やお困りごとがあれば、お気軽にご連絡ください。
					</p>
				</div>
				<div className='mt-4 flex items-center justify-center gap-4'>
					<Link
						href='https://github.com/ryuta09?tab=repositories'
						className='duration-200 hover:scale-125'
					>
						<FaGithub className='h-5 w-5' />
					</Link>
					<Link
						href='https://x.com/gdk0918'
						className='duration-200 hover:scale-125'
					>
						<BsTwitterX className='h-5 w-5' />
					</Link>
				</div>
			</div>
			<nav className='py-4 md:py-6'>
				<ul className='flex items-center justify-center gap-4 text-sm'>
					<li>
						<Link href='/profile'>Profile</Link>
					</li>
					<li>
						<Link href='/works'>Works</Link>
					</li>
					<li>
						<Link href='/blog'>Blog</Link>
					</li>
				</ul>
			</nav>
			<div className='border-gray-200 border-t py-4 text-center'>
				<small>© 2025 ryuta.dev All rights reserved.</small>
			</div>
		</footer>
	)
}
