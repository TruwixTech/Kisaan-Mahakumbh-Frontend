import React from 'react'
import PolicyMaker1 from '../../assets/HonbleGovernorofGujarat.png'
import PolicyMaker3 from '../../assets/shyamsinghrana.jpg'
import PolicyMaker4 from '../../assets/NitinGadkari.jpg';

function OurPolicy() {
    const data = [
        {
            id: 1,
            img: PolicyMaker1,
            title: 'Acharya Devvrat',
            subtitle: 'Hon’ble Governor of Gujarat'
        },
        {
            id: 2,
            img: PolicyMaker3,
            title: 'Shyam Singh Rana',
            subtitle: 'Agriculture Minister of Haryana'
        },
        {
            id: 3,
            img: PolicyMaker4,
            title: 'Nitin Gadkari',
            subtitle: 'Minister of Road Transport and Highways of India'
        },
    ]

    return (
        <div className='w-full h-auto flex flex-col items-center px-5 md:px-10 lg:px-20 gap-3 bg-[#e7e7e7] py-10 lg:pb-20 xl:pb-16 lg:gap-6 font-[Roboto]'>
            {/* Headings - Centered */}
            <div className='w-full max-w-4xl mx-auto text-center'>
                <h1 className='text-[#374836] font-semibold text-lg md:text-xl'>| Policy Makers |</h1>
                <h1 className='uppercase text-[#374836] font-bold text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl mt-2'>
                    Our Policy Makers
                </h1>
            </div>

            {/* Grid Container - Centered */}
            <div className='w-full max-w-6xl mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6'>
                    {data.map((item) => (
                        <div key={item.id} className='flex flex-col items-center text-center'>
                            <img 
                                src={item.img} 
                                alt={item.title} 
                                className='w-full h-72 object-cover rounded-3xl bg-white shadow-md'
                            />
                            <h1 className='font-semibold text-xl text-[#374836] 2xl:text-2xl mt-4'>
                                {item.title}
                            </h1>
                            <p className='text-[#7F9080] text-sm mt-2 max-w-xs mx-auto'>
                                {item.subtitle}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurPolicy
