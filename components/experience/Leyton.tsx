"use client";



import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Freelance({}: Props) {
  return (
    <article className="h-max md:pb-10 flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[260px] md:w-[700px] px-4 py-6  bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
        src="https://www.wetech.ma/images/300/ca-c5cbwbcrh1wkc41xlyctl108g2v8mr14012020015802.jpg"
        alt="leyton picture"
      />
      <div className="px-0 md:px-10 flex flex-col items-center">
        <h4 className="text-2xl md:text-4xl font-light text-center">
        Internship at LEYTON
        </h4>
        <p className="font-bold text-xl md:text-2xl mt-1 ">Full Stack Developer </p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
            alt="vuejs icon"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://www.stimulsoft.com/images/products/reports-java/description/java.png"
            alt="java icon"
          />

          <img
            className="h-10 w-10 rounded-full"
            src="https://styles.redditmedia.com/t5_2qm6k/styles/communityIcon_dhjr6guc03x51.png"
            alt="mysql icon"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://www.zadara.com/wp-content/uploads/docker.png"
            alt="docker icon"
          />
            <img
            className="h-10 w-10 rounded-full"
            src="https://docs.lando.dev/mailhog/images/mailhogicon.png"
            alt="mailhog icon"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://e7.pngegg.com/pngimages/250/100/png-clipart-linux-linux-thumbnail.png"
            alt="mailhog icon"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">July 2023 - Sep 2023</p>
      </div>
      <ul className="list-disc space-y-2 ml-5 text-lg text-start">
        <li>
        Creation of a new B2B2B type customer interface for an energy platform with cee certification
        </li>
        <li>
         Implementation of REST APIs and consumption of external services.
        </li>
        <li>
         Run simulations and tested using APIs and save in a database
        </li>
        <li>
        Teamwork using agile methodologies
        </li>
        <li>
        Participation in technical and architectural decision-making for the project.
        </li>
      </ul>
    </article>
  );
}

export default Freelance;