import React, { useState } from "react";
import { IoClose } from "react-icons/io5"; // Close icon

const Donation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed -right-20 top-1/2 -translate-y-1/2 z-50">
        <button
          className="w-[200px] py-2 bg-[#C39337] rounded-xl text-white font-semibold -rotate-90 shadow-lg cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          Donate Now
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-[6px] flex items-center justify-center z-50">
          <div className="bg-white p-2 md:p-8 rounded-xl shadow-2xl w-[550px] relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <IoClose size={40} />
            </button>

            <h2 className="text-[#01210f] font-bold text-2xl mb-6 text-center">
              Account Details
            </h2>

            <div className="bg-green-50 w-full p-4 md:p-6 rounded-lg border border-[#01210f]">
              <h3 className="text-[#01210f] font-semibold underline underline-offset-4 text-center text-xl mb-4">
                Cowtrition Foundation
              </h3>
              <div className="space-y-4">
                <span className="w-full flex gap-4 text-sm md:text-lg text-gray-700">
                  <p className="w-auto md:w-[120px]">
                    <strong className="">Account No:</strong>{" "}
                  </p>
                  <p className="font-medium">3110201002681</p>
                </span>
                <span className="w-full flex gap-4 text-sm md:text-lg text-gray-700">
                  <p className="w-auto md:w-[120px]">
                    <strong className="">IFSC Code:</strong>{" "}
                  </p>
                  <p className="font-medium"> CNRB0006458</p>
                </span>
                <span className="w-full flex gap-4 text-sm md:text-lg text-gray-700">
                  <p className="w-auto md:w-[120px]">
                    <strong className="">Bank Name:</strong>{" "}
                  </p>
                  <p className="font-medium"> Canara Bank</p>
                </span>
                <span className="w-full flex gap-4 text-sm md:text-lg text-gray-700">
                  <p className="w-auto md:w-[120px]">
                    <strong className="">Branch:</strong>{" "}
                  </p>
                  <p className="font-medium"> Loni, Ghaziabad, Uttar Pradesh</p>
                </span>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter Donation Amount (₹)
              </label>
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#01210f] focus:border-[#01210f] outline-none transition-all"
              />
            </div>

            <button className="w-full mt-6 py-3 cursor-pointer bg-[#01210f] text-white rounded-lg flex items-center justify-center font-semibold hover:bg-[#2a4636] transition-colors">
              💚 Donate Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Donation;
