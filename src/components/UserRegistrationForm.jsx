import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      const response = await axios.post('http://localhost:8080/api/v1/otp/send-email-otp', { email: formData.email });
      alert('OTP sent successfully!');
      console.log(response.data); // Log the response from the API
    } catch (error) {
      alert('Failed to send OTP');
      console.error('Error sending OTP:', error.response?.data || error.message);
    }
  };

  const handleVerifyEmailOTP = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/otp/verify-email-otp', { email: formData.email, otp: otpEmail });
      alert('Email verified successfully!');
      setEmailVerified(true);
      console.log(response.data); // Log the response from the API
    } catch (error) {
      alert('Failed to verify OTP');
      console.error('Error verifying OTP:', error.response?.data || error.message);
    }
  };

  const handleSubmitRegistrationForm = async () => {
    console.log(formData);
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/signup', formData);
      alert('Registration successful!');
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
        applyingAsVisitor: false
      });
      navigate('/')
    } catch (error) {
      alert('Failed to register');
      console.error('Error registering:', error.response?.data || error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">User Registration</h2>

      {/* Name */}
      <label className="block">Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-2"
        required
      />

      {/* Phone */}
      <label className="block">Phone:</label>
      <input
        type="number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-2"
        required
        placeholder="+91"
      />

      {/* Email & OTP */}
      <div className="flex justify-between items-end">
        <div className="w-full flex flex-col">
          <label className="block">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-[85%] border p-2 rounded mb-2"
            required
          />
        </div>
        <button 
          onClick={handleSendEmailOTP} 
          className="bg-green-500 w-[200px] flex justify-center items-center h-[40px] py-2 rounded text-white"
        >
          Send OTP
        </button>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter Email OTP"
          value={otpEmail}
          onChange={(e) => setOtpEmail(e.target.value)}
          className="w-[70%] border p-2 rounded"
        />
        <button
          onClick={handleVerifyEmailOTP}
          className={`p-2 rounded ${emailVerified ? "bg-green-500" : "bg-blue-500"} text-white`}
          disabled={emailVerified}
        >
          {emailVerified ? "Verified" : "Verify"}
        </button>
      </div>

      {/* Password */}
      <label className="block mt-2">Password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-2"
        required
      />

      {/* Age */}
      <label className="block mt-2">Age:</label>
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-2"
      />

      {/* Address */}
      <label className="block mt-2">Address:</label>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-2"
      />

      {/* Role Dropdown */}
      <label className="block mt-2">Role:</label>
      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-2"
        required
      >
        <option value="USER">User</option>
        <option value="SPONSOR">Sponsor</option>
        <option value="VISITOR">Visitor</option>
        <option value="ENTREPRENEUR">Entrepreneur</option>
        <option value="VOLUNTEER">Volunteer</option>
      </select>

      {/* Show company details only after email verification */}
      {emailVerified && (
        <>
          <h3 className="text-xl font-semibold mt-4">Company Details</h3>

          <label className="block mt-2">Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full border p-2 rounded mb-2"
          />

          <label className="block mt-2">Company Address:</label>
          <input
            type="text"
            name="companyAddress"
            value={formData.companyAddress}
            onChange={handleChange}
            className="w-full border p-2 rounded mb-2"
          />

          <label className="block mt-2">Pin Code:</label>
          <input
            type="number"
            name="pin_code"
            value={formData.pin_code}
            onChange={handleChange}
            className="w-full border p-2 rounded mb-2"
          />

          <label className="block mt-2">Specialized In:</label>
          <input
            type="text"
            name="specializedIn"
            value={formData.specializedIn}
            onChange={handleChange}
            className="w-full border p-2 rounded mb-2"
          />

          <label className="block mt-2">GST:</label>
          <input
            type="text"
            name="gst"
            value={formData.gst}
            onChange={handleChange}
            className="w-full border p-2 rounded mb-2"
          />

          <label className="block mt-2">CIN Number:</label>
          <input
            type="text"
            name="cinNumber"
            value={formData.cinNumber}
            onChange={handleChange}
            className="w-full border p-2 rounded mb-2"
          />

          <label className="block mt-2">Applying for Sponsorship:</label>
          <input
            type="checkbox"
            name="applyingForSponsership"
            checked={formData.applyingForSponsership}
            onChange={handleChange}
          />

          <label className="block mt-2">Applying for Booking Stalls:</label>
          <input
            type="checkbox"
            name="applyingForBookingStalls"
            checked={formData.applyingForBookingStalls}
            onChange={handleChange}
          />

          <label className="block mt-2">Applying as Visitor:</label>
          <input
            type="checkbox"
            name="applyingAsVisitor"
            checked={formData.applyingAsVisitor}
            onChange={handleChange}
          />
        </>
      )}

      {/* Submit Button */}
      <button
        className="w-full bg-blue-500 text-white p-2 mt-4 rounded disabled:bg-gray-400"
        disabled={!emailVerified}
        onClick={handleSubmitRegistrationForm}
      >
        Submit
      </button>
    </div>
  );
};

export default UserRegistrationForm;