import React from 'react';
import NavBar from './navbar';
import Footer from './footer';
import Banner from './banner';
import banner from '../images/chitgrpbanner.png';
import { Image } from 'react-bootstrap';
import beginner from '../images/beginner.png';
import { IoArrowBackOutline } from "react-icons/io5";

function Beginner() {
    return (
        <>
            <NavBar />
            <Banner title="Beginner" subtitle="Home > Beginner" bannerimg={banner} />
            <div className='md:ml-20 ml-4 mt- md:mr-20 mr-4 flex flex-col py-4'>
                <a className='no-underline text-black flex gap-2 items-center justify-start font-poppins font-semibold'>
                    <IoArrowBackOutline />
                    Back to home
                </a>

                <div className='flex flex-col shadow-xl rounded-xl border-[2px] border-[#F1F1F1] p-3 md:flex-row mt-8'>
                    <div className='md:w-1/2'>
                        <Image fluid src={beginner} />
                    </div>
                    <div className='md:w-1/2 flex flex-col  p-0 md:p-8'>
                        <span className='font-poppins text-2xl md:text-3xl text-black font-semibold'>Beginner</span>
                        <p className='font-light mt-3 font-poppins text-sm text-[#535353] text-justify'>
                            Building the habit of regular investments.
                        </p>
                        <p className='font-light text-sm   text-md font-poppins text-[#535353] text-justify '>
                            <span className='font-semibold text-black'>Monthly compulsory saving: </span> Looking to build your savings?
                        </p>
                        <p className='font-light text-sm  font-poppins text-[#535353]  '>
                            <span className='font-semibold text-black'>Higher studies: </span> Want to increase your earning potential by progressing in your career through higher education?
                        </p>
                        <p className='font-light  text-sm font-poppins text-[#535353] '>
                            <span className='font-semibold text-black'>Large expenses: </span> Need to save money for your marriage?
                        </p>
                        <p className='font-light text-sm  font-poppins text-[#535353]  '>
                            <span className='font-semibold text-black'>Latest Gadgets: </span> Wish to get your hands on the latest iPhone, laptops, PlayStation, etc?
                        </p>
                        <p className='font-light text-sm  font-poppins text-[#535353]  '>
                            <span className='font-semibold text-black'>Get on the road:</span> Require a simple borrowing solution to purchase your first car, bike, etc?
                        </p>

                        <div className='flex flex-col md:flex-row gap-4 mt-8'>
                        <a  href="/Newchitgroup" className="bg-transparent no-underline border-black text-[#333333] font-poppins font-medium py-2 px-4 border rounded-full transition duration-200 text-center">
                                New Chits Groups
                            </a>
                            <a href="/Ongoingchitgroup" className="bg-transparent no-underline border-black text-[#333333] font-poppins font-medium py-2 px-4 border rounded-full transition duration-200 text-center">
                                Ongoing Chits Groups
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Beginner;
