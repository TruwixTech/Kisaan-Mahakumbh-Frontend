import ContactComponent from "../components/ContactComponent";
import Hero from "../assets/Hero.jpg";
import { FaHome } from "react-icons/fa";
import Header from "../components/Header";

const ContactForm = () => {
  return (
    <>
      <div className="bg-[#D9D9D9] w-full h-auto font-[Roboto]">
        <div
          className="relative z-40"
          style={{
            backgroundImage: `url(${Hero})`,
            backgroundSize: "cover", // Adjust size as per requirement
            backgroundPosition: "top", // Ensures the gradient starts from the left
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="w-full h-full flex flex-col absolute z-10"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(19, 19, 19, 0.49) 49%, rgba(131, 131, 131, 0) 100%)`,
              backgroundSize: "100% 100%", // Adjust size as per requirement
              backgroundPosition: "left center", // Ensures the gradient starts from the left
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <Header />
        </div>
        <div className="w-full px-5 md:px-10 lg:px-20 py-15 md:py-10 md:gap-2 bg-[#e7e7e7] h-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-[#01210f] mb-4">
            Contact Us
          </h2>
          <div className="w-full h-auto flex items-center justify-center mb-10 md:mb-20">
            <span className="flex items-center justify-center text-black gap-1">
              <FaHome size={20} />
              Home
            </span>
            <span className="text-[#0000004D]"> - Pages - Contact Us</span>
          </div>

          {/* Grid Layout for Form & Contact Info */}
          <ContactComponent />

          <div className=" py-20 p-5 w-full flex justify-center items-center">
            <div className="w-full h-[500px]">
              <iframe
                title="Google Map"
                className="w-full h-full rounded-xl shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d839.0300177388709!2d77.16172786289376!3d28.62584064432734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM3JzMzLjIiTiA3N8KwMDknNDEuNCJF!5e0!3m2!1sen!2sin!4v1739945782570!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
