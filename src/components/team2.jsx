import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import pone from '../images/p1.png';
import ptwo from '../images/p2.png';
import pthree from '../images/p3.png';
function Team2() {

    const [box1, setbox1] = useState(false);
    const [box2, setbox2] = useState(false);
    const [box3, setbox3] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 500);

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 500);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (




        <div className='flex  py-8 md:py-20 md:mx-20 mx-4 flex-col'>



            <div className='flex flex-col items-center'>
                <h1 className='team-title font-poppins text-3xl text-[#333333] font-bold text-center '>Guided by Visionary Leaders</h1>
                <p className='team-description ml-2  mr-2 md:ml-20 md:mr-20 text-md font-poppins text-[#535353] text-justify md:text-center mt-3'>
                    At Valli Chits, we're driven by a team of passionate founders who understand the importance of financial empowerment. Their dedication to ethical practices and innovative solutions shapes our commitment to your success.
                </p>
            </div>

            <div
                onMouseEnter={() => setbox1(true)}
                onMouseLeave={() => setbox1(false)}



                className='flex flex-col mt-12 group px-2'>

                <div className='flex border-black justify-between md:gap-6 md:pr-[15vw] items-center border-t h-[20vh] border-b'>
                    <div className='flex justify-between text-center  gap-2'>
                        <span className='font-poppins text-center flex items-center text-md'>01</span>
                        <motion.span
                            initial={{ x: "0" }}
                            // animate={box1 ? { x: "9%" } : { x: "0%" }}.
                            animate={box1 && !isSmallScreen ? { x: "9%" } : { x: "0%" }}

                            className='font-poppins text-md md:text-lg md:ml-20 font-semibold uppercase group-hover:text-[#00BE54]'>director and chairman</motion.span>
                    </div>
                    <motion.div
                        initial={{ scale: 0.5 }}
                        animate={box1 ? { scale: 1.3 } : { scale: 0 }}
                        // animate={box1 && !isSmallScreen ? { scale: 1.5 } : { scale: 0 }}

                        transition={{
                            duration: 0.6,
                            ease: [0.25, 1, 0.5, 1]
                        }}
                        className='flex md:gap-2 items-center flex-col'>
                        <img
                            src={pone}

                            className="md:h-[130px] md:w-[130px] h-[60px] w-[60px] border rounded-full"
                            alt="Director and Chairman"
                        />
                        <span className='font-poppins text-center text-regular leading-tight text:xs'>radha krishna</span>
                    </motion.div>
                </div>


            </div>


            {/* -------------------------------------------------------------------------------------------------------------------------- */}
            <div
                onMouseEnter={() => setbox2(true)}
                onMouseLeave={() => setbox2(false)}



                className='flex flex-col   group px-2'>

                <div className='flex justify-between md:gap-6 md:pr-[15vw] items-center  h-[20vh] '>
                    <div className='flex justify-between text-center  gap-2'>
                        <span className='font-poppins text-center flex items-center text-md'>02</span>
                        <motion.span
                            initial={{ x: "0" }}
                            // animate={box1 ? { x: "9%" } : { x: "0%" }}.
                            animate={box2 && !isSmallScreen ? { x: "9%" } : { x: "0%" }}

                            className='font-poppins text-md md:text-lg md:ml-20 font-semibold uppercase group-hover:text-[#00BE54]'>director and chairman</motion.span>
                    </div>
                    <motion.div
                        initial={{ scale: 0.5 }}
                        animate={box2 ? { scale: 1.3 } : { scale: 0 }}
                        // animate={box1 && !isSmallScreen ? { scale: 1.5 } : { scale: 0 }}

                        transition={{
                            duration: 0.6,
                            ease: [0.25, 1, 0.5, 1]
                        }}
                        className='flex md:gap-2 md:pr-24 items-center flex-col'>
                        <img
                            src={ptwo}

                            className="md:h-[130px] md:w-[130px] h-[60px] w-[60px] border rounded-full"
                            alt="Director and Chairman"
                        />
                        <span className='font-poppins text-center  leading-tight text-regular text:xs'>radha krishna</span>
                    </motion.div>
                </div>


            </div>
            {/* ---------------------------------------------------------------------------------------- */}
            <div
                onMouseEnter={() => setbox3(true)}
                onMouseLeave={() => setbox3(false)}



                className='flex flex-col  group px-2'>

                <div className='flex border-black justify-between md:gap-6 md:pr-[15vw] items-center border-t h-[20vh] border-b'>
                    <div className='flex justify-between text-center  gap-2'>
                        <span className='font-poppins text-center flex items-center text-md'>03</span>
                        <motion.span
                            initial={{ x: "0" }}
                            // animate={box1 ? { x: "9%" } : { x: "0%" }}.
                            animate={box3 && !isSmallScreen ? { x: "9%" } : { x: "0%" }}

                            className='font-poppins text-md md:text-lg md:ml-20 font-semibold uppercase group-hover:text-[#00BE54]'>director and chairman</motion.span>
                    </div>
                    <motion.div
                        initial={{ scale: 0.5 }}
                        animate={box3 ? { scale: 1.3 } : { scale: 0 }}
                        // animate={box1 && !isSmallScreen ? { scale: 1.5 } : { scale: 0 }}

                        transition={{
                            duration: 0.6,
                            ease: [0.25, 1, 0.5, 1]
                        }}
                        className='flex md:gap-2 items-center flex-col'>
                        <img
                            src={pthree}

                            className="md:h-[130px] md:w-[130px] h-[60px] w-[60px] border rounded-full"
                            alt="Director and Chairman"
                        />
                        <span className='font-poppins text-center text-regular leading-tight text:xs'>radha krishna</span>
                    </motion.div>
                </div>


            </div>

            <div>

            </div>



        </div>
    )
}

export default Team2