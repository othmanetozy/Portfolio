"use client";

import { motion } from 'framer-motion'
import Link from 'next/link';
import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({}: Props) {
  return (
      <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
            initial={{
                x:-500,
                opacity:0,
                scale:0.5
            }}
            animate={{
                x:-0,
                opacity:2,
                scale:1
            }}
            transition={{
                duration:1.6,
            }}
            className='flex flex-row items-center'>
              {/*social media */}
              <SocialIcon url="https://github.com/othmanetozy" fgColor='gray' bgColor='transparent'/>
              <SocialIcon url="https://www.linkedin.com/in/othmane-tozy-41b5b31b5/" fgColor='gray' bgColor='transparent'/>
              <SocialIcon url="https://twitter.com/Othmane_tozy" fgColor='gray' bgColor='transparent'/>
        </motion.div>
        <Link href="#contact">
        <motion.div 
         initial={{
                x:500,
                opacity:0,
                scale:0.5
            }}
            animate={{
                x:-0,
                opacity:2,
                scale:1
            }}
            transition={{
                duration:1.6,
            }}
        className='flex flex-row items-center text-gray-400 cursor-pointer'>
            <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent'></SocialIcon>
            <p className='uppercase hidden md:inline-flex text-sm text-gray-500'>Get in touch</p>
        </motion.div>
        </Link>
      </header>
  )
}