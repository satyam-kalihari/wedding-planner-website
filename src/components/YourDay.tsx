import { motion } from "motion/react";
import React from "react";

const YourDay = () => {
  return (
    <div className="h-[350px] gap-8 bg-[#ea5285] bg-[url(/images/your-day-image.png)] bg-cover bg-center md:bg-fixed w-full flex flex-col items-center justify-center p-8 md:p-[80px]">
      <h1 className="text-2xl md:text-4xl text-white ">
        Let&apos;s Plan Your Perfect Day
      </h1>
      <p className="text-center">
        Every love story is unique. Let us help you tell yours through a wedding
        that reflects your vision, style, and personality.
      </p>
      <motion.button className="text-[#EA5285] rounded-xs py-3 text-center bg-white px-8 md:px-10">
        Schedule a Free Consultation
      </motion.button>
    </div>
  );
};

export default YourDay;
