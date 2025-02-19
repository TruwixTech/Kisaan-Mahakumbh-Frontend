import React from 'react'
import Partner1 from '../../assets/partner1.png'
import Partner2 from '../../assets/partner2.png'
import Partner3 from '../../assets/partner3.png'
import Partner4 from '../../assets/partner4.png'
import Partner5 from '../../assets/partner5.png'

function Partners() {
    const data = [
        {
            id: 1,
            img: Partner1,
            title: 'Pujyashri Adrishya Kadsiddheshwar Swamiji',
            subtitle: 'Mathadhipati, kaneri math'
        },
        {
            id: 2,
            img: Partner2,
            title: 'Pujyashri Adrishya Kadsiddheshwar Swamiji',
            subtitle: 'Mathadhipati, kaneri math'
        },
        {
            id: 3,
            img: Partner3,
            title: 'Pujyashri Adrishya Kadsiddheshwar Swamiji',
            subtitle: 'Mathadhipati, kaneri math'
        },
        {
            id: 4,
            img: Partner4,
            title: 'Pujyashri Adrishya Kadsiddheshwar Swamiji',
            subtitle: 'Mathadhipati, kaneri math'
        },
        {
            id: 5,
            img: Partner5,
            title: 'Pujyashri Adrishya Kadsiddheshwar Swamiji',
            subtitle: 'Mathadhipati, kaneri math'
        },
    ]
    return (
        <div className='w-full h-auto flex flex-col px-5 md:px-10 lg:px-20  gap-3 bg-[#e7e7e7]  lg:py-14 xl:py-16 lg:gap-6 font-[Roboto]'>
            <h1 className='text-[#374836] font-semibold text-lg text-center md:text-xl'>|  Partners and Patrons  |</h1>
            <h1 className='uppercase text-[#374836] font-bold text-2xl text-center sm:text-3xl lg:text-4xl 2xl:text-5xl'>Our Patrons & Partners</h1>
            <div className='w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mt-6'>
                {
                    data.map((item,index) => (
                        <div key={index} className='w-full h-auto flex flex-col gap-2'>
                            <img src={item.img} alt="img logo" className='w-full h-auto object-cover rounded-3xl mx-auto' />
                            <h1 className='font-semibold text-center text-xl text-[#374836] xl:text-[22px]'>{item.title}</h1>
                            <p className='text-[#7F9080] text-sm text-center'>{item.subtitle}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Partners