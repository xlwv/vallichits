import React from 'react'
import journey from '../images/journey.png';
import journeysm from '../images/journeysm.png';

function Journey() {
    return (



        <div className='flex items-center md:pr-20 pr-4 md:pl-20 pl-4  py-8 flex-col'>

            <h2 className="font-poppins text-3xl md:text-4xl  font-semibold">
                Valli Chits <span className="text-[#00be54]">Your Savings Journey Made Easy</span>
            </h2>
            <div className='mb-4 flex items-center pt-4 justify-center mt-4 relative w-full p-3 bg-[#00BE54] rounded-full font-poppins text-white text-lg '>
                <span className='p-1'>Chit Value(Chit Amount) = Rs.5 Lac (10K x 50), Members:50, Duration:50 Months, Auction finalised at 30%</span>
                <span
                    style={{ borderColor: '#00BE54', borderStyle: 'solid', borderWidth: '1px' }}
                    className="absolute -top-5 rounded-full p-2 bg-white text-black font-poppins font-medium text-lg">
                    LET'S ASSUME

                </span>
            </div>

            <picture>
                <source media="(max-width: 600px)" srcSet={journeysm} />
                <img src={journey} alt="Journey Image" />
            </picture>
            <span className='font-light text-lg font-poppins  text-[#535353]  text-justify '><span className='text-[#00BE54] font-semibold text-lg font-poppins        '>Note: </span> The pooled-in chit amount for the 1st month is retained by one of the members (Foreman). The above cycle/process of pool, auction, and the bid will be repeated each month from the second month onwards.</span>
            <span className='font-light text-lg font-poppins  text-[#535353]  text-justify '>– One of the members</span>

        </div>







    )
}

export default Journey