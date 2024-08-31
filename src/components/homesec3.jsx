import React from 'react'
import pattern from '../images/Patterns.png';
import women from '../images/women.png';

function Homesec3() {
    return (
        <div className='bg-[#008080] relative h-[50vh] flex justify-between  md:pr-20 pr-4 md:pl-20 pl-4 pt-8 gap-4'
            style={{
                backgroundImage: `url(${pattern})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',

                width: '100%',
            }}>
            <div className='w-[70%] relative flex flex-col pb-4 gap-4'>

                <span className='font-poppins text-xl font-medium text-lg text-white font-bold'>
                    Find Your Perfect Chit Fund:
                </span>
                <span className=' text-2xl sm:text-3xl md:text-4xl font-bold  font-poppins text-white'>
                    Calculate Your Contribution
                </span>
                <span className='font-light font-sm font-poppins text-white '>
                    Let our accurate Chit Calculator guide you.
                </span>

                <button
                    className="font-poppins pl-3 pr-3 bg-white w-fit font-semibold text-lg rounded-full shadow-xl text-black h-[40px] w-[116px]"
                    style={{ transition: 'none' }}
                >
                    Calculate now
                </button>



            </div>
            <img className=' absolute bottom-0 right-4 flex flex-end h-[30vh] w-[30vw]  block md:hidden' src={women}></img>

            <img className='h-[49vh]  absolute bottom-0 right-0 md:right-12 md:block hidden' src={women}></img>
        </div>
    )
}

export default Homesec3