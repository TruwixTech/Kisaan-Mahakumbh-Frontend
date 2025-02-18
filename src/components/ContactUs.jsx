import React from "react";
import Hero from "../assets/Hero.jpg";
import { FaHome } from "react-icons/fa";
import Img1 from "../assets/about1.jpg";
import { FiArrowUpRight } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import Header from "./Header";

const ContactUs = () => {
  return (
    <div className="bg-[#D9D9D9] w-full h-auto flex flex-col">
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

      <div className="w-full h-auto flex flex-col px-5 md:px-10 lg:px-20 py-10 md:gap-2">
        <h1 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[Roboto]">
          Contact us
        </h1>
        <div className="w-full h-auto flex items-center justify-center">
          <span className="flex items-center justify-center text-black gap-1">
            <FaHome size={20} />
            Home
          </span>
          <span className="text-[#0000004D]"> - Pages - Contact Us</span>
        </div>

        <div className="w-full h-auto py-8 flex flex-col gap-15 lg:flex-row lg:gap-8 2xl:py-20 font-[Roboto]">
          <div className="w-full h-auto flex flex-col gap-2 md:gap-4 lg:w-1/2">
            <p className="text-[#374836] text-2xl font-semibold xl:text-3xl">
              | Contact us |
            </p>
            <h1 className="uppercase text-2xl font-bold text-[#374836] sm:text-3xl md:text-5xl md:leading-14 lg:text-4xl lg:leading-10 xl:text-5xl xl:leading-14 2xl:text-[55px]">
              Join us at Kisan Kumbh 2025
            </h1>
            {/* Emails */}
            <div className="mt-2">
              <h4 className="font-semibold text-gray-700 mb-3 text-lg">
                Emails
              </h4>
              <p className="flex items-center gap-2 text-[#8C959F] mb-1">
                <IoMailOutline className="text-[#8C959F]" />{" "}
                Cowtrition2019@gmail.com
              </p>
              <p className="flex items-center gap-2 text-[#8C959F]">
                <IoMailOutline className="text-[#8C959F]" />{" "}
                agritechinnovation24@gmail.com
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="mt-2">
              <h4 className="font-semibold text-gray-700 mb-3 text-lg">
                Reach out to us at
              </h4>
              <p className="flex items-center gap-2 text-[#8C959F]">
                <LuPhone className="text-[#8C959F]" /> 9540845510, 9582057533
              </p>
            </div>
          </div>

          <div className="relative w-full flex flex-col gap-6 md:flex-row lg:w-1/2 items-center justify-center">
            {/* Right Side - Contact Form */}
            <form className="w-[70%] space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg" htmlFor="first-name">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full bg-[#F0EEEE] text-gray-600 p-3 rounded-2xl focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-lg" htmlFor="first-name">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-[#F0EEEE] text-gray-600 p-3 rounded-2xl focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg" htmlFor="first-name">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Your Phone Number"
                    className="w-full bg-[#F0EEEE] text-gray-600 p-3 rounded-2xl focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-lg" htmlFor="first-name">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Your subject"
                    className="w-full bg-[#F0EEEE] text-gray-600 p-3 rounded-2xl focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-lg" htmlFor="first-name">
                  Message
                </label>
                <textarea
                  placeholder="Write message"
                  rows="4"
                  className="w-full bg-[#F0EEEE] text-gray-600 p-3 rounded-2xl resize-none focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-10 bg-[#01210F] text-white p-3 rounded-2xl hover:bg-green-900 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
