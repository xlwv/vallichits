import React from 'react'
import img from '../images/img.png';


function Text() {
  return (
    <div className=' md:px-20 px-6 md:mt-12 mt-4  flex gap-12 '>

    <div className=' md:w-[70%] w-[100%] flex flex-col'>
        <h1 className='font-poppins text-2xl md:text-3xl text-black font-semibold'>About <span className='font-poppins text-2xl md:text-3xl !text-[#00be54] font-semibold'>Valli Chits </span></h1>
        <p className='font-light text-sm font-poppins text-[#535353] text-justify mt-2 md:mt-4' > Valli Chits is more than just a chit fund company; we're your partner in financial freedom. We offer a <span  className='font-poppins font-3xl !text-[#000000] font-bold'>secure and transparent platform</span> for saving and borrowing, tailored to your unique goals. Need a dream vacation or a child's education fund? We empower you to achieve it.</p>
        <p className='font-light text-sm font-poppins text-[#535353] text-justify'>Transparency, trust, and partnership are our core values. Clear communication means you'll always understand your chit fund with detailed statements and readily available information. As a registered and regulated company, your security is paramount. We build trust through ethical practices and responsible fund management. Finally, we're here to guide you every step of the way. Join Valli Chits and unlock your financial potential!</p>
    </div>


<div className='w-[30%] md:block hidden'>
    <img src={img}></img>
</div>




    </div>
  )
}

export default Text