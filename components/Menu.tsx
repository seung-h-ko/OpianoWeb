import React, { useState } from 'react'
import { motion } from "framer-motion"
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';


export default function Menu() {
    const [number, setNumber] = useState(0);
    const handleLeftClick = () => {
        if (number <= 0) {
            return
        } else {
            setNumber(number - 1)
        }
    }
    const handleRightClick = () => {
        if (number >= 6 - 1) {
            return
        } else {
            setNumber(number + 1)
        }
    }

    return (
        <div
            className='relative h-screen flex overflow-hidden flex-col justify-center items-center md:pt-10 pt-16'
        >
            <motion.div
                initial={{
                    x: -100,
                    opacity: 0
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 0.8,
                }}
            >
                <h3 className='ml-3 uppercase tracking-[20px] text-[#ffe7b3] text-2xl md:text-4xl'>
                    MENU
                </h3>
            </motion.div>


            <motion.div
                initial={{
                    x: 100,
                    opacity: 0
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 0.8,
                }}
                className='w-full flex overflow-x-scroll snap-mandatory overflow-y-hidden snap-x z-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#ffe7b3]/80 scroll-smooth'>

                <div
                    id='menu#0'
                    className='w-screen flex-shrink-0 snap-start flex flex-col items-center justify-center
                             py-1'
                >
                    <img
                        src="/menu1.jpg"
                        alt=''
                        className='h-full object-cover'
                    />
                </div>
                <div
                    id='menu#1'
                    className='w-screen flex-shrink-0 snap-start flex flex-col items-center justify-center
                             py-1'
                >
                    <img
                        src="/menu2.jpg"
                        alt=''
                        className='h-full object-cover'
                    />
                </div>
                <div
                    id='menu#2'
                    className='w-screen flex-shrink-0 snap-start flex flex-col items-center justify-center
                             py-1'
                >
                    <img
                        src="/menu3.jpg"
                        alt=''
                        className='h-full object-cover'
                    />
                </div>
                <div
                    id='menu#3'
                    className='w-screen flex-shrink-0 snap-start flex flex-col items-center justify-center
                             py-1'
                >
                    <img
                        src="/menu4.jpg"
                        alt=''
                        className='h-full object-cover'
                    />
                </div>
                <div
                    id='menu#4'
                    className='w-screen flex-shrink-0 snap-start flex flex-col items-center justify-center
                             py-1'
                >
                    <img
                        src="/menu5.jpg"
                        alt=''
                        className='h-full object-cover'
                    />
                </div>
                <div
                    id='menu#5'
                    className='w-screen flex-shrink-0 snap-start flex flex-col items-center justify-center
                             py-1'
                >
                    <img
                        src="/menu6.jpg"
                        alt=''
                        className='h-full object-cover'
                    />
                </div>

            </motion.div>
            <div className='h-[25%] bg-white'>
            </div>
            <div className='absolute left-[5%] bottom-1/2 text-[#ffe7b3] z-20'>
                <Link
                    onClick={handleLeftClick} href={number != 0 ? `#menu#${number - 1}` : '#menu#0'}
                >
                    <ChevronDoubleLeftIcon
                        className='h-10 w-10 active:scale-75 hidden md:inline-block' />
                </Link>
            </div>
            <div className='absolute right-[5%] bottom-1/2 text-[#ffe7b3] z-20'>
                <Link onClick={handleRightClick} href={number != 6 - 1 ? `#menu#${number + 1}` : `#menu#${6 - 1}`}>
                    <ChevronDoubleRightIcon
                        className='h-10 w-10 active:scale-75 hidden md:inline-block' />
                </Link>
            </div>
        </div>
    )
}