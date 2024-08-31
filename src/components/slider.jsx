import React from 'react';
import Slider from "react-slick";
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';
import './slide.css';
import { Link } from 'react-router-dom';




const Sliding = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        autoplay: true,
        slidesToScroll: 1,
        arrows: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className="w-full flex flex-col   justify-center items-center pt-8 pb-16 px-4">
            <div className="text-center mb-8">
                <h2 className="font-poppins text-3xl md:text-4xl font-semibold">
                    Personalised <span className="text-[#00be54]">Financial Solutions</span>
                </h2>
                <p className="font-poppins text-lg text-gray-600 mt-4">
                    Valli Chits Guides You to Financial Freedom: Invest with Confidence, Borrow with Ease, and Partner with Us for Success.
                </p>
            </div>
            <Slider className='w-[80%] pb-4 flex gap-2' {...settings}>
                <div className="flex flex-col justify-center items-center text-center">
                    <div className="flex justify-center items-center w-full">
                        <img src={img1} alt="Beginner" className="rounded-full w-[85%] h-[370px] object-cover" />
                    </div>
                    <h3 className="font-poppins text-lg font-medium mt-4">Beginner</h3>
                    <button
                        className="mt-2 bg-gray-200 text-white font-semibold text-lg rounded-full h-10 w-32"
                    >
                        <Link to="/beginner" className="w-full h-full flex items-center no-underline text-white justify-center">
                            View more
                        </Link>
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                    <div className="flex justify-center items-center w-full">
                        <img src={img2} alt="Experienced Professionals" className=" rounded-full w-[85%] h-[370px] object-cover" />
                    </div>
                    <h3 className="font-poppins text-lg font-medium mt-4">Experienced Professionals</h3>
                    <button
                        className="mt-2 bg-gray-200 text-white font-semibold text-lg rounded-full h-10 w-32"
                    >
                        <Link to="/pro" className="w-full h-full flex items-center no-underline text-white justify-center">
                            View more
                        </Link>
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                    <div className="flex justify-center items-center  w-full">
                        <img src={img3} alt="Senior Citizen" className="rounded-full w-[85%] h-[370px] object-cover" />
                    </div>
                    <h3 className="font-poppins text-lg font-medium mt-4">Senior Citizen</h3>
                    <button className="mt-2 bg-gray-200 text-white font-semibold text-lg  rounded-full h-10 w-32">
                        View more
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                    <div className="flex justify-center items-center w-full">
                        <img src={img4} alt="Senior Citizen" className="rounded-full w-[85%] h-[370px] object-cover" />
                    </div>
                    <h3 className="font-poppins text-lg font-medium mt-4">Homemakers</h3>
                    <button className="mt-2 bg-gray-200 text-white font-semibold text-lg  rounded-full h-10 w-32">
                        View more
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                    <div className="flex justify-center items-center w-full">
                        <img src={img5} alt="Senior Citizen" className="rounded-full w-[85%] h-[370px] object-cover" />
                    </div>
                    <h3 className="font-poppins text-lg font-medium mt-4">Business(MSME)</h3>
                    <button className="mt-2 bg-gray-200 text-white font-semibold text-lg  rounded-full h-10 w-32">
                        View more
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                    <div className="flex justify-center items-center w-full">
                        <img src={img6} alt="Senior Citizen" className="rounded-full w-[85%] h-[370px] object-cover" />
                    </div>
                    <h3 className="font-poppins text-lg font-medium mt-4">HNI Investor</h3>
                    <button className="mt-2 bg-gray-200 text-white font-semibold text-lg  rounded-full h-10 w-32">
                        View more
                    </button>
                </div>
            </Slider>
        </div>
    );
};

export default Sliding;


