import { motion } from "motion/react";
import React from "react";
import PortfolioGrid from "./PortfolioGrid";

export const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="min-h-[100vh] pt-6 w-full flex flex-col p-5 md:p-[40px] lg:p-[80px] items-center justify-center gap-12"
    >
      <div className="">
        <h1 className="text-5xl md:text-7xl text-[#1F2937]">Our Portfolio</h1>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1, transition: { duration: 3 } }}
          className="h-[4px] w-[70%] bg-[#ea5285] mt-1 ml-2 rounded-b-xs"
        ></motion.div>
      </div>
      <p className="text-[#1F2937] text-center">
        From comprehensive planning to day-of coordination, we offer a range of
        services tailored to your unique needs and vision.
      </p>
      {/* gallary */}
      <div className="w-full min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] flex flex-col gap-4 px-2">
        <PortfolioGrid />
      </div>
      <div></div>
    </div>
  );
};
