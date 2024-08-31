import React from 'react'
import abt from '../images/homeabout.png';
function Homeabout() {
  return (
<div className='flex md:flex-row flex-col-reverse gap-8 pb-8 pt-4 items-center justify-between'>
  <img src={abt} className='md:w-1/2' alt="About Valli Chits" />
  <div className='flex flex-col  pl-4 md:pl-0 md:pr-24 pr-4'>
    <h1 className='font-poppins text-2xl md:text-3xl text-black font-semibold'>
      About <span className='text-[#00be54]'>Valli Chits</span>
    </h1>
    <p className='font-light text-lg font-poppins leading-relaxed text-[#535353] tracking-wide text-justify mt-1'>
      Valli Chits is a leading chit fund company dedicated to empowering individuals like you to achieve financial freedom. We offer a secure and transparent platform for saving and borrowing, tailored to meet your specific needs.
    </p>
    <button
      className="font-poppins md:mt-16  bg-[#00be54] text-lg rounded-full text-white h-[40px] w-[116px]"
      style={{ transition: 'none' }}
    >
      Know More
    </button>
  </div>













    </div>
  )
}

export default Homeabout