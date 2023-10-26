"use client"


import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function Projects({}: Props) {
  
  return (
    <motion.div
    initial={{ opacity:0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration:1.5 }}
    
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
                <div className='w-full absolute top-[30%] bg-[#1AACAC]/10 left-0 h-[500px] -skew-y-12'></div> 
      <h3 className='absolute top-24 md:top-16 xl:top-16 uppercase tracking-[20px] text-gray-500 text-1.3xl'>Projects</h3>

      <div className='w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center md:p-10'>
        <img className='w-80 h-auto' src='lawyer.png'    />
        <div className='space-y-10 max-w-6xl'>
          <h4 className="text-xl xl:text-3xl md:text-3xl font-semibold text-center text-[#1AACAC]/50">Taxi Now</h4>

           
          <div className="className='items-center justify-center text-center animate-pulse
                            cursor-pointer no-underline decoration-sky-500 hover:underline hover:text-xl">
            <h1 className="tracking-[2px] text-gray-300">https://github.com/othmanetozy/mern</h1>
          </div>
           
      
         
         
          <div className='flex space-x-2 my-2 justify-center'>
            <img className="h-5 w-5 rounded-full" src="https://cdn.sanity.io/images/g0jgs84k/production/a6bc22a3b6ba1d775fdc5a152a17b52827ffbe2b-360x360.png"/>
            <img className="h-5 w-7 rounded-full" src='https://cdn.sanity.io/images/g0jgs84k/production/215f86c55edc30019e4c4eebd4bbd93d1c4acd3c-657x380.png'/>
            <img className="h-5 w-5 rounded-full" src='https://miro.medium.com/v2/resize:fit:679/1*m2M7BVJ5XC96hpl_lgKIkg.gif'/>
            <img className="h-5 w-5 rounded-full" src='https://play-lh.googleusercontent.com/_ATfgR5IQv2JcYauNzhTgntADBECazjfAkHMmq9xDj2Mcwts18TEJ9m3SYUNtdbsxog'/>
            <img className="h-5 w-5 rounded-full" src='https://cdn.sanity.io/images/g0jgs84k/production/0dc3a856408cbbaaaae58c09162c77d9440c73d0-2048x2048.png'/>
          </div>


              <div className='list-disc h-24 space-y-4 ml-5 tracking-[1px]  md:h-48 overflow-y-scroll 
                            pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#EC407A]/80
                             whitespace-pre-line'>
              <p className='justify-center'>I have built this application for taxi reservations with Reactjs, Nodejs, Expressjs, Mongodb</p>
                  <div className='justify-center'>
              <p> 👉I purely created this application for booking a taxi</p>
              <p>👉 allows users of the application to consult the destinations</p>
              <p>👉 I build a Login and Logout Authentication</p>
                      </div>    
                      <div className='justify-center items-center'>
                                                    <p>the steps:</p>
                                                    <p>✔️ Setting up Node.js & React.js</p>
                                                    <p>✔️ Initialising the Build</p>
                                                    <p>✔️ Implementing Routing</p>
                                                    <p>✔️ fill out the form for reservations</p>
                                                    <p>✔️ save in database</p>

                                                    </div>   

   
                            </div>


          </div>
      </div>

   
   
       </motion.div>
  );
}

export default Projects