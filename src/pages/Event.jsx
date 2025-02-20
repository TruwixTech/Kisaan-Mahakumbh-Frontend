import React from 'react'
import Header from '../components/Header'
import Hero from '../assets/Hero.jpg'
import { FaHome } from "react-icons/fa";
function Event() {
    const sessions = [
        {
            time: "12:00 - 1:30",
            title: "SUSTAINABILITY AND CLIMATE RESILIENCE",
            details: [
                { topic: "AI-Based/IOT in Agriculture", speaker: "Dr.S.D. Gorantiwar" },
                { topic: "UAV – Role of Space Technology", speaker: "" },
                { topic: "Organic Certification and Standards", speaker: "Dr.S K Sharma" },
                { topic: "Awareness is Defense (Consumer Awareness in Agriculture) and Climate-Smart Agriculture & Sustainable Practices", speaker: "" },
                { topic: "Water Conservation & Efficient Irrigation Systems", speaker: "Prof. P K Singh/ Prof Vivek" },
            ],
        },
    ];
    const theme2 = [
        {
            time: "1:30 - 2:30",
            title: "Technology and Innovation in Agriculture",
            details: [
                { topic: "Machinery for Small & Marginal Farmers", speaker: "Dr. P.K. Sahoo" },
                { topic: "Drones, Satellite & GIS for Farming", speaker: "Dr. Suparn Pathak" },
                { topic: "Ayurveda & Homeopathy in Agriculture", speaker: "" },
                { topic: "Blockchain & AI in Supply Chain Management", speaker: "" },
                { topic: "Vertical Farming & Hydroponics Innovations", speaker: "" },
            ],
        },


    ]
    const theme3 = [
        {
            time: "4:00 - 5:30",
            title: "Agro Businesses & Startups",
            details: [
                { topic: "Policy Reforms for Agri-Startups", speaker: "" },
                { topic: "Investment & Business Opportunities in Agriculture", speaker: "" },
                { topic: "Farm-to-Market Innovations", speaker: "" },
                { topic: "Role of Agri-Incubators & Mentorship Programs", speaker: "" },
                { topic: "Export-Oriented Agribusinesses & Global Market Access", speaker: "" },
            ],
        },

    ]
    const theme4 = [
        {
            time: "10:00 - 11:30",
            title: "Agriculture Economics & Cooperatives",
            details: [
                { topic: "Agriculture Economics & Market Linkages", speaker: "" },
                { topic: "Strengthening Farmer Producer Organizations (FPOs)", speaker: "" },
                { topic: "Role of Cooperatives in Agri-Business", speaker: "" },
                { topic: "Global Market Expansion for Agri Products and Digital Trading Platforms & E-Mandis", speaker: "" },
                { topic: "Agri-Financing & Credit Accessibility for Farmers", speaker: "" },
            ],
        },

    ]
    const theme5 = [
        {
            time: "11:30 - 01:00",
            title: "Farmer & Consumer Ecosystem",
            details: [
                { topic: "Farmer's Family – Connecting Farmers & Consumers", speaker: "" },
                { topic: "Dialogue with Experts & Model Farmers", speaker: "" },
                { topic: "Voice of Consumers in Agri-Supply Chain and Consumer Awareness & Food Safety Standards", speaker: "" },
                { topic: "Rural-Urban Agriculture Linkages (Village & City Coordination)", speaker: "" },
                { topic: "Traditional Knowledge & Indigenous Farming Practices", speaker: "" },
            ],
        },

    ]
    const theme6 = [
        {
            time: "02:00 - 03:30",
            title: "Marketing and Value Addition of Agri Produce",
            details: [
                { topic: "Innovative Marketing Strategies for Agricultural Products and Government Policies and Schemes for Agri-Marketing", speaker: "" },
                { topic: "Agri-Processing and Value Addition", speaker: "" },
                { topic: "Supply Chain Management and Logistics", speaker: "" },
                { topic: "Role of Cooperatives and FPOs in Agri-Marketing", speaker: "" },
                { topic: "Export Potential of Indian Agricultural Products", speaker: "" },
            ],
        },

    ]

    return (
        <div>
            <div
                className="relative z-40"
                style={{
                    backgroundImage: `url(${Hero})`,
                    backgroundSize: "cover", // Adjust size as per requirement
                    backgroundPosition: "top", // Ensures the gradient starts from the left
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div
                    className="w-full h-full flex flex-col absolute z-10"
                    style={{
                        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(19, 19, 19, 0.49) 49%, rgba(131, 131, 131, 0) 100%)`,
                        backgroundSize: "100% 100%", // Adjust size as per requirement
                        backgroundPosition: "left center", // Ensures the gradient starts from the left
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <Header />
            </div>


            <div className='w-full h-auto flex flex-col bg-[#e7e7e7] px-2 md:px-12 lg:px-12    '>
                <div >
                    <h1 className='text-center text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[Roboto] mt-8 mb-6'>Event</h1>
                    <div className='w-full h-auto flex items-center justify-center mt-1'>
                        <span className='flex items-center justify-center text-black gap-1'>
                            <FaHome size={20} />
                            Home
                        </span>
                        <span className='text-[#0000004D]'> - Pages - Event</span>
                    </div>
                </div>
                <div className='w-full flex  flex-col   md:py-8 py-3 px-2 md:px-0'>
                    <h1 className='text-[#374836] text-[36px]'> | Events |</h1>
                    <span className='text-[#374836] text-[52px] font-[Roboto]'>Day 1: Theme of farmer</span>
                </div>

                <div className=' w-full h-auto p-2 md:p-6 bg-white rounded-3xl mb-7 '>
                    <div className="   px-2 md:px-12 lg:px-12 ">
                        
                        <h1 className="text-4xl font-bold text-gray-800 mb-6 font-[Roboto] flex flex-col justify-center items-center lg:justify-start md:items-start ">THEME 1</h1>
                        {/* First session */}
                        {sessions.map((session, index) => (
                            <div key={index} className="w-full mb-6 flex flex-col items-center lg:flex-row lg:items-start  gap-5">

                                <div className='w-full flex justify-center lg:justify-start md:w-[20%]'>
                                    <p className="text-4xl font-semibold text-gray-700 ">{session.time}</p>
                                </div>
                                <div className='lg:hidden block border-b-2  w-full  mx-10 border-gray-800'></div>
                                <div className='lg:block hidden border-r-2 lg:h-[300px] mx-10 border-gray-800'></div>
                                <div className='w-full md:w-[70%] flex  flex-col gap-5'>
                                    <h2 className="md:text-4xl text-2xl font-bold text-gray-900 items-center font-[Roboto] ">{session.title}</h2>
                                    <div className="mt-2 text-gray-600">
                                        {session.details.map((detail, i) => (
                                            <div key={i} className=" w-full flex flex-col lg:flex-row gap-4  justify-center lg:justify-start">
                                                <span className=' w-full md:w-[70%] text-[20px] font-[Roboto]  '>{detail.topic}</span>
                                                <div className='flex gap-5'>
                                                    <span className=" w-full text-gray-400 text-[20px] font-[Roboto]">{detail.speaker}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}



                    </div>


                </div>
                {/* theme2 */}


                <div className=' w-full h-auto p-2 md:p-6 bg-white rounded-3xl mb-7 '>
                    <div className=" px-4 md:px-12 lg:px-12 ">
                        <h1 className="text-4xl font-bold text-gray-800 mb-6 font-[Roboto] flex flex-col justify-center items-center lg:justify-start md:items-start">THEME 2</h1>
                        {/* First session */}
                        {theme2.map((theme2, index) => (
                            <div key={index} className="mb-6 flex flex-col items-center lg:flex-row lg:items-start  gap-5">

                                <div className='w-full flex justify-center lg:justify-start md:w-[20%]'>
                                    <p className="text-4xl font-semibold text-gray-700 ">{theme2.time}</p>
                                </div>
                                <div className='lg:hidden block border-b-2  w-full  mx-10 border-gray-800'></div>
                                <div className='lg:block hidden border-r-2 lg:h-[300px] mx-10 border-gray-800'></div>
                                <div className='w-full md:w-[70%] flex  flex-col gap-5'>
                                    <h2 className="md:text-4xl text-2xl font-bold text-gray-900 items-center font-[Roboto] ">{theme2.title}</h2>
                                    <div className="mt-2 text-gray-600">
                                        {theme2.details.map((detail, i) => (
                                            <div key={i} className=" w-full flex flex-col lg:flex-row gap-4  justify-center lg:justify-start">
                                                <span className=' w-full md:w-[70%] text-[20px] font-[Roboto]  '>{detail.topic}</span>
                                                <div className='flex gap-5'>
                                                    <span className=" w-full text-gray-400 text-[20px] font-[Roboto]">{detail.speaker}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}



                    </div>


                </div>



                {/* theme3 */}

                <div className=' w-full h-auto p-2 md:p-6 bg-white rounded-3xl mb-7 '>
                    <div className=" px-4 md:px-12 lg:px-12 ">
                        <h1 className="text-4xl font-bold text-gray-800 mb-6 font-[Roboto] flex flex-col justify-center items-center lg:justify-start md:items-start">THEME 3</h1>
                        {/* First session */}
                        {theme3.map((theme3, index) => (
                            <div key={index} className="mb-6 flex flex-col items-center lg:flex-row lg:items-start  gap-5">

                                <div className='w-full flex justify-center lg:justify-start md:w-[20%]'>
                                    <p className="text-4xl font-semibold text-gray-700 ">{theme3.time}</p>
                                </div>
                                <div className='lg:hidden block border-b-2  w-full  mx-10 border-gray-800'></div>
                                <div className='lg:block hidden border-r-2 lg:h-[300px] mx-10 border-gray-800'></div>
                                <div className=' w-full md:w-[70%] flex  flex-col gap-5'>
                                    <h2 className="md:text-4xl text-2xl font-bold text-gray-900 items-center font-[Roboto] ">{theme3.title}</h2>
                                    <div className="mt-2 text-gray-600">
                                        {theme3.details.map((detail, i) => (
                                            <div key={i} className=" w-full flex flex-col lg:flex-row gap-4  justify-center lg:justify-start">
                                                <span className=' w-full md:w-[70%] text-[20px] font-[Roboto]  '>{detail.topic}</span>
                                                <div className='flex gap-5'>
                                                    <span className=" w-full text-gray-400 text-[20px] font-[Roboto]">{detail.speaker}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                </div>

                {/* theme4 */}
                <div className=' w-full h-auto p-2 md:p-6 bg-white rounded-3xl mb-7 '>
                    <div className=" px-4 md:px-12 lg:px-12 ">
                        <h1 className="text-4xl font-bold text-gray-800 mb-6 font-[Roboto] flex flex-col justify-center items-center lg:justify-start md:items-start">THEME 4</h1>
                        {/* First session */}
                        {theme4.map((theme4, index) => (
                            <div key={index} className="mb-6 flex flex-col items-center lg:flex-row lg:items-start  gap-5">

                                <div className='w-full flex justify-center lg:justify-start md:w-[20%]'>
                                    <p className="text-4xl font-semibold text-gray-700 ">{theme4.time}</p>
                                </div>
                                <div className='lg:hidden block border-b-2  w-full  mx-10 border-gray-800'></div>
                                <div className='lg:block hidden border-r-2 lg:h-[300px] mx-10 border-gray-800'></div>
                                <div className=' w-full md:w-[70%] flex  flex-col gap-5'>
                                    <h2 className="md:text-4xl text-2xl font-bold text-gray-900 items-center font-[Roboto]  ">{theme4.title}</h2>
                                    <div className="mt-2 text-gray-600">
                                        {theme4.details.map((detail, i) => (
                                            <div key={i} className=" w-full flex flex-col lg:flex-row gap-4  justify-center lg:justify-start">
                                                <span className=' w-full md:w-[70%] text-[20px] font-[Roboto]  '>{detail.topic}</span>
                                                <div className='flex gap-5'>
                                                    <span className=" w-full text-gray-400 text-[20px] font-[Roboto]">{detail.speaker}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}

             </div>
          </div>

                {/* theme5 */}

                <div className=' w-full h-auto p-2 md:p-6 bg-white rounded-3xl mb-7 '>
                    <div className=" px-4 md:px-12 lg:px-12 ">
                        <h1 className="text-4xl font-bold text-gray-800 mb-6 font-[Roboto] flex flex-col justify-center items-center lg:justify-start md:items-start">THEME 5</h1>
                        {/* First session */}
                        {theme5.map((theme5, index) => (
                            <div key={index} className="mb-6 flex flex-col items-center lg:flex-row lg:items-start  gap-5">

                                <div className='w-full flex justify-center lg:justify-start md:w-[20%]'>
                                    <p className="text-4xl font-semibold text-gray-700 ">{theme5.time}</p>
                                </div>
                                <div className='lg:hidden block border-b-2  w-full  mx-10 border-gray-800'></div>
                                <div className='lg:block hidden border-r-2 lg:h-[300px] mx-10 border-gray-800'></div>
                                <div className='w-full md:w-[70%] flex  flex-col gap-5'>
                                    <h2 className="md:text-4xl text-2xl font-bold text-gray-900 items-center font-[Roboto] ">{theme5.title}</h2>
                                    <div className="mt-2 text-gray-600">
                                        {theme5.details.map((detail, i) => (
                                            <div key={i} className=" w-full flex flex-col lg:flex-row gap-4  justify-center lg:justify-start">
                                                <span className=' w-full md:w-[70%] text-[20px] font-[Roboto]  '>{detail.topic}</span>
                                                <div className='flex gap-5'>
                                                    <span className=" w-full text-gray-400 text-[20px] font-[Roboto]">{detail.speaker}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}



                    </div>


                </div>
    
    {/* theme6 */}

    <div className=' w-full h-auto p-6 bg-white rounded-3xl mb-7 '>
                    <div className=" px-2 md:px-12 lg:px-12 ">
                        <h1 className="text-4xl font-bold text-gray-800 mb-6 font-[Roboto] flex flex-col justify-center items-center md:justify-start md:items-start">THEME 6</h1>
                        {/* First session */}
                        {theme6.map((theme6, index) => (
                            <div key={index} className="mb-6 flex flex-col items-center lg:flex-row lg:items-start  gap-5">

                                <div className='w-full flex justify-center lg:justify-start md:w-[20%]'>
                                    <p className="text-4xl font-semibold text-gray-700 ">{theme6.time}</p>
                                </div>
                                <div className='lg:hidden block border-b-2  w-full  mx-10 border-gray-800'></div>
                                <div className='lg:block hidden border-r-2 lg:h-[300px] mx-10 border-gray-800'></div>
                                <div className='w-full md:w-[70%] flex  flex-col gap-5'>
                                    <h2 className="md:text-4xl text-2xl font-bold text-gray-900 items-center font-[Roboto] ">{theme6.title}</h2>
                                    <div className="mt-2 text-gray-600">
                                        {theme6.details.map((detail, i) => (
                                            <div key={i} className=" w-full flex flex-col lg:flex-row gap-4  justify-center lg:justify-start">
                                                <span className=' w-full md:w-[70%] text-[20px] font-[Roboto]  '>{detail.topic}</span>
                                                <div className='flex gap-5'>
                                                    <span className=" w-full text-gray-400 text-[20px] font-[Roboto]">{detail.speaker}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}



                    </div>


                </div>

            </div>
















        </div>
    )
}

export default Event