import React, { useRef } from "react";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

function Section2() {
  const carousalRef = useRef(null)

  // Go to the next slide
  const goNext = () => {
    if (carousalRef.current) {
      const slideWidth = carousalRef.current.offsetWidth;
      carousalRef.current.scrollLeft += slideWidth;
    }
  };

  // Go to the previous slide
  const goPrev = () => {
    if (carousalRef.current) {
      const slideWidth = carousalRef.current.offsetWidth;
      carousalRef.current.scrollLeft -= slideWidth;
    }
  };

  const data = [
    {
      id: 1,
      img: ""
    },
    {
      id: 2,
      img: ""
    },
    {
      id: 3,
      img: ""
    },
    {
      id: 4,
      img: ""
    },
    {
      id: 5,
      img: ""
    },
    {
      id: 6,
      img: ""
    },
    {
      id: 7,
      img: ""
    }
  ]

  return (
    <div className="w-full h-auto flex flex-col px-5 md:px-10 lg:px-20 py-8 xl:py-16 gap-8 bg-[#e7e7e7]">
      <div className="flex flex-col md:flex-row gap-5 lg:gap-10 lg:justify-between items-center">
        {/* Text Section */}
        <div className="w-full md:w-1/2 h-auto flex flex-col gap-4">
          <div className="flex flex-col gap-1 sm:gap-2">
            <p className="text-[#374836] font-bold text-xl font-[Roboto] md:text-base lg:text-xl xl:text-2xl">| Video Gallery |</p>
            <h1 className="w-full text-3xl uppercase font-bold font-[Roboto] sm:text-5xl md:text-2xl lg:text-4xl xl:text-5xl xl:leading-14">
              Videos of our Agri- <br />
              <span className="text-[#146a3a] font-bold uppercase">events</span>
            </h1>
          </div>
          <div className="flex flex-col gap-4 text-[#7F9080]">
            <p className="text-sm lg:text-xs xl:text-sm">
              Farmers have come forward with a renewed zeal to enhance their farm income, igniting a wave of innovation in agriculture. This new generation of "farmepreneurs" is pioneering agritech startups and revolutionizing traditional farming methods. However, around 86% of Indian farmers, especially small and remote landholders, remain disconnected from these innovations due to limited access to policy awareness, training, funding, and market insights.
            </p>
            <p className="text-sm lg:text-xs xl:text-sm">
              Kisan Kumbh 2025 aims to bridge this gap by bringing together all stakeholders—including small and large farmers, model farmers, consumers, financial institutions, NGOs, policymakers, and agriculture experts—on a single platform. This event will serve as a catalyst for knowledge-sharing, networking, and technological advancements, fostering a sustainable, profitable, and resilient agricultural ecosystem in India.
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full md:w-1/2 h-auto flex justify-center items-center">
          <div className="bg-[#8a8a8a] w-[646px] h-[431px] rounded-4xl"></div>
        </div>
      </div>
      <div className="w-full h-60 flex items-center justify-between lg:h-80">
        <div className="h-full w-auto flex justify-center items-center">
          <FaChevronLeft onClick={goPrev} size={35} className="cursor-pointer" />
        </div>
        <div
          ref={carousalRef}
          className="w-full flex-1 h-full flex overflow-x-scroll scroll-smooth snap-x gap-1 md:gap-5 snap-mandatory px-1"
          style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="min-w-full sm:min-w-80 lg:min-w-[410px] h-full bg-[#c7c7c7] rounded-3xl snap-center"
            >
              {/* <img src={item.img} alt="" className="w-full h-full" /> */}
            </div>
          ))}
        </div>
        <div className="h-full w-auto flex justify-center items-center">
          <FaChevronRight onClick={goNext} size={35} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Section2;
