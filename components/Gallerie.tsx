import React from 'react'
import { motion } from "framer-motion"





export default function Gallerie() {
    const imgNames = ["3combo.jpg", "bibimbap.jpg", "bulJokbal.jpg", "dolbi.jpg", "homeimage1reduc.jpg", "homeimage2reduc.jpg",
        "japchae.jpg", "Jungshik.jpg", "kimbap.jpg", "porkBulgogi.jpg", "spicyChicken.jpg", "sundubu.jpg"]

    return (
        <div
            className='relative h-screen flex overflow-hidden flex-col space-y-5 items-center md:py-24 py-16'
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
                    Gallerie
                </h3>
            </motion.div>

            <div
                className='flex flex-col flex-wrap items-center content-center md:w-[70%] w-[90%] h-full max-w-[1280px]'>
                {
                    imgNames.map((imgName, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                x: 50,
                                opacity: 0
                            }}
                            whileInView={{
                                x: 0,
                                opacity: 1
                            }}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.1
                            }}
                            className='lg:w-[200px] md:w-[200px] w-[30%] p-1 flex justify-center'
                        >
                            <img
                                src={`/gallerie/${imgNames[i]}`}
                                alt=''
                                className='object-cover hover:scale-125 duration-300 max-h-44'
                            />
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}