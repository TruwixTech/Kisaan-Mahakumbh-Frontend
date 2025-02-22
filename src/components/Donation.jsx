import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5"; // Close icon
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const backend = "https://kisaan-mahakumbh-backend.vercel.app/api/v1";

const Donation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [amount, setAmount] = useState(0);

  const location = window.location.href;
  const { id } = useParams();

  // Manual validation function
  const validateForm = () => {
    const { name, email, phone } = formData;
    toast.dismiss()

    // Name validation
    if (!name.trim()) {
      toast.error("Name is required.");
      return false;
    } else if (name.length < 3) {
      toast.error("Name must be at least 3 characters.");
      return false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      toast.error("Email is required.");
      return false;
    } else if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email.");
      return false;
    }

    // Phone validation (10-digit number)
    const phonePattern = /^[0-9]{10}$/;
    if (!phone.trim()) {
      toast.error("Phone number is required.");
      return false;
    } else if (!phonePattern.test(phone)) {
      toast.error("Phone number must be 10 digits.");
      return false;
    }

    // Amount validation
    if (amount <= 0 || isNaN(amount)) {
      toast.error("Please enter a valid donation amount.");
      return false;
    }

    return true;
  };

  async function handlePayment() {
    // Validate form before proceeding with payment
    if (!validateForm()) return;

    try {
      const orderDetails = {
        amount,
        transactionId: "T" + Date.now(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        FRONTEND_URL: location,
      };

      const response = await axios.post(`${backend}/guestUserDonation/process`, orderDetails);
      if (response.data.data.guestUserDonation.redirectUrl) {
        window.location.href = response.data.data.guestUserDonation.redirectUrl;
      }
    } catch (error) {
      toast.error("Payment processing failed. Please try again.");
      console.error("Error processing payment:", error);
    }
  }

  async function verifyStatus(id) {
    try {
      await axios.post(`${backend}/guestUserDonation/verify`, {
        transactionId: id,
      });
      toast.success("Payment successful!");
    } catch (error) {
      console.error("Error verifying status", error);
    }
  }

  useEffect(() => {
    if (id) {
      verifyStatus(id);
    }
  }, []);

  return (
    <>
      <div className="fixed -right-20 top-1/2 -translate-y-1/2 z-30">
        <button
          className="w-[200px] py-2 bg-[#C39337] rounded-xl text-white font-semibold -rotate-90 shadow-lg cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          Donate Now
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-[6px] flex items-center justify-center z-50">
          <div
            className="bg-white p-2 md:p-8 rounded-xl shadow-2xl w-[550px] relative h-screen overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <IoClose size={40} />
            </button>

            <h2 className="text-[#01210f] font-bold text-2xl mb-6 text-center">
              Account Details
            </h2>

            {/* Account Information */}
            <div className="bg-green-50 w-full p-4 md:p-6 rounded-lg border border-[#01210f]">
              <h3 className="text-[#01210f] font-semibold underline underline-offset-4 text-center text-xl mb-4">
                Cowtrition Foundation
              </h3>
              <div className="space-y-4 text-gray-700">
                <p><strong>Account No:</strong> 3110201002681</p>
                <p><strong>IFSC Code:</strong> CNRB0006458</p>
                <p><strong>Bank Name:</strong> Canara Bank</p>
                <p><strong>Branch:</strong> Loni, Ghaziabad, Uttar Pradesh</p>
              </div>
            </div>

            {/* Donation Form */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#01210f] outline-none transition-all"
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#01210f] outline-none transition-all"
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#01210f] outline-none transition-all"
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Enter Donation Amount (₹)</label>
              <input
                type="number"
                value={amount}
                min="1"
                onWheel={(e) => e.target.blur()}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#01210f] outline-none transition-all appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
            </div>

            <button
              onClick={handlePayment}
              className="w-full mt-6 py-3 bg-[#01210f] text-white rounded-lg flex items-center justify-center font-semibold hover:bg-[#2a4636] transition-colors"
            >
              💚 Donate Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Donation;
