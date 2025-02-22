import React, { useEffect, useRef, useState } from "react";
import kisaan from "../../assets/kisaan.png";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";
import Flipped from '../../assets/Flipped.jpg';

const AgritechHighlight = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFlipped(true);
          }
        });
      },
      { threshold: 0.5 } // Triggers when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full bg-[#e7e7e7]  flex flex-col gap-6 lg:flex-row items-center justify-center py-12 px-5 lg:px-20 font-roboto text-[#374836] font-[Roboto]">
      <div ref={sectionRef} className="w-full lg:w-1/2 h-full flex justify-center">
        <div className="flip-container">
          <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
            {/* Front Image */}
            <div className="flip-card-front"></div>
            {/* Back Image */}
            <div className="flip-card-back"></div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2">
        <p className="text-gray-500 text-xl font-bold text-center md:text-left">
          | Event Highlight |
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-4xl xl:text-4xl font-bold text-[#374836] mt-2 leading-tight text-center md:text-left">
          PIONEERING THE <br /> FUTURE OF{" "}
          <span className="text-[#146a3a]">AGRITECH</span>
        </h2>
        <p className="text-[#374836] mt-3 text-center md:text-left">
          Kisan Kumbh 2025 aims to bridge this gap by bringing together all stakeholders—including small and large farmers, model farmers, consumers, financial institutions, NGOs, policymakers, and agriculture experts—on a single platform.{" "}
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="flex items-start gap-4 flex-col lg:gap-2 xl:gap-4">
            <div className=" flex gap-4 items-center">
              <img src={icon1} alt="" />
              <h3 className="text-xl lg:text-xl xl:text-xl font-semibold text-[#374836]">
                AgriTech & Innovation Showcase
              </h3>
            </div>
            <div>
              <p className="text-[#7F9080] text-base lg:text-base xl:text-base">
                Discover cutting-edge drones, AI-powered precision farming, smart irrigation systems, and climate-resilient technologies revolutionizing agriculture.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 flex-col lg:gap-2 xl:gap-4">
            <div className="flex gap-4 items-center">
              <img src={icon2} alt="" />
              <h3 className="text-xl lg:text-xl xl:text-xl font-semibold text-[#374836]">
                Expert Talks & Panel Discussions
              </h3>
            </div>
            <div>
              <p className="text-[#7F9080] text-base">
                Engage with leading scientists, policymakers, successful farmers, and AgriTech entrepreneurs as they discuss the future of agriculture.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 flex-col lg:gap-2 xl:gap-4">
            <div className="flex gap-4 items-center">
              <img src={icon3} alt="" />
              <h3 className="text-xl lg:text-xl xl:text-xl font-semibold text-[#374836]">
                Government Schemes & Funding Support
              </h3>
            </div>
            <div>
              <p className="text-[#7F9080] text-base">
                Understand key initiatives like Mission Mausam, Didi Drone Yojana, Prakritik Kheti Mission, and AgriTech 4.0.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 flex-col lg:gap-2 xl:gap-4">
            <div className="flex gap-4 items-center">
              <img src={icon4} alt="" />
              <h3 className="text-xl lg:text-xl xl:text-xl font-semibold text-[#374836]">
                Startup & Farmer Excellence Awards
              </h3>
            </div>
            <div>
              <p className="text-[#7F9080] text-base">
                Recognizing innovative Agri startups, Farmer Producer Organizations (FPOs), and progressive farmers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgritechHighlight;
