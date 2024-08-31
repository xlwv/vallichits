import React from 'react';
import NavBar from './navbar';
import Footer from './footer';
import Banner from './banner';
import banner from '../images/chitgrpbanner.png';
import { Image } from 'react-bootstrap';
import pro from '../images/pro.png';
import { IoArrowBackOutline } from "react-icons/io5";

function Pro() {
    return (
        <>
            <NavBar />
            <Banner title="Experienced Professionals" subtitle="Home > Experienced Professionals" bannerimg={banner} />
            <div className='md:ml-20 ml-4 mt- md:mr-20 mr-4 flex flex-col py-4'>
                <a className='no-underline text-black flex gap-2 items-center justify-start font-poppins font-semibold'>
                    <IoArrowBackOutline />
                    Back to home
                </a>

                <div className='flex flex-col rounded-xl p-3  border-[2px] border-[#F1F1F1] shadow-md md:flex-row mt-8'>
                    <div className='md:w-1/2'>
                        <Image  fluid src={pro} />
                    </div>
                    <div className='md:w-1/2 flex flex-col  p-0 md:p-8'>
                        <span className='font-poppins text-2xl md:text-3xl text-black font-semibold'>Experienced Professionals</span>
                        <p className='font-light mt-3 font-poppins text-sm text-[#535353] text-justify'>
                        Economical and invaluable options to reduce dependency on loans and avoid liabilities.
                        </p>
                        <p className='font-light text-sm   text-md font-poppins text-[#535353] text-justify '>
                            <span className='font-semibold text-black'>Prepay Loans: </span> Want to save your hard-earned money by pre-closing your loans?
                        </p>
                        <p className='font-light text-sm  font-poppins text-[#535353]  '>
                            <span className='font-semibold text-black'>Credit card dues: </span>  Looking to clear the outstanding amount on your Credit card?
                        </p>
                        <p className='font-light  text-sm font-poppins text-[#535353] '>
                            <span className='font-semibold text-black'>Future Expenses:</span>  Seeking a convenient saving solution for marriages, child’s education, dream car, house renovation, etc?
                        </p>
                       
                        <p className='font-light text-sm  font-poppins text-[#535353]  '>
                            <span className='font-semibold text-black'> Realize your dreams:</span> Wouldn’t you love to buy your first home or take your first trip overseas?
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

export default Pro;