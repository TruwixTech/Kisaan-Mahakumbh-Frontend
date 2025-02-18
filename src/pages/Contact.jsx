import ContactComponent from "../components/ContactComponent";
import home from "../assets/home.svg"

const ContactForm = () => {
  return (
    <>
      <div className="w-full px-4 md:px-20 bg-[#e7e7e7] h-auto py-28">
        {/* Title */}
        <h2 className="text-6xl font-bold text-center text-[#01210f] mb-4">
          Contact Us
        </h2>
        
        <div className='flex justify-center items-center text-center text-[17.84px] gap-2 mb-12' >
      <span className='text-black flex  items-center'><span className="mr-4"><img src={home} alt="" className="w-10" /></span>Home</span>
      <span className='text-gray-600'>-</span>
      <span className='text-gray-600'>Pages</span>
      <span className='text-gray-600'>-</span>
      <span className='text-gray-600'>About Us</span>
        </div>

        {/* Grid Layout for Form & Contact Info */}
        <ContactComponent />
        <div className="bg-[#d9d9d9] w-full h-[400px] rounded-3xl mt-20 ">

        </div>
      </div>
      
    </>
  );
};

export default ContactForm;
