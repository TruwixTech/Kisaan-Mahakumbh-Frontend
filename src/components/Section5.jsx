import React from "react";
import kisaan from "../assets/kisaan.png";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";

const AgritechHighlight = () => {
  return (
    <div className="w-full bg-gray-100  flex items-center justify-center py-12 px-4 lg:px-20 font-roboto text-[#374836]">
      <div className="w-1/2 ">
        {/* Placeholder for Image */}
        <div className=" w-full h-auto rounded-lg"></div>
        <img src={kisaan} alt="" />
        {/* Content Section */}
      </div>
      <div className="w-1/2">
        <p className="text-gray-500 text-2xl font-bold text-center md:text-left">
          | Highlight |
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-[#374836] mt-2 leading-tight text-center md:text-left">
          PIONEERING THE <br /> FUTURE OF{" "}
          <span className="text-[#146a3a]">AGRITECH</span>
        </h2>
        <p className="text-[#374836] mt-4 text-center md:text-left">
          vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
          sit aspernatur aut odit aut fugit, sed quia consequuntur numquam eius
          modi tempora incidunt ut labore et dolore magnam aliquam consequuntur
          magni dolores eos qui ratione v{" "}
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="flex items-start gap-4 flex-col">
            <div className=" flex gap-4 items-center">
              <img src={icon1} alt="" />
              <h3 className="text-2xl font-semibold text-[#374836]">
                Enhanced Productivity
              </h3>
            </div>
            <div>
              <p className="text-[#7F9080] text-lg">
                Implement advanced farming techniques that significantly boost
                crop yields.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 flex-col">
            <div className="flex gap-4 items-center">
              <img src={icon1} alt="" />
              <h3 className="text-2xl font-semibold text-[#374836]">
                Cost Savings
              </h3>
            </div>
            <div>
              <p className="text-[#7F9080] text-lg">
                Lower operational costs through efficient resource management.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 flex-col">
            <div className="flex gap-4 items-center">
              <img src={icon1} alt="" />
              <h3 className="text-2xl font-semibold text-[#374836]">
                Sustainable Practices
              </h3>
            </div>
            <div>
              <p className="text-[#7F9080] text-lg">
                Eco-friendly methods that promote soil health and minimize
                chemical inputs.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 flex-col">
            <div className="flex gap-4 items-center">
              <img src={icon1} alt="" />
              <h3 className="text-2xl font-semibold text-[#374836]">
                Expert Guidance
              </h3>
            </div>
            <div>
              <p className="text-[#7F9080] text-lg">
                Personalized support and advice from our team of agricultural
                experts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgritechHighlight;
