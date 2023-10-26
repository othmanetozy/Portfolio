"use client"

import { motion } from 'framer-motion'
import React from 'react'

type Props = { 
    directionLeft?: boolean;
}

export default function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            initial={{
                x:directionLeft ? -200 : 200,
                opacity:0
            }}
            transition={{duration: 1}}
            whileInView={{opacity:1,x:0}}
            src='https://ih1.redbubble.net/image.2765943210.6172/st,small,507x507-pad,600x600,f8f8f8.u1.jpg' 
            className='rounded-full border border-gray-500 object-cover w-10 h-10 md:w-16 md:h-16 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
     />
     <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-10 h-10 md:w-16 md:h-16 xl:w-20 xl:h-20 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
            <p className='text-xl xl:text-3xl font-bold text-black opacity-100'>100%</p>
        </div>
     </div>
    </div>
  )
}