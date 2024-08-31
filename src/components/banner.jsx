import React, { useState } from 'react';

import call from '../images/Call.png';
import whatsapp from '../images/Whatsapp.png';
import { motion } from 'framer-motion';

function Banner({ title, subtitle, bannerimg }) {
    const [hovercall, setHovercall] = useState(false);
    const [hoverwhatsapp, setHoverwhatsapp] = useState(false);
    return (
        <div className='h-screen w-full flex items-center' style={{
            backgroundImage: `url(${bannerimg})`,

            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
            width: '100%',
        }}>


            <div className='flex justify-between w-full '>
                <div className='md:ml-20 ml-4 flex w-1/2 flex-col '>
                    <h1 className='font-poppins font-extrabold text-white text-5xl' >{title}</h1>
                    <h1 className='font-poppins font-mediun text-white text-base'>{subtitle}</h1>
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

    )
}

export default Banner;