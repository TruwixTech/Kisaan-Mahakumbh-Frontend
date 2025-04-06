import React, { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../assets/Hero.jpg";
import { FaHome } from "react-icons/fa";
function Event() {
  const sessions = [
    {
      theme: "Agenda 1",
      time: "09:00 AM - 10:30 AM",
      title: "Sustainability and Climate Resilience (Technical Session 1)",
      details: [
        {
          topic: "Prof. B R Kamboj (Vice-Chancellor, CCSHAU, Haryana) - Chair",
          speaker: "",
        },
        {
          topic: "JC Majjumdar Ji - Moderator",
          speaker: "Dr.S K Sharma",
        },
        {
          topic: "Shreya - Anchor",
          speaker: "",
        },
      ],
    },
    {
      theme: "Agenda 2",
      time: "10:30 AM - 10:40 AM",
      title: "Cultural Performance by Ayana Dance Academy",
      details: [],
    },
    {
      theme: "Agenda 3",
      time: "10:40 AM - 10:50 AM",
      title: "Commencement of Kisan Kumbh 2025-Agri Conclave",
      details: [],
    },
    {
      theme: "Agenda 4",
      time: "10:50 AM - 10:55 AM",
      title: "Inviting Guests on the Dais",
      details: [],
    },
    {
      theme: "Agenda 4",
      time: "10:55 AM - 11:00 AM",
      title: "Lamp Lightning by Guest & Saraswati Vandana",
      details: [],
    },
    {
      theme: "Agenda 4",
      time: "11:00 AM - 11:10 AM",
      title: "Introduction of All Guests (1 min each)",
      details: [],
    },
    {
      theme: "Agenda 5",
      time: "11:10 AM - 11:15 AM",
      title: "Agri wisdom",
      details: [
        {
          topic: "Mr. RajeshKumar (Industrialist & Social Thinker)",
          speaker: "",
        },
      ],
    },
    {
      time: "11:15 AM - 11:30 AM",
      title: "Soil Stories",
      details: [
        {
          topic: "Prof. V K Vijay (National Coordinator, UBA & IIT Delhi)",
          speaker: "",
        },
      ],
    },
    {
      time: "11:30 AM - 11:45 AM",
      title: "Farm Stories",
      details: [
        { topic: "Dr. Khader Vali (Millet Man of India)", speaker: "" },
      ],
    },
    {
      time: "11:45 AM - 12:00 PM",
      title: "Sowing Ideas",
      details: [
        {
          topic:
            "Dr. Krishan Bir Chaudhary (Bhartiya Krishak Samaj, President)",
          speaker: "",
        },
      ],
    },
    {
      time: "12:00 PM - 12:15 PM",
      title: "Visionary Talk",
      details: [
        {
          topic: "Shri Acharya Devvrat Ji (Hon’ble Governor of Gujarat)",
          speaker: "",
        },
      ],
    },
    {
      time: "12:15 PM - 12:45 PM",
      title: "Visionary Talk",
      details: [
        {
          topic:
            "Pujyashri Adrushya Kadsiddheshwar Swamiji (Mathadhipati, Kaneri Math)",
          speaker: "",
        },
      ],
    },
    {
      time: "12:45 PM - 01:05 PM",
      title: "Book Launch",
      details: [
        {
          topic:
            "Mr. Ramveer Shreshth (Author Naye Bharat Ke Kisan) in Presence of Nitin Gadkari Ji & Shivraj Singh Chouhan Ji",
          speaker: "",
        },
      ],
    },
    {
      time: "01:05 PM - 01:40 PM",
      title: "Visionary Talk",
      details: [
        {
          topic:
            "Shri Nitin Gadkari Ji (Hon’ble Minister of Road Transport & Highways of India)",
          speaker: "",
        },
      ],
    },
    {
      time: "01:45 PM - 02:35 PM",
      title: "Lunch",
      details: [],
    },
    {
      time: "02:40 PM - 03:20 PM",
      title: "Workshop (HIL)",
      details: [
        {
          topic:
            "“Use and Promotion of Bio-Pesticides” – By Dr. Rajendra Thapar",
          speaker: "",
        },
      ],
    },
    {
      time: "03:20 PM - 03:35 PM",
      title: "Farmtech Session - Dhanuka",
      details: [{ topic: "By Dr. R G Agarwal – Chairman", speaker: "" }],
    },
    {
      time: "03:35 PM - 05:15 PM",
      title: "Models of Agri Startups (Technical Session 2)",
      details: [
        { topic: "Mr. Varun Shroff (Industrialist) – Chair", speaker: "" },
        { topic: "Yella Sama Reddy – Moderator", speaker: "" },
        { topic: "Shreya – Anchor", speaker: "" },
      ],
    },
    {
      time: "05:15 PM - 05:45 PM",
      title: "Tea Break",
      details: [],
    },
    {
      time: "05:45 PM - 07:00 PM",
      title: "Technology & Innovation in Agriculture (Technical Session 3)",
      details: [
        { topic: "IIT Ropar – Chair", speaker: "" },
        { topic: "Dr. Kavya Doshora, IITD – Moderator", speaker: "" },
        { topic: "Shreya – Anchor", speaker: "" },
      ],
    },
    {
      time: "07:00 PM - 07:05 PM",
      title: "Introduction of Jagtar & Team",
      details: [],
    },
    {
      time: "07:05 PM - 07:25 PM",
      title: "Cultural Event : Musical Evening by Jagtar & Team",
      details: [],
    },
    {
      time: "07:30 PM",
      title: "Closing of Day 1 (Announcement of Dinner)",
      details: [],
    },
  ];

  const sessions2 = [
    {
      time: "09:00 AM - 10:00 AM",
      title: "Introductory Session",
      details: [
        {
          topic: "Informal farmers and Green Heroes Get Together",
          speaker: "",
        },
      ],
    },
    {
      time: "10:00 AM - 11:30 AM",
      title: "Technical Session 1 - Agri-Processing and Value Addition",
      details: [
        { topic: "Dr. KML Pathak – Chair", speaker: "" },
        { topic: "Mr. Abhishek Dhama (Green Hero) – Moderator", speaker: "" },
      ],
    },
    {
      time: "11:30 AM - 01:00 PM",
      title: "Technical Session 2 - Farm Residue Waste and Wealth",
      details: [
        { topic: "Dr. Anil Dixit – Chair", speaker: "" },
        { topic: "Mr. Kamaljeet Hayer (Green Hero) – Moderator", speaker: "" },
        { topic: "Shreya – Anchor", speaker: "" },
      ],
    },
    {
      time: "01:00 PM - 02:00 PM",
      title: "Lunch",
      details: [],
    },
    {
      time: "02:00 PM - 03:30 PM",
      title: "Technical Session 3 - Samvad on 'Naye Bharat ke Kisan'",
      details: [
        { topic: "Narendra Thakur Ji – Chair", speaker: "" },
        {
          topic: "Shri Omendra Dutt (Kheti Virasat Mission) – Moderator",
          speaker: "",
        },
        { topic: "Shreya – Anchor", speaker: "" },
      ],
    },
    {
      time: "03:30 PM - 03:40 PM",
      title: "Valedictory Session Starts",
      details: [],
    },
    {
      time: "03:40 PM - 03:45 PM",
      title: "Lamp Lightning by Guest",
      details: [],
    },
    {
      time: "03:45 PM - 04:00 PM",
      title: "Honouring of All Guests",
      details: [],
    },
    {
      time: "04:00 PM - 04:05 PM",
      title: "Agri Wisdom",
      details: [
        {
          topic: "Mr. Rajesh Kumar (Industrialist & Social Thinker)",
          speaker: "",
        },
      ],
    },
    {
      time: "04:05 PM - 04:10 PM",
      title: "Soil Stories",
      details: [{ topic: "Mr. Vivek (IIT Delhi)", speaker: "" }],
    },
    {
      time: "04:10 PM - 04:25 PM",
      title: "Farm Stories",
      details: [{ topic: "Mr. Ram Bahadur Rai (Sr. Journalist)", speaker: "" }],
    },
    {
      time: "04:25 PM - 04:45 PM",
      title: "Visionary Talk",
      details: [
        {
          topic:
            "Shri Shyam Singh ji (Hon’ble Minister of Agriculture of Haryana)",
          speaker: "",
        },
      ],
    },
    {
      time: "04:55 PM",
      title: "Tea Break",
      details: [],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
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

      <div className="w-full h-auto flex flex-col bg-[#e7e7e7] px-2 md:px-12 lg:px-12 pb-5 xl:pb-10 ">
        <div>
          <h1 className="font-[Roboto] w-full h-auto flex flex-col px-5 md:px-10 lg:px-20 pt-10 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-[#e7e7e7] md:gap-2 text-[30px]  md:text-[75.48px] items-center">
            Event
          </h1>
          <div className="w-full h-auto flex items-center justify-center mt-1">
            <span className="flex items-center justify-center text-black gap-1">
              <FaHome size={20} />
              Home
            </span>
            <span className="text-[#0000004D]"> - Pages - Event</span>
          </div>
        </div>
        <div className="w-full flex  flex-col md:py-8 py-3 px-2 md:px-0">
          <h1 className="text-[#374836] text-xl md:text-[36px]"> | Events |</h1>
          <span className="text-[#374836] text-3xl md:text-[52px] font-[Roboto]">
            Day 1: 09th April 2025
          </span>
        </div>

        {/* <div className="w-full h-auto flex flex-col mb-6">
          <p className="md:text-lg font-bold">
            {" "}
            🕙 10:00 AM - 12:00 PM: Inaugural Session Topic: Role of Agriculture
            in a 5 Trillion Dollar Economy
          </p>
        </div> */}

        <div className="w-full h-auto p-2 md:p-6 bg-white rounded-3xl mb-7">
          {sessions.map((session, index) => (
            <div key={index} className="w-full">
              <div className="w-full px-0 md:px-6 lg:px-10">
                {/* Session Block */}
                <div className="w-full mb-6 flex flex-col items-center lg:flex-row lg:items-start gap-5">
                  {/* Time */}
                  <div className="w-full flex justify-center lg:justify-start md:w-[35%]">
                    <p className="text-2xl md:text-3xl font-semibold text-gray-700">
                      {session.time}
                    </p>
                  </div>

                  {/* Horizontal border on mobile */}
                  <div className="lg:hidden block border-b-2 w-full mx-10 border-gray-800"></div>

                  {/* Flex row for vertical line and content */}
                  <div className="w-full flex lg:flex-row gap-5">
                    {/* Vertical Line */}
                    <div className="hidden lg:block border-r-2 border-gray-800 mx-5" />

                    {/* Content */}
                    <div className="w-full flex flex-col gap-5">
                      <h2 className="md:text-4xl text-2xl font-bold text-gray-900 font-[Roboto]">
                        {session.title}
                      </h2>
                      <div className="mt-2 text-gray-600">
                        {session.details.map((detail, i) => (
                          <div
                            key={i}
                            className="w-full flex flex-col lg:flex-row gap-4 justify-center lg:justify-start"
                          >
                            <span className="w-full text-[20px] font-[Roboto] font-semibold">
                              {detail.topic}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* day two */}

        <div className="w-full flex  flex-col md:py-8 py-3 px-2 md:px-0">
          <span className="text-[#374836] text-3xl md:text-[52px] font-[Roboto]">
            Day 2: 10th April 2025
          </span>
        </div>

        <div className="w-full h-auto p-2 md:p-6 bg-white rounded-3xl mb-7">
          {sessions2.map((session, index) => (
            <div key={index} className="w-full">
              <div className="w-full px-0 md:px-6 lg:px-10">
                {/* Session Block */}
                <div className="w-full mb-6 flex flex-col items-center lg:flex-row lg:items-start gap-5">
                  {/* Time */}
                  <div className="w-full flex justify-center lg:justify-start md:w-[35%]">
                    <p className="text-2xl md:text-3xl font-semibold text-gray-700">
                      {session.time}
                    </p>
                  </div>

                  {/* Horizontal border on mobile */}
                  <div className="lg:hidden block border-b-2 w-full mx-10 border-gray-800"></div>

                  {/* Flex row for vertical line and content */}
                  <div className="w-full flex lg:flex-row gap-5">
                    {/* Vertical Line */}
                    <div className="hidden lg:block border-r-2 border-gray-800 mx-5" />

                    {/* Content */}
                    <div className="w-full flex flex-col gap-5">
                      <h2 className="md:text-4xl text-2xl font-bold text-gray-900 font-[Roboto]">
                        {session.title}
                      </h2>
                      <div className="mt-2 text-gray-600">
                        {session.details.map((detail, i) => (
                          <div
                            key={i}
                            className="w-full flex flex-col lg:flex-row gap-4 justify-center lg:justify-start"
                          >
                            <span className="w-full text-[20px] font-[Roboto] font-semibold">
                              {detail.topic}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
{/* 
        <div className="w-full h-auto flex flex-col my-6">
          <p className="md:text-lg font-bold">
            🕞 03:30 PM - 05:30 PM: Valedictory Session Topic: Cooperative
            Practices in Agriculture
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Event;
