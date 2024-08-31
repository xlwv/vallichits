
import React, { useState } from 'react';
import './slider.css';
import NavBar from './navbar';
import Footer from './footer';
import Banner from './banner';
import banner from '../images/chitbanner.png';
import plant from '../images/plant.png';
import arrow from '../images/arrow.png';

import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import icon5 from '../images/icon5.png';
import icon6 from '../images/icon6.png';
import line from '../images/line.png';

function Chit() {
    const [activeBtn, setActiveBtn] = useState('chitProcess');
    const [activecalc, setActivecalc] = useState('income');
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [expandmore, setexpandmore] = useState(false);







    const handleReadMore = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const [salary, setSalary] = useState(50000);
    const [surplus, setSurplus] = useState(0);
    const [exp, setexp] = useState(5000);
    const [period, setperiod] = useState(60);


    const [InstallmentAmount, setInstallmentAmount] = useState(0);
    const [tenure, setTenure] = useState(60);



    const [amount, setamount] = useState(0);
    const [month, setmonth] = useState(60);




    const formatNumber = (num) => {
        return num.toLocaleString('en-IN', { maximumFractionDigits: 0 });
    };


    const cardsData = [
        {
            icon: icon1,
            title: 'Financial Inclusion',
            description: 'Individuals employed in the informal sector do not meet the eligibility criteria of banks and other ...',
            fullText: 'Individuals employed in the informal sector do not meet the eligibility criteria of banks and other financial institutions. They are vulnerable to unscrupulous moneylenders who may exploit and harass them by charging exorbitant interest rates. Such individuals can join a Chit, to avail easy and hassle-free financing whenever needed.',
        },
        {
            icon: icon2,
            title: 'Twin Benefit Advantage',
            description: 'Start as savings and opt to bid for the Prize Money whenever required. Chits offer the dual   ...',
            fullText: 'Start as savings and opt to bid for the Prize Money whenever required. Chits offer the dual advantage of systematic savings and providing monthly dividends. The lump-sum Prize Money can be withdrawn whenever needed or kept as a reserve for future requirements.',
        },
        {
            icon: icon3,
            title: 'Business Finance',
            description: 'Chits are an excellent source of finance for business owners who can use the Prize Money  ...',
            fullText: 'Chits are an excellent source of finance for business owners who can use the Prize Money to either start a business, finance business operations, or purchase capital assets for the company. It can also play a critical role in relieving a sudden cash crunch in the business.',
        },
        {
            icon: icon4,
            title: 'Absolute Freedom',
            description: 'You can use the winnings from the chit group to meet personal needs and fulfil your dreams. As a ...',
            fullText: 'You can use the winnings from the chit group to meet personal needs and fulfil your dreams. As a subscriber, you are free to spend the Prize Money as you want to. Unlike other financial institutions, you can use your Chits winning for any purpose, including weddings, religious functions, medical expenses, child education, and so on.',
        },
        {
            icon: icon5,
            title: 'Regular Returns',
            description: 'The distributable surplus is credited to your account as a dividend each month. Although ...',
            fullText: 'The distributable surplus is credited to your account as a dividend each month. Although not paid out in cash, these dividends reduce the amount of money you need to chip in the following month. It indirectly increases your gains from the Chit vis-a-vis the actual amount paid.',
        },
        {
            icon: icon6,
            title: 'Emergency Reserve',
            description: 'You can always rely on getting money from Chit as unplanned expenses may crop up from time ...',
            fullText: 'You can always rely on getting money from Chit as unplanned expenses may crop up from time to time. It’s quite a reliable source of availing finance on short notice without the hassles of any additional paperwork and complex procedures.',
        }
    ];

    return (
        <>
            <NavBar />
            <Banner title="Chit Process" subtitle="Home >> Chits" bannerimg={banner} />
            <div className='md:ml-20 ml-4 py-4'>
                <div className='flex flex-col md:mr-20 mr-4'>
                    <div className='flex justify-center items-center'>
                        <button
                            onClick={() => setActiveBtn('chitProcess')}
                            className={`py-1 px-5 md:text-[20px] text-[16px] font-medium font-poppins ${activeBtn === 'chitProcess' ? 'text-[#00BE54] border-b-[3px] border-b-[#008080]' : 'text-[#C8C8C8] border-b-[3px] border-b-[#C8C8C8]'}`}
                        >
                            Chit Process
                        </button>
                        <button
                            onClick={() => setActiveBtn('benefits')}
                            className={`py-1 px-5 md:text-[20px] text-[16px] font-medium font-poppins ${activeBtn === 'benefits' ? 'text-[#00BE54] border-b-[3px] border-b-[#008080]' : 'text-[#C8C8C8] border-b-[3px] border-b-[#C8C8C8]'}`}
                        >
                            Benefits of Chits
                        </button>
                    </div>

                    {/* Conditionally render content based on activeBtn */}
                    {activeBtn === 'chitProcess' && (
                        <div className='first py-4 flex flex-col'>
                            <div className='flex flex-col md:flex-row gap-5 justify-between'>
                                <div className='flex flex-col'>
                                    <span className='font-poppins text-2xl md:text-3xl text-black font-semibold'>
                                        How Does A Chit Fund Work?
                                    </span>
                                    <p className='font-light text-lg mt-4 font-poppins text-[#535353] text-left'>
                                        Simply put, the chit fund begins on a specified date and continues for the number of months equal to the number of subscribers. Members contribute their monthly instalments to the pot, and a reverse auction is conducted each month allowing members to bid for the Prize Money.
                                    </p>
                                    <p className='font-light text-lg font-poppins text-[#535353] text-left'>
                                        The subscriber willing to take the lowest sum with the lowest bid is declared the winner and receives the Prize Money for that month. The balance amount is distributed as a dividend among all members after deducting the Foreman’s Commission (5%). The process is repeated each month, thus allowing each member to win the Prize Money.
                                    </p>
                                    <p className='font-light text-lg font-poppins text-[#535353] text-left'>
                                        A Chit fund offers you the unique advantage of allowing you to borrow from your future savings.
                                    </p>
                                </div>
                                <img src={plant} className='md:h-[350px] md:w-[500px] object-cover md:block hidden' alt="Chit Fund Illustration"></img>
                            </div>
                            <span className='font-poppins md:mt-6 mt-6 md:text-xl text-black font-medium'>Example:</span>
                            <p className='mt-2 font-light text-lg font-poppins text-[#535353] text-left'>
                                Assume a chit fund scheme with 50 members that will run for 50 months, with each paying a monthly instalment of ₹10,000/- to create a ₹5,00,000/- pot. When the auction is announced, the member who bids the highest discount wins the Bid. (40% is the maximum discount anyone can bid as per Law).
                            </p>
                            <p className='font-medium text-lg font-poppins text-black items-center flex gap-2 text-left'>
                                <img src={arrow} alt="Arrow" style={{ height: '16px', width: '16px' }} />Number of members in the chit fund scheme <span className='font-light text-lg font-poppins text-[#535353] text-left'>- 50</span>
                            </p>
                            <p className='font-medium text-lg font-poppins text-black  items-center flex gap-2 text-left'>
                                <img src={arrow} alt="Arrow" style={{ height: '16px', width: '16px' }} />Duration <span className='font-light text-lg font-poppins text-[#535353] text-left'>- 50 months</span>
                            </p>
                            {expandmore && (
                                <>  


                                    <p className='font-medium text-lg font-poppins text-black  items-center flex gap-2 text-left'>
                                        <img src={arrow} alt="Arrow" style={{ height: '16px', width: '16px' }} /> Monthly instalment payable by each member  <span className='font-light text-lg font-poppins text-[#535353] text-left'>– Rs. 10,000/-</span>
                                    </p>
                                    <p className='font-medium text-lg font-poppins text-black  items-center flex gap-2 text-left'>
                                        <img src={arrow} alt="Arrow" style={{ height: '16px', width: '16px' }} />Total pot value   <span className='font-light text-lg font-poppins text-[#535353] text-left'>– Rs. 5,00,000/- (50 members x 10,000)</span>
                                    </p>
                                    <p className='font-light text-lg font-poppins text-[#535353] text-left'>In this example, let us assume the winning Bid offered a 35% discount.</p>
                                    <p className='font-medium text-lg font-poppins text-black  items-center flex gap-2 text-left'>
                                        <img src={arrow} alt="Arrow" style={{ height: '16px', width: '16px' }} />Discount offered by the winning Bid <span className='font-light text-lg font-poppins text-[#535353] text-left'> – 35%</span>
                                    </p>
                                    <p className='font-medium text-lg font-poppins text-black  items-center flex gap-2 text-left'>
                                        <img src={arrow} alt="Arrow" style={{ height: '16px', width: '16px' }} />Amount of discount  <span className='font-light text-lg font-poppins text-[#535353] text-left'> – Rs. 1,75,000/- (35% of 5,00,000)</span>
                                    </p>
                                    <p className='font-medium text-lg font-poppins text-black  items-center flex gap-2 text-left'>
                                        <img src={arrow} alt="Arrow" style={{ height: '16px', width: '16px' }} />Amount received by the winner   <span className='font-light text-lg font-poppins text-[#535353] text-left'>– Rs. 3,25,000/- (5,00,000 less 1,75,000)</span>
                                    </p>
                                    <p className='font-light text-lg font-poppins text-[#535353] text-left'>The balance amount is distributed equally among the members after deducting the Foreman’s commission.</p>
                                    <p className='font-medium text-lg font-poppins text-black  items-center flex gap-2 text-left'>
                                        <img src={arrow} alt="Arrow" style={{ height: '16px', width: '16px' }} />Foreman’s commission <span className='font-light text-lg font-poppins text-[#535353] text-left'> – 5-7% = Rs. 25,000/-</span>
                                    </p>
                                    <p className='font-medium text-lg font-poppins text-black  items-center flex gap-2 text-left'>
                                        <img src={arrow} alt="Arrow" style={{ height: '16px', width: '16px' }} />Total Dividend <span className='font-light text-lg font-poppins text-[#535353] text-left'>  – Rs. 1,75,000 less Rs. 25,000 = Rs. 1,50,000/-</span>
                                    </p>
                                    <p className='font-medium text-lg font-poppins text-black  items-center flex gap-2 text-left'>
                                        <img src={arrow} alt="Arrow" style={{ height: '16px', width: '16px' }} />Dividend credited to each member’s account   <span className='font-light text-lg font-poppins text-[#535353] text-left'> – 1,50,000/50 = Rs. 3,000/-</span>
                                    </p>
                                  
                                    
                                    <p className='font-light text-lg font-poppins text-[#535353] text-left'>So in the following month, the member will have to pay only ₹7,000(₹10,000-₹3,000) instead of ₹10,000.</p>
                               

                                </>
                            )}
                            <button
                                className="font-poppins font-semibold bg-[#00be54] rounded-full text-white h-[40px] w-[200px]"
                                style={{ transition: 'none' }}
                                onClick={() => setexpandmore(!expandmore)}
                            >

                                {expandmore ? 'Expand Less' : 'Expand More'}
                            </button>


                        </div>
                    )}

                    {activeBtn === 'benefits' && (
                        <div className='second py-4 flex flex-col items-center justify-center'>
                            <span className='font-poppins text-2xl md:text-3xl text-black font-semibold'>
                                Your All-in-One Savings & Borrowing Solution
                            </span>
                            <p className='font-light mt-4  text-lg font-poppins text-[#535353] text-center'>
                                Chits offer a unique way to save and borrow, designed to fit everyone's needs. Invest with Valli Chits and leverage the power of this convenient financial tool. Grow your savings, access funds when needed, and achieve your short and long-term goals. Choose Valli Chits to unlock the benefits of chits
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                                {cardsData.map((card, index) => (
                                    <div
                                        key={index}
                                        className={`bg-white  transition-transform duration-200  hover:scale-110  shadow-md border rounded-lg p-6 flex flex-col justify-between transition-all duration-300 ${expandedIndex === index ? 'h-auto' : 'h-56'}`}>
                                        <div className="flex flex-col mb-2">
                                            <img src={card.icon} alt={card.title} className="h-8 w-8 mb-2" />
                                            <span className="text-xl font-semibold text-gray-900">{card.title}</span>
                                        </div>
                                        <p className={`text-gray-600  text-lg transition-all duration-300 ${expandedIndex === index ? 'h-auto' : 'h-16'}`}>
                                            {expandedIndex === index ? card.fullText : card.description}
                                        </p>
                                        <button
                                            onClick={() => handleReadMore(index)}
                                            className="w-fit text-teal-500 font-semibold">
                                            {expandedIndex === index ? 'Show less' : 'Read more'}
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <p className='font-light mt-4 font-poppins  text-lg text-[#535353] text-center'>
                                A genuinely unique financial system, Chits is a favourite choice among many people. Be it a homemaker or a business person, a chit group can provide you with funds on short notice.
                            </p>
                        </div>
                    )}

                </div>

            </div>


            {/* =========================================================================================================================================== */}



            <div className=' md:mt-5 flex bg-[#F5F5F5] flex-col items-center md:py-10 md:px-20 px-4 '>
                <h1 className='font-poppins mt-4 text-2xl md:text-3xl text-black font-semibold'>Chit <span className='font-poppins text-2xl md:text-3xl !text-[#00be54] font-semibold'>Calculator</span></h1>
                <div className='flex flex-col items-center justify-center lg:w-[70%] w-full'>
                    <p className='font-light mt-4 font-poppins text-lg text-[#535353] text-center'>
                        Determine which plan best suits your needs. Input your monthly income and let our accurate Chit Calculator do the rest.
                    </p>
                    <p className='font-light  font-poppins text-lg text-[#535353] text-center'>
                        Select the most appropriate Chit Group by inputting your monthly income, the monthly installment you wish to pay, or the desired Prize Money.
                    </p>
                </div>


                <div className="flex flex-col items-center p-4 md:p-8">
                    {/* Calculator Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <button
                            onClick={() => setActivecalc('income')}
                            className={` font-semibold py-2 font-poppins px-6 rounded-full focus:outline-none ${activecalc === 'income' ? 'bg-[#00BE54] text-white' : 'bg-gray-200   text-gray-600'} `}  >
                            Income Based Calculator
                        </button>
                        <button
                            onClick={() => setActivecalc('installment')}
                            className={` font-semibold py-2 font-poppins px-6 rounded-full focus:outline-none ${activecalc === 'installment' ? 'bg-[#00BE54] text-white' : 'bg-gray-200   text-gray-600'} `}  >
                            Installment Based Calculator
                        </button>
                        <button
                            onClick={() => setActivecalc('amount')}
                            className={` font-semibold py-2 font-poppins px-6 rounded-full focus:outline-none ${activecalc === 'amount' ? 'bg-[#00BE54] text-white' : 'bg-gray-200   text-gray-600'} `}  >
                            Amount Based Calculator
                        </button>
                    </div>


                    {/* Slider1 */}
                    {activecalc === 'income' && (
                        <div>


                            <div className="grid grid-cols-1 md:grid-cols-2  gap-[2rem] md:gap-[4rem] w-full max-w-5xl">
                                <div className="flex flex-col">
                                    <label className="text-gray-700 flex justify-between items-center font-poppins font-medium mb-2">Month Salary (₹)
                                        <span className="text-right mt-2 text-green-600 font-semibold">{formatNumber(salary)}</span></label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="1000000"
                                        value={salary}
                                        onChange={(e) => {
                                            setSalary(parseInt(e.target.value));
                                            setSurplus(parseInt(e.target.value) - exp);
                                        }}

                                        className="w-full"
                                    />
                                    <img className='mt-3' src={line}></img>
                                    <div className='flex justify-between items-center mt-2'>
                                        <span className=' text-[#535353] font-poppins font-regular'>0</span>
                                        <span className=' text-[#535353] font-poppins font-regular'>10 Lac</span>

                                    </div>


                                </div>

                                <div className="flex flex-col">
                                    <label className="text-gray-700 flex font-poppins justify-between items-center font-medium mb-2">EMI / Commitments & Exp (₹)
                                        <span className="text-right mt-2 text-green-600 font-semibold">{formatNumber(exp)}</span></label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100000"
                                        value={exp}
                                        onChange={(e) => {
                                            setexp(parseInt(e.target.value));
                                            setSurplus(salary - parseInt(e.target.value));
                                        }}
                                        className="w-full"
                                    />

                                    <img className='mt-3' src={line}></img>
                                    <div className='flex justify-between items-center mt-2'>
                                        <span className=' text-[#535353] font-poppins font-regular'>0</span>
                                        <span className=' text-[#535353] font-poppins font-regular'>1 Lac</span>

                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-gray-700 flex justify-between font-poppins items-center font-medium mb-2">Surplus Income (₹)
                                        <span className="text-right mt-2 text-green-600 font-semibold">{formatNumber(surplus)}</span></label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="995000"
                                        value={surplus}
                                        readOnly
                                        // onChange={(e) => setSurplus(parseInt(e.target.value))}
                                        className="w-full"
                                    />
                                    <img className='mt-3' src={line}></img>
                                    <div className='flex justify-between items-center mt-2'>
                                        <span className=' text-[#535353] font-poppins font-regular'>0</span>
                                        <span className=' text-[#535353] font-poppins font-regular'>9.95 Lac</span>

                                    </div>

                                </div>

                                <div className="flex flex-col">
                                    <label className="text-gray-700 font-poppins flex justify-between items-center font-medium mb-2">Tenure (Months)
                                        <span className="text-right mt-2 text-green-600 font-semibold">{period}</span></label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={period}
                                        onChange={(e) => setperiod(parseInt(e.target.value))}
                                        className="w-full"
                                    />
                                    <img className='mt-3' src={line}></img>
                                    <div className='flex justify-between items-center mt-2'>
                                        <span className=' text-[#535353] font-poppins font-regular'>0</span>
                                        <span className=' text-[#535353] font-poppins font-regular'>100</span>

                                    </div>

                                </div>
                            </div>

                            {/* Calculation Results */}
                            <div className="flex flex-col md:flex-row justify-center w-full max-w-4xl gap-4 md:gap-10 mt-6 md:mt-10">
                                <div className="flex justify-between items-center w-full max-w-4xl bg-white shadow-md rounded-full gap-2 md:gap-6 pl-2 pt-3 md:pt-4 pb-3 md:pb-4 pr-2 h-12 md:h-14">
                                    <span className="text-gray-700 font-poppins text-[12px] md:text-[14px] font-medium">
                                        APPLICABLE CHIT EMI VALUE
                                    </span>
                                    <span className="text-white font-poppins bg-[#00BE54] px-3 py-2 rounded-full font-regular text-[12px] md:text-[14px]">
                                        ₹ {formatNumber((salary - exp) * period / 2 / period)}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center w-full max-w-4xl bg-white shadow-md rounded-full gap-2 md:gap-6 pl-2 pt-3 md:pt-4 pb-3 md:pb-4 pr-2 h-12 md:h-14">
                                    <span className="text-gray-700 font-poppins text-[12px] md:text-[14px] font-medium">
                                        MAX CHIT VALUE
                                    </span>
                                    <span className="text-white font-poppins bg-[#00BE54] px-3 py-2 rounded-full font-regular text-[12px] md:text-[14px]">
                                        ₹ {formatNumber((salary - exp) * period / 2)}
                                    </span>
                                </div>
                            </div>


                        </div>
                    )}












                    {/* Sliders2 */}
                    {activecalc === 'installment' && (
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2  gap-[2rem] md:gap-[4rem]w-full mt-10 max-w-5xl">
                                {/* Installment Amount Input */}
                                <div className="flex flex-col">
                                    <label className="text-gray-700 flex justify-between items-center font-poppins font-medium mb-2">
                                        Installment Amount (₹)
                                        <span className="text-right mt-2 text-green-600 font-semibold">{formatNumber(InstallmentAmount)}</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100000"
                                        value={InstallmentAmount}
                                        onChange={(e) => setInstallmentAmount(parseInt(e.target.value))}
                                        className="w-full"
                                    />
                                    <img className='mt-3' src={line}></img>
                                    <div className='flex justify-between items-center mt-2'>
                                        <span className='text-[#535353] font-poppins font-regular'>0</span>
                                        <span className='text-[#535353] font-poppins font-regular'>1 Lakh</span>
                                    </div>
                                </div>

                                {/* Tenure Input */}
                                <div className="flex flex-col">
                                    <label className="text-gray-700 flex font-poppins justify-between items-center font-medium mb-2">
                                        Tenure (Months)
                                        <span className="text-right mt-2 text-green-600 font-semibold">{formatNumber(tenure)}</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={tenure}
                                        onChange={(e) => setTenure(parseInt(e.target.value))}
                                        className="w-full"
                                    />
                                    <img className='mt-3' src={line}></img>
                                    <div className='flex justify-between items-center mt-2'>
                                        <span className='text-[#535353] font-poppins font-regular'>0</span>
                                        <span className='text-[#535353] font-poppins font-regular'>100</span>
                                    </div>
                                </div>
                            </div>

                            {/* Calculation Results */}
                            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-10 mt-6 md:mt-10">
                                <div className="flex justify-between items-center bg-white shadow-md rounded-full gap-2 md:gap-6 pl-2 pt-3 md:pt-4 pb-3 md:pb-4 pr-2 h-12 md:h-14">
                                    <span className="text-gray-700 font-poppins text-[12px] md:text-[14px] font-medium">
                                        TOTAL AMOUNT PAYABLE
                                    </span>
                                    <span className="text-white font-poppins bg-[#00BE54] px-3 py-2 rounded-full font-regular text-[12px] md:text-[14px]">
                                        ₹ {formatNumber(InstallmentAmount * tenure)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* slider3 */}
                    {activecalc === 'amount' && (


                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2  gap-[2rem] md:gap-[4rem] w-full mt-10 max-w-5xl">
                                <div className="flex flex-col">
                                    <label className="text-gray-700 flex justify-between items-center font-poppins font-medium mb-2">Amount Planned (₹)
                                        <span className="text-right mt-2 text-green-600 font-semibold">{formatNumber(amount)}</span></label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="10000000"
                                        value={amount}
                                        onChange={(e) => setamount(parseInt(e.target.value))}
                                        className="w-full"
                                    />
                                    <img className='mt-3' src={line}></img>
                                    <div className='flex justify-between items-center mt-2'>
                                        <span className=' text-[#535353] font-poppins font-regular'>0</span>
                                        <span className=' text-[#535353] font-poppins font-regular'>1 crore</span>

                                    </div>


                                </div>

                                <div className="flex flex-col">
                                    <label className="text-gray-700 flex font-poppins justify-between items-center font-medium mb-2">Tenure (Months)
                                        <span className="text-right mt-2 text-green-600 font-semibold">{formatNumber(month)}</span></label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={month}
                                        onChange={(e) => setmonth(parseInt(e.target.value))}
                                        className="w-full"
                                    />

                                    <img className='mt-3' src={line}></img>
                                    <div className='flex justify-between items-center mt-2'>
                                        <span className=' text-[#535353] font-poppins font-regular'>0</span>
                                        <span className=' text-[#535353] font-poppins font-regular'>100</span>

                                    </div>
                                </div>




                            </div>

                            {/* Calculation Results */}
                            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-10 mt-6 md:mt-10">

                                <div className="flex justify-between items-center  bg-white shadow-md rounded-full gap-2 md:gap-6 pl-2 pt-3 md:pt-4 pb-3 md:pb-4 pr-2 h-12 md:h-14">
                                    <span className="text-gray-700 font-poppins text-[12px] md:text-[14px] font-medium">
                                        MAX CHIT VALUE
                                    </span>
                                    <span className="text-white font-poppins bg-[#00BE54] px-3 py-2 rounded-full font-regular text-[12px] md:text-[14px]">
                                        ₹ {formatNumber(amount / month)}
                                    </span>
                                </div>
                            </div>
                        </div>


                    )}



                </div>

            </div>
            <Footer />

        </>
    );
}

export default Chit;










