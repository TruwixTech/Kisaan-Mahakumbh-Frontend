import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Hero from "../assets/Hero.jpg";

const UserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    password: "",
    role: "USER", // Default role
    companyName: "",
    companyAddress: "",
    pin_code: "",
    specializedIn: "",
    gst: "",
    cinNumber: "",
    applyingForSponsership: false,
    applyingForBookingStalls: false,
    applyingAsVisitor: false,
  });

  const navigate = useNavigate();

  const [otpEmail, setOtpEmail] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSendEmailOTP = async () => {
    try {
      const response = await axios.post(
        "https://kisaan-mahakumbh-backend.vercel.app/api/v1/otp/send-email-otp",
        { email: formData.email }
      );
      alert("OTP sent successfully!");
      console.log(response.data); // Log the response from the API
    } catch (error) {
      alert("Failed to send OTP");
      console.error(
        "Error sending OTP:",
        error.response?.data || error.message
      );
    }
  };

  const handleVerifyEmailOTP = async () => {
    try {
      const response = await axios.post(
        "https://kisaan-mahakumbh-backend.vercel.app/api/v1/otp/verify-email-otp",
        { email: formData.email, otp: otpEmail }
      );
      alert("Email verified successfully!");
      setEmailVerified(true);
      console.log(response.data); // Log the response from the API
    } catch (error) {
      alert("Failed to verify OTP");
      console.error(
        "Error verifying OTP:",
        error.response?.data || error.message
      );
    }
  };

  const handleSubmitRegistrationForm = async () => {
    try {
      const response = await axios.post(
        "https://kisaan-mahakumbh-backend.vercel.app/api/v1/auth/signup",
        formData
      );
      alert("Registration successful!");
      console.log(response.data); // Log the response from the API
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        address: "",
        password: "",
        role: "USER",
        companyName: "",
        companyAddress: "",
        pin_code: "",
        specializedIn: "",
        gst: "",
        cinNumber: "",
        applyingForSponsership: false,
        applyingForBookingStalls: false,
        applyingAsVisitor: false,
      });
      navigate("/");
    } catch (error) {
      alert("Failed to register");
      console.error(
        "Error registering:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <>
      <div className="w-full h-auto flex flex-col">
        {/* Hero Section with Gradient Overlay */}
        <div
          className="relative z-40"
          style={{
            backgroundImage: `url(${Hero})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="w-full h-full flex flex-col absolute z-10"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(19, 19, 19, 0.49) 49%, rgba(131, 131, 131, 0) 100%)`,
              backgroundSize: "100% 100%",
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <Header />
        </div>

        {/* Registration Form */}
        <div className="w-full h-auto flex items-center justify-center font-[Roboto]">
          <div className="w-[70%] p-8 bg-[#e7e7e7] shadow-lg rounded-lg my-10">
            <h2 className="text-4xl font-bold text-center text-[#374836] mb-10">
              User Registration
            </h2>

            {/* Name, Phone, Age in one row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Name */}
              <div>
                <label className="block text-base  font-bold text-gray-700 mb-1">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full py-4 px-4 bg-white rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-base  font-bold text-gray-700 mb-1">
                  Phone:
                </label>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full py-4 px-4 bg-white rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="+91"
                  required
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-base  font-bold text-gray-700 mb-1">
                  Age:
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full py-4 px-4 bg-white rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
            </div>

            {/* Email, Send OTP, Verify in one row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Email */}
              <div>
                <label className="block text-base  font-bold text-gray-700 mb-1">
                  Email:
                </label>
                <div className="w-full flex gap-4 items-center">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-[70%] py-4 px-4 bg-white rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
                    required
                    disabled={emailVerified}
                  />
                  <div className="flex items-end">
                    <button
                      onClick={handleSendEmailOTP}
                      className="w-full bg-[#01210f] text-white px-6 py-4 cursor-pointer rounded-full hover:bg-[#01210f] focus:outline-none"
                    >
                      Send OTP
                    </button>
                  </div>
                </div>
              </div>

              {/* Verify OTP */}
              <div className="w-full flex items-end">
                <input
                  type="text"
                  placeholder="Enter Email OTP"
                  value={otpEmail}
                  onChange={(e) => setOtpEmail(e.target.value)}
                  className="w-[70%] py-4 px-4 bg-white rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <button
                  onClick={handleVerifyEmailOTP}
                  className={`ml-2 px-10 py-4 rounded-full text-white cursor-pointer ${
                    emailVerified
                      ? "bg-green-500"
                      : "bg-[#01210f]  hover:bg-[#01210f] "
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  disabled={emailVerified}
                >
                  {emailVerified ? "Verified" : "Verify"}
                </button>
              </div>
            </div>

            {/* Password and Address in one row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Password */}
              <div>
                <label className="block text-base  font-bold text-gray-700 mb-1">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full py-4 px-4 bg-white rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-base  font-bold text-gray-700 mb-1">
                  Address:
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full py-4 px-4 bg-white rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
            </div>

            {/* Role Dropdown */}
            <div className="mb-4">
              <label className="block text-base  font-bold text-gray-700 mb-1">
                Role:
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full py-4 px-4 bg-white rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              >
                <option value="USER">User</option>
                <option value="SPONSOR">Sponsor</option>
                <option value="VISITOR">Visitor</option>
                <option value="ENTREPRENEUR">Entrepreneur</option>
              </select>
            </div>

            {/* Company Details (Visible after email verification) */}
            {emailVerified && (
              <>
                <h3 className="text-2xl font-semibold text-[#374836] mt-6 mb-4">
                  Company Details
                </h3>

                {/* Company Name and Company Address in one row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* Company Name */}
                  <div>
                    <label className="block text-base  font-bold text-gray-700 mb-1">
                      Company Name:
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full py-4 px-4 bg-white rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>

                  {/* Company Address */}
                  <div>
                    <label className="block text-base  font-bold text-gray-700 mb-1">
                      Company Address:
                    </label>
                    <input
                      type="text"
                      name="companyAddress"
                      value={formData.companyAddress}
                      onChange={handleChange}
                      className="w-full py-4 px-4 bg-white rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>
                </div>

                {/* Pin Code and Specialized In in one row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* Pin Code */}
                  <div>
                    <label className="block text-base  font-bold text-gray-700 mb-1">
                      Pin Code:
                    </label>
                    <input
                      type="number"
                      name="pin_code"
                      value={formData.pin_code}
                      onChange={handleChange}
                      className="w-full py-4 px-4 bg-white rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>

                  {/* Specialized In */}
                  <div>
                    <label className="block text-base  font-bold text-gray-700 mb-1">
                      Specialized In:
                    </label>
                    <input
                      type="text"
                      name="specializedIn"
                      value={formData.specializedIn}
                      onChange={handleChange}
                      className="w-full py-4 px-4 bg-white rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>
                </div>

                {/* GST and CIN Number in one row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* GST */}
                  <div>
                    <label className="block text-base  font-bold text-gray-700 mb-1">
                      GST:
                    </label>
                    <input
                      type="text"
                      name="gst"
                      value={formData.gst}
                      onChange={handleChange}
                      className="w-full py-4 px-4 bg-white rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>

                  {/* CIN Number */}
                  <div>
                    <label className="block text-base  font-bold text-gray-700 mb-1">
                      CIN Number:
                    </label>
                    <input
                      type="text"
                      name="cinNumber"
                      value={formData.cinNumber}
                      onChange={handleChange}
                      className="w-full py-4 px-4 bg-white rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="applyingForSponsership"
                      checked={formData.applyingForSponsership}
                      onChange={handleChange}
                      className="w-6 h-6 mr-6"
                    />
                    <span className="text-lg  text-bold">
                      Applying for Sponsorship
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="applyingForBookingStalls"
                      checked={formData.applyingForBookingStalls}
                      onChange={handleChange}
                      className="w-6 h-6 mr-6"
                    />
                    <span className="text-lg  text-bold">
                      Applying for Booking Stalls
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="applyingAsVisitor"
                      checked={formData.applyingAsVisitor}
                      onChange={handleChange}
                      className="w-6 h-6 mr-6 rounded "
                    />
                    <span className="text-lg  text-bold">
                      Applying as Visitor
                    </span>
                  </label>
                </div>
              </>
            )}

            {/* Submit Button */}
            <button
              className="w-full bg-[#01210f] text-white px-6 mt-6 rounded-full py-3 hover:bg-[#01210f] focus:outline-none focus:ring-2  disabled:bg-gray-500"
              disabled={!emailVerified}
              onClick={handleSubmitRegistrationForm}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRegistrationForm;
