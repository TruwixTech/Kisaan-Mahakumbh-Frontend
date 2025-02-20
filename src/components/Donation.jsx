import React, { useState } from "react";
import { IoClose } from "react-icons/io5"; // Close icon

const Donation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Donate Button */}
      <div className="fixed -right-20 top-1/2 -translate-y-1/2 z-50">
        <button
          className="w-[200px] py-2 bg-[#C39337] rounded-xl text-white font-semibold -rotate-90 shadow-lg cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          Donate Now
        </button>
      </div>

      {/* Popup Modal */}
      {isOpen && (
       <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
       <div className="bg-white p-8 rounded-xl shadow-2xl w-[450px] relative">
         {/* Close Button */}
         <button
           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors"
           onClick={() => setIsOpen(false)}
         >
           <IoClose size={40} />
         </button>
     
         {/* Popup Header */}
         <h2 className="text-green-700 font-bold text-2xl mb-6 text-center">Account Details</h2>
     
         {/* Account Details Card */}
         <div className="bg-green-50 p-6 rounded-lg border border-green-100">
           <h3 className="text-green-700 font-semibold text-center text-xl mb-4">
             Cowtrition Foundation
           </h3>
           <div className="space-y-3">
             <p className="text-sm text-gray-700"><strong>Account No:</strong> 3110201002681</p>
             <p className="text-sm text-gray-700"><strong>IFSC Code:</strong> CNRB0006458</p>
             <p className="text-sm text-gray-700"><strong>Bank Name:</strong> Canara Bank</p>
             <p className="text-sm text-gray-700"><strong>Branch:</strong> Loni, Ghaziabad, Uttar Pradesh</p>
           </div>
         </div>
     
         {/* Donation Amount Input */}
         <div className="mt-6">
           <label className="block text-sm font-medium text-gray-700 mb-2">Enter Donation Amount (₹)</label>
           <input
             type="number"
             placeholder="Enter amount"
             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
           />
         </div>
     
         {/* Donate Button */}
         <button className="w-full mt-6 py-3 cursor-pointer bg-green-700 text-white rounded-lg flex items-center justify-center font-semibold hover:bg-green-800 transition-colors">
           💚 Donate Now
         </button>
       </div>
     </div>
      )}
    </>
  );
};

export default Donation;
