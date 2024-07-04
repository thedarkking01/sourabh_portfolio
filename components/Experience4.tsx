// import React from "react";
// import { Meteors } from "@/components/ui/meteors";

// const Experience4=()=> {
//   return (
//     <div className="">
//       <div className=" w-full relative max-w-xs">
//         <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
//         <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
//           <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="h-2 w-2 text-gray-300"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
//               />
//             </svg>
//           </div>

//           <h1 className="font-bold text-xl text-white mb-4 relative z-50">
//             Meteors because they&apos;re cool
//           </h1>

//           <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
//             I don&apos;t know what to write so I&apos;ll just paste something
//             cool here. One more sentence because lorem ipsum is just
//             unacceptable. Won&apos;t ChatGPT the shit out of this.
//           </p>

//           <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
//             Explore
//           </button>

//           {/* Meaty part - Meteor effect */}
//           <Meteors number={20} />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Experience4;

import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { Meteors } from "@/components/ui/meteors";

const Experience4 = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-[#06b6d4]">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <div
            key={card.id}
            className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start"
            style={{
              background: "rgb(3, 6, 26)",
              backgroundColor:
                "linear-gradient(90deg, rgba(3,6,26,1) 0%, rgba(10,12,30,1) 100%)",
              borderRadius: "1.75rem",
            }}
          >
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative z-50 flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold text-white">
                  {card.title}
                </h1>
                <p className="text-start text-gray-300 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
            <Meteors number={20} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience4;
