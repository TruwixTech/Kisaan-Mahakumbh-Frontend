import React from 'react'
import Icon1 from '../../assets/aboutPageIcon1.svg'
import Icon2 from '../../assets/aboutPageIcon2.svg'
import Icon3 from '../../assets/aboutPageIcon3.svg'

function Section2() {

    const data = [
        {
            id: 1,
            icon: Icon1,
            title: 'Empower Farmers',
            subtitle: 'Equip them with knowledge, skills, and resources to adopt modern farming techniques and agritech solutions.'
        },
        {
            id: 2,
            icon: Icon2,
            title: 'Foster Innovation',
            subtitle: 'Connect agritech startups, researchers, and policymakers to drive sustainable agricultural innovations.'
        },
        {
            id: 3,
            icon: Icon3,
            title: 'Enhance Productivity',
            subtitle: 'Promote climate-smart farming practices, precision agriculture, and resource-efficient solutions for higher farm yields.'
        },
    ]

    return (
        <div className='w-full h-auto flex flex-col px-5 md:px-10 lg:px-20 min-h-screen gap-1 md:gap-2 lg:gap-4 bg-[#e7e7e7]'>
            <h1 className='text-[#374836] text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>|  Our Mission  |</h1>
            <h1 className='text-[#374836] text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase'>Our Mission For the event</h1>
            <div className='w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-6 xl:gap-20 md:my-10'>
                {
                    data.map((item, index) => (
                        <div className='w-full h-auto flex flex-col rounded-3xl overflow-hidden shadow-xl md:hover:shadow-2xl duration-500 ease-in-out transition-all cursor-pointer' key={index}>
                            <div className='w-full h-40 relative lg:h-48'>
                                <img src="" alt="" className='bg-[#C4C4C4] w-full h-full' />
                                <span className='w-16 h-16 border border-white p-1 rounded-full bg-[#146A3A] flex justify-center items-center absolute -bottom-8 left-3'>
                                    <img src={item.icon} alt="icon" className='' />
                                </span>
                            </div>
                            <div className='p-4 flex flex-col font-[Roboto] lg:p-6 xl:p-8 lg:gap-4'>
                                <h1 className='mt-6 text-2xl text-[#374836] font-bold lg:text-3xl xl:text-5xl xl:leading-12'>{item.title}</h1>
                                <p className='text-[#7F9080] text-sm'>{item.subtitle}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Section2