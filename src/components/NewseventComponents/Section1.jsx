import React from 'react'

function Section1() {
    const Newevent = [
        {
            title: "Farmer event",
            subtitle: "We collaborate closely with you to design practical, long-term strategies that lead to sustainable business growth.",
            num: "01",
        },
        {
            title: "Farmer event",
            subtitle: "We collaborate closely with you to design practical, long-term strategies that lead to sustainable business growth.",
            num: "01",
        },
        {
            title: "Farmer event",
            subtitle: "We collaborate closely with you to design practical, long-term strategies that lead to sustainable business growth.",
            num: "01",
        },
        
        {
            title: "Farmer event",
            subtitle: "We collaborate closely with you to design practical, long-term strategies that lead to sustainable business growth.",
            num: "01",
        },
        
        

    ]
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center md:py-12 py-5  bg-[#e7e7e7]'>
   <div className='w-full flex justify-center px-4 md:px-10 lg:px-10'>
            <div className='w-full grid  sm:grid-cols-1 md:grid-cols-2   gap-5'>
                {Newevent.map((event, index) => (
                    <div key={index} className=" h-[300px] bg-white rounded-2xl flex gap-5">
                        <div className='flex justify-center gap-5 p-4'>
                            <div className=' w-full  bg-[#aaa7a7] rounded-2xl h-full'></div>
                        
                        
                        
                            <div className='flex flex-col h-full justify-between gap-4 '>
                                <div className='flex flex-col gap-5'>
                                <h3 className="mt-4 text-[40px] font-bold text-[#374836] xl:text-xl">{event.title}</h3>
                                <p className="text-[#374836] text-[16.13px] w-[80%]">{event.subtitle}</p>
                                </div>
                                

                                <div className='flex justify-between  '>
                                    <button className="bg-green-900 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md hover:bg-green-800 transition"> Read more</button>
                                    <span className='text-[20px] p-2'>{event.num}</span>
                                </div>


                            </div>
                        </div>

                    </div>
                ))}
            </div>
            </div>

        </div >
    )
}

export default Section1