import React, { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../assets/Hero.jpg'

function Refundspage() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='bg-[#e7e7e7]'> <div
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

            <div className="px-4 md:px-20 mt-28 pb-10 flex flex-col gap-2 font-[Roboto]">
                <h1 className="md:text-4xl text-2xl md:text-start  items-center font-bold mb-4 uppercase text-[#374836]" >
                    Refund Policy
                </h1>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-black" >No Refund Policy</h2>
                    <p className="mt-1 text-[16px]">
                        At Kisankumbh, we are committed to organizing impactful events and ensuring a seamless
                        experience for all participants, sponsors, and exhibitors. To maintain transparency and
                        fairness, we follow a <strong>No Refund Policy</strong> on all payments made towards
                        participation, sponsorship, or other event-related services.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-[16px]">
                        <li>
                            <strong>Non-Refundable Payments:</strong> All payments made towards event registration,
                            sponsorship, exhibitor fees, or any associated services are strictly non-refundable
                            under any circumstances.
                        </li>
                        <li>
                            <strong>Reasoning for No Refunds:</strong>
                            <ul className="list-disc list-inside ml-4">
                                <li>Event planning requires advance resource allocation and vendor commitments.</li>
                                <li>Promotional and branding benefits for sponsors and exhibitors begin immediately.</li>
                                <li>Costs related to logistics, venue arrangements, and marketing efforts are irreversible.</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-[Roboto] font-bold text-black" >Cancellations & Transfers</h2>
                    <p className="mt-1 text-sm">
                        <ul className="list-disc list-inside text-[16px]">
                            <li>If a participant or sponsor chooses to cancel their involvement, no refund will be provided.</li>
                            <li>
                                In certain cases, sponsorships or exhibitor slots may be transferred to another entity
                                upon prior approval from the Kisankumbh Organizing Committee.
                            </li>
                        </ul>
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-[Roboto] font-bold text-black" >Dispute Resolution</h2>
                    <p className="mt-1 text-[]16px">
                        For any concerns or disputes regarding payments, you may contact:
                    </p>
                    <p className="mt-1 text-[16px]">
                        📧 Email: <a href="mailto:kisankumbh@gmail.com" className="text-green-600">kisankumbh@gmail.com</a>
                    </p>
                </section>
            </div>


        </div>
    )
}

export default Refundspage