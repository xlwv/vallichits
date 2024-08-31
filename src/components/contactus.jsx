import React from 'react';
import NavBar from './navbar';
import Footer from './footer';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Contactus() {
  return (
    <>
      <NavBar />

      <div className='md:pl-20 pl-4 bg-[#F8F8F8] pt-10 md:pr-20 pr-4  flex flex-col pb-12 pt-4'>
        <div className='flex flex-col justify-center items-center'>
          <span className='font-poppins md:mt-8  text-2xl md:text-3xl text-black font-semibold'>
            Contact Us
          </span>
          <p className='font-light mt-3 font-poppins text-md text-[#535353] text-justify'>
            Any question or remarks? Just write us a message!
          </p>
        </div>

        <div className='flex flex-col md:flex-row overflow-hidden p-2 rounded-xl shadow-xl  bg-white mt-2 md:mt-5'>
          {/* Left Section */}
          <div className='bg-[#008080] overflow-hidden relative w-full md:w-[35%] rounded-xl flex flex-col justify-between pt-5 pb-5 pl-5'>
            <div>
              <h1 className='font-poppins font-semibold text-xl text-white'>
                Contact Information 
              </h1>
              <div className='flex gap-2 flex-col'>
                <div className='flex gap-4 md:mt-32 mt-5 items-center'>
                  <FaPhoneVolume className='text-white' />
                  <span className='font-poppins font-light text-md text-white'>
                    +1012 3456 789
                  </span>
                </div>
                <div className='flex gap-4 mt-3 items-center'>
                  <MdEmail className='text-white' />
                  <span className='font-poppins font-light text-md text-white'>
                    demo@gmail.com
                  </span>
                </div>
                <div className='flex gap-4 mt-3 items-center'>
                  <FaLocationDot className='text-white' />
                  <div className='flex flex-col'>
                    <span className='font-poppins font-light text-md text-white'>
                      132 Dartmouth Street Boston,
                    </span>
                    <span className='font-poppins font-light text-md text-white'>
                      Massachusetts 02156 United States
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex mt-8 mb-14 pt-3    gap-3'>
              <a href="#" className='mt-2'>
                <img src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook-new.png" alt="Facebook" className="h-8" />
              </a>
              <a href="#" className='mt-2'>
                <img src="https://img.icons8.com/ios-filled/50/FFFFFF/twitter.png" alt="Twitter" className="h-8" />
              </a>
              <a href="#" className='mt-2'>
                <img src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new.png" alt="LinkedIn" className="h-8" />
              </a>
            </div>
            <div className='absolute right-0 h-[182px] w-[180px] bottom-0'>
    <div className='relative hidden md:block'>
      <div className='absolute bg-[#088E8E] z-10 rounded-full h-[100px] w-[100px] top-[25px] right-[70px]'></div>
      <div className='absolute bg-[#028888] z-0 rounded-full h-[220px] w-[220px] top-[50px] right-[-40px]'></div>
    </div>
  </div>
          </div>

          {/* Right Section */}
          <div className='w-full md:w-[65%] p-4'>
            <form className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block text-md font-poppins font-light text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="mt-1 block w-full font-poppins border-gray-300 border-b-[1px] focus:border-black focus:outline-none sm:text-md p-2"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block text-md font-poppins font-light text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="mt-1 block w-full font-poppins border-gray-300 border-b-[1px] focus:border-black focus:outline-none sm:text-md p-2"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="email" className="block text-md font-poppins font-light text-gray-700">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="mt-1 block w-full font-poppins border-gray-300 border-b-[1px] focus:border-black focus:outline-none sm:text-md p-2"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="phoneNumber" className="block text-md font-poppins font-light text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="mt-1 block w-full font-poppins border-gray-300 border-b-[1px] focus:border-black focus:outline-none sm:text-md p-2"
                  />
                </div>
              </div>

              <div className='mt-5'>
                <label className="block text-md font-bold font-poppins text-gray-700">Select Subject?</label>
                <div className="flex flex-wrap gap-4 mt-3">
                  {['General Inquiry', 'General Inquiry', 'General Inquiry', 'General Inquiry'].map(
                    (subject, index) => (
                      <label key={index} className="inline-flex font-poppins text-md items-center">
                        <input
                          type="radio"
                          name="subject"
                          value={subject}
                          className="form-radio text-indigo-600"
                          defaultChecked={index === 0}
                        />
                        <span className="ml-2">{subject}</span>
                      </label>
                    )
                  )}
                </div>
              </div>

              <div className='mt-5'>
                <label htmlFor="message" className="block text-md font-bold font-poppins text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full border border-gray-300 font-poppins focus:outline-none focus:border-black rounded-md shadow-sm  sm:text-md p-2"
                  placeholder="Write your message.."
                />
              </div>

              <div className="flex justify-center">
              <button
              className="font-poppins mt-5 font-semibold bg-[#00be54] rounded-full text-white h-[40px] w-[200px]"
              style={{ transition: 'none' }}
            >
              Contact
            </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contactus;
