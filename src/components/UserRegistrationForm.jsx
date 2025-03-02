import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import Hero from "../assets/Hero.jpg";
import { toast } from "react-toastify";

const backend = "https://kisaan-mahakumbh-backend.vercel.app/api/v1";
// const backend = 'http://localhost:8080/api/v1'

const UserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    city: "",
    address: "",
    role: "User", // Default role
    companyType: "",
    accommodationRoom: "no",
    companyName: "",
    industry: "",
    customIndustry: "",
    sponsorshipType: "",
    stallSize: "",
    customStallSize: ""
  });

  const navigate = useNavigate();
  const location = useLocation();

  // console.log(location.state);

  const { id } = useParams();

  const validateForm = (formData) => {
    const errors = {};

    // Name Validation
    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      errors.name = "Name should contain only letters.";
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

    // Designation Validation
    if (!formData.designation.trim()) {
      errors.designation = "Designation is required.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.designation)) {
      errors.designation = "Designation should contain only letters.";
    }

    // City Validation
    if (!formData.city.trim()) {
      errors.city = "City is required.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.city)) {
      errors.city = "City name should contain only letters.";
    }

    // Address Validation (Allowing numbers, as addresses may contain them)
    if (!formData.address.trim()) {
      errors.address = "Address is required.";
    } else if (!/^[A-Za-z0-9\s,.-]+$/.test(formData.address)) {
      errors.address = "Address contains invalid characters.";
    }

    // Company Type Validation
    if (!formData.companyType.trim()) {
      errors.companyType = "Company type is required.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.companyType)) {
      errors.companyType = "Company type should contain only letters.";
    }

    // Company Name Validation
    if (!formData.companyName.trim()) {
      errors.companyName = "Company name is required.";
    } else if (!/^[A-Za-z0-9\s&.,'-]+$/.test(formData.companyName)) {
      errors.companyName = "Company name contains invalid characters.";
    }

    // Industry Validation
    if (!formData.industry.trim()) {
      errors.industry = "Industry is required.";
    }

    // Custom Industry Validation (if "Other" is selected)
    if (formData.industry === "Other" && !formData.customIndustry.trim()) {
      errors.customIndustry = "Please specify your industry.";
    }

    // Company Type Validation (if applicable)
    if (formData.role === "entrepreneur") {
      if (!formData.stallSize.trim()) {
        errors.stallSize = "Stall size is required.";
      }
    }

    // Sponsorship & Stall Size Validation (if sponsor)
    if (formData.role === "sponsor") {
      if (!formData.sponsorshipType.trim()) {
        errors.sponsorshipType = "Sponsorship type is required.";
      }
    }

    // Accommodation Validation
    if (!["yes", "no"].includes(formData.accommodationRoom)) {
      errors.accommodationRoom = "Please select accommodation option.";
    }

    return errors;
  };

  async function verifyStatus(id) {
    try {
      toast.dismiss();
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.post(
        `${backend}/payment/verify`,
        {
          transactionId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem("token");
      toast.success("Payment successful!");
      navigate("/");
    } catch (error) {
      console.log("Error verifying status", error);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.state) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        role: location.state,
      }));
    }
    if (id) {
      verifyStatus(id);
    }
  }, []);
  const [currentStep, setCurrentStep] = useState(1);

  async function generateTicket(token) {
    try {
      toast.dismiss();
      const response = await axios.post(
        `${backend}/ticket/generate`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Ticket Sent successfully to your email !");
      setFormData({
        name: "",
        email: "",
        phone: "",
        designation: "",
        city: "",
        address: "",
        role: "User", // Default role
        companyType: "",
        accommodationRoom: "No",
        companyName: "",
        industry: "",
        customIndustry: "",
        sponsorshipType: "",
        customStallSize: "",
      });
      navigate("/");
    } catch (error) {
      console.log("Error generating ticket", error);
    }
  }

  const handlePayment = async (token) => {
    // Check mobile number before proceeding
    toast.dismiss();

    let price = 0;
    if (formData.stallSize === "2x3") {
      price = 1;
    } else if (formData.stallSize === "3x4") {
      price = 50000;
    } else {
      price = 50000;
    }

    const orderDetails = {
      amount: price,
      transactionId: "T" + Date.now(),
      role: formData.role,
    };

    try {
      // Make a POST request to create the order
      const response = await axios.post(
        `${backend}/payment/process`,
        orderDetails,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (
        response.data.data.payment.message === "Sponsorship interest received"
      ) {
        toast.success("Sponsorship interest received successfully!");
        navigate("/");
        return;
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
      toast.dismiss();
      const response = await axios.post(`${backend}/auth/signup`, formData);
      toast.success("Registration successful!");
      const token = response.data.data.token;
      // console.log(token);
      localStorage.setItem("token", JSON.stringify(token));
      if (
        formData.role === "User" ||
        formData.role === "visitor" ||
        formData.role === "delegate"
      ) {
        generateTicket(token);
      } else {
        handlePayment(token);
      }
    } catch (error) {
      toast.error(error.response?.data?.data?.message || "Failed to register");
      console.error(
        "Error registering:",
        error.response?.data || error.message
      );
    }
  };

  function nextStep() {
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      let errorMessages = Object.values(errors).join("\n");
      toast.error("Please fix the following errors:\n\n" + errorMessages);
      return;
    }
    setCurrentStep(2)
  }

  // console.log(formData)

  const validateFormData = () => {
    const {
      name,
      email,
      phone,
      designation,
      city,
      address,
      companyType,
      accommodationRoom,
      companyName,
      industry,
      customIndustry,
      sponsorshipType,
      stallSize,
      role,
    } = formData;

    // Check if all common fields are filled
    const commonFieldsFilled = [
      name,
      email,
      phone,
      designation,
      city,
      address,
      companyType,
      accommodationRoom,
      companyName,
      industry,
    ].every((field) => field.trim() !== "");

    // Additional validation based on role
    if (role === "entrepreneur" && stallSize.trim() === "") return false;
    if (role === "sponsor" && sponsorshipType.trim() === "") return false;

    return commonFieldsFilled;
  };

  const renderStepper = () => {
    return (
      <div className="w-full flex justify-center">
        <div
          className={`${formData.role === "entrepreneur"
            ? "w-full md:w-full xl:w-[80%]"
            : "w-full md:w-[50%]"
            } flex flex-col md:flex-row gap-2 justify-between items-center mb-8`}
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
            className={`md:w-40 h-[3px] w-6 rotate-90 md:rotate-0 ${currentStep > 1 ? "bg-black" : "bg-gray-300"
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
                className={`md:w-40 h-[3px] w-6 rotate-90 md:rotate-0 ${currentStep > 2 ? "bg-black" : "bg-gray-300"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 ">
        {/* Name */}
        <div>
          <label className="block text-base  font-bold text-gray-700 mb-1">
            Name:
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            onWheel={(e) => e.target.blur()}
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600 "
            placeholder="+91"
            required
          />
        </div>

        {/* Designation */}
        <div>
          <label className="block text-base  font-bold text-gray-700 mb-1">
            Designation:
          </label>
          <input
            type="text"
            name="designation"
            placeholder="Enter your Designation"
            value={formData.designation}
            onChange={(e) =>
              setFormData({ ...formData, designation: e.target.value })
            }
            className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div>
          <label className="block text-base  font-bold text-gray-700 mb-1">
            Email:
          </label>
          <div className="w-full flex flex-col md:flex-row gap-4 items-center">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600`}
              required
            />
          </div>
        </div>
      </div>
      {/* Password and Address in one row */}
      <div className="grid grid-cols-1 gap-4 mb-4">
        {/* Address */}
        <div>
          <label className="block text-base  font-bold text-gray-700 mb-1">
            Address:
          </label>
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
      </div>

      {/* Role Dropdown */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-4">
        <div>
          <label className="block text-base  font-bold text-gray-700 mb-1">
            Role:
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          >
            <option value="user" disabled>
              Select Role
            </option>
            <option value="sponsor">Sponsor</option>
            <option value="visitor">Visitor</option>
            <option value="entrepreneur">Entrepreneur</option>
            <option value="delegate">Delegate</option>
          </select>
        </div>
        {/* city */}
        <div>
          <label className="block text-base  font-bold text-gray-700 mb-1">
            City:
          </label>
          <input
            type="text"
            name="city"
            placeholder="Enter your city"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
        </div>
      </div>

      {/* Company Name and Company Address in one row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Company Name */}
        <div>
          <label className="block text-base  font-bold text-gray-700 mb-1">
            Company Name:
          </label>
          <input
            type="text"
            placeholder="Enter your company name"
            name="companyName"
            value={formData.companyName}
            onChange={(e) =>
              setFormData({ ...formData, companyName: e.target.value })
            }
            className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Company Type */}
        <div>
          <label className="block text-base font-bold text-gray-700 mb-1">
            Company Type:
          </label>
          <select
            name="companyStartupInstitution"
            value={formData.companyType}
            onChange={(e) =>
              setFormData({ ...formData, companyType: e.target.value })
            }
            className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="company">Company</option>
            <option value="startup">Startup</option>
            <option value="institution">Institution</option>
          </select>
        </div>
      </div>

      {/* Industry and Accomodation in one row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-base font-bold text-gray-700 mb-1">
            Industry:
          </label>
          <select
            name="industry"
            value={formData.industry}
            onChange={(e) =>
              setFormData({
                ...formData,
                industry: e.target.value,
                customIndustry: "",
              })
            }
            className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          >
            <option value="" disabled>
              Select Industry
            </option>
            <option value="agritech">Agritech</option>
            <option value="iot">IOT</option>
            <option value="edutech">Edutech</option>
            <option value="ai_ml_blockchain">AI ML Blockchain</option>
            <option value="health_tech">Health tech</option>
            <option value="ecom">ECOM</option>
            <option value="custom">Others (Specify)</option>
          </select>

          {/* Show text input when "Others" is selected */}
          {formData.industry === "custom" && (
            <input
              type="text"
              name="customIndustry"
              placeholder="Specify your industry"
              value={formData.customIndustry}
              onChange={(e) =>
                setFormData({ ...formData, customIndustry: e.target.value })
              }
              className="w-full mt-4 py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          )}
        </div>
        <div>
          <label className="block text-base font-bold text-gray-700 mb-1">
            Accommodation Room :
          </label>
          <div className="flex gap-4 items-center pt-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="yes"
                name="accommodationRoom"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    accommodationRoom: e.target.value,
                  })
                }
                className="w-5 h-5 mr-2"
              />
              Yes
            </label>

            <label className="flex items-center">
              <input
                type="radio"
                value="no"
                name="accommodationRoom"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    accommodationRoom: e.target.value,
                  })
                }
                className="w-5 h-5 mr-2"
              />
              No
            </label>
          </div>
        </div>
      </div>
      {formData.role === "sponsor" && (
        <div className="w-full">
          <label className="block text-base font-bold text-gray-700 mb-1">
            Type of Sponsorship:
          </label>
          <select
            name="sponsorshipType"
            value={formData.sponsorshipType}
            onChange={(e) =>
              setFormData({ ...formData, sponsorshipType: e.target.value })
            }
            className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          >
            <option value="" disabled>
              Select Sponsorship Type
            </option>
            <option value="title_sponsor">Title Sponsor</option>
            <option value="platinum_sponsor">Platinum Sponsor</option>
            <option value="gold_sponsor">Gold Sponsor</option>
            <option value="silver_sponsor">Silver Sponsor</option>
            <option value="co_powered_by">Co-Powered By</option>
            <option value="shipping_partner">Shipping Partner</option>
            <option value="marketing_partner">Marketing Partner</option>
            <option value="media_partner">Media Partner</option>
            <option value="hotel_partner">Hotel Partner</option>
            <option value="food_partner">Food Partner</option>
            <option value="technology_partner">Technology Partner</option>
            <option value="csr_partner">CSR Partner</option>
          </select>
        </div>
      )}

      {formData.role === "entrepreneur" && (
        <div className="w-full">
          <label className="block text-base font-bold text-gray-700">
            Stall Size:
          </label>
          <select
            name="stallsize"
            value={formData.stallSize}
            onChange={(e) =>
              setFormData({
                ...formData,
                stallSize: e.target.value,
                customStallSize: "",
              })
            }
            className="w-full py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          >
            <option value="" disabled>
              Select Stall Size
            </option>
            <option value="2x3">2x3 m</option>
            <option value="3x4">3x4 m</option>
            <option value="custom">Custom</option>
          </select>

          {/* Show text input when "Others" is selected */}
          {formData.stallSize === "custom" && (
            <input
              type="text"
              name="customStallSize"
              placeholder="Specify your Stall Size (3x4 m)"
              value={formData.customStallSize}
              onChange={(e) =>
                setFormData({ ...formData, customStallSize: e.target.value })
              }
              className="w-full mt-4 py-4 px-4 bg-[#f0eeee] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          )}
        </div>
      )}

      {/* Submit Button */}
      <button
        className="w-full bg-[#01210f] cursor-pointer text-white px-6 mt-6 rounded-full py-3 hover:bg-[#01210f] focus:outline-none focus:ring-2  disabled:bg-gray-500"
        disabled={!validateFormData()}
        onClick={nextStep}
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
          <strong>Designation:</strong> {formData.designation}
        </div>

        <div>
          <strong>Role:</strong> {formData.role}
        </div>
        {(formData.role === "entrepreneur" || formData.role === "sponsor") && (
          <>
            <div>
              <strong>Address:</strong> {formData.address}
            </div>
            <div>
              <strong>Company Name:</strong> {formData.companyName}
            </div>
            <div>
              <strong>Industry:</strong> {formData.industry}
            </div>
            {formData.role === "sponsor" && (
              <div>
                <strong>Sponsorship Type:</strong> {formData.sponsorshipType}
              </div>
            )}
            {formData.role === "entrepreneur" && (
              <div>
                <strong>Stall Size:</strong> {formData.stallSize}
              </div>
            )}
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
  const renderPaymentStep = () => {
    const getTotalAmount = () => {
      if (formData.stallSize === "2x3") return 1;
      if (formData.stallSize === "3x4" || formData.stallSize === "custom")
        return 50000;
      return 0; // Default case (optional)
    };

    return (
      <div className="space-y-4">
        <h3 className="text-2xl font-bold mb-4">Payment Details</h3>
        <div className="bg-[#f0eeee] p-6 rounded-lg shadow-md">
          <p className="text-lg mb-4">Total Amount: ₹ {getTotalAmount()}</p>
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
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  return (
    <>
      <div className="w-full h-auto flex flex-col min-h-screen relative pb-8 font-[Roboto]">
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
        ></div>
        <div className="w-full h-auto flex items-center justify-center font-[Roboto] py-20  relative z-30">
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
    </>
  );
};
export default UserRegistrationForm;
