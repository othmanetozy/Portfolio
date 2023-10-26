import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Work from '@/components/Work'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#1AACAC]/80'>
      <Head>
        <title>Othmane</title>
      </Head>
     
     <Header />

     <section id='hero' className='snap-center'>
      <Hero />
     </section>

     <section id='about' className='snap-center'>
        <About />
     </section>

    <section id='experience' className='snap-center'>

      <Work />
      
    </section>

    <section id='skills' className='snap-start'>
      <Skills />

    </section>


    <section id='projects' className='snap-start'>
      <Projects />

    </section>


    <section id='contact' className='snap-start'>
      <ContactMe />
    </section>

    <Link href="#hero">
    <footer className='sticky bottom-5 w-full cursor-pointer'>
      <div className='flex items-center justify-center'>
        <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer' 
      src="https://media.licdn.com/dms/image/D4E03AQGAcF2xFcmzpQ/profile-displayphoto-shrink_800_800/0/1689186372022?e=2147483647&v=beta&t=i-fo1mnjLY9ZB7LqW77anxq4I6EyXRcUVWqYfmDPlHA" alt="" /></div>
    </footer>
    </Link>


    </div>
    )
}
