import React from 'react';
import pattern from '../images/Patterns.png';
import one from '../images/1.png';
import two from '../images/2.png';
import three from '../images/3.png';

function Offer() {
  return (
    <div
      className='bg-[#008080] h-fit w-full px-4 sm:px-8 lg:px-20 '
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
        width: '100%',
      }}
    >
      <div className='pt-5 flex flex-col items-center justify-center gap-6'>
        <h1 className='font-poppins text-2xl sm:text-3xl md:text-4xl text-white font-bold'>
          What We Offer
        </h1>
        <div className='flex flex-wrap gap-6 sm:gap-10 md:gap-14 justify-center pb-5'>
          <div className='flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 justify-center items-center'>
            <img src={one} alt="Offering 1" style={{ height: '150px', width: '150px' }} />
            <h1 className='font-bold text-lg sm:text-xl font-poppins text-white'>Transparency</h1>
            <p className='font-thin font-poppins text-sm text-white text-center'>
              Clear communication keeps you informed about your chit fund with detailed statements and easy access to information.
            </p>
          </div>
          <div className='flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 justify-center items-center'>
            <img src={two} alt="Offering 2" style={{ height: '150px', width: '150px' }} />
            <h1 className='font-bold text-lg sm:text-xl font-poppins text-white'>Transparency</h1>
            <p className='font-thin font-poppins text-sm text-white text-center'>
              Clear communication keeps you informed about your chit fund with detailed statements and easy access to information.
            </p>
          </div>
          <div className='flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 justify-center items-center'>
            <img src={three} alt="Offering 3" style={{ height: '150px', width: '150px' }} />
            <h1 className='font-bold text-lg sm:text-xl font-poppins text-white'>Transparency</h1>
            <p className='font-thin font-poppins text-sm text-white text-center'>
              Clear communication keeps you informed about your chit fund with detailed statements and easy access to information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
