import React, { useState } from 'react';
import NavBar from './navbar';
import Footer from './footer';
import Banner from './banner';
import ChitCard from './chitcard';
import banner from '../images/chitgrpbanner.png';
import { IoArrowBackOutline } from "react-icons/io5";
import Dropdown from 'react-bootstrap/Dropdown';
import { FaChevronDown } from 'react-icons/fa';
import { GoChevronDown } from "react-icons/go";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Ongoingchitgroup() {
  const [expand, setExpand] = useState(null);
  const navigate = useNavigate();

  const handleClick = (index) => {
    setExpand(expand === index ? null : index);
  };
  const chitData = [
    { chitNo: "RML 01 - T", periodMonths: "40", tickets: "27", installmentAmount: "1,00,000", chitAmount: "40,00,000", proposedDate: "31-07-2024", dueDate: "05-08-2024", location: "Hyderabad" },
    { chitNo: "RML 02 - T", periodMonths: "36", tickets: "25", installmentAmount: "90,000", chitAmount: "35,00,000", proposedDate: "30-07-2024", dueDate: "04-08-2024", location: "Chennai" },
    { chitNo: "RML 03 - T", periodMonths: "48", tickets: "30", installmentAmount: "1,10,000", chitAmount: "45,00,000", proposedDate: "01-08-2024", dueDate: "06-08-2024", location: "Mumbai" },
    { chitNo: "RML 04 - T", periodMonths: "24", tickets: "20", installmentAmount: "80,000", chitAmount: "16,00,000", proposedDate: "05-08-2024", dueDate: "10-08-2024", location: "Bengaluru" },
    { chitNo: "RML 05 - T", periodMonths: "30", tickets: "22", installmentAmount: "85,000", chitAmount: "25,00,000", proposedDate: "10-08-2024", dueDate: "15-08-2024", location: "Pune" },
    { chitNo: "RML 06 - T", periodMonths: "42", tickets: "28", installmentAmount: "95,000", chitAmount: "40,00,000", proposedDate: "15-08-2024", dueDate: "20-08-2024", location: "Kolkata" },
    { chitNo: "RML 07 - T", periodMonths: "50", tickets: "35", installmentAmount: "1,20,000", chitAmount: "60,00,000", proposedDate: "20-08-2024", dueDate: "25-08-2024", location: "Delhi" },
    { chitNo: "RML 08 - T", periodMonths: "38", tickets: "26", installmentAmount: "1,00,000", chitAmount: "38,00,000", proposedDate: "25-08-2024", dueDate: "30-08-2024", location: "Ahmedabad" },
  ];

  return (
    <>
      <NavBar />
      <Banner title="Chit Groups" subtitle="Ongoing Chit Groups" bannerimg={banner} />
      <div className='md:ml-20 ml-4 mt-10  md:mr-20 mr-4 flex flex-col py-4'>
        <div className='relative  flex justify-center height-fit'>
          <button onClick={() => navigate(-1)} className='absolute no-underline text-black flex gap-2 items-center  justify-center font-poppins font-semibold left-0 '>
            <IoArrowBackOutline />
            Back
          </button>
          <span className='font-poppins  mt-8 md:mt-0 text-2xl md:text-3xl text-black font-semibold'>
            Enroll Ongoing Chit Group</span>

        </div>



        <div className="flex flex-col md:flex-row justify-between mt-8 items-center gap-3 w-full ">
 <Dropdown className='font-poppins  text-[#535353] w-[158px] md:w-1/6'>
            <Dropdown.Toggle
              style={{
                borderRadius: '80px',
                color: '#535353',
                borderColor: '#535353',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '24px',
              }}
              className=" bg-white  rounded-full font-poppins w-full md:w-[100%]  ">Chit Value

            </Dropdown.Toggle>

            <Dropdown.Menu style={{
              borderRadius: 'none',
              color: '#535353',
              borderColor: '#535353',
              font: 'poppins',
              fontSize: '16px',
              fontWeight: '500',
              lineHeight: '24px',
              width:'100%'
            }}
            className=' md:w-[90%]' >
              <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className='font-poppins  text-[#535353] w-[158px] md:w-1/6'>
            <Dropdown.Toggle
              style={{
                borderRadius: '80px',
                color: '#535353',
                borderColor: '#535353',
                font: 'poppins',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '24px',
                

              }}
              className=" bg-white  rounded-full font-poppins w-full md:w-[100%]  "
            >
              Installment

            </Dropdown.Toggle>

            <Dropdown.Menu style={{
              borderRadius: 'none',
              color: '#535353',
              borderColor: '#535353',
              font: 'poppins',
              fontSize: '16px',
              fontWeight: '500',
              lineHeight: '24px',
                width:'100%'
            }} >
              <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className='font-poppins  text-[#535353] w-[158px] md:w-1/6'>
            <Dropdown.Toggle
              style={{
                borderRadius: '80px',
                color: '#535353',
                borderColor: '#535353',
                font: 'poppins',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '24px',
              }}
              className=" bg-white  rounded-full font-poppins  w-full md:w-[100%]  "
            >
              Period

            </Dropdown.Toggle>
            <Dropdown.Menu style={{
              borderRadius: 'none',
              color: '#535353',
              borderColor: '#535353',
              font: 'poppins',
              fontSize: '16px',
              fontWeight: '500',
              lineHeight: '24px',
                width:'100%'

            }} >
              <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className='font-poppins  text-[#535353] w-[158px]  md:w-1/6'>
            <Dropdown.Toggle
              style={{
                borderRadius: '80px',
                color: '#535353',
                borderColor: '#535353',
                font: 'poppins',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '24px',
              }}
              className=" bg-white  rounded-full font-poppins w-full  md:w-[100%]  "
            >
              Auction Center

            </Dropdown.Toggle>

            <Dropdown.Menu
              style={{
                borderRadius: 'none',
                color: '#535353',
                borderColor: '#535353',
                font: 'poppins',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '24px',
                  width:'100%'
              }}
            >
              <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button className="text-white font-poppins bg-[#00BE54] w-[158px] md:w-1/6 rounded-full px-6 py-2">Search</button>
        </div>


        {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}


        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {chitData.map((chit, index) => (
              <ChitCard
                key={index}
                index={index}
                chitNo={chit.chitNo}
                periodMonths={chit.periodMonths}
                tickets={chit.tickets}
                installmentAmount={chit.installmentAmount}
                chitAmount={chit.chitAmount}
                proposedDate={chit.proposedDate}
                dueDate={chit.dueDate}
                location={chit.location}
                expand={expand}
                handleClick={handleClick}
              />
            ))}
          </div>
        </div>





      </div>
      <Footer />

    </>
  )
}

export default Ongoingchitgroup