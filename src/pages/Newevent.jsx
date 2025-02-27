import React, { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../assets/Hero.jpg";
import { FaHome } from "react-icons/fa";
import Section1 from "../components/NewseventComponents/Section1";
import Section2 from "../components/NewseventComponents/Section2";
import Blogs from "../components/Blogs";
function Newevent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
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
      <div className="w-full h-auto flex flex-col bg-[#e7e7e7]">
        <div>
          <h1 className="font-[Roboto] w-full h-auto flex flex-col px-5 md:px-10 lg:px-20 pt-10 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-[#e7e7e7] md:gap-2 text-[30px]  md:text-[75.48px] items-center">
            News About Event
          </h1>
          <div className="w-full h-auto flex items-center justify-center mt-1">
            <span className="flex items-center justify-center text-black gap-1">
              <FaHome size={20} />
              Home
            </span>
            <span className="text-[#0000004D]">
              {" "}
              - Pages - News About Event
            </span>
          </div>
        </div>
        <Section1 />
        <Blogs/>
        <Section2 />
      </div>
    </>
  );
}

export default Newevent;
