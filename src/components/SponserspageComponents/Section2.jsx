import React from 'react'
import Sponser2 from '../../assets/f11.png'
import Sponser3 from '../../assets/meetfarming.jpg'
import Sponser4 from '../../assets/meetfarmers1.jpg'
import Sponser5 from '../../assets/meet-farmers2.jpg'

function Section2() {
    const heroesData = [
        {
            img: Sponser2,
        },
        {
            img: Sponser3,
        },
        {
            img: Sponser4,
        },
        {
            img: Sponser5,
        },
    ]
    return (
        <div className='w-full h-auto flex flex-col md:py-5 px-5 md:px-10 lg:px-20 bg-[#e7e7e7]'>
            {/* Header Section */}
            <div className="text-center pb-6">
                <p className="text-[#374836] text-2xl font-semibold">|  Banking Sponsors  |</p>
                <h2 className="text-5xl font-bold text-[#374836]">Institutional & Banking Partners</h2>
            </div>
 
            {/* Grid Section */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 px-6 pb-6">
                {heroesData.map((hero, index) => (
                    <div key={index} className="text-center">
                        <img
                            src={hero.img}
                            alt={hero.title}
                            className="w-full object-cover rounded-3xl shadow-md"
                        />
                        <h3 className="mt-4 text-lg font-bold text-[#374836] xl:text-xl">{hero.title}</h3>
                        <p className="text-[#374836]">{hero.subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
 
export default Section2
 