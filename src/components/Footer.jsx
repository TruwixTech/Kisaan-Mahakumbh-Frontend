import React from "react";
import FooterLogo from "../assets/FooterLogo.png";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full h-auto flex flex-col bg-[#01210f]">
      <div className="w-full h-auto flex flex-col lg:flex-row xl:justify-between">
        <div className="w-full h-auto flex flex-col sm:flex-row lg:w-1/2">
          <div className="relative w-full h-80 flex justify-center bg-white items-center sm:w-1/2">
            <div className="w-[50%] h-full rounded-tr-[40px] bg-[#01210f]"></div>
            <div className="w-[50%] h-full rounded-tl-[40px] bg-[#01210f]"></div>
            <img src={FooterLogo} alt="Logo" className="w-36 absolute" />
          </div>
          <div className="w-full h-auto flex flex-col font-[Roboto] bg-[#01210f] px-5 gap-6 sm:w-1/2 py-6 lg:py-10">
            <h1 className="text-[#E7E7E7] text-xl xl:text-2xl">
              Kisam Kumbh 2025
            </h1>
            <p className="text-[#D2D2D2] xl:text-lg">
              Kisan Kumbh is dedicated to revolutionizing agriculture through
              sustainable and innovative farming practices.
            </p>
            <div className="w-full h-auto">
              <button className="px-4 py-2 rounded-full text-white bg-[#146a3a] flex justify-center items-center gap-3 xl:px-8 xl:py-3 xl:text-lg">
                Contact Us
                <span className="h-6 w-6 rounded-full bg-white flex justify-center items-center">
                  <FiArrowUpRight size={25} className="text-[#146a3a]" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col bg-[#01210f] py-6 px-5 gap-8 lg:w-1/2 xl:w-[40%] lg:py-10 lg:px-10 xl:pr-20">
          <div className="w-full h-auto flex flex-col gap-6">
            <div className="w-full p-1 flex justify-between bg-[#D9D9D9] rounded-full">
              <input
                type="email"
                placeholder="Enter Email id"
                className="outline-none py-3 ml-2 px-2 w-[75%]"
              />
              <button className="bg-[#01210F] text-white rounded-full p-2 px-9">
                Submit
              </button>
            </div>
            <div className="w-full h-auto flex flex-wrap justify-between">
              <div className="w-auto h-auto flex flex-col gap-6">
                <h1 className="text-white font-bold">Quick Links</h1>
                <div className="flex flex-col text-[#FFFFFFB2] lg:gap-2">
                  <Link to="/">Home</Link>
                  <Link to="/about">About Us</Link>
                  <Link to="/event">Events</Link>
                  <Link to="/news">News</Link>
                </div>
              </div>
              <div className="w-auto h-auto flex flex-col gap-6">
                <h1 className="text-white font-bold">Resources</h1>
                <div className="flex flex-col text-[#FFFFFFB2] lg:gap-2">
                  <Link to="/gallery">Gallery</Link>
                  <Link to="/contact-us">Contact</Link>
                  <Link to="/sponsers">Sponsorship</Link>
                </div>
              </div>
              <div className="w-auto h-auto flex flex-col gap-6">
                <h1 className="text-white font-bold">Company</h1>
                <div className="flex flex-col text-[#FFFFFFB2] lg:gap-2">
                  <span>About Us</span>
                  <span>Contact Us</span>
                  <span>Career Tips</span>
                  <span>Career</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] h-[1px] bg-[#1a3727] mx-auto"></div>
      <div className="my-4 w-[90%] h-auto flex flex-col mx-auto gap-8 md:flex-row md:justify-between md:items-center lg:my-8">
        <div className="flex flex-wrap text-[#FFFFFFB2] gap-4 justify-center items-center lg:text-lg">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Legal Notice</span>
          <span>Cookie Setting</span>
        </div>
        <div className="text-[#FFFFFFB2] flex justify-center items-center lg:text-lg">
          © 2024, Truwix.
        </div>
      </div>
    </div>
  );
}

export default Footer;
