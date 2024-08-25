import { Inter } from "next/font/google";
import "./globals.css";

import Link from 'next/link'
import Image from 'next/image'

import Menu from './components/Menu/Menu.jsx'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Keyframe",
  description: "Psuedo-code programming language",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<Menu/>
				<nav className='flex fixed z-10 backdrop-blur-md gap-3 justify-center w-screen h-20 border-b-[1px] border-b-[rgba(var(--border-rgba))]'>
					<div className='flex items-center pl-10 w-[600px] max-w-[50%] gap-6'>
						<div className='flex flex-col'>
							<span className='text-lg font-med'>Keyframe</span>
							<span className='text-sm font-light opacity-85 hidden text-nowrap md:block'>Simple yet powerful.</span>
						</div>
						<div className='pl-8 flex gap-6'>
							<Link href='/' className='!text-[rgb(var(--foreground-rgb))] opacity-80 text-md hidden md:block'>Home</Link>
							<Link href='/documentation' className='opacity-80 text-md hidden md:block'>Documentation</Link>
						</div>
					</div>
					<div className='flex items-center pr-10 w-[600px] justify-end gap-6'>
						<button className='bg-[rgb(var(--background-rgb))] text-[rgb(var(--foreground-rgb))] border-2 border-[rgba(var(--border-rgba))] px-5 py-2 rounded-md'>Documentation</button>
						<button className='bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--background-rgb))] px-5 py-2 rounded-md hidden md:block'>Learn</button>
						<button className='bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--background-rgb))] px-5 py-5 rounded-md relative block md:hidden' id='menu_button'>
							<Image src='/bx-menu.svg' alt='M' width='16' height='16' className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'/>
						</button>
					</div>
				</nav>
				{children}
			</body>
		</html>
	);
}
