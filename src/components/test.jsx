import React from 'react';
import Slider from "react-slick";
import t2 from '../images/t2.png';
import t1 from '../images/t1.png';

const Test = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-8 mb-4 px-4">
      <h2 className="text-center text-4xl font-bold md:mb-8 mb-1">
        Clients <span className="text-green-500 font-poppins">Testimonial</span>
      </h2>
      <div className="relative">
        <Slider {...settings}>
          <div className="p-4 ">
            <div className="bg-white p-6 rounded-xl border shadow-md">
              <h3 className="text-xl font-semibold mb-2">Incredible Experience</h3>
              <p className="text-gray-600 text-md font-poppins mb-4">
                Before joining Valli Chits, I was hesitant about chit funds. But their transparent process and clear communication gave me peace of mind. Now, I'm saving confidently towards my dream vacation!
              </p>
              <div className="flex items-center mt-4">
                <img src={t1} alt="Priya Sharma" className="w-10 h-10 rounded-full mr-4" />
                <div className='flex flex-col'>
                  <span className="font-bold font-poppins">Priya Sharma</span>
                  <span className="text-md font-poppins text-gray-600">Marketing Manager</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-white p-6 rounded-xl border shadow-md">
              <h3 className="text-xl font-poppins font-semibold mb-2">Highly Recommend</h3>
              <p className="text-gray-600 text-md font-poppins mb-4">
                As a busy professional, managing finances can be challenging. Valli Chits' online platform makes saving and borrowing convenient. Their dedicated support team is always there to answer my questions.
              </p>
              <div className="flex items-center  mt-4">
                <img src={t2} alt="Dr. Amit Patel" className="w-10 h-10 rounded-full mr-4" />
                <div className='flex flex-col'>
                  <span className="font-bold font-poppins">Dr. Amit Patel</span>
                  <span className="text-md font-poppins text-gray-600">Dentist</span>
                </div>
              </div>
            </div>
          </div>
          {/* Add more testimonials as needed */}
        </Slider>
      </div>
    </div>
  );
};



export default Test;
