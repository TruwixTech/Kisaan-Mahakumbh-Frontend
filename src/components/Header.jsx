import { FaBars } from "react-icons/fa6";
import Logo from '../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full h-28 px-5 flex justify-between md:px-10 lg:px-14 relative z-40 font-[Roboto]'>
      <div className='w-28 h-40 rounded-b-3xl bg-white md:px-6 border-x border-b border-[#146A3A]'>
        <img src={Logo} alt="logo" className='w-full h-[80%]' />
      </div>
      <div className='w-auto h-20 flex justify-between items-center lg:gap-6 lg:h-28 xl:gap-10'>
        {
          isOpen ?
            <IoClose className='text-white text-3xl cursor-pointer lg:hidden' onClick={() => setIsOpen(false)} />
            :
            <FaBars className='text-white text-3xl cursor-pointer lg:hidden' onClick={() => setIsOpen(true)} />
        }
        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-20 right-5 bg-white shadow-lg rounded-xl flex flex-col gap-4 p-4 z-50 lg:hidden">
            <NavLink to="/" className="text-[#01210F] text-xl font-semibold" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" className="text-[#01210F] text-xl font-semibold" onClick={() => setIsOpen(false)}>About Us</NavLink>
            <NavLink to="/event" className="text-[#01210F] text-xl font-semibold" onClick={() => setIsOpen(false)}>Events</NavLink>
            <NavLink to="/news" className="text-[#01210F] text-xl font-semibold" onClick={() => setIsOpen(false)}>News</NavLink>
            <NavLink to="/gallery" className="text-[#01210F] text-xl font-semibold" onClick={() => setIsOpen(false)}>Gallery</NavLink>
            <NavLink to="/contact-us" className="text-[#01210F] text-xl font-semibold" onClick={() => setIsOpen(false)}>Contact</NavLink>
            <NavLink to="sponsers" className='px-3 py-2 bg-[#C39337] rounded-xl text-white font-semibold' onClick={() => setIsOpen(false)}>Join Now</NavLink>
            <NavLink to="/registration" className='px-5 py-2 bg-[#01210F] rounded-xl text-white font-semibold cursor-pointer' >Register for Event</NavLink>
          </div>
        )}

        <div className='hidden gap-6 lg:flex xl:gap-10'>
          <NavLink to="/" className="text-white text-2xl font-semibold">Home</NavLink>
          <NavLink to="/about" className="text-white text-2xl font-semibold">About Us</NavLink>
          <NavLink to="/event" className="text-white text-2xl font-semibold">Events</NavLink>
          <NavLink to="/news" className="text-white text-2xl font-semibold">News</NavLink>
          <NavLink to="/gallery" className="text-white text-2xl font-semibold">Gallery</NavLink>
          <NavLink to="/contact-us" className="text-white text-2xl font-semibold">Contact</NavLink>
        </div>
        <div className='w-auto h-auto hidden items-center gap-6 lg:flex xl:gap-8'>
          <NavLink to="/sponsers" className='px-3 py-2 bg-[#C39337] rounded-xl text-white font-semibold xl:py-2.5' style={{
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', }}
          >Join Now</NavLink>
          <NavLink to="/registration" className='px-5 py-2 bg-[#01210F] rounded-xl text-white font-semibold xl:py-2.5' style={{
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', // Custom box shadow
          }}
          >Register for Event</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header;
