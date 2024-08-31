import React from 'react';
import logo from '../images/Logo.png';
const Footer = () => {
    return (
        <footer className="bg-white text-white pt-10 border-t-[1px] flex  flex-col ">
            <div className="container pb-8 ">
                <div className="flex flex-wrap pl-4 lg:pl-0 justify-between">
                    <div className="w-full flex items-center  md:w-1/4 mb-6 md:mb-0">
                        <img src={logo} alt="Logo" className="h-16" />
                    </div>
                    <div className="w-full  md:w-1/4  md:mb-0">
                        <h6 className="font-bold mb-2 pl-0 md:pl-[32px]  underline text-[#333333] ">Links</h6>
                        <ul className=' font-poppins pt-2 font-medium  pl-0 md:pl-[32px] text-[14px]   !text-[#535353]'>
                            <li className='mt-2'><a href="#" className="no-underline  !text-[#535353]">Home</a></li>
                            <li className='mt-2'><a href="#" className="no-underline !text-[#535353]">About Us</a></li>
                            <li className='mt-2'><a href="#" className="no-underline !text-[#535353]">Chit</a></li>
                        </ul>
                    </div>
                    <div className="w-full   md:w-1/4">
                        <h6 className="font-bold mb-2 pl-0 md:pl-[32px]  text-[#333333]  underline ">Links</h6>
                        <ul className='font-poppins pt-2 font-medium text-[14px]  pl-0 md:pl-[32px] '>
                            <li className='mt-2'><a href="#" className="  no-underline !text-[#535353]">Chit Groups</a></li>
                            <li className='mt-2'><a href="#" className=" no-underline !text-[#535353]">Contact Us</a></li>
                            <li className='mt-2'><a href="#" className=" no-underline !text-[#535353]">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col w-full md:w-1/4 ">
                        <h6 className="font-bold mb-2  pl-0 md:pl-[32px] underline text-[#333333]  ">Connect with us!</h6>
                        <div className='flex pl-0 pt-3 gap-2 md:pl-[32px] '>
                            <a href="#" className=" className='mt-2'"><img src="https://img.icons8.com/ios-filled/50/00be54/facebook-new.png" alt="Facebook" className="h-8" /></a>
                            <a href="#" className=" className='mt-2'"><img src="https://img.icons8.com/ios-filled/50/00be54/twitter.png" alt="Twitter" className="h-8" /></a>
                            <a href="#" className=" className='mt-2'"><img src="https://img.icons8.com/ios-filled/50/00be54/instagram-new.png" alt="LinkedIn" className="h-8" /></a>
                        </div>
                    </div>
                </div>

            </div>
            <div className=' w-full bg-[#00be54] text-white flex justify-center items-center'>
                <span className='font-poppins font-light text-[14px] '>© 2024 vallichits | All Rights Reserved</span>
            </div>

        </footer>
    );
};

export default Footer;
