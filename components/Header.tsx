import React, { useState, useEffect } from 'react'
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import Link from 'next/link'
import Image from 'next/image'
import { InView } from 'react-intersection-observer'





type Props = {
    inView: boolean;
}

export default function Header({ inView }: Props) {



    return (
        <header className={inView
            ? "md:text-2xl absolute top-20 text-[#ffe7b3] font-bold flex justify-center items-center w-full z-20 transition-all duration-700"
            : 'md:text-2xl absolute top-0 text-[#ffe7b3] font-bold flex w-full z-20 items-center justify-center transition-all duration-700'
        }
        >
            <div
                className={inView
                    ? "flex flex-row border border-[#ffe7b3] rounded-3xl px-10 md:space-x-5 space-x-1 md:w-[600px] w-80 justify-center transition-all duration-1000"
                    : "flex flex-row border border-[#ffe7b3]/0 rounded-none px-10 md:space-x-5 space-x-1 w-full transition-all justify-center duration-1000 bg-white"
                }
            >
                <motion.div
                    initial={{
                        y: -200,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1.5
                    }}
                >
                    <SocialIcon
                        url={"https://www.instagram.com/opiano_mtl/"}
                        fgColor='#ffe7b3'
                        bgColor='transparent'
                        className='hover:scale-125 transition-transform'
                    />
                </motion.div>
                <motion.div
                    initial={{
                        y: -200,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1.5,
                        delay: 0.2
                    }}
                    className="p-2 flex items-center"
                >
                    <Link href='#menu'>
                        <p className='hover:scale-125 transition-transform'>Menu</p>
                    </Link>
                </motion.div>
                <motion.div
                    initial={{
                        y: -200,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1.5,
                        delay: 0.4
                    }}
                    className="p-2 flex items-center"
                >
                    <Link href='#gallerie'>
                        <p className='hover:scale-125 transition-transform'>Gallerie</p>
                    </Link>
                </motion.div>
                <motion.div
                    initial={{
                        y: -200,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1.5,
                        delay: 0.6
                    }}
                    className="p-2 flex items-center"
                >
                    <Link href='#livraison'>
                        <p className='hover:scale-125 transition-transform'>Livraison</p>
                    </Link>
                </motion.div>
            </div>
        </header >
    )
}