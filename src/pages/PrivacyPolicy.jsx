import React, { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../assets/Hero.jpg'

function PrivacyPolicy() {

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    return (
        <div className='bg-[#e7e7e7]'>
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


            <div className="px-4 md:px-20 pt-28 pb-10 font-[Roboto]">
                <h1 className="md:text-4xl text-2xl font-bold mb-4 uppercase text-[#374836]" >
                Privacy Policy 
                </h1>

                <section className="mb-6 font-[Roboto]">
                    {/* <h2 className="text-xl font-semibold" style={{ color: '#16a34a' }}>No Refund Policy</h2> */}
                    <p className="mt-1 text-[16px]">
                        At <strong>Kisankumbh</strong> , we value your privacy and are committed to protecting your personal 
                        information. This Privacy Policy outlines how we collect, use, and safeguard your data.
                    </p>

                    <h2 className="text-xl font-bold  text- black font-[Roboto] mt-4">1. Information We Collect </h2>
                    <p className="mt-1 text-[16px] ">We may collect the following information: </p>
                    <ul className="list-disc list-inside mt-2 pl-4 text-[16px]">
                        <li><strong>Personal Information:</strong>  Name, email address, contact number, organization details. .</li>
                        <li><strong>Payment Information:</strong>  Transaction details (we do not store sensitive payment data). </li>
                        <li><strong>Event Participation Data:</strong>  Registration details, feedback, and engagement activities.</li>
                        <li><strong> Website Analytics:</strong>IP addresses, browser type, and site interaction data. </li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold py-1 text- black font-[Roboto]">2. How We Use Your Information  </h2>
                    <p className="mt-1 text-[16px] ">The collected information is used to: </p>
                    <ul className="list-disc list-inside mt-2 pl-4 text-[16px]">
                        <li>  Process registrations and confirm event participation.   </li>
                        <li> Provide event-related updates, schedules, and announcements.  </li>
                        <li> Enhance event experience through personalized recommendations.  </li>
                        <li>  Analyze engagement trends to improve future events. </li>
                        <li> Send marketing communications (only if you opt-in).</li>

                    </ul>
                </section>


                <section className="mb-6">
                    <h2 className="text-xl font-semibold py-1 text- black font-[Roboto]">3.  Data Sharing & Security   </h2>
                   
                    <ul className="list-disc list-inside mt-2 pl-4 text-[16px]">
                        <li>  We,<strong>do not sell or rent</strong>  personal data to third parties.   </li>
                        <li> Information may be shared with trusted partners assisting in event operations. </li>
                        <li> We implement industry-standard security measures to <strong>protect user data.</strong> </li>
                       </ul>
                </section>


                <section className="mb-6">
                    <h2 className="text-xl font-semibold py-1 text- black font-[Roboto]">4.  Your Rights  </h2>
                    <p className="mt-1 text-[16px] ">You have the right to: </p>
                    <ul className="list-disc list-inside mt-2 pl-4 text-[16px]">
                        <li>Request access to the personal data we store.</li>
                        <li> Request modification or deletion of your data. </li>
                        <li>Opt out of marketing communications. </li>
                    </ul>
                    <p className="mt-1 text-[16px] p-4">
                    For any privacy-related inquiries, contact us at:<a href="mailto:kisankumbh@gmail.com" className="text-green-600">kisankumbh@gmail.com</a>,
                        <a href="mailto:agritechinnovation24@gmail.com" className="text-green-600"> agritechinnovation24@gmail.com</a>
                    </p>
                </section>
            </div>
        </div>
    )
}

export default PrivacyPolicy