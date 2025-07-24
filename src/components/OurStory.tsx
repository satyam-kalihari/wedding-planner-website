import React from "react";
import { motion } from "motion/react";

const OurStory = () => {
  return (
    <>
      <div className="min-h-[100vh] pt-6 w-full flex flex-col md:flex-row lg:p-[80px] items-center justify-center gap-4">
        <div className=" flex flex-col items-center  p-5 md:items-start md:w-[80vw] justify-top gap-4">
          <motion.div className=" text-7xl text-[#1F2937] overflow-hidden">
            Our Story
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1, transition:{duration:3}}} className="h-[4px] w-[70%] bg-[#ea5285] mt-1 ml-2 rounded-b-xs"></motion.div>
          </motion.div>
          <p className="mt-5 py-5 text-left text-[#374151]">
            At Perfect Wedding, we believe that your special day should be as
            unique as your love story. Founded on the principles of elegance,
            attention to detail, and personalized service, our team of dedicated
            planners works tirelessly to transform your vision into reality.
          </p>
          <p className="py-4 text-left text-[#374151]">
            With over a decade of experience in the wedding industry, we&apos;ve
            cultivated relationships with the finest vendors and venues,
            ensuring that every element of your celebration exceeds
            expectations. From intimate gatherings to grand affairs, we approach
            each wedding with fresh eyes and boundless creativity.
          </p>
          <motion.button className="bg-[#ea5285] p-0.5 px-3 h-[44px] border-0 rounded-xs">
            Learn More About Us
          </motion.button>
        </div>
        <div className="grid grid-cols-2 w-full h-[50vh] md:h-[60vh] lg:h-[70vh] gap-2 px-2">
          <div className="bg-yellow-200 bg-[url(/images/our-story-image-1.png)] bg-cover"></div>
          <div className="bg-yellow-300 bg-[url(/images/our-story-image-2.jpg)] bg-cover"></div>
          <div className="bg-yellow-400 bg-[url(/images/our-story-image-3.jpg)] bg-cover"></div>
          <div className="bg-yellow-500 bg-[url(/images/our-story-image-4.jpg)] bg-cover"></div>
        </div>
      </div>
    </>
  );
};

export default OurStory;
