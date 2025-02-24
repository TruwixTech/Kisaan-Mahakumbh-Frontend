import React from 'react'
import Sponser1 from '../../assets/sponser1.png'
import Sponser2 from '../../assets/sponser2.png'
import Sponser3 from '../../assets/sponser3.png'
import Sponser4 from '../../assets/sponser4.png'
import ContactComponent from '../ContactComponent.jsx'
function Section2() {
    const heroesData = [
            {
                img: Sponser1,
                title: "PUJYASHRI ADRISHYA KADSIDDHESHWAR SWAMIJI",
                subtitle: "Mathadhipati, kaneri math",
            },
            {
                img: Sponser2,
                title: "PUJYASHRI ADRISHYA KADSIDDHESHWAR SWAMIJI",
                subtitle: "Mathadhipati, kaneri math",
            },
            {
                img: Sponser3,
                title: "PUJYASHRI ADRISHYA KADSIDDHESHWAR SWAMIJI",
                subtitle: "Mathadhipati, kaneri math",
            },
            {
                img: Sponser4,
                title: "PUJYASHRI ADRISHYA KADSIDDHESHWAR SWAMIJI",
                subtitle: "Mathadhipati, kaneri math",
            },
            {
                img: Sponser4,
                title: "PUJYASHRI ADRISHYA KADSIDDHESHWAR SWAMIJI",
                subtitle: "Mathadhipati, kaneri math",
            },
        ]
  return (
    <div className='w-full h-auto flex flex-col md:py-5 px-6 bg-[#e7e7e7]'>
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
<div className='md:py-20 md:px-8 px-4 py-8'>
<ContactComponent/>
</div>
</div>
  )
}

export default Section2