import React, { useState } from 'react';

import call from '../images/Call.png';
import whatsapp from '../images/Whatsapp.png';
import { motion } from 'framer-motion';
import banner from '../images/homebanner.png';
function Homebanner() {
    const [hovercall, setHovercall] = useState(false);
    const [hoverwhatsapp, setHoverwhatsapp] = useState(false);
  return (
    <>
         <div className='h-screen w-full flex items-center' style={{
            backgroundImage: `url(${banner})`,

            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '500px',
            width: '100%',
        }}>


            <div className='flex justify-between w-full '>
                <div className='md:ml-20 ml-4 flex md:w-1/2 w-3/5 flex-col '>
                    <h1 className='font-poppins font-extrabold text-white text-4xl md:text-5xl' >Turn Your Savings Goals into Reality</h1>
                    <h1 className='font-poppins mt-2 font-mediun text-white text-base'>Transparent Transactions, Trusted Relationships</h1>
                    <button
              className="font-poppins mt-3  bg-[#00be54] text-sm rounded-full text-white h-[40px] w-[116px]"
              style={{ transition: 'none' }}
            >
              Know More
            </button>
                </div>

                <div className=' flex overflow-x-hidden flex-col gap-3' >

                    <motion.div className=' h-10  gap-2.5 rounded-tl-full flex  items-center rounded-bl-full px-3 group bg-white'
                        onMouseEnter={() => setHovercall(true)}
                        onMouseLeave={() => setHovercall(false)}
                        initial={{ x: "65%" }}
                        animate={hovercall ? { x: "0" } : { x: "65%" }}
                    >
                        <img src={call}></img>
                        <span className='font-poppins  bg-white font-mediun text-black  text-base'>Call Now</span>
                    </motion.div>


                    <motion.div className=' h-10  gap-2.5 rounded-tl-full flex  items-center rounded-bl-full px-3 group bg-white'
                        onMouseEnter={() => setHoverwhatsapp(true)}
                        onMouseLeave={() => setHoverwhatsapp(false)}
                        initial={{ x: "65%" }}
                        animate={hoverwhatsapp ? { x: "0" } : { x: "65%" }}
                    >
                        <img src={whatsapp}></img>
                        <span

                            className='font-poppins  bg-white font-mediun text-black  text-base'>Whatsapp</span>
                    </motion.div>


                </div>

            </div>


        </div>

    </>
  )
}

export default Homebanner