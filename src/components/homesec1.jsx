import React from 'react'
import pattern from '../images/Patterns.png';
import one from '../images/1.png';
import two from '../images/2.png';
import three from '../images/3.png';

function Homesec1() {
    return (
        <div>
            <div
                className='bg-[#008080] h-fit w-full px-4 md:px-20 '
                style={{
                    backgroundImage: `url(${pattern})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',

                    width: '100%',
                }}
            >
                <div className='pt-5 flex flex-col items-center justify-center gap-3'>
                    <span className='font-poppins text-3xl md:text-4xl text-center font-semibold text-white '>
                        Your Partner in Financial Free
                    </span>
                    <span className='font-sm font-poppins text-white text-center'>
                        Valli Chits has grown alongside our customers, celebrating their success stories with every satisfied member.
                    </span>
                    <div className='flex md:flex-row flex-col md:gap-6 gap-2  mt-8 w-[85%] justify-center  pb-10'>
                        <div className='flex flex-col w-full  md:w-1/3  justify-center items-center'>

                            <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl font-poppins text-white'>30</h1>
                            <p className='font-thin font-poppins text-white text-center'>
                                clients
                            </p>
                        </div>
                        <div className='border-r-white border-r-[1px] md:block hidden'></div>
                        <div className='border-white w-full h-[2px] md:hidden block border-t-[1px]'></div>
                        
                        <div className='flex flex-col w-full  md:w-1/3  justify-center items-center'>

                            <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl font-poppins text-white'>300+</h1>
                            <p className='font-thin font-poppins text-white text-center'>
                                Taken business legalities
                            </p>
                        </div>
                        <div className='border-r-white border-r-[1px] md:block hidden'></div>
                        <div className='border-white w-full h-[2px]  md:hidden block border-t-[1px]'></div>

                        <div className='flex flex-col w-full  md:w-1/3  justify-center items-center'>

                            <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl font-poppins text-white'>8</h1>
                            <p className='font-thin font-poppins text-white text-center'>
                                Years of Journey
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homesec1