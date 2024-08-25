"use client";
import Image from "next/image";
import Head from "next/head"
import Link from "next/link"

import Code from "./components/Code/Code.jsx"

export default function Home(){
	return (
		<>
			<Head>
				<title>Keyframe - Home</title>
			</Head>

			<div>
				<div className=''>

				</div>
				<div className='mx-auto container h-auto py-24 pt-48 max-w-[90%] px-7 flex flex-col justify-center items-center gap-24 min-h-screen md:flex-row'>
					<div className='flex gap-4 flex-col'>
						<span className='text-4xl font-black'>Keyframe</span>
						<span className='text-1xl font-light opacity-80'>A powerful high-level psuedo-code programming language.</span>
					</div>

					<div className='whitespace-pre-wrap'>
						<Code content={`function test(){\n	for i = (1, 5){\n		print("Wowza..."}\n	}\n\n	return "Done!" \n}\n\nprint( test() )`}/>
					</div>
				</div>

				<div className='mx-auto container h-auto py-24 pt-48 max-w-[90%] px-7 flex flex-col justify-center items-center gap-8 border-t-[1px] border-t-[rgba(var(--border-rgba))]'>
					<span className='text-4xl font-black'>Why Keyframe?</span>
					<span className='text-lg font-light opacity-80 mb-5'>Keyframe is versatile, beginner-friendly and allows you to explicitly share code across multiple programming languages. It is the cohesion between generality and simplicity.</span>
					<Code content={`dec statement = ("Hello world!" == "Hello world!" and 5 == 5)\nif (statement == true){\n	print("Correct!")\n}`}/>
				</div>

				<div className='mx-auto container h-auto py-24 pt-48 max-w-[90%] px-7 flex flex-col justify-center items-center gap-8 border-t-[1px] border-t-[rgba(var(--border-rgba))]'>
					<span className='text-4xl font-black'>Who Developed Keyframe?</span>
					<span className='text-lg font-light opacity-80 mb-5'>Or Pinto, an enthusiastic 16 years old prorgammer of many years has set-up keyframe from scratch. I am proud of the accomplishmnets of this language and hope this can grow to be widely used for educational purposes about the essence of coding languages.</span>
					<Code content={`dec letter = "Hello! " + "How are you doing. " + "This is written in Keyframe!"\nprint(letter)`}/>
				</div>
			</div>
		</>
    );
}