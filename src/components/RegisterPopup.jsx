import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5"; // Import close icon
import mask from "../assets/mask.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RegisterPopup = () => {

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Show the popup on page load
    setIsOpen(true);
  }, []);

  const handleClick = (data) => {
    navigate('/registration', { state: data });
    setIsOpen(false);
  }

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 font-[Roboto]">
        {/* Popup Box */}
        <div className="bg-[#01210f] text-white p-8 rounded-2xl shadow-lg w-[350px] md:w-[400px] h-[510px] relative border-3 border-white">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white cursor-pointer hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            <IoClose size={36} />
          </button>
          <div className="absolute top-20 right-0 h-1/2">
            <img src={mask} alt="" />

          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-10">Register Now</h2>
          <p className=" text-[#4d6357]  mt-4 mb-20">Kisan Kumbh 2025</p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-4 ">
            <button onClick={() => handleClick('visitor')} className="w-[55%] md:w-[60%] cursor-pointer bg-white flex justify-center items-center text-[#01210f] font-bold py-3 rounded-xl shadow-lg">
              I am a visitor
            </button>
            <button onClick={() => handleClick('sponsor')} className="w-[55%] md:w-[60%] cursor-pointer bg-white flex justify-center items-center text-[#01210f] font-bold py-3 rounded-xl shadow-lg">
              I am a Sponsor
            </button>
            <button onClick={() => handleClick('entrepreneur')} className="w-[55%] md:w-[60%] cursor-pointer bg-white flex justify-center items-center text-[#01210f] font-bold py-3 rounded-xl shadow-lg">
              I am a Startup
            </button>
            <button onClick={() => handleClick('delegate')} className="w-[55%] md:w-[60%] cursor-pointer bg-white flex justify-center items-center text-[#01210f] font-bold py-3 rounded-xl shadow-lg">
              I am a Delegate
            </button>
          </div>

          {/* Bottom Border Line */}
          <div className="border-t border-gray-200 mt-12"></div>
        </div>
      </div>
    )
  );
};

export default RegisterPopup;
