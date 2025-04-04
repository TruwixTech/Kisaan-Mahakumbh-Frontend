import React, { useEffect, useState } from "react";
import Header from "../Header";
import Marquee from "react-fast-marquee";
import Yojna1 from "../../assets/yojna1.avif";
import Yojna2 from "../../assets/yojna2.jpeg";
import Yojna3 from "../../assets/yojna3.jpeg";
import { Link } from "react-router-dom";

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      id: 1,
      mainTitle:
        "Kisan Kumbh 2025 – <br /> The Grand Convergence of <br /> Agriculture & Innovation.",
      subTitle:
        "9th & 10th April, 2025 <br /> A.P. Shinde Symposium Hall, NASC Complex, Delhi 110012",
      boxImg: Yojna3,
      boxTitle: "Drone Didi Yojana (2024)",
      boxSubTitle:
        "Empowering women-led FPOs with agricultural drones for precision farming. 50-80% subsidy for adopting drone technology in crop monitoring & pesticide spraying.",
    },
    {
      id: 2,
      mainTitle:
        "India’s Ultimate Expo on <br/>Agriculture, Cutting-Edge<br/>Machinery & Agri-Processing Technologies!",
      subTitle:
        "9th & 10th April, 2025 <br />  A.P. Shinde Symposium Hall, NASC Complex, Delhi 110012",
      boxImg: Yojna2,
      boxTitle: "Krishi Udan 2.0",
      boxSubTitle:
        "Boosting Agri-exports by providing air cargo subsidies for perishable farm produce. Helps farmers sell directly in global markets with reduced logistics costs.",
    },
    {
      id: 3,
      mainTitle:
        "Revolutionizing <br /> Agriculture with<br /> Innovation & Technology.",
      subTitle:
        "9th & 10th April, 2025 <br />  A.P. Shinde Symposium Hall, NASC Complex, Delhi 110012",
      boxImg: Yojna1,
      boxTitle: "Jal Jeevan Mission – Har Khet Ko Pani",
      boxSubTitle:
        "Ensuring irrigation for every farm using smart water conservation techniques. Promotes drip & sprinkler irrigation, IoT-based water tracking for better efficiency.",
    },
  ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [data.length]);

  return (
    <>
      <div className="w-full h-auto flex flex-col min-h-screen relative pb-8 font-[Roboto]">
        {/* <img src={Hero} alt="hero section image" className='w-full h-full absolute object-cover object-left lg:object-center -z-0' style={{
                    transform: 'scaleX(-1)'
                }} /> */}
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://res.cloudinary.com/daqtq6xns/video/upload/f_auto:video,q_auto/j9nnt3gqjnbupat8ff09"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/55 z-10"></div>
        <div className="relative z-40">
          <Header />
        </div>
        <div
          className="w-full h-full flex flex-col min-h-screen absolute z-10"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(19, 19, 19, 0.49) 49%, rgba(131, 131, 131, 0) 100%)`,
            backgroundSize: "100% 100%", // Adjust size as per requirement
            backgroundPosition: "left center", // Ensures the gradient starts from the left
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="overflow-hidden w-full z-10 pt-20">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {data.map((item, index) => (
              <div
                key={item.id}
                className="min-w-screen h-auto flex flex-col mt-16 relative z-20 px-5 md:px-10 lg:px-20 gap-7"
              >
                <h1
                  className="font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl xl:leading-20"
                  dangerouslySetInnerHTML={{ __html: item.mainTitle }}
                ></h1>
                <div className="w-full h-auto flex flex-col gap-6 md:flex-row">
                  <div className="w-full h-auto flex flex-col gap-6">
                    <h1
                      className="font-bold text-white text-sm md:pr-6 lg:pr-20 xl:pr-60 lg:text-lg xl:text-xl"
                      dangerouslySetInnerHTML={{ __html: item.subTitle }}
                    ></h1>
                    <div className="w-full h-auto flex gap-6">
                      <Link
                        to="/registration"
                        className="font-bold text-white border flex items-center justify-center border-white/30 shadow-lg transition-all w-40 py-2 rounded-2xl xl:w-52 xl:py-3 xl:text-lg cursor-pointer"
                        style={{
                          background:
                            "linear-gradient(270deg,rgb(12, 84, 21),rgb(25, 159, 112), #ff9900)",
                          backgroundSize: "400% 400%",
                          animation: "gradientAnimation 5s ease infinite",
                        }}
                      >
                        Register for Event
                      </Link>
                      <Link
                        to="/sponsers"
                        className="font-bold flex items-center justify-center bg-blur bg-white text-[#297F39] border border-[#297F39] w-20 py-2 rounded-xl xl:w-28 cursor-pointer xl:text-lg"
                      >
                        Join us
                      </Link>
                    </div>
                  </div>
                  <div className="w-full h-auto flex md:w-auto xl:w-[650px] 2xl:w-[700px]">
                    <div className="w-full h-auto flex gap-3 rounded-xl p-3 xl:p-5 2xl:p-8 backdrop-blur-xsm text-white bg-white/10 border border-white/30 shadow-lg hover:bg-white/20 transition-all">
                      <img
                        src={item.boxImg}
                        alt="Yojna"
                        className="w-32 h-32 bg-white rounded-xl object-cover"
                      />
                      <div className="flex flex-1 h-auto flex-col text-white justify-around">
                        <h1 className="text-sm sm:text-xl md:text-sm">
                          {item.boxTitle}
                        </h1>
                        <p className="h-[1px] w-full bg-white"></p>
                        <p className="text-xs sm:text-lg md:text-xs">
                          {item.boxSubTitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end items-center gap-4 relative z-10 pr-8 xl:pr-14">
          {data.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-6 h-6 rounded-full shadow-md duration-500 ease-in-out transition-all cursor-pointer ${
                index === currentIndex
                  ? "bg-white w-10"
                  : "bg-white/10 bg-blur border-white/30 border"
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
      <div
        className="w-full h-auto py-2"
        style={{
          background: "linear-gradient(90deg, #585041 0%, #01210F 61.4%)",
        }}
      >
        <Marquee
          direction="left"
          speed={70}
          className="text-xl text-white font-bold"
        >
          <div className="flex items-center gap-2 mx-3">
            <span>
              Kisan Kumbh 2025 – Cultivating Innovation, Harvesting the Future!
            </span>
          </div>
          <div className="flex items-center gap-2 mx-3">
            <span>
              Kisan Kumbh 2025 – Cultivating Innovation, Harvesting the Future!
            </span>
          </div>
          <div className="flex items-center gap-2 mx-3">
            <span>
              Kisan Kumbh 2025 – Cultivating Innovation, Harvesting the Future!
            </span>
          </div>
        </Marquee>
      </div>
    </>
  );
}

export default HeroSection;
