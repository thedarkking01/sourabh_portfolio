// import { FaLocationArrow } from "react-icons/fa6";
// import { socialMedia } from "@/data";
// import MagicButton from "./MagicButton";

// const Footer = () => {
//   return (
//     <footer className="w-full pt-20 pb-10 md:mb-5" id="contact">
//       {/* background grid */}
//       {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
//         <img
//           src="/footer-grid.svg"
//           alt="grid"
//           className="w-full h-full opacity-50 "
//         />
//       </div> */}

//       <div className="flex flex-col items-center">
//         <h1 className="heading lg:max-w-[45vw]">
//           Ready to take <span className="text-purple">your</span> digital
//           presence to the next level?
//         </h1>
//         <p className="text-white-200 md:mt-10 my-5 text-center">
//           Reach out to me today and let&apos;s discuss how I can help you
//           achieve your goals.
//         </p>
//         <a href="mailto:sourabhsinghbais52@gmail.com">
//           <MagicButton
//             title="Let's get in touch"
//             icon={<FaLocationArrow />}
//             position="right"
//           />
//         </a>
//       </div>
//       <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
//         <p className="md:text-base text-sm md:font-normal font-light">
//           Copyright © 2024 Sourabh Singh Bais
//         </p>

//         <div className="flex items-center md:gap-3 gap-6">
//           {socialMedia.map((info) => (
//             <a
//               key={info.id}
//               href={info.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
//             >
//               <img
//                 src={info.img}
//                 alt={`icon-${info.id}`}
//                 width={20}
//                 height={20}
//               />
//             </a>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { LampContainer } from "@/components/ui/lamp";

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-5 md:mb-5" id="contact">
      {/* Lamp Container with motion */}
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 flex flex-col items-center"
        >
          <h1 className="heading lg:max-w-[45vw] text-2xl md:text-4xl">
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-white-200 md:mt-5 mt-2 mb-5 text-center text-sm md:text-base">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <a href="mailto:sourabhsinghbais52@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </motion.div>
      </LampContainer>

      <div className="flex flex-col mt-0 md:mt-16 md:flex-row justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light mb-5 md:mb-0">
          Copyright © 2024 Sourabh Singh Bais
        </p>
        <div className="flex items-center gap-3">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 md:w-10 md:h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img
                src={info.img}
                alt={`icon-${info.id}`}
                width={16}
                height={16}
                className="md:w-5 md:h-5"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
