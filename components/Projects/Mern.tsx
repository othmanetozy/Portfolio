"use client"
import React from "react";
import Image from "next/image";
import lawyer from "../../public/lawyer.png";
import Link from "next/link";

const Lawyer = () => {
  return (
    <div className="h-max md:pb-10 flex flex-col items-center space-y-1 flex-shrink-0 w-[100px] md:w-[700px] px-1 py-6 my-2 ">
      <Link
        href="https://github.com/othmanetozy/mern"
        target="_blank"
      >
        <Image
          className="w-screen flex-shrink-10 snap-center flex flex-col items-center justify-center p-0 md:p-10"
          src={lawyer}
          alt=""
        />
      </Link>

      <div className="space-y-7 px-0 md:px-10 max-w-6xl">
        <h4 className="text-xl xl:text-3xl md:text-3xl font-semibold text-center">
          <span className="text-[#1AACAC]/50"> Taxi</span> Now
        </h4>
        <div className="items-center justify-center text-center animate-pulse
                            cursor-pointer no-underline decoration-sky-500 hover:underline hover:text-xl">
          <h1 className="cursor-pointer tracking-[2px] text-gray-300">https://github.com/othmanetozy/mern</h1>
        </div>



        <div className="flex space-x-2 my-2 justify-center ">
            <img className="h-5 w-5 rounded-full" src="https://cdn.sanity.io/images/g0jgs84k/production/a6bc22a3b6ba1d775fdc5a152a17b52827ffbe2b-360x360.png" alt="" />
            <img className="h-5 w-5 rounded-full" src="https://d1fmx1rbmqrxrr.cloudfront.net/zdnet/i/edit/ne/2021/07/NodeJS.jpg" alt="" />
            <img className="h-5 w-5 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD-juL96wDgGX8nsS0y0jzmF7ZP-xsMzD_fsJT2eRQ6CWcVlvw5auPbCJEP-XqIw_k3II&usqp=CAU" alt="" />
            <img className="h-5 w-5 rounded-full" src="https://repvue.imgix.net/a9yxc48y3ay5dm2udzwizc2bdyph" alt="" />
            <img className="h-5 w-5 rounded-full" src="https://cdn.sanity.io/images/g0jgs84k/production/0dc3a856408cbbaaaae58c09162c77d9440c73d0-2048x2048.png" alt="" />

        </div>
        <p className="list-disc h-24 space-y-4 ml-5 tracking-[1px] md:h-48 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#EC407A]/80 whitespace-pre-line">
         Building this application with ReactJs, NodeJs, Express Js, Mongodb.
         
         
         Builing the NFT Drop KALI collection Dapp with NEXT.JS, Thirdweb, ReactJS, TypeScript, Tailwind CSS, MetaMask.

        👉 I create and release my first NFT drop collection smart contract with Thirdweb!
        👉 Allowing users to MINT a Real NFT which is visible on OpenSea - The largest NFT marketplace to exist!

         
         
         </p>

      </div>
    </div>
  );
};

export default Lawyer;
