import axios from 'axios'
import { useState } from 'react'
import mailicon from '../assets/mailicon.svg'
import phone from '../assets/phone.svg'

const ContactComponent = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    
      const [loading, setLoading] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        try {
          const response = await axios.post("https://kisaan-mahakumbh-backend.vercel.app/api/v1/contact", formData);
          alert("Message sent successfully!");
          // console.log(response.data); // Log the response from the API
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        } catch (error) {
          alert("Failed to send message. Please try again.");
          console.error("Error sending message:", error.response?.data || error.message);
        } finally {
          setLoading(false);
        }
      };
  return (
    <div>
       <div className="grid md:grid-cols-2 gap-8 font-[Roboto]">
    {/* Left Section - Contact Details */}
    <div className="space-y-6 mt-8">
      <h3 className="text-[#374836] text-2xl font-bold xl:text-3xl mb-1">| Contact us |</h3>
      <h3 className="text-6xl font-bold text-[#374836] leading-15">Join Us At <br /> Kisan Kumbh 2025</h3>
      
      <div>
        <h4 className="font-semibold text-2xl  text-[#373f43] mb-4">Emails</h4>
        <p className="text-[#8c959f] flex gap-4 items-center"><span><img src={mailicon} alt=""/></span> Cowtrition2019@gmail.com</p>
        <p className="text-[#8c959f] flex gap-4 items-center"><span><img src={mailicon} alt=""/></span> agritechinnovation24@gmail.com</p>
      </div>

      <div>
        <h4 className="font-semibold text-2xl  text-[#373f43] mb-4">Reach out to us at</h4>
        <p className="text-[#8c959f] flex gap-4 items-center"><span><img src={phone} alt=""/></span> 9540845510, 9582057533</p>
      </div>
    </div>

    {/* Right Section - Contact Form */}
    <form onSubmit={handleSubmit} className="space-y-6 font-[Roboto]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-lg font-bold mb-2 text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full py-4 px-4 bg-white rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Your full name"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-lg font-bold mb-2 text-gray-700">E-mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full py-4 px-4 bg-white rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Your email address"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Phone */}
        <div>
          <label className="block text-lg font-bold mb-2 text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full py-4 px-4 bg-white rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Your Phone Number"
            required
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-lg font-bold mb-2 text-gray-700">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full py-4 px-4 bg-white rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Your subject"
            required
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-lg font-bold mb-2 text-gray-700">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full  py-4 px-4 bg-white rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
          placeholder="Write message"
          rows="5"
          required
        />
      </div>

      {/* Submit Button */}
      <div className="">
        <button
          type="submit"
          disabled={loading}
          className="bg-[#01210f] text-white p-3 px-10 rounded-2xl hover:bg-[#203429] cursor-pointer disabled:bg-gray-400"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  </div>
    </div>
  )
}

export default ContactComponent
