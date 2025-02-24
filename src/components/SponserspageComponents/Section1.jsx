import React from 'react'
import Header from '../Header'
import Hero from '../../assets/Hero.jpg'
import { FaHome } from "react-icons/fa";

import Sponser1 from '../../assets/sponser1.png'
import Sponser2 from '../../assets/sponser2.png'
import Sponser3 from '../../assets/sponser3.png'
import Sponser4 from '../../assets/sponser4.png'
import Sponser5 from '../../assets/sponsor5.png'
import Sponser6 from '../../assets/sponsor6.png'
import Sponser7 from '../../assets/sponsor7.png'
import Sponser8 from '../../assets/sponsor8.png'
import Sponser9 from '../../assets/sponsor9.png'
import Sponser10 from '../../assets/sponsor10.png'


function Section1() {
    const sponsors = [
        Sponser1,
        Sponser2,
        Sponser3,
        Sponser4,
        Sponser5,
        Sponser6,
        Sponser7,
        Sponser8,
        Sponser9,
        Sponser10
    ];

    return (
        <div className='w-full h-auto flex flex-col bg-[#e7e7e7]'>
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
                <h1 className='text-center text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 font-[Roboto]'>Sponsors</h1>
                <div className='w-full h-auto flex items-center justify-center font-[Segoe UI]'>
                    <span className='flex items-center justify-center text-black gap-1'>
                        <FaHome size={20} />
                        Home
                    </span>
                    <span className='text-[#0000004D]'> - Pages - Sponsors</span>
                </div>
                <div className="bg-[#e7e7e7] py-10 font-[Roboto]">
                    {/* Header Section */}
                    <div className="text-center">
                        <p className="text-[#374836] text-2xl font-semibold">|  Sponsors  |</p>
                        <h2 className="text-5xl font-bold text-[#374836]">Industry Sponsors</h2>
                    </div>

                    {/* Grid Section */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-12  gap-5 px-6">
                        {sponsors.map((item, index) => (
                            <div key={index} className="text-center w-56 h-56">
                                <img
                                    src={item}
                                    alt='sponsor'
                                    className="w-full h-full object-cover rounded-3xl shadow-md"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1