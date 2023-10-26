"use client"

import { motion } from 'framer-motion'
import React from 'react'
import Skill from './skill/Nodejssss'
import Reactjs from './skill/Nodejssss'
import Vuejs from './skill/Vuejs'
import Java from './skill/Java'
import Angular from './skill/Angular'
import Js from './skill/ReactJs'
import Spring from './skill/Spring'
import Bash from './skill/Bash'
import Docker from './skill/Docker'
import Git from './skill/Git'
import Gitlab from './skill/Gitlab'
import Post from './skill/Post'
import Mongo from './skill/Mongo'
import Mysql from './skill/Mysql'
import JavaScript from './skill/JavaScript'
import Azure from './skill/Azure'
import ReactJs from './skill/ReactJs'
import Nodejssss from './skill/Nodejssss'

type Props = {}

function skills({}: Props) {
  return (
    <motion.div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-1.3xl'>skills</h3>
    <h3 className='absolute top-36 left-1/2 transform -translate-x-1/2 uppercase tracking-[3px] text-gray-500 text-sm'>HOVER OVER A SKILL FOR CURRENCY PROFICIENCY</h3>
        <div className='grid grid-cols-3 gap-10'>

    <div className='col-span-4 text-center mb-1 mt-60'>
        <h4 className='text-xl font-semibold text-gray-500'>For programming languages :</h4>
              </div>
                <Java />      
                <JavaScript />
                <Bash />                     
              
                <div className='col-span-4 text-center mb-5'>
                          <h4 className='text-xl font-semibold text-gray-500'>For Web Development :</h4>
                </div>
                  <Nodejssss />
                  <ReactJs />
                  <Vuejs />
                  <Angular />
                  <Spring />
                
                  <div className='col-span-4 text-center mb-5'>
                          <h4 className='text-xl font-semibold text-gray-500'>For Cloud & DevOps :</h4>
                  </div>
                  <Docker />
                  <Git />
                  <Gitlab />
                  <Azure />

                  <div className='col-span-4 text-center mb-5'>
                          <h4 className='text-xl font-semibold text-gray-500'>For Data engineering :</h4>
                  </div>
                  <Post />
                  <Mysql />
                  <Mongo />
                </div>
                
                
    
    </motion.div>
  )
}

export default skills