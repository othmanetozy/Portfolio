"use client";



import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'
import Freelance from "./experience/Leyton";
import Devlights from './experience/sgtm';

type Props = {}

export default function Work({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      whileInView={{ opacity: 1 }}
    
    
    
    className='h-screen relative flex overflow-hidden flex-col text-left md:text-left md:flex-row max-w-full px-20 justify-evenly mx-auto items-center'>
    <h3 className='absolute top-24 md:top-16 xl:top-16 uppercase tracking-[20px] text-gray-500 text-1.3xl'>Experience</h3>
    <div className='flex justify-center'>
    <div className='w-full flex space-x-5 overflow-x-hidden p-10 snap-x snap-mandatory'>
      <Devlights />
       <Freelance />
    </div>
    </div>
  </motion.div>
  )
}