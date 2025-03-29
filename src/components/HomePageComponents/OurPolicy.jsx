import React from 'react'
import PolicyMaker1 from '../../assets/HonbleGovernorofGujarat.png'
import PolicyMaker2 from '../../assets/ShivRajSinghChauhan.jpeg'
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
    ]

    return (
        <div className='w-full h-auto flex flex-col px-5 md:px-10 lg:px-20  gap-3 bg-[#e7e7e7] py-10  lg:pb-20 xl:pb-16 lg:gap-6 font-[Roboto]'>
            {/* <h1 className='text-[#374836] font-semibold text-lg text-center md:text-xl'>|  Partners and Patrons  |</h1> */}
            <h1 className='uppercase text-[#374836] font-bold text-2xl text-center sm:text-3xl lg:text-4xl 2xl:text-5xl'>Our Policy Makers</h1>
            <div className='w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 justify-center items-center'>
                {data.map((item, index) => (
                    <div key={index} className='w-full h-auto flex flex-col gap-2 items-center text-center'>
                        <img src={item.img} alt="Policy Maker" className='w-full h-72 object-cover rounded-3xl mx-auto bg-white' />
                        <h1 className='font-semibold text-xl text-[#374836] 2xl:text-3xl'>{item.title}</h1>
                        <p className='text-[#7F9080] text-sm'>{item.subtitle}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default OurPolicy