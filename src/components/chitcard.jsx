import React, { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";

const ChitCard = ({ chitNo, periodMonths, tickets, installmentAmount, chitAmount, proposedDate, dueDate, location, index, expand, handleClick }) => {
    const isExpanded = expand === index;

    return (
        <div className="bg-white shadow-md border border-[#F1F1F1] rounded-xl w-full transition-all duration-200" style={{ height: isExpanded ? 'auto' : 'max-content' }}>
            <div className="pt-3 pb-3 flex flex-col justify-between h-full">
                <div className="flex flex-col sm:flex-row justify-between pl-4 pr-4 items-center">
                    <span className="text-[#535353] font-medium">Temp Chit No: <span className="text-[#00BE54]">{chitNo}</span></span>
                    <span className="text-[#535353] font-medium">Period Months: <span className="text-[#00BE54]">{periodMonths}</span></span>
                </div>

                <div className='flex justify-evenly items-center mt-4 pt-3 pb-3 ml-2 mr-2 border-t-[#DEDEDE] border-t-[1.5px] border-b-[#DEDEDE] border-b-[1.5px]'>
                    <div className="flex flex-col justify-between items-left ">
                        <span className="text-[#00BE54] font-poppins font-bold text-lg">{tickets}</span>
                        <span className="text-[#535353] font-poppins text-lg">Available Tickets</span>
                    </div>
                    <div className=' border-r-[#DEDEDE] h-[50px] border-r-[1.5px]'></div>

                    <div className="flex flex-col pl-2 pr-2 justify-between items-left ">
                        <span className="text-[#00BE54] font-poppins font-bold text-lg">₹ {installmentAmount}</span>
                        <span className="text-[#535353] font-poppins text-lg">Installment Amount</span>
                    </div>

                    <div className='border-r-[#DEDEDE] h-[50px]  border-r-[1.5px]'></div>

                    <div className="flex flex-col pl-2 justify-between items-left ">
                        <span className="text-[#00BE54] font-poppins font-bold text-lg">₹ {chitAmount}</span>
                        <span className="text-[#535353] font-poppins text-lg">Chit Amount</span>
                    </div>
                </div>

                {isExpanded && (
                    <div className='p-3 flex flex-col items-center justify-center mt-3 md:ml-12 md:mr-12 ml-2 mr-2 rounded-xl bg-[#008080]'>
                        <div className='flex w-full justify-center items-center'>
                            <div className='flex gap-4'>
                                {/* <div className='border-r-[#DEDEDE] h-full border-r-[1.5px]'></div> */}
                                <div className='flex flex-col gap-1 w-1/2 text-right space-around'>
                                    <span className='font-poppins text-lg text-white'>Proposed</span>
                                    <span className='font-poppins text-lg text-white'>First Auction Date</span>
                                    <span className='font-poppins text-lg font-semibold text-white'>{proposedDate}</span>
                                </div>

                                <div className='border-r-white border-r-[1px]'></div>

                                <div className='flex flex-col gap-1 w-1/2 text-left space-around'>
                                    <span className='font-poppins text-lg text-white'>Proposed Second</span>
                                    <div className='font-poppins text-lg text-white'>Installment Due Date</div>
                                    <span className='font-poppins text-lg font-semibold text-white'>{dueDate}</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex mt-3 items-center justify-center'>
                            <div className='flex items-center justify-center gap-1'>
                                <span className='font-poppins text-lg text-white'>Auction Center: </span>
                                <CiLocationOn className='text-white' />
                                <span className='font-poppins font-semibold text-lg text-white'>{location}</span>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex justify-center mt-3">
                    <button
                        onClick={() => handleClick(index)}
                        className={`${isExpanded
                                ? 'bg-[#00BE54] text-white border-none'
                                : 'bg-transparent border-black text-[#333333]'
                            } font-poppins font-mediun py-2 px-4 border rounded-full transition duration-200`}
                    >
                        {isExpanded ? 'Enroll Now' : 'View More'}
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ChitCard;

// const ChitGrid = () => {
//     const [expand, setExpand] = useState(null);

//     const handleClick = (index) => {
//         setExpand(expand === index ? null : index);
//     };

//     const chitData = [
//         { chitNo: "RML 01 - T", periodMonths: "40", tickets: "27", installmentAmount: "1,00,000", chitAmount: "40,00,000", proposedDate: "31-07-2024", dueDate: "05-08-2024", location: "Hyderabad" },
//         { chitNo: "RML 02 - T", periodMonths: "36", tickets: "25", installmentAmount: "90,000", chitAmount: "35,00,000", proposedDate: "30-07-2024", dueDate: "04-08-2024", location: "Chennai" },
//         { chitNo: "RML 03 - T", periodMonths: "48", tickets: "30", installmentAmount: "1,10,000", chitAmount: "45,00,000", proposedDate: "01-08-2024", dueDate: "06-08-2024", location: "Mumbai" },
//         { chitNo: "RML 04 - T", periodMonths: "24", tickets: "20", installmentAmount: "80,000", chitAmount: "16,00,000", proposedDate: "05-08-2024", dueDate: "10-08-2024", location: "Bengaluru" },
//         { chitNo: "RML 05 - T", periodMonths: "30", tickets: "22", installmentAmount: "85,000", chitAmount: "25,00,000", proposedDate: "10-08-2024", dueDate: "15-08-2024", location: "Pune" },
//         { chitNo: "RML 06 - T", periodMonths: "42", tickets: "28", installmentAmount: "95,000", chitAmount: "40,00,000", proposedDate: "15-08-2024", dueDate: "20-08-2024", location: "Kolkata" },
//         { chitNo: "RML 07 - T", periodMonths: "50", tickets: "35", installmentAmount: "1,20,000", chitAmount: "60,00,000", proposedDate: "20-08-2024", dueDate: "25-08-2024", location: "Delhi" },
//         { chitNo: "RML 08 - T", periodMonths: "38", tickets: "26", installmentAmount: "1,00,000", chitAmount: "38,00,000", proposedDate: "25-08-2024", dueDate: "30-08-2024", location: "Ahmedabad" },
//     ];
    

//     return (
//         <div className="container mx-auto py-8">
//             <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
//                 {chitData.map((chit, index) => (
//                     <ChitCard
//                         key={index}
//                         index={index}
//                         chitNo={chit.chitNo}
//                         periodMonths={chit.periodMonths}
//                         tickets={chit.tickets}
//                         installmentAmount={chit.installmentAmount}
//                         chitAmount={chit.chitAmount}
//                         proposedDate={chit.proposedDate}
//                         dueDate={chit.dueDate}
//                         location={chit.location}
//                         expand={expand}
//                         handleClick={handleClick}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ChitGrid;



