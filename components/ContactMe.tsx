"use client"


import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

type Props = {};

function ContactMe({ }: Props) {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:othmanetozy.06@gmail.comsubject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`;
  };
  

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-7xl xl:px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-1.3xl'>Contact Me</h3>

      <div className='flex flex-col space-y-10 mt-16'>
        <h5 className='text-lg sm:text-3xl md:text-4xl xl:text-4xl font-semibold text-center'>
          If you need assistance, I'm here for you,
          <span className="underline decoration-[#219797]/50"> Let's have a chat</span>
        </h5>

        <div className='flex items-center space-x-5 justify-center'>
          <EnvelopeIcon className='text-[#219797] h-7 animate-pulse' />
          <p className='text-2xl'>othmanetozy.06@gmail.com</p>
        </div>

        <div className='flex items-center space-x-5 justify-center'>
          <MapPinIcon className='text-[#219797] h-7 animate-pulse' />
          <p className='text-2xl'>Casablanca & Rabat</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto '>
          <div className='flex space-x-2'>
            <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
            <input {...register('email')}placeholder='Email' className='contactInput' type="email" />
          </div>
          <input {...register('subject')}placeholder='Subject' className='contactInput' type="text" />
          <textarea {...register('message')}placeholder='Message' className='contactInput' />
          <button
            type='submit'
            className='bg-[#219797] py-5 px-10 rounded-md text-black font-bold text-lg'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
