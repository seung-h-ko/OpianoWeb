import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"




export default function Livraison() {
    return (
        <div
            className='relative h-screen flex overflow-hidden flex-col justify-center items-center md:py-24 py-16 md:px-10'
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
                    Livraison
                </h3>
            </motion.div>

            <div className='flex flex-col md:flex-row justify-around space-y-1 items-center h-full max-w-[1280px] pt-2 pb-20'>
                <motion.div
                    initial={{
                        x: 50,
                        opacity: 0
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className='md:w-[15%] w-[30%]'
                >
                    <Link href="https://www.ubereats.com/ca/store/opiano/r_DTTCdwR9GhXpOYtLpoAA">
                        <img
                            src='/livraison/ubereats2.jpg'
                            className='rounded-full w-full object-cover hover:scale-110 transition-all duration-300'
                        />
                    </Link>
                </motion.div>
                <motion.div
                    initial={{
                        x: 50,
                        opacity: 0
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2
                    }}
                    className='md:w-[15%] w-[30%]'
                >
                    <Link href="https://www.fantuanorder.com/store/opiano-korean-restaurant/ca-6960">
                        <img
                            src='/livraison/fantuan.png'
                            className='rounded-full w-full object-cover hover:scale-110 transition-all duration-300'
                        />
                    </Link>
                </motion.div>
                <motion.div
                    initial={{
                        x: 50,
                        opacity: 0
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.4
                    }}
                    className='md:w-[15%] w-[30%]'
                >
                    <Link href="https://www.doordash.com/store/opiano-montr%C3%A9al-988810/">
                        <img
                            src='/livraison/doordash2.png'
                            className='rounded-full w-full object-cover hover:scale-110 transition-all duration-300'
                        />
                    </Link>
                </motion.div>
                <motion.div
                    initial={{
                        x: 50,
                        opacity: 0
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.6
                    }}
                    className='md:w-[15%] w-[30%]'
                >
                    <Link href="https://www.skipthedishes.com/opiano">
                        <img
                            src='/livraison/skip.png'
                            className='rounded-full w-full object-cover hover:scale-110 transition-all duration-300'
                        />
                    </Link>
                </motion.div>
            </div>
        </div >
    )
}