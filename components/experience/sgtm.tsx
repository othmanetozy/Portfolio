"use client";



import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Muni({}: Props) {
  return (
    <article className="h-max md:pb-10 flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[260px] md:w-[700px] px-4  py-6 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="w-32 h-32 rounded-full md:w-[100px] md:h-[100px] object-cover object-center"
        src="https://media.licdn.com/dms/image/D4E0BAQHINc0p4RBgGQ/company-logo_200_200/0/1681245587197?e=2147483647&v=beta&t=hq8ivZHsS2mCd7LQcGf37uIgNCo_8faD_cQdufEdrVE"
        alt="Municipalidad logo"
      />
      <div className="px-0 md:px-10 flex flex-col items-center">
        <h4 className="text-2xl md:text-4xl font-light text-center">Internship at SGTM</h4>
        <p className="font-bold text-xl md:text-2xl mt-1 text-center">Full Stack Developer</p>
        <div className="flex space-x-2 my-2">
          <img
          className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/df2fb90aec55dc3d8df7544efeb4a476508b0029-500x500.png"
            alt="HTML icon"
          />
                <img
          className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/4d05ea180968c83605afe80a2617de5fb71744e2-500x500.png"
            alt="CSS icon"
          />
                <img
          className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/b54b0a9525e943809d5cfd9b1549b9f7d3b8858f-500x500.png"
            alt="react icon"
          />
                    <img
          className="h-10 w-10 rounded-full"
            src="https://blog.cellenza.com/wp-content/uploads/2017/02/CSharpLogo.png"
            alt="visual studio code icon"
          />
          
        </div>
        
      </div>
      <ul className="list-disc space-y-2 ml-5 text-lg text-start">
        <li>create a graphical interface for a web application using react js </li>
        <li>Creation and maintenance of UI components and structures in React.</li>
        <li>Design and development of prototypes and mockups in Figma to demonstrate visual solutions to teams</li>
      </ul>
    </article>
  );
}

export default Muni;