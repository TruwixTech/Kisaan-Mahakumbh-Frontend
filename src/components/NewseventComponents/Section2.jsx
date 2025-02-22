// import React from "react";

// function Section2() {
//   const EventData = [
//     {
//       title: "Farmer event on Instagram",
//       subtitle: " April 28, 2021  -  0 Comments",
//     },
//     {
//       title: "Farmer event on Instagram",
//       subtitle: " April 28, 2021  -  0 Comments",
//     },
//     {
//       title: "Farmer event on Instagram",
//       subtitle: " April 28, 2021  -  0 Comments",
//     },
//     {
//       title: "Farmer event on Instagram",
//       subtitle: " April 28, 2021  -  0 Comments",
//     },
//     {
//       title: "Farmer event on Instagram",
//       subtitle: " April 28, 2021  -  0 Comments",
//     },
//     {
//       title: "Farmer event on Instagram",
//       subtitle: " April 28, 2021  -  0 Comments",
//     },
//   ];
//   return (
// <div className="w-full h-auto flex flex-col md:py-5 px-6 bg-[#e7e7e7] font-[Roboto]">
//   {/* Header Section */}
//   <div className="text-center pb-6 pt-5">
//     <p className="text-[#374836] text-2xl font-semibold">
//       | Press Release |
//     </p>
//     <h2 className="text-5xl font-bold text-[#374836]">
//       Our presence on socials
//     </h2>
//   </div>

//       <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-10 px-6 pb-6">
//         {EventData.map((hero, index) => (
//           <div key={index} className=" ">
//             <div className=" w-full  bg-[#8f8f8f] rounded-2xl  h-[305px]"></div>
//             <h3 className="mt-4 text-lg font-bold text-[#374836] xl:text-xl">
//               {hero.title}
//             </h3>
//             <p className="text-[#374836]">{hero.subtitle}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Section2;


import React from "react";

function Section2() {

  return (
    <div className="w-full h-auto flex flex-col md:py-5 px-6 bg-[#e7e7e7] font-[Roboto]">
      <div className="w-full h-auto flex flex-col md:py-5 px-6 bg-[#e7e7e7] font-[Roboto]">
        {/* Header Section */}
        <div className="text-center pb-6 pt-5">
          <p className="text-[#374836] text-2xl font-semibold">
            | Press Release |
          </p>
          <h2 className="text-5xl font-bold text-[#374836]">
            Our presence on socials
          </h2>
        </div>
      </div>
      {/* Coming Soon Section */}
      <div className="w-full h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-[#374836] mb-4 animate-pulse">
            Coming Soon 🌱
          </h2>
          <p className="text-xl md:text-2xl text-[#374836]">
            Stay tuned for exciting updates!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section2;