import React from 'react';
import avatar from '../assets/avataaars.svg';

export default function Home() {
  return (
    <div>
      <div className='home py-16'>
      <div className='image w-[250px] m-auto '>
        <img src={avatar} alt="avatar" className='w-full'/>
      </div>
      <h1 className='text-center text-white mt-5 md:text-5xl text-2xl'>START FRAMEWORK</h1>
      <div className='shape m-auto flex justify-center items-center my-3'>
        <div className='bg-white h-1 w-20'></div>
        <i className="fa-solid fa-star text-white mx-4"></i>
        <div className='bg-white h-1 w-20'></div>
      </div>
      <p className='text-center text-white'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  )
}
