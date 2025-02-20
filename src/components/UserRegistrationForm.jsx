import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import Hero from "../assets/Hero.jpg";

const backend = 'https://kisaan-mahakumbh-backend.vercel.app/api/v1'

const UserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: 0,
    address: "",
    password: "",
    role: "User", // Default role
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
  const { id } = useParams()

  const validateForm = (formData) => {
    const errors = {};

    // Name Validation
    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    }

    // Email Validation
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      errors.email = "Invalid email format.";
    }

    // Phone Number Validation
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number must be 10 digits.";
    }

    // Age Validation
    if (formData.age <= 0) {
      errors.age = "Age must be greater than 0.";
    }

    // Address Validation
    if (!formData.address.trim()) {
      errors.address = "Address is required.";
    }

    // Password Validation
    if (!formData.password.trim()) {
      errors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }

    // Role-based Validations
    if (formData.role === "entrepreneur" || formData.role === "sponsor") {
      if (!formData.companyName.trim()) {
        errors.companyName = "Company name is required.";
      }
      if (!formData.companyAddress.trim()) {
        errors.companyAddress = "Company address is required.";
      }
      if (!formData.pin_code.trim()) {
        errors.pin_code = "Pin code is required.";
      } else if (!/^\d{6}$/.test(formData.pin_code)) {
        errors.pin_code = "Pin code must be 6 digits.";
      }
      if (!formData.specializedIn.trim()) {
        errors.specializedIn = "Specialization field is required.";
      }
      if (!formData.gst.trim()) {
        errors.gst = "GST number is required.";
      } else if (!/^\d{15}$/.test(formData.gst)) {
        errors.gst = "GST number must be 15 characters.";
      }
      if (!formData.cinNumber.trim()) {
        errors.cinNumber = "CIN number is required.";
      }
    }

    // Sponsorship Validation
    if (formData.applyingForSponsership && !formData.companyName.trim()) {
      errors.applyingForSponsership = "Company name is required for sponsorship.";
    }

    // Booking Stall Validation
    if (formData.applyingForBookingStalls && !formData.companyAddress.trim()) {
      errors.applyingForBookingStalls = "Company address is required for booking stalls.";
    }
    // Visitor Validation
    if (formData.applyingAsVisitor && !formData.name.trim()) {
      errors.applyingAsVisitor = "Name is required for visitor registration.";
    }

    return errors;
  };


  async function verifyStatus(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.post(`${backend}/payment/verify`, {
        transactionId: id
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      localStorage.removeItem("token");
      alert("Payment successful!");
      navigate("/");
    } catch (error) {
      console.log("Error verifying status", error);
    }
  }

  useEffect(() => {
    if (id) {
      verifyStatus(id)
    }
  }, [])
  const [currentStep, setCurrentStep] = useState(1);

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
        `${backend}/otp/send-email-otp`,
        { email: formData.email }
      );
      alert("OTP sent successfully!");
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
        `${backend}/otp/verify-email-otp`,
        { email: formData.email, otp: otpEmail }
      );
      alert("Email verified successfully!");
      setEmailVerified(true);
    } catch (error) {
      alert("Failed to verify OTP");
      console.error(
        "Error verifying OTP:",
        error.response?.data || error.message
      );
    }
  };

  async function generateTicket(token) {
    try {
      const response = await axios.post(`${backend}/ticket/generate`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      alert("Ticket Sent successfully to your email !");
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: 0,
        address: "",
        password: "",
        role: "User",
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
      console.log("Error generating ticket", error);
    }
  }

  const handlePayment = async (token) => {
    // Check mobile number before proceeding

    const amount = 1

    const orderDetails = {
      amount,
      transactionId: "T" + Date.now(),
      role: formData.role
    };

    try {
      // Make a POST request to create the order
      const response = await axios.post(`${backend}/payment/process`, orderDetails, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.data.data.payment.message === 'Sponsorship interest received') {
        alert("Sponsorship interest received successfully!");
        navigate('/')
        return
      } else {
        if (response.data.data.payment.redirectUrl) {
          window.location.href = response.data.data.payment.redirectUrl;
        } else {
          console.log("Invalid response structure from payment gateway");
          // Optionally, notify the user of an error with payment initiation.
        }
      }
      // console.log(response.data);
    } catch (error) {
      console.error("Payment failed:", error);
      // setError("Payment failed. Please try again later.");
    } finally {
      // setLoading(false);
    }

  };

  const handleSubmitRegistrationForm = async () => {
    try {
      const errors = validateForm(formData);

      if (Object.keys(errors).length > 0) {
        let errorMessages = Object.values(errors).join("\n");
        alert("Please fix the following errors:\n\n" + errorMessages);
        return
      }
      const response = await axios.post(
        `${backend}/auth/signup`,
        formData
      );
      alert("Registration successful!");
      const token = response.data.data.token
      localStorage.setItem("token", JSON.stringify(token));
      if (formData.role === "User" || formData.role === "visitor") {
        generateTicket(token)
      } else {
        handlePayment(token)
      }
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: 0,
        address: "",
        password: "",
        role: "User",
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
    } catch (error) {
      alert(error.response?.data?.data?.message || "Failed to register");
      console.error(
        "Error registering:",
        error.response?.data || error.message
      );
    }
  };

  const renderStepper = () => {
    return (
      <div className="w-full flex justify-center">
        <div
          className={`${formData.role === "entrepreneur" ? "w-full md:w-[80%]" : "w-full md:w-[50%]"
            } flex justify-between items-center mb-8`}
        >
          {/* Step 1 */}
          <div className="flex items-center">
            <div className="relative flex gap-4 items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full font-medium ${currentStep >= 1
                    ? "bg-black text-white"
                    : "bg-gray-200 text-black border border-gray-600"
                  }`}
              >
                1
              </div>
              <span
                className={`text-sm mt-2 h-8 ${currentStep >= 1
                    ? "text-black font-medium"
                    : "text-gray-500 font-semibold"
                  }`}
              >
                Attendee Information
              </span>
            </div>
          </div>

          {/* Stepper Line */}
          <div
            className={`w-40 h-[3px] ${currentStep > 1 ? "bg-black" : "bg-gray-300"
              }`}
          ></div>

          {/* Step 2 */}
          <div className="flex items-center">
            <div className="relative flex gap-4 items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full font-medium ${currentStep >= 2
                    ? "bg-black text-white"
                    : "bg-gray-200 text-black border border-gray-600"
                  }`}
              >
                2
              </div>
              <span
                className={`text-sm mt-2 h-8 ${currentStep >= 2
                    ? "text-black font-medium"
                    : "text-gray-500 font-medium"
                  }`}
              >
                Preview
              </span>
            </div>
          </div>

          {formData.role === "entrepreneur" ? (
            <>
              {/* Stepper Line */}
              <div
                className={`w-40 h-[3px] ${currentStep > 2 ? "bg-black" : "bg-gray-300"
                  }`}
              ></div>

              {/* Step 3 */}
              <div className="flex items-center">
                <div className="relative flex gap-4 items-center">
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full font-medium ${currentStep >= 3
                        ? "bg-gray-300 text-black"
                        : "bg-gray-200 text-black border border-gray-600"
                      }`}
                  >
                    3
                  </div>
                  <span
                    className={`text-sm mt-2 h-8 ${currentStep >= 3
                        ? "text-black font-medium"
                        : "text-gray-500 font-medium"
                      }`}
                  >
                    Payment
                  </span>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  };

  const renderFormStep = () => (
    <>
      {/* Name, Phone, Age in one row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 ">
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
            className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
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
            className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
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
            className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
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
              className="w-[70%] py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
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
            className="w-[70%] py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <button
            onClick={handleVerifyEmailOTP}
            className={`ml-2 px-10 py-4 rounded-full text-white cursor-pointer ${emailVerified
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
            className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
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
            className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
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
          className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
          required
        >
          <option value="User">User</option>
          <option value="sponsor">Sponsor</option>
          <option value="visitor">Visitor</option>
          <option value="entrepreneur">Entrepreneur</option>
        </select>
      </div>

      {/* Company Details (Visible after email verification) */}
      {emailVerified &&
        (formData.role === "entrepreneur" || formData.role === "sponsor") && (
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
                  className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
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
                  className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
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
                  className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
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
                  className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
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
                  className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
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
                  className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
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
                <span className="text-lg  text-bold">Applying as Visitor</span>
              </label>
            </div>
          </>
        )}

      {/* Submit Button */}
      <button
        className="w-full bg-[#01210f] cursor-pointer text-white px-6 mt-6 rounded-full py-3 hover:bg-[#01210f] focus:outline-none focus:ring-2  disabled:bg-gray-500"
        disabled={!emailVerified}
        onClick={() => setCurrentStep(2)}
      >
        Next
      </button>
    </>
  );
  const renderPreviewStep = () => (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold mb-4">Preview Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <strong>Name:</strong> {formData.name}
        </div>
        <div>
          <strong>Email:</strong> {formData.email}
        </div>
        <div>
          <strong>Phone:</strong> {formData.phone}
        </div>
        <div>
          <strong>Age:</strong> {formData.age}
        </div>

        <div>
          <strong>Role:</strong> {formData.role}
        </div>
        {(formData.role === "entrepreneur" || formData.role === "sponsor") && (
          <>
            <div>
              <strong>Address:</strong> {formData.companyAddress}
            </div>
            <div>
              <strong>Company Name:</strong> {formData.companyName}
            </div>
            <div>
              <strong>Company Address:</strong> {formData.companyAddress}
            </div>
            <div>
              <strong>Pin Code:</strong> {formData.pin_code}
            </div>
            <div>
              <strong>Specialized In:</strong> {formData.specializedIn}
            </div>
            <div>
              <strong>GST:</strong> {formData.gst}
            </div>
            <div>
              <strong>CIN Number:</strong> {formData.cinNumber}
            </div>
            <div>
              <strong>Applying for Sponsorship:</strong>{" "}
              {formData.applyingForSponsership ? "Yes" : "No"}
            </div>
            <div>
              <strong>Applying for Booking Stalls:</strong>{" "}
              {formData.applyingForBookingStalls ? "Yes" : "No"}
            </div>
            <div>
              <strong>Applying as Visitor:</strong>{" "}
              {formData.applyingAsVisitor ? "Yes" : "No"}
            </div>
          </>
        )}
      </div>

      <div className="flex gap-4 mt-6">
        <button
          className="w-1/2 bg-gray-500 text-white cursor-pointer px-6 py-3 rounded-full hover:bg-gray-600"
          onClick={() => setCurrentStep(1)}
        >
          Previous
        </button>
        {formData.role === "entrepreneur" ? (
          <button
            className="w-1/2 bg-[#01210f] text-white cursor-pointer px-6 py-3 rounded-full hover:bg-[#01210f]"
            onClick={() => setCurrentStep(3)}
          >
            Next
          </button>
        ) : (
          <button
            className="w-1/2 bg-[#01210f] text-white cursor-pointer px-6 py-3 rounded-full hover:bg-[#01210f]"
            onClick={handleSubmitRegistrationForm}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
  const renderPaymentStep = () => (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold mb-4">Payment Details</h3>
      <div className="bg-[#f0eeee] p-6 rounded-lg shadow-md">
        <p className="text-lg mb-4">Total Amount: ₹ 30,000</p>
        <button
          className="w-full bg-[#01210f] text-white px-6 py-3 rounded-full hover:bg-[#01210f] cursor-pointer"
          onClick={handleSubmitRegistrationForm}
        >
          Proceed to Payment
        </button>
      </div>
      <div className="flex gap-4 mt-6">
        <button
          className="w-1/2 bg-gray-500 text-white px-6 py-3 rounded-full cursor-pointer hover:bg-gray-600"
          onClick={() => setCurrentStep(2)}
        >
          Previous
        </button>
      </div>
    </div>
  );
  return (
    <>
      <div className="w-full h-[1000px] flex flex-col min-h-screen relative pb-8 font-[Roboto]">
        <img
          src={Hero}
          alt="hero section image"
          className="w-full h-full absolute object-cover object-left lg:object-center -z-0"
          style={{
            transform: "scaleX(-1)",
          }}
        />
        <div className="relative z-40">
          <Header />
        </div>
        <div
          className="w-full h-full flex flex-col min-h-screen absolute z-10"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(131, 131, 131, 0) -5.87%, rgba(1, 33, 15, 0.7) -5.32%, rgba(1, 33, 15, 0.7) 82.44%)`,
            backgroundSize: "100% 100%", // Adjust size as per requirement
            backgroundPosition: "left center", // Ensures the gradient starts from the left
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full h-auto flex items-center justify-center font-[Roboto] py-40 ">
            <div className="w-[95%] lg:w-[75%] p-4 md:p-8 bg-white shadow-lg rounded-3xl my-10 border-4 border-[#969696]">
              {renderStepper()}

              <h2 className="text-4xl font-bold text-center text-[#374836] mb-10">
                User Registration
              </h2>

              {currentStep === 1 && renderFormStep()}
              {currentStep === 2 && renderPreviewStep()}
              {currentStep === 3 && renderPaymentStep()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserRegistrationForm;

//   const renderStepper = () => {
//     return (
//       <div className="w-full flex justify-center">
//         <div
//           className={`${formData.role === "entrepreneur" ? "w-[80%]" : "w-[50%]"
//             } flex justify-between items-center mb-8`}
//         >
//           {/* Step 1 */}
//           <div className="flex items-center">
//             <div className="relative flex gap-4 items-center">
//               <div
//                 className={`w-8 h-8 flex items-center justify-center rounded-full font-medium ${currentStep >= 1
//                   ? "bg-black text-white"
//                   : "bg-gray-200 text-black border border-gray-600"
//                   }`}
//               >
//                 1
//               </div>
//               <span
//                 className={`text-sm mt-2 h-8 ${currentStep >= 1
//                   ? "text-black font-medium"
//                   : "text-gray-500 font-semibold"
//                   }`}
//               >
//                 Attendee Information
//               </span>
//             </div>
//           </div>

//           {/* Stepper Line */}
//           <div
//             className={`w-40 h-[3px] ${currentStep > 1 ? "bg-black" : "bg-gray-300"
//               }`}
//           ></div>

//           {/* Step 2 */}
//           <div className="flex items-center">
//             <div className="relative flex gap-4 items-center">
//               <div
//                 className={`w-8 h-8 flex items-center justify-center rounded-full font-medium ${currentStep >= 2
//                   ? "bg-black text-white"
//                   : "bg-gray-200 text-black border border-gray-600"
//                   }`}
//               >
//                 2
//               </div>
//               <span
//                 className={`text-sm mt-2 h-8 ${currentStep >= 2
//                   ? "text-black font-medium"
//                   : "text-gray-500 font-medium"
//                   }`}
//               >
//                 Preview
//               </span>
//             </div>
//           </div>

//           {formData.role === "entrepreneur" ? (
//             <>
//               {/* Stepper Line */}
//               <div
//                 className={`w-40 h-[3px] ${currentStep > 2 ? "bg-black" : "bg-gray-300"
//                   }`}
//               ></div>

//               {/* Step 3 */}
//               <div className="flex items-center">
//                 <div className="relative flex gap-4 items-center">
//                   <div
//                     className={`w-8 h-8 flex items-center justify-center rounded-full font-medium ${currentStep >= 3
//                       ? "bg-gray-300 text-black"
//                       : "bg-gray-200 text-black border border-gray-600"
//                       }`}
//                   >
//                     3
//                   </div>
//                   <span
//                     className={`text-sm mt-2 h-8 ${currentStep >= 3
//                       ? "text-black font-medium"
//                       : "text-gray-500 font-medium"
//                       }`}
//                   >
//                     Payment
//                   </span>
//                 </div>
//               </div>
//             </>
//           ) : (
//             ""
//           )}
//         </div>
//       </div>
//     );
//   };

//   const renderFormStep = () => (
//     <>
//       {/* Name, Phone, Age in one row */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 ">
//         {/* Name */}
//         <div>
//           <label className="block text-base  font-bold text-gray-700 mb-1">
//             Name:
//           </label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
//             required
//           />
//         </div>

//         {/* Phone */}
//         <div>
//           <label className="block text-base  font-bold text-gray-700 mb-1">
//             Phone:
//           </label>
//           <input
//             type="number"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
//             placeholder="+91"
//             required
//           />
//         </div>

//         {/* Age */}
//         <div>
//           <label className="block text-base  font-bold text-gray-700 mb-1">
//             Age:
//           </label>
//           <input
//             type="number"
//             name="age"
//             value={formData.age}
//             onChange={handleChange}
//             className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>
//       </div>

//       {/* Email, Send OTP, Verify in one row */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//         {/* Email */}
//         <div>
//           <label className="block text-base  font-bold text-gray-700 mb-1">
//             Email:
//           </label>
//           <div className="w-full flex gap-4 items-center">
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-[70%] py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
//               required
//               disabled={emailVerified}
//             />
//             <div className="flex items-end">
//               <button
//                 onClick={handleSendEmailOTP}
//                 className="w-full bg-[#01210f] text-white px-6 py-4 cursor-pointer rounded-full hover:bg-[#01210f] focus:outline-none"
//               >
//                 Send OTP
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Verify OTP */}
//         <div className="w-full flex items-end">
//           <input
//             type="text"
//             placeholder="Enter Email OTP"
//             value={otpEmail}
//             onChange={(e) => setOtpEmail(e.target.value)}
//             className="w-[70%] py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//           <button
//             onClick={handleVerifyEmailOTP}
//             className={`ml-2 px-10 py-4 rounded-full text-white cursor-pointer ${emailVerified
//               ? "bg-green-500"
//               : "bg-[#01210f]  hover:bg-[#01210f] "
//               } focus:outline-none focus:ring-2 focus:ring-blue-500`}
//             disabled={emailVerified}
//           >
//             {emailVerified ? "Verified" : "Verify"}
//           </button>
//         </div>
//       </div>

//       {/* Password and Address in one row */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//         {/* Password */}
//         <div>
//           <label className="block text-base  font-bold text-gray-700 mb-1">
//             Password:
//           </label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
//             required
//           />
//         </div>

//         {/* Address */}
//         <div>
//           <label className="block text-base  font-bold text-gray-700 mb-1">
//             Address:
//           </label>
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>
//       </div>

//       {/* Role Dropdown */}
//       <div className="mb-4">
//         <label className="block text-base  font-bold text-gray-700 mb-1">
//           Role:
//         </label>
//         <select
//           name="role"
//           value={formData.role}
//           onChange={handleChange}
//           className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
//           required
//         >
//           <option value="User">User</option>
//           <option value="sponsor">Sponsor</option>
//           <option value="visitor">Visitor</option>
//           <option value="entrepreneur">Entrepreneur</option>
//         </select>
//       </div>

//       {/* Company Details (Visible after email verification) */}
//       {emailVerified &&
//         (formData.role === "entrepreneur" || formData.role === "sponsor") && (
//           <>
//             <h3 className="text-2xl font-semibold text-[#374836] mt-6 mb-4">
//               Company Details
//             </h3>

//             {/* Company Name and Company Address in one row */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               {/* Company Name */}
//               <div>
//                 <label className="block text-base  font-bold text-gray-700 mb-1">
//                   Company Name:
//                 </label>
//                 <input
//                   type="text"
//                   name="companyName"
//                   value={formData.companyName}
//                   onChange={handleChange}
//                   className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
//                 />
//               </div>

//               {/* Company Address */}
//               <div>
//                 <label className="block text-base  font-bold text-gray-700 mb-1">
//                   Company Address:
//                 </label>
//                 <input
//                   type="text"
//                   name="companyAddress"
//                   value={formData.companyAddress}
//                   onChange={handleChange}
//                   className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
//                 />
//               </div>
//             </div>

//             {/* Pin Code and Specialized In in one row */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               {/* Pin Code */}
//               <div>
//                 <label className="block text-base  font-bold text-gray-700 mb-1">
//                   Pin Code:
//                 </label>
//                 <input
//                   type="number"
//                   name="pin_code"
//                   value={formData.pin_code}
//                   onChange={handleChange}
//                   className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
//                 />
//               </div>

//               {/* Specialized In */}
//               <div>
//                 <label className="block text-base  font-bold text-gray-700 mb-1">
//                   Specialized In:
//                 </label>
//                 <input
//                   type="text"
//                   name="specializedIn"
//                   value={formData.specializedIn}
//                   onChange={handleChange}
//                   className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
//                 />
//               </div>
//             </div>

//             {/* GST and CIN Number in one row */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               {/* GST */}
//               <div>
//                 <label className="block text-base  font-bold text-gray-700 mb-1">
//                   GST:
//                 </label>
//                 <input
//                   type="text"
//                   name="gst"
//                   value={formData.gst}
//                   onChange={handleChange}
//                   className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
//                 />
//               </div>

//               {/* CIN Number */}
//               <div>
//                 <label className="block text-base  font-bold text-gray-700 mb-1">
//                   CIN Number:
//                 </label>
//                 <input
//                   type="text"
//                   name="cinNumber"
//                   value={formData.cinNumber}
//                   onChange={handleChange}
//                   className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
//                 />
//               </div>
//             </div>

//             {/* Checkboxes */}
//             <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="applyingForSponsership"
//                   checked={formData.applyingForSponsership}
//                   onChange={handleChange}
//                   className="w-6 h-6 mr-6"
//                 />
//                 <span className="text-lg  text-bold">
//                   Applying for Sponsorship
//                 </span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="applyingForBookingStalls"
//                   checked={formData.applyingForBookingStalls}
//                   onChange={handleChange}
//                   className="w-6 h-6 mr-6"
//                 />
//                 <span className="text-lg  text-bold">
//                   Applying for Booking Stalls
//                 </span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="applyingAsVisitor"
//                   checked={formData.applyingAsVisitor}
//                   onChange={handleChange}
//                   className="w-6 h-6 mr-6 rounded "
//                 />
//                 <span className="text-lg  text-bold">Applying as Visitor</span>
//               </label>
//             </div>
//           </>
//         )}

//       {/* Submit Button */}
//       <button
//         className="w-full bg-[#01210f] cursor-pointer text-white px-6 mt-6 rounded-full py-3 hover:bg-[#01210f] focus:outline-none focus:ring-2  disabled:bg-gray-500"
//         disabled={!emailVerified}
//         // onClick={handleSubmitRegistrationForm}
//         onClick={() => setCurrentStep(2)}
//       >
//         Next
//       </button>
//     </>
//   );
//   const renderPreviewStep = () => (
//     <div className="space-y-4">
//       <h3 className="text-2xl font-bold mb-4">Preview Details</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <strong>Name:</strong> {formData.name}
//         </div>
//         <div>
//           <strong>Email:</strong> {formData.email}
//         </div>
//         <div>
//           <strong>Phone:</strong> {formData.phone}
//         </div>
//         <div>
//           <strong>Age:</strong> {formData.age}
//         </div>

//         <div>
//           <strong>Role:</strong> {formData.role}
//         </div>
//         {(formData.role === "entrepreneur" || formData.role === "sponsor") && (
//           <>
//             <div>
//               <strong>Address:</strong> {formData.companyAddress}
//             </div>
//             <div>
//               <strong>Company Name:</strong> {formData.companyName}
//             </div>
//             <div>
//               <strong>Company Address:</strong> {formData.companyAddress}
//             </div>
//             <div>
//               <strong>Pin Code:</strong> {formData.pin_code}
//             </div>
//             <div>
//               <strong>Specialized In:</strong> {formData.specializedIn}
//             </div>
//             <div>
//               <strong>GST:</strong> {formData.gst}
//             </div>
//             <div>
//               <strong>CIN Number:</strong> {formData.cinNumber}
//             </div>
//             <div>
//               <strong>Applying for Sponsorship:</strong>{" "}
//               {formData.applyingForSponsorship ? "Yes" : "No"}
//             </div>
//             <div>
//               <strong>Applying for Booking Stalls:</strong>{" "}
//               {formData.applyingForBookingStalls ? "Yes" : "No"}
//             </div>
//             <div>
//               <strong>Applying as Visitor:</strong>{" "}
//               {formData.applyingAsVisitor ? "Yes" : "No"}
//             </div>
//           </>
//         )}
//       </div>

//       <div className="flex gap-4 mt-6">
//         <button
//           className="w-1/2 bg-gray-500 text-white cursor-pointer px-6 py-3 rounded-full hover:bg-gray-600"
//           onClick={() => setCurrentStep(1)}
//         >
//           Previous
//         </button>
//         {formData.role === "entrepreneur" ? (
//           <button
//             className="w-1/2 bg-[#01210f] text-white cursor-pointer px-6 py-3 rounded-full hover:bg-[#01210f]"
//             onClick={() => setCurrentStep(3)}
//           >
//             Next
//           </button>
//         ) : (
//           <button
//             className="w-1/2 bg-[#01210f] text-white cursor-pointer px-6 py-3 rounded-full hover:bg-[#01210f]"
//             onClick={handleSubmitRegistrationForm}
//           >
//             Submit
//           </button>
//         )}
//       </div>
//     </div>
//   );
//   const renderPaymentStep = () => (
//     <div className="space-y-4">
//       <h3 className="text-2xl font-bold mb-4">Payment Details</h3>
//       <div className="bg-[#f0eeee] p-6 rounded-lg shadow-md">
//         <p className="text-lg mb-4">Total Amount: ₹ 30,000</p>
//         <button
//           className="w-full bg-[#01210f] text-white px-6 py-3 rounded-full hover:bg-[#01210f] cursor-pointer"
//           onClick={handleSubmitRegistrationForm}
//         >
//           Proceed to Payment
//         </button>
//       </div>
//       <div className="flex gap-4 mt-6">
//         <button
//           className="w-1/2 bg-gray-500 text-white px-6 py-3 rounded-full cursor-pointer hover:bg-gray-600"
//           onClick={() => setCurrentStep(2)}
//         >
//           Previous
//         </button>
//       </div>
//     </div>
//   );
//   return (
//     <>
//       <div className="w-full h-[1000px] flex flex-col min-h-screen relative pb-8 font-[Roboto]">
//         <img
//           src={Hero}
//           alt="hero section image"
//           className="w-full h-full absolute object-cover object-left lg:object-center -z-0"
//           style={{
//             transform: "scaleX(-1)",
//           }}
//         />
//         <div className="relative z-40">
//           <Header />
//         </div>
//         <div
//           className="w-full h-full flex flex-col min-h-screen absolute z-10"
//           style={{
//             backgroundImage: `linear-gradient(180deg, rgba(131, 131, 131, 0) -5.87%, rgba(1, 33, 15, 0.7) -5.32%, rgba(1, 33, 15, 0.7) 82.44%)`,
//             backgroundSize: "100% 100%", // Adjust size as per requirement
//             backgroundPosition: "left center", // Ensures the gradient starts from the left
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//           <div className="w-full h-auto flex items-center justify-center font-[Roboto] py-40 ">
//             <div className="w-[75%] p-8 bg-white shadow-lg rounded-3xl my-10 border-4 border-[#969696]">
//               {renderStepper()}

//               <h2 className="text-4xl font-bold text-center text-[#374836] mb-10">
//                 User Registration
//               </h2>

//               {currentStep === 1 && renderFormStep()}
//               {currentStep === 2 && renderPreviewStep()}
//               {currentStep === 3 && renderPaymentStep()}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default UserRegistrationForm;
