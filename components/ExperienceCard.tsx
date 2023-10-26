"use client";


import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
            <div>
            <article className='flex flex-col mt-24 rounded-lg items-center justify-center space-y-7 flex-shrink-0 w-[400px] h-[80%] md:w-[600px] xl:w-[780px] md:h-[600px] snap-center bg-[#292929] p-2 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
                <motion.img
                    initial={{
                        y:-100,
                        opacity:0,
                    }}
                    transition={{
                        duration:1.5
                    }}
                    whileInView={{
                        opacity:1,
                        y:0
                    }}
                    viewport={{once:true}}
                className="w-32 h-32 rounded-full xl:h-[200px] xl:w-[200px] object-cover object-center"
                src='' alt=''
                />

                <div className='px-0 md:px-10'>
                    <h4 className='text-2xl md:text-4xl font-light text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h4>
                    <p className='font-bold text-xl md:text-2xl mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <div className='flex space-x-2 my-2'>
                    </div>
                    <p className='uppercase py-5 text-gray-500'>3333</p>

                    <ul className='list-disc space-y-4 ml-5 text-lg'>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
                    </ul>

                </div>

            </article>
        
  </div>
  
    )
}