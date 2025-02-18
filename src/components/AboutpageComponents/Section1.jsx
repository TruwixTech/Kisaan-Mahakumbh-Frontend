import React from 'react'
import Header from '../Header'
import Hero from '../../assets/Hero.jpg'
import { FaHome } from "react-icons/fa";
import Img1 from '../../assets/about1.jpg'
import { FiArrowUpRight } from "react-icons/fi";

function Section1() {
    return (
        <div className='w-full h-auto flex flex-col'>
            <div className='relative z-40' style={{
                backgroundImage: `url(${Hero})`,
                backgroundSize: 'cover',  // Adjust size as per requirement
                backgroundPosition: 'top',  // Ensures the gradient starts from the left
                backgroundRepeat: 'no-repeat',
            }}>
                <div
                    className="w-full h-full flex flex-col absolute z-10"
                    style={{
                        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(19, 19, 19, 0.49) 49%, rgba(131, 131, 131, 0) 100%)`,
                        backgroundSize: '100% 100%',  // Adjust size as per requirement
                        backgroundPosition: 'left center',  // Ensures the gradient starts from the left
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                </div>
                <Header />
            </div>
            <div className='w-full h-auto flex flex-col px-5 md:px-10 lg:px-20 py-10 bg-[#e7e7e7] md:gap-2'>
                <h1 className='text-center text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[Roboto]'>About us</h1>
                <div className='w-full h-auto flex items-center justify-center'>
                    <span className='flex items-center justify-center text-black gap-1'>
                        <FaHome size={20} />
                        Home
                    </span>
                    <span className='text-[#0000004D]'> - Pages - About Us</span>
                </div>
                <div className='w-full h-auto bg-[#e7e7e7] py-8 flex flex-col lg:flex-row lg:gap-8 2xl:py-20 font-[Roboto]'>
                    <div className='w-full h-auto flex flex-col gap-2 md:gap-4 lg:w-1/2'>
                        <p className="text-[#374836] text-2xl font-semibold xl:text-3xl">| Our Vision |</p>
                        <h1 className='uppercase text-2xl font-bold text-[#374836] sm:text-3xl md:text-5xl md:leading-14 lg:text-4xl lg:leading-10 xl:text-5xl xl:leading-14 2xl:text-[55px]'>Cultivating <span className='text-[#146A3A]'>farmers</span> <br /> legecy </h1>
                        <p className='text-[#7F9080] text-sm md:text-base lg:text-sm xl:text-base'>vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur numquam eius modi tempora incidunt ut labore et dolore magnam aliquam consequuntur magni dolores eos qui ratione v</p>
                        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-6'>
                            <div className='w-full h-auto flex flex-col lg:gap-2 2xl:gap-4'>
                                <h1 className='text-[#374836] uppercase font-semibold text-xl lg:text-base xl:text-xl 2xl:text-2xl'>Neque porro quisquam</h1>
                                <p className='text-[#7F9080] font-semibold text-sm'>vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>
                            </div>
                            <div className='w-full h-auto flex flex-col lg:gap-2 2xl:gap-4'>
                                <h1 className='text-[#374836] uppercase font-semibold text-xl lg:text-base xl:text-xl 2xl:text-2xl'>Neque porro quisquam</h1>
                                <p className='text-[#7F9080] font-semibold text-sm'>vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>
                            </div>
                            <div className='w-full h-auto flex flex-col lg:gap-2 2xl:gap-4'>
                                <h1 className='text-[#374836] uppercase font-semibold text-xl lg:text-base xl:text-xl 2xl:text-2xl'>Neque porro quisquam</h1>
                                <p className='text-[#7F9080] font-semibold text-sm'>vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>
                            </div>
                            <div className='w-full h-auto flex flex-col lg:gap-2 2xl:gap-4'>
                                <h1 className='text-[#374836] uppercase font-semibold text-xl lg:text-base xl:text-xl 2xl:text-2xl'>Neque porro quisquam</h1>
                                <p className='text-[#7F9080] font-semibold text-sm'>vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative w-full h-[300px] md:h-[400px] lg:h-[550px] flex flex-col gap-6 md:flex-row lg:w-1/2 lg:items-center lg:justify-center overflow-hidden rounded-3xl'>
                        <img src={Img1} alt="" className='w-full h-full object-cover' />
                        <div className='inset-0 bg-black opacity-20 absolute w-full h-full'></div>
                        <span className='absolute top-4 right-6 h-14 w-14 rounded-full bg-white flex justify-center items-center'>
                            <FiArrowUpRight size={30} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1