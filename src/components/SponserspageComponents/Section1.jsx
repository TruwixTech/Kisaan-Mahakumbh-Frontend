import React from 'react'
import Sponser1 from '../../assets/sponsor1.png'
import Sponser2 from '../../assets/sponsor2.png'
import Sponser3 from '../../assets/sponsor3.png'
import Sponser4 from '../../assets/sponsor4.png'
import Sponser5 from '../../assets/sponsor5.png'
import Sponser6 from '../../assets/sponsor6.png'
import Sponser7 from '../../assets/sponsor7.png'
import Sponser8 from '../../assets/sponsor8.png'
import Sponser9 from '../../assets/sponsor9.png'
import Sponser10 from '../../assets/sponsor10.png'
import Sponser11 from '../../assets/sponsor11.jpeg'
import Sponser12 from '../../assets/sponsor12.png'
import Marquee from 'react-fast-marquee'

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
        Sponser10,
        Sponser11,
        Sponser12
    ];

    return (
        <div className='w-full h-auto flex flex-col bg-[#e7e7e7]'>
            <div className='w-full h-auto flex flex-col px-5 md:px-10 lg:px-20 py-10 bg-[#e7e7e7] md:gap-2'>
                <div className="bg-[#e7e7e7] py-10 font-[Roboto]">
                    {/* Header Section */}
                    <div className="text-center">
                        {/* <p className="text-[#374836] text-2xl font-semibold">|  Sponsors  |</p> */}
                        <h2 className="text-5xl font-bold text-[#374836]">| Sponsors |</h2>
                    </div>

                    {/* Grid Section */}
                    <Marquee gradient={false} speed={80} pauseOnHover={true}>
                        {sponsors.map((item, index) => (
                            <div key={index} className="mx-4 my-14 w-48 h-48 flex items-center justify-center ">
                                <img src={item} alt='sponsor' className="w-full h-full object-cover rounded-3xl shadow-md bg-white" />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Section1