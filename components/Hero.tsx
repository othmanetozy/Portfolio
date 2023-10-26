"use client";
import React, { use } from 'react'
import { Cursor,useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
    const [text,count] = useTypewriter({
        words:[
        "Hi, The name’s Othmane Tozy",
        "Seeking PFE Internship In Web Development",
        "<ButLovesToCodeMore />"
        
        ],
        loop:true,
        delaySpeed:2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src="https://media.licdn.com/dms/image/D4E03AQGAcF2xFcmzpQ/profile-displayphoto-shrink_800_800/0/1689186372022?e=2147483647&v=beta&t=i-fo1mnjLY9ZB7LqW77anxq4I6EyXRcUVWqYfmDPlHA"alt=""/>
        <div className='z-20'>
            <h2 className='text-sm uppercase text-slate-400 pb-2 tracking-[16px]'>
                FULL-STACK DEVELOPER</h2>
        <h1 className='text-5xl lg:text-6xl font-lighter scroll px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#1AACAC' />
        </h1>
            <div className='pt-5'>
            
                
                <a href="#about">
                <button className='heroButton'>About</button>
                       </a>
                <a href="#experience">
                <button className='heroButton'>Experience</button>
                </a>
                <a href="#skills">
                <button className='heroButton'>Skills</button>
                </a>
                <a href="#projects">
                <button className='heroButton'>Projects</button>
                </a>
            </div>



        </div>
    </div>
  )
}