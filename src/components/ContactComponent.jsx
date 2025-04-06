import axios from "axios";
import { useState } from "react";
import mailicon from "../assets/mailicon.svg";
import phone from "../assets/phone.svg";
import { toast } from "react-toastify";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manual Validation
  const validateForm = () => {
    const { name, email, phone, subject, message } = formData;

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
    const alphabetPattern = /[a-zA-Z]/; // Check if the phone contains alphabets
    if (!phone.trim()) {
      toast.error("Phone number is required.");
      return false;
    } else if (alphabetPattern.test(phone)) {
      toast.error("Alphabets are not allowed in phone number.");
      return false;
    } else if (!phonePattern.test(phone)) {
      toast.error("Phone number must be exactly 10 digits.");
      return false;
    }

    // Subject validation
    if (!subject.trim()) {
      toast.error("Subject is required.");
      return false;
    } else if (subject.length < 3) {
      toast.error("Subject must be at least 3 characters.");
      return false;
    }

    // Message validation
    if (!message.trim()) {
      toast.error("Message is required.");
      return false;
    } else if (message.length < 10) {
      toast.error("Message must be at least 10 characters.");
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.dismiss();

    // Validate form before submitting
    if (!validateForm()) return;

    setLoading(true);

    try {
      await axios.post(
        "https://kisaan-mahakumbh-backend.vercel.app/api/v1/contact",
        formData
      );
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error(
        "Error sending message:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8 font-[Roboto]">
        {/* Left Section - Contact Details */}
        <div className="space-y-6 mt-8 flex flex-col gap-1 lg:gap-2">
          <h3 className="text-[#374836] text-2xl font-bold xl:text-3xl mb-1">
            | Contact us |
          </h3>
          <h3 className="text-6xl font-bold text-[#374836] leading-15">
            Join Us At <br /> Kisan Kumbh 2025
          </h3>

          <div>
            <h4 className="font-semibold text-2xl text-[#373f43] mb-4">
              Emails
            </h4>
            <p className="text-[#8c959f] flex gap-4 items-center">
              <span>
                <img src={mailicon} alt="" />
              </span>{" "}
              kisankumbh@gmail.com
            </p>
            <p className="text-[#8c959f] flex gap-4 items-center">
              <span>
                <img src={mailicon} alt="" />
              </span>{" "}
              info@kisankumbh.in
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-2xl text-[#373f43] mb-4">
              Reach out to us at
            </h4>
            <p className="text-[#8c959f] flex gap-4 items-center">
              <span>
                <img src={phone} alt="" />
              </span>{" "}
              9911146567
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-2xl text-[#373f43] mb-4">
              Social Links
            </h4>
            <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61573747164794"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#146a3a] rounded-full flex justify-center items-center"
            >
              <FaFacebookF size={20} className="text-white" />
            </a>
            <a
              href="https://www.instagram.com/kisankumbh2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#146a3a] rounded-full flex justify-center items-center"
            >
              <FaInstagram size={20} className="text-white" />
            </a>
            <a
              href="https://x.com/Kisankumbh2025"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#146a3a] rounded-full flex justify-center items-center"
            >
              <FaXTwitter size={20} className="text-white" />
            </a>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 font-[Roboto]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block text-lg font-bold mb-2 text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full py-4 px-4 bg-white rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-bold mb-2 text-gray-700">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full py-4 px-4 bg-white rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Your email address"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Phone */}
            <div>
              <label className="block text-lg font-bold mb-2 text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full py-4 px-4 bg-white rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Your Phone Number"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-lg font-bold mb-2 text-gray-700">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full py-4 px-4 bg-white rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Your subject"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-lg font-bold mb-2 text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full py-4 px-4 resize-none bg-white rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Write message"
              rows="5"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#01210f] text-white p-3 px-10 rounded-2xl hover:bg-[#203429] cursor-pointer disabled:bg-gray-400"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactComponent;
