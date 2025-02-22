import React, { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../assets/Hero.jpg'
import { Link } from 'react-router-dom'

function Termscondition() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
                <h1 className="md:text-4xl  text-2xl font-bold mb-4 uppercase text-[#374836]" >
                    Terms & Conditions
                </h1>

                <section className="mb-6 font-[Roboto]">
                    {/* <h2 className="text-xl font-semibold" style={{ color: '#16a34a' }}>No Refund Policy</h2> */}
                    <p className="mt-1 text-[16px]">
                        All participants, sponsors, and exhibitors must provide<strong> Kisankumbh</strong> or using our website <Link className='font-bold text-[#01210f] hover:underline'>kisankumbh.in,</Link> you agree to comply with
                        the following Terms & Conditions.
                    </p>

                    <h2 className="text-xl font-semibold py-1 text- black font-[Roboto]">1. Event Participation </h2>
                    <ul className="list-disc list-inside mt-2 pl-4 text-[16px]">
                        <li> All participants, sponsors, and exhibitors must provide<strong> accurate i</strong> information during registration.</li>
                        <li> Participation is subject to the <strong> rules and guidelines set by the event organizers. </strong> </li>
                        <li> Kisan Mahakumbh reserves the right to <strong> deny entry or revoke access </strong> to any individual
                            or organization found violating event policies. </li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold py-1 text- black font-[Roboto]">2.  Payment & Refund Terms  </h2>
                    <ul className="list-disc list-inside mt-2 pl-4 text-[16px]">
                        <li> All payments towards event participation, sponsorship, and exhibitor space are <strong>non-refundable.</strong> </li>
                        <li> If an event is postponed due to <strong>unforeseen circumstances, </strong>  existing bookings will be
                            carried forward to the rescheduled date. </li>

                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold py-1 text- black font-[Roboto]">3.  Code of Conduct  </h2>
                    <p className="mt-1 text-sm text-[16px]">
                        All attendees, exhibitors, and sponsors are expected to maintain<strong> professionalism and respect</strong>during the event. Any misconduct may result in immediate removal from the event.
                    </p>
                </section>


                <section className="mb-6">
                    <h2 className="text-xl font-semibold py-1 text- black font-[Roboto]">4.  Limitation of Liability </h2>
                    <ul className="list-disc list-inside mt-2 pl-4 text-[16px]">
                        <li>Kisankumbh is not responsible for <strong> losses due to third-party service failures</strong>  (e.g.,
                            payment gateway issues).</li>
                        <li> The event organizers shall not be liable for  <strong> injuries, theft, or damages  </strong>  occurring during occurring  the event. </li>
                    </ul>
                    <p className="mt-1 text-[16px] p-4">
                        📧For queries regarding these Terms & Conditions, contact :<a href="mailto:cowtrition2019@gmail.com" className="text-green-600">cowtrition2019@gmail.com</a>,
                        <a href="mailto:agritechinnovation24@gmail.com" className="text-green-600"> agritechinnovation24@gmail.com</a>
                    </p>
                </section>
            </div>
        </div>
    )
}

export default Termscondition