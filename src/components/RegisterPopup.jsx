import React, { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import PolicyMaker1 from '../assets/HonbleGovernorofGujarat.png';
import PolicyMaker2 from '../assets/ShivRajSinghChauhan.jpeg';
import PolicyMaker3 from '../assets/shyamsinghrana.jpg';
import PolicyMaker4 from '../assets/NitinGadkari.jpg';
import mask from "../assets/mask.png";

function OurPolicyPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const data = [
        {
            id: 1,
            img: PolicyMaker1,
            title: 'Acharya Devvrat',
            subtitle: 'Hon’ble Governor of Gujarat'
        },
        {
            id: 2,
            img: PolicyMaker2,
            title: 'Shiv Raj Singh Chauhan',
            subtitle: 'Agricultural Minister of India'
        },
        {
            id: 3,
            img: PolicyMaker3,
            title: 'Shyam Singh Rana',
            subtitle: 'Agriculture Minister of Haryana'
        },
        {
          id: 4,
          img: PolicyMaker4,
          title: 'Nitin Gadkari',
          subtitle: 'Minister of Road Transport and Highways of India'
      },
    ];

    useEffect(() => {
        // Show the popup on page load
        setIsOpen(true);
    }, []);

    return (
        isOpen && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 font-[Roboto]">
                {/* Popup Container */}
                <div className="bg-[#01210f] p-8 rounded-2xl shadow-lg w-auto h-[80vh] relative border-3 border-[#374836] overflow-y-auto" style={{
                  backgroundImage: `url(${mask})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right',
                  backgroundSize: 'contain'
                }}>
                    {/* Close Button */}
                    <button
                        className="absolute top-4 right-4 text-white cursor-pointer hover:text-gray-300 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        <IoClose size={36} />
                    </button>

                    {/* Title */}
                    <h1 className='uppercase text-white font-bold text-2xl text-center sm:text-3xl lg:text-4xl mb-8'>
                        Our Esteemed Guests
                    </h1>

                    {/* Content Grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4'>
                        {data.map((item) => (
                            <div key={item.id} className='flex flex-col items-center text-center'>
                                <img 
                                    src={item.img} 
                                    alt={item.title} 
                                    className='w-full h-72 object-cover rounded-2xl mb-4 bg-white shadow-lg'
                                />
                                <h3 className='font-bold text-xl text-white'>{item.title}</h3>
                                <p className='text-sm text-gray-400 mt-2'>{item.subtitle}</p>
                            </div>
                        ))}
                    </div>

                    {/* Optional Footer Text */}
                    <div className="mt-8 text-center text-white text-sm">
                        Honoring distinguished contributors to agricultural development
                    </div>
                </div>
            </div>
        )
    );
}

export default OurPolicyPopup;