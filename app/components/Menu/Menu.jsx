'use client'
import Image from 'next/image'
import Link from 'next/link'

import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react';

export default function Menu(){
    // References
    const background = useRef(null)

    // Hooks
    const router = useRouter()
    const pathname = usePathname()

    // States
    const [visible, setVisible] = useState(false)

    // Effects
    useEffect(() => {
        const handleClick = () => {
            setVisible((prev) => !prev)
        }

        const menuButton = document.getElementById('menu_button')

        if (menuButton){
            menuButton.addEventListener('click', handleClick)
        }

        const handleClickBackground = () => {
            setVisible(false)
        }

        if (background.current){
            background.current.addEventListener('click', handleClickBackground)
        }

        return () => {
            // Cleanup
            if (background.current){
                background.current.removeEventListener('click', handleClickBackground)
            }

            if (menuButton){
                menuButton.removeEventListener('click', handleClick)
            }
        }
    }, [])

    useEffect(() => {
        setVisible(false)
    }, [pathname])

    // Return
    return (
        <>
            <div className={`${visible ? 'block' : 'hidden'}`}>
                <div className='fixed left-0 top-0 w-screen h-screen backdrop-blur-md z-20 block md:hidden' ref={background}></div>
                <div className='flex justify-start items-left flex-col fixed left-0 top-0 w-64 pl-6 h-screen bg-[rgb(var(--foreground-rgb))] z-30 gap-3 pt-6 block md:hidden'>
                    <Link href='/' className='text-lg opacity-75 text-[rgb(var(--background-rgb))] pl-7 relative'>
                        <Image src='bx-home.svg' width='20' height='20' className='absolute top-1/2 left-0 -translate-y-1/2'/>
                        Home
                    </Link>

                    <Link href='/documentation' className='text-lg opacity-75 text-[rgb(var(--background-rgb))] pl-7 relative'>
                        <Image src='bx-document.svg' width='20' height='20' className='absolute top-1/2 left-0 -translate-y-1/2'/>
                        Documentation
                    </Link>
                </div>
            </div>
        </>
    );
};
