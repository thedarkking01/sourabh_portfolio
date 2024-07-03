"use client";

import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { WavyBackground } from "@/components/ui/wavy-background";


const Footer2 = ()=> {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <div className="flex flex-col items-center">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:sourabhsinghbais52@gmail.com" className="mt-4">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Sourabh Singh Bais
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img
                src={info.img}
                alt={`icon-${info.id}`}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
    </WavyBackground>
  );
};
export default Footer2;
