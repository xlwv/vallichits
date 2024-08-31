import React from 'react'
import pattern from '../images/pattern2.png';
import man from '../images/man.png';

function Homesec2() {
    return (
        <div className='bg-[#008080] relative flex  h-fit  md:pr-20 pr-4 md:pl-20 pl-4 pt-8 gap-4'
            style={{
                backgroundImage: `url(${pattern})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',

                width: '100%',
            }}>
            <div className=' relative flex flex-col w-[75%] pb-4 gap-4'>

                <span className='font-poppins text-2xl sm:text-3xl md:text-4xl text-white font-bold'>
                    Want to become an agent ?
                </span>
                <span className='font-medium text-md  font-poppins text-white'>
                    Build a fulfilling career and be your own boss with Valli Chits.
                </span>
                <span className='font-light font-sm font-poppins text-white '>
                    Empower yourself and others by helping people achieve financial freedom, creating purpose and positive impact.
                </span>


                <button
                    className="font-poppins bg-white  font-semibold text-sm rounded-full  shadow-xl text-black h-[40px] w-[116px]"
                    style={{ transition: 'none' }}
                >
                    join us now
                </button>
               
                {/* <img className=' absolute bottom-0 right-0 flex flex-end h-[40vh] w-[40vw]  block md:hidden' src={man}></img> */}
            </div>

       
            <img className=' absolute bottom-0 right-0 flex flex-end h-[40vh] w-[40vw]  block md:hidden' src={man}></img>

            <img className='h-[60vh] w-[60pw] absolute bottom-0 right-0 md:block hidden' src={man}></img>

        </div>
    )
}

export default Homesec2