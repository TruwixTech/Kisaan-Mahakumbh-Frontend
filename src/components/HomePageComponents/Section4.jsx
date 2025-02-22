import React from 'react'
import { NavLink } from 'react-router-dom'
import Yojna1 from "../../assets/yojna1.avif";
import Yojna4 from "../../assets/yojna4.avif";
import Yojna5 from "../../assets/yojna5.webp";
import Yojna6 from "../../assets/yojna6.webp";
import Yojna7 from "../../assets/yojna7.webp";


function Section4() {
    return (
        <div className='w-full h-auto min-h-screen flex flex-wrap gap-6 px-5 md:px-10 lg:px-16 bg-[#01210F] py-8 lg:py-14 xl:py-20 xl:gap-8 font-[Roboto]'>
            <div className="group relative w-full h-[200px] rounded-3xl overflow-hidden sm:w-[300px] lg:w-[37%] lg:h-[250px] xl:h-[300px]">
                <img src={Yojna1} alt="yojna" className="bg-[#D9D9D9] w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 w-full bg-[#146a3bc8] bg-opacity-50 text-[#c39337] text-lg h-12 font-semibold text-center py-3 
        translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    Jal Jeevan Mission – Har Khet Ko Pani
                </div>
            </div>

            <div className='group relative w-full h-[200px] rounded-3xl overflow-hidden sm:w-[300px] lg:h-[250px] lg:w-[20%] xl:h-[300px]'>
                <img src={Yojna6} alt="yojna" className='bg-[#D9D9D9] w-full h-full object-cover' />
                <div className="absolute bottom-0 left-0 w-full bg-[#146a3bc8] bg-opacity-50 text-[#c39337] text-lg h-auto px-4 font-semibold text-center py-3 
        translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    Mission Mausam
                </div>
            </div>
            <div className='group relative w-full h-[200px] rounded-3xl overflow-hidden sm:w-[300px] lg:h-[250px] lg:w-[37%] xl:h-[300px]'>
                <img src={Yojna7} alt="yojna" className='bg-[#D9D9D9] w-full h-full object-cover' />
                <div className="absolute bottom-0 left-0 w-full bg-[#146a3bc8] bg-opacity-50 text-[#c39337] text-lg h-12 font-semibold text-center py-3 
        translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    Drone Didi Yojana
                </div>
            </div>
            <div className='group relative w-full h-[200px] rounded-3xl overflow-hidden sm:w-[300px] lg:w-[30%] lg:h-[250px] xl:h-[300px]'>
                <img src={Yojna4} alt="yojna" className='bg-[#D9D9D9] w-full h-full object-cover' />
                <div className="absolute bottom-0 left-0 w-full bg-[#146a3bc8] bg-opacity-50 text-[#c39337] text-lg h-12 font-semibold text-center py-3 
        translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    Atmanirbhar Krishi Yojana.
                </div>
            </div>
            <div className='group relative w-full h-[200px] rounded-3xl overflow-hidden sm:w-[300px] lg:h-[250px] lg:w-[30%] xl:h-[300px]'>
                <img src={Yojna5} alt="yojna" className='bg-[#D9D9D9] w-full h-full object-cover' />
                <div className="absolute bottom-0 left-0 w-full bg-[#146a3bc8] bg-opacity-50 text-[#c39337] text-lg h-12 font-semibold text-center py-3 
        translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    Kisan Urja Mission
                </div>
            </div>
            <div className='w-full h-auto md:h-[210px] rounded-3xl overflow-hidden p-4 flex flex-col gap-6 sm:w-[300px] lg:h-[250px] lg:w-[34%] lg:justify-center lg:items-center lg:gap-8 xl:h-[300px]'>
                <h1 className='text-[#9E9E9E] lg:text-lg xl:text-xl'>Secure your spot at Kisan Kumbh 2025 & unlock endless opportunities in agriculture. Discover cutting-edge technologies, expert insights, and sustainable solutions.</h1>
                <div className='w-full h-auto flex gap-6'>
                    <NavLink to='/registration' className='flex justify-center items-center font-bold bg-blur text-white bg-white/10 border border-white/30 shadow-lg hover:bg-white/20 transition-all w-40 py-2 rounded-2xl xl:w-52 xl:py-3 xl:text-lg cursor-pointer'>Register for Event</NavLink>
                    <NavLink to='/sponsers' className='flex justify-center items-center font-bold bg-blur bg-white text-[#297F39] border border-[#297F39] w-20 py-2 rounded-xl xl:w-28 cursor-pointer xl:text-lg'>Join us</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Section4