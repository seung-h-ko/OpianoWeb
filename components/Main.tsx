import Link from 'next/link';
import React from 'react'
import { motion } from "framer-motion"
import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid'


export default function Main() {


    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center
         overflow-hidden text-[#ffe7b3]'>
            <motion.div
                initial={{
                    y: -100,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 0.8
                }}
                className="flex w-2/3 justify-center object-cover"
            >
                <Link href='#main'>
                    <img
                        src="/OPIANO-LOGO.png"
                        alt=''
                        className='max-h-36 mt-10'
                    />
                </Link>
            </motion.div>

            <motion.div
                initial={{
                    y: 100,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 0.8
                }}
                className="w-2/3 flex flex-col justify-around items-center space-y-5"
            >
                <Link
                    href={'https://www.google.com/maps/place/Opiano/@45.5018205,-73.5791266,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc91a40d0377f45:0x97b1776a9478dc4d!8m2!3d45.5018201!4d-73.5769393'}
                    className="group"
                >
                    <div className='flex flex-row space-x-3 items-center group-hover:scale-110 duration-200 relative group-hover:text-white'>
                        <MapPinIcon className='h-7 w-7' />
                        <p className='font-bold text-lg md:text-4xl underline decoration-[#ffe7b3]'>
                            1115 Rue Sherbrooke O.
                        </p>
                        <div className='font-bold absolute group-hover:-top-7 -top-0 -rotate-12 opacity-0 group-hover:opacity-100 duration-300'>
                            <p>
                                Google Maps
                            </p>
                        </div>
                    </div>
                </Link>
                <div className='flex flex-row space-x-3 items-center'>
                    <PhoneIcon className='h-7 w-7' />
                    <p className='font-bold text-lg md:text-4xl'>
                        438-333-3335
                    </p>
                </div>
                <div className='flex flex-col space-y-2 w-2/3 py-3 text-lg font-bold md:text-2xl max-w-[550px]'>
                    <div className='flex flex-row justify-between items-center'>
                        <p>LUN</p>
                        <p>11:30 - 20:00</p>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <p>MAR</p>
                        <p>11:30 - 20:00</p>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <p>MER</p>
                        <p>11:30 - 20:00</p>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <p>JEU</p>
                        <p>11:30 - 20:00</p>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <p>VEN</p>
                        <p>11:30 - 15:00</p>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <p>SAM</p>
                        <p>FERMÉ</p>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <p>DIM</p>
                        <p>FERMÉ</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}