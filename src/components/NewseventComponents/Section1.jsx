// import React from "react";

// function Section1() {
//   const Newevent = [
//     {
//       title: "Farmer event",
//       subtitle:
//         "We collaborate closely with you to design practical, long-term strategies that lead to sustainable business growth.",
//       num: "01",
//     },
//     {
//       title: "Farmer event",
//       subtitle:
//         "We collaborate closely with you to design practical, long-term strategies that lead to sustainable business growth.",
//       num: "01",
//     },
//     {
//       title: "Farmer event",
//       subtitle:
//         "We collaborate closely with you to design practical, long-term strategies that lead to sustainable business growth.",
//       num: "01",
//     },

//     {
//       title: "Farmer event",
//       subtitle:
//         "We collaborate closely with you to design practical, long-term strategies that lead to sustainable business growth.",
//       num: "01",
//     },
//   ];
//   return (
//     <div className="w-full h-auto flex flex-col items-center justify-center md:py-12 py-5 font-[Roboto] bg-[#e7e7e7]">
//       <div className="w-full flex justify-center px-4 md:px-10 lg:px-10">
//         <div className="w-full grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2   gap-5">
//           {Newevent.map((event, index) => (
//             <div
//               key={index}
//               className=" h-auto md:h-[300px] bg-white rounded-2xl flex gap-5"
//             >
//               <div className="flex flex-col md:flex-row justify-center h-auto md:h-full gap-5 p-4">
//                 <div className=" w-full  bg-[#aaa7a7] rounded-2xl h-[300px] md:h-full"></div>

//                 <div className="flex flex-col h-auto md:h-full md:justify-between gap-6 p-2 md:gap-4 ">
//                   <div className="flex flex-col gap-5">
//                     <h3 className="mt-4 text-xl md:text-[30px] lg:text-[40px] font-bold text-[#374836] xl:text-xl">
//                       {event.title}
//                     </h3>
//                     <p className="text-[#374836] md:text-[14px] lg:text-[16.13px] w-full md:w-[80%]">
//                       {event.subtitle}
//                     </p>
//                   </div>

//                   <div className="flex justify-between  ">
//                     <button className="bg-green-900 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md hover:bg-green-800 transition">
//                       {" "}
//                       Read more
//                     </button>
//                     <span className="text-[20px] p-2">{event.num}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Section1;


import React from "react";

function Section1() {
 
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center md:py-12 py-5 font-[Roboto] bg-[#e7e7e7]">
      {/* Coming Soon Section */}
      <div className="w-full h-[40vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-[#374836] mb-4 animate-pulse">
            Coming Soon 🚀
          </h2>
          <p className="text-xl md:text-2xl text-[#374836]">
            Exciting updates are on their way!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;