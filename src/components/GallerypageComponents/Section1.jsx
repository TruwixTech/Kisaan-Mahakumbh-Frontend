import React from 'react';
import Hero from '../../assets/Hero.jpg'
import Header from '../Header';
import { FaHome } from "react-icons/fa";
import img1 from '../../assets/post/8.png'
import img2 from '../../assets/post/10.png'



function Section1() {
  return (
    <div className='w-full h-auto flex flex-col items-center bg-[#e7e7e7]'>
      <div className='relative z-40 w-full' style={{
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
      <h1 className='text-center text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[Roboto] mb-6 mt-8'>Gallery</h1>
      <div className='w-full h-auto flex items-center justify-center mt-1'>
        <span className='flex items-center justify-center text-black gap-1'>
          <FaHome size={20} />
          Home
        </span>
        <span className='text-[#0000004D]'> - Pages - Gallery</span>
      </div>
      <div className='flex flex-col px-5 sm:flex-row gap-4 justify-center md:mt-20 my-10 w-full md:px-10 lg:px-20 md:gap-10'>
        {/* Left Side - Large Box */}
        <img src={img1} className='w-full md:w-[628px] h-[420px] my-auto bg-[#8a8a8a] rounded-3xl lg:w-1/2 lg:h-[600px]'/>
        
        

        {/* Right Side - Two Stacked Boxes */}
        <div className='flex flex-col gap-5 w-full md:w-auto lg:w-1/2 lg:gap-8'>
          <img src={img2} className='w-full object-cover md:w-[300px] h-[250px] bg-[#8a8a8a] rounded-3xl lg:w-full lg:h-[370px]'/>
          <img src='https://res.cloudinary.com/daqtq6xns/image/upload/f_auto,q_auto/yehobyce5g6j3qjtlzw1' className='w-full object-cover md:w-[300px] h-[150px] bg-[#8a8a8a] rounded-3xl lg:w-full lg:h-[200px] object-center'/>
        </div>
      </div>

    </div>
  );
}

export default Section1;
