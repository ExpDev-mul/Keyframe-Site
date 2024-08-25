"use client";
import Image from "next/image";
import Head from "next/head"
import Link from "next/link";

import Code from '../../components/Code/Code.jsx'

import pages from '../pages.jsx'

export default function Documentation({ params }){
    const pageLinks = []

	for (let key in pages){
		pageLinks.push(
			(pages[key] !== true) ? <Link href={`/documentation/${key}`} className={`border-l pl-3 py-1 text-sm ${params.id === key ? 'opacity-100 text-blue-400 border-blue-400' : 'opacity-50 hover:opacity-85 border-l-[rgba(var(--border-rgba))]'}`}>{key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}</Link> : <span className='font-bold my-4'>{key}</span>
		)
	}

	return (
		<>
			<Head>
				<title>Keyframe - Documentation</title>
			</Head>

			<div>
				<div className='mx-auto container h-auto py-24 pt-48 px-7 flex justify-center items-start gap-24 min-h-screen'>
					<div className='flex gap-0 flex-col hidden md:flex'>
                        {pageLinks}
					</div>

					<div className='flex gap-4 flex-col w-96'>
						{pages[params.id] || "Documentation not found."}
					</div>
				</div>
			</div>
		</>
    );
}