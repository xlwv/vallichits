import React, { useEffect, useRef } from 'react';
import pone from '../images/p1.png';
import ptwo from '../images/p2.png';
import pthree from '../images/p3.png';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

function Team() {
    const start = useRef(null);
    const img1 = useRef(null);
    const img2 = useRef(null);
    const img3 = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: start.current,
                start: "top center",
                end: "center",
                scrub: true,
                marker:true,
            }
        });

        tl.fromTo([img1.current, img2.current, img3.current], 
            { 
                rotation: (index) => -15 + (index * 2), 
                opacity: 0 
            }, 
            { 
                rotation: 0, 
                y: 0, 
                x: 0, 
                opacity: 1, 
                stagger: .1
            }
        );

        gsap.fromTo(".team-title", 
            { opacity: 0, y: 30 }, 
            { opacity: 1, y: 0, scrollTrigger: { trigger: ".team-title", start: "top center" }}
        );

        gsap.fromTo(".team-description", 
            { opacity: 0, y: 20 }, 
            { opacity: 1, y: 0, scrollTrigger: { trigger: ".team-description", start: "top center" }}
        );
    }, []);

    return (
        <div ref={start} className='anime py-8 md:py-20 md:px-15 px-4 overflow-hidden flex flex-col gap-8'>
            <div className='flex flex-col items-center'>
                <h1 className='team-title font-poppins text-3xl text-[#333333] font-bold text-center '>Guided by Visionary Leaders</h1>
                <p className='team-description text-sm font-poppins text-[#535353] text-justify md:text-center mt-3'>
                    At Valli Chits, we're driven by a team of passionate founders who understand the importance of financial empowerment. Their dedication to ethical practices and innovative solutions shapes our commitment to your success.
                </p>
            </div>
            <div className='flex flex-wrap gap-4 sm:gap-10 md:gap-14 h-fit justify-center pb-16'>
                <div ref={img1} className='flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-[450px] justify-center relative items-center'>
                    <img src={pone} alt="Offering 1" style={{ height: '300px', width: '300px', position: 'absolute' }} />
                    <div className='flex flex-col pt-[400px]'>
                        <h1 className='font-bold text-lg sm:text-xl text-center font-poppins text-[#333333]'>Radha Krishna</h1>
                        <p className='font-thin font-poppins text-[#00BE54] text-center'>Director and chairman</p>
                    </div>
                </div>
                <div ref={img2} className='flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 justify-center h-[450px] relative items-center'>
                    <img src={ptwo} alt="Offering 2" style={{ height: '300px', width: '300px', position: 'absolute' }} />
                    <div className='flex flex-col pt-[400px]'>
                        <h1 className='font-bold text-lg sm:text-xl text-center font-poppins text-[#333333]'>Radha Krishna</h1>
                        <p className='font-thin font-poppins text-[#00BE54] text-center'>Director and chairman</p>
                    </div>
                </div>
                <div ref={img3} className='flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 justify-center h-[450px] relative items-center'>
                    <img src={pthree} alt="Offering 3" style={{ height: '300px', width: '300px', position: 'absolute' }} />
                    <div className='flex flex-col pt-[400px]'>
                        <h1 className='font-bold text-lg sm:text-xl text-center font-poppins text-[#333333]'>Radha Krishna</h1>
                        <p className='font-thin font-poppins text-[#00BE54] text-center'>Director and chairman</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;




