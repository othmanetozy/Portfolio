"use client";

import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{
      opacity: 0,
    }}
    transition={{
      duration: 1.2,
    }}
    whileInView={{ opacity: 1 }}
    className='flex flex-col relative h-screen text-center 
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-1.3xl'>About Me</h3>
   
            <motion.img
             initial={{
              x:-200,
              opacity:0
            }}
            transition={{
                duration:1.2
            }}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
                src="https://i.ibb.co/9sd8Gw2/p1.jpg" className='-mb-20 md:mb-0 flex-shrink-0 w-40 h-40
                rounded-full object-cover md:rounded-lg md:w-59 md:h-80 xl:w-[500px] xl:h-[600px]'/>
            
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>A {" "} 
                <span className='underline decoration-[#1AACAC]/50'>Brief</span>{" "}
                Overview</h4>
                <p style={{ marginRight: '10px' }}>
                My name is Othmane Tozy, and I am a Software Engineering student from Morocco based in Casablanca.
                <img src="https://smit.gov.ma/wp-content/uploads/2022/01/Flag-1.webp" alt="Drapeau du Maroc" style={{ width: '50px', height: '30px', verticalAlign: 'middle', display: 'inline-block' }} />            
                
                I've worked with various technologies, both on the backend and frontend, 
                and I am currently focused on Spring Boot and JavaScript. My passion lies in crafting highly performant 
                applications that not only tackle real-world issues but also offer users an exceptional experience.

                
                I'am deeply motivated in the field of programming, constantly driven to explore new possibilities 
                and push the boundaries of what can be achieved through code. You can find out more about 
                me by visiting my <a href="https://www.linkedin.com/in/othmane-tozy-41b5b31b5/" className="text-sky-700 hover:underline italic font-bold"> LinkedIn profile </a> or checking 
                out my <a href="https://github.com/othmanetozy" className="text-gray-500 hover:underline italic font-bold"> GitHub </a> repository, where I share some 
                exciting projects and code
                </p>
            </div>
   
    </motion.div>
  )
}