import React from 'react'
import { FaBars } from "react-icons/fa6";
import Logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='w-full h-auto px-5 flex justify-between md:px-10 lg:px-14'>
      <div className='w-28 h-40 md:h-44 rounded-b-3xl bg-white md:px-6 border-x border-b border-[#146A3A]'>
        <img src={Logo} alt="logo" className='w-full h-[80%]' />
      </div>
      <div className='w-auto h-20 flex justify-between items-center lg:gap-6 lg:h-28 xl:gap-10'>
        <FaBars size={30} className='text-black lg:hidden' />
        <div className='hidden gap-6 lg:flex xl:gap-10'>
          <NavLink to="/" className="text-white text-2xl font-semibold">Home</NavLink>
          <NavLink to="/" className="text-white text-2xl font-semibold">About Us</NavLink>
          <NavLink to="/" className="text-white text-2xl font-semibold">Events</NavLink>
          <NavLink to="/" className="text-white text-2xl font-semibold">News</NavLink>
          <NavLink to="/" className="text-white text-2xl font-semibold">Contact</NavLink>
        </div>
        <div className='w-auto h-auto hidden items-center gap-6 lg:flex xl:gap-8'>
          <button className='px-3 py-2 bg-[#C39337] rounded-xl text-white font-semibold xl:py-2.5'>Join Now</button>
          <button className='px-5 py-2 bg-[#01210F] rounded-xl text-white font-semibold xl:py-2.5'>Register for Event</button>
        </div>
      </div>
    </div>
  )
}

export default Header