import React from 'react'
import Sponser1 from '../../assets/sponser1.png'
import Sponser2 from '../../assets/sponser2.png'
import Sponser3 from '../../assets/sponser3.png'
import Sponser4 from '../../assets/sponser4.png'
import Sponser5 from '../../assets/sponsor5.png'
import Sponser6 from '../../assets/sponsor6.png'
import Sponser7 from '../../assets/sponsor7.png'
import Sponser8 from '../../assets/sponsor8.png'
import Sponser9 from '../../assets/sponsor9.png'
import Sponser10 from '../../assets/sponsor10.png'

function Section1() {
    const sponsors = [
        Sponser1,
        Sponser2,
        Sponser3,
        Sponser4,
        Sponser5,
        Sponser6,
        Sponser7,
        Sponser8,
        Sponser9,
        Sponser10
    ];

    return (
        <div className='w-full h-auto flex flex-col bg-[#e7e7e7]'>
            <div className='w-full h-auto flex flex-col px-5 md:px-10 lg:px-20 py-10 bg-[#e7e7e7] md:gap-2'>
                <div className="bg-[#e7e7e7] py-10 font-[Roboto]">
                    {/* Header Section */}
                    <div className="text-center">
                        <p className="text-[#374836] text-2xl font-semibold">|  Sponsors  |</p>
                        <h2 className="text-5xl font-bold text-[#374836]">Industry Sponsors</h2>
                    </div>

                    {/* Grid Section */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-12  gap-5 px-6">
                        {sponsors.map((item, index) => (
                            <div key={index} className="text-center w-56 h-56">
                                <img
                                    src={item}
                                    alt='sponsor'
                                    className="w-full h-full object-cover rounded-3xl shadow-md"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1