import React, { useEffect } from 'react'
import Section1 from '../components/SponserspageComponents/Section1'
import Section2 from '../components/SponserspageComponents/Section2'
import ContactComponent from '../components/ContactComponent';
import Hero from '../assets/Hero.jpg'
import Header from '../components/Header';
import { FaHome } from "react-icons/fa";

function Sponsers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }
    , []);
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
      <div className='md:pt-10 md:px-10 lg:px-20 px-5 py-8'>
        <h1 className='text-center text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 font-[Roboto]'>Sponsors</h1>
        <div className='w-full h-auto flex items-center justify-center font-[Segoe UI] mb-14'>
          <span className='flex items-center justify-center text-black gap-1'>
            <FaHome size={20} />
            Home
          </span>
          <span className='text-[#0000004D]'> - Pages - Sponsors</span>
        </div>
        <ContactComponent />
      </div>
      <Section1 />
      {/* <Section2 /> */}
    </div>
  )
}

export default Sponsers