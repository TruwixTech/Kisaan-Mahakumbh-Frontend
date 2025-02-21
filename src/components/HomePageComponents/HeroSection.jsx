import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Hero from '../../assets/Hero.jpg'
import Marquee from 'react-fast-marquee';
import Farmer from '../../assets/farmer.svg'
import { NavLink } from 'react-router-dom';

function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const data = [
        {
            id: 1,
            mainTitle: "Cultivating a Greener<br /> Future, One Farm at a <br /> Time",
            subTitle: "We combines sustainability with technology to empower farms and protect the planet. Discover the future of eco-friendly Kisan Kumbh today.",
            boxImg: '',
            boxTitle: 'Growing Together for a Kisan Kumbh World',
            boxSubTitle: "Together, let's cultivate a sustainable future with practices that support robust farm yields and a healthier planet",
        },
        {
            id: 2,
            mainTitle: "Cultivating a Greener<br /> Future, One Farm at a <br /> Time",
            subTitle: "We combines sustainability with technology to empower farms and protect the planet. Discover the future of eco-friendly Kisan Kumbh today.",
            boxImg: '',
            boxTitle: 'Growing Together for a Kisan Kumbh World',
            boxSubTitle: "Together, let's cultivate a sustainable future with practices that support robust farm yields and a healthier planet",
        },
        {
            id: 3,
            mainTitle: "Cultivating a Greener<br /> Future, One Farm at a <br /> Time",
            subTitle: "We combines sustainability with technology to empower farms and protect the planet. Discover the future of eco-friendly Kisan Kumbh today.",
            boxImg: '',
            boxTitle: 'Growing Together for a Kisan Kumbh World',
            boxSubTitle: "Together, let's cultivate a sustainable future with practices that support robust farm yields and a healthier planet",
        },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [data.length]);


    return (
        <>
            <div className='w-full h-auto flex flex-col min-h-screen relative pb-8 font-[Roboto]'>
                <img src={Hero} alt="hero section image" className='w-full h-full absolute object-cover object-left lg:object-center -z-0' style={{
                    transform: 'scaleX(-1)'
                }} />
                <div className='relative z-40'>
                    <Header />
                </div>
                <div
                    className="w-full h-full flex flex-col min-h-screen absolute z-10"
                    style={{
                        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(19, 19, 19, 0.49) 49%, rgba(131, 131, 131, 0) 100%)`,
                        backgroundSize: '100% 100%',  // Adjust size as per requirement
                        backgroundPosition: 'left center',  // Ensures the gradient starts from the left
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                </div>
                <div className="overflow-hidden w-full z-10">
                    <div className="flex transition-transform duration-1000 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {
                            data.map((item, index) => (
                                <div key={item.id} className='min-w-screen h-auto flex flex-col mt-16 relative z-20 px-5 md:px-10 lg:px-20 gap-7'>
                                    <h1 className='font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl xl:leading-20' dangerouslySetInnerHTML={{ __html: item.mainTitle }}></h1>
                                    <div className='w-full h-auto flex flex-col gap-6 md:flex-row'>
                                        <div className='w-full h-auto flex flex-col gap-6'>
                                            <h1 className='font-bold text-white text-sm md:pr-6 lg:pr-20 xl:pr-60 lg:text-lg xl:text-xl'>{item.subTitle}</h1>
                                            <div className='w-full h-auto flex gap-6'>
                                                <NavLink to='/registration' className='font-bold bg-blur text-white bg-white/10 border border-white/30 shadow-lg hover:bg-white/20 transition-all w-40 py-2 rounded-2xl xl:w-52 xl:py-3 xl:text-lg flex justify-center items-center cursor-pointer'>Register for Event</NavLink>
                                                <NavLink to='/sponsers' className='font-bold bg-blur bg-white text-[#297F39] border border-[#297F39] w-20 py-2 rounded-xl xl:w-28 cursor-pointer xl:text-lg flex justify-center items-center'>Join us</NavLink>
                                            </div>
                                        </div>
                                        <div className='w-full h-auto flex md:w-auto xl:w-[650px] 2xl:w-[700px]'>
                                            <div className='w-full h-auto flex gap-3 rounded-xl p-3 xl:p-5 2xl:p-8 bg-blur text-white bg-white/10 border border-white/30 shadow-lg hover:bg-white/20 transition-all'>
                                                <img src={item.boxImg} alt="" className='w-32 h-32 bg-white rounded-xl' />
                                                <div className='flex flex-1 h-auto flex-col text-white justify-around'>
                                                    <h1 className='text-sm sm:text-xl md:text-sm'>{item.boxTitle}</h1>
                                                    <p className='h-[1px] w-full bg-white'></p>
                                                    <p className='text-xs sm:text-lg md:text-sm'>{item.boxSubTitle}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex justify-end items-center gap-4 relative z-10 pr-8 mt-7 xl:pr-14">
                    {data.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-6 h-6 rounded-full shadow-md duration-500 ease-in-out transition-all cursor-pointer ${index === currentIndex
                                    ? 'bg-white w-10'
                                    : 'bg-white/10 bg-blur border-white/30 border'
                                }`}
                        ></div>
                    ))}
                </div>
                {/* <div className='w-full h-auto flex flex-col mt-16 relative z-20 px-5 md:px-10 lg:px-20 gap-7'>
                    <h1 className='font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl xl:leading-20' dangerouslySetInnerHTML={{ __html: data[currentIndex].mainTitle }}></h1>
                    <div className='w-full h-auto flex flex-col gap-6 md:flex-row'>
                        <div className='w-full h-auto flex flex-col gap-6'>
                            <h1 className='font-bold text-white text-sm md:pr-6 lg:pr-20 xl:pr-60 lg:text-lg xl:text-xl'>{data[currentIndex].subTitle}</h1>
                            <div className='w-full h-auto flex gap-6'>
                                <button className='font-bold bg-blur text-white bg-white/10 border border-white/30 shadow-lg hover:bg-white/20 transition-all w-40 py-2 rounded-2xl xl:w-52 xl:py-3 xl:text-lg cursor-pointer'>Register for Event</button>
                                <button className='font-bold bg-blur bg-white text-[#297F39] border border-[#297F39] w-20 py-2 rounded-xl xl:w-28 cursor-pointer xl:text-lg'>Join us</button>
                            </div>
                        </div>
                        <div className='w-full h-auto flex md:w-auto xl:w-[650px] 2xl:w-[700px]'>
                            <div className='w-full h-auto flex gap-3 rounded-xl p-3 xl:p-5 2xl:p-8 bg-blur text-white bg-white/10 border border-white/30 shadow-lg hover:bg-white/20 transition-all'>
                                <img src={data[currentIndex].boxImg} alt="" className='w-32 h-32 bg-white rounded-xl' />
                                <div className='flex flex-1 h-auto flex-col text-white justify-around'>
                                    <h1 className='text-sm sm:text-xl md:text-sm'>{data[currentIndex].boxTitle}</h1>
                                    <p className='h-[1px] w-full bg-white'></p>
                                    <p className='text-xs sm:text-lg md:text-sm'>{data[currentIndex].boxSubTitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className='w-full h-auto py-2' style={{ background: 'linear-gradient(90deg, #585041 0%, #01210F 61.4%)' }}>
                <Marquee direction='left' speed={70} className='text-xl text-white font-bold'>
                    <div className='flex items-center gap-2 mx-3'><img src={Farmer} alt="farmer logo" /><span>Kisan Kumbh</span></div>
                    <div className='flex items-center gap-2 mx-3'><img src={Farmer} alt="farmer logo" /><span>Kisan Kumbh</span></div>
                    <div className='flex items-center gap-2 mx-3'><img src={Farmer} alt="farmer logo" /><span>Kisan Kumbh</span></div>
                    <div className='flex items-center gap-2 mx-3'><img src={Farmer} alt="farmer logo" /><span>Kisan Kumbh</span></div>
                    <div className='flex items-center gap-2 mx-3'><img src={Farmer} alt="farmer logo" /><span>Kisan Kumbh</span></div>
                    <div className='flex items-center gap-2 mx-3'><img src={Farmer} alt="farmer logo" /><span>Kisan Kumbh</span></div>
                    <div className='flex items-center gap-2 mx-3'><img src={Farmer} alt="farmer logo" /><span>Kisan Kumbh</span></div>
                    <div className='flex items-center gap-2 mx-3'><img src={Farmer} alt="farmer logo" /><span>Kisan Kumbh</span></div>
                    <div className='flex items-center gap-2 mx-3'><img src={Farmer} alt="farmer logo" /><span>Kisan Kumbh</span></div>
                </Marquee>
            </div>
        </>
    )
}

export default HeroSection