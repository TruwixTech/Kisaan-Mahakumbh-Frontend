import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import Img1 from '../../assets/about1.jpg'
import Img2 from '../../assets/about2.jpg'
import Img3 from '../../assets/about3.jpg'


function AboutEvent() {
    return (
        <div className='w-full h-auto px-5 md:px-10 lg:px-16 bg-[#e7e7e7] min-h-screen py-8 flex flex-col lg:flex-row lg:gap-8 2xl:py-20 font-[Roboto]'>
            <div className='w-full h-auto flex flex-col gap-2 md:gap-4 lg:w-1/2'>
                <p className="text-[#374836] text-2xl font-semibold xl:text-3xl">| About Our Event |</p>
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
            <div className='w-full h-auto flex flex-col gap-6 md:flex-row lg:w-1/2 lg:items-center'>
                <div className='relative w-full h-[450px] rounded-3xl overflow-hidden xl:h-full md:hover:w-[180%] duration-500 ease-in-out transition-all cursor-pointer'>
                    <img src={Img1} alt="img1" className='w-full h-full object-cover' />
                    <span className='absolute top-4 right-6 h-14 w-14 rounded-full bg-white flex justify-center items-center'>
                        <FiArrowUpRight size={30} />
                    </span>
                </div>
                <div className='relative w-full h-[450px] rounded-3xl overflow-hidden xl:h-full md:hover:w-[180%] duration-500 ease-in-out transition-all cursor-pointer'>
                    <img src={Img2} alt="img1" className='w-full h-full object-cover' />
                    <span className='absolute top-4 right-6 h-14 w-14 rounded-full bg-white flex justify-center items-center'>
                        <FiArrowUpRight size={30} />
                    </span>
                </div>
                <div className='relative w-full h-[450px] rounded-3xl overflow-hidden xl:h-full md:hover:w-[180%] duration-500 ease-in-out transition-all cursor-pointer'>
                    <img src={Img3} alt="img1" className='w-full h-full object-cover' />
                    <span className='absolute top-4 right-6 h-14 w-14 rounded-full bg-white flex justify-center items-center'>
                        <FiArrowUpRight size={30} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AboutEvent