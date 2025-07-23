import { motion } from "motion/react";
import React from "react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="h-[100vh] w-full flex flex-col gap-8 items-center justify-center bg-[url(/images/hero-image-3.jpg)] md:bg-[url(/images/hero-image-3.jpg)] bg-fixed bg-cover bg-center bg-no-repeat "
    >
      <motion.div className="text-center text-5xl md:text-7xl text-[#fffbeb] font-sans font-extrabold">
        Your Dream Wedding,
        <br />
        Perfectly Planned
      </motion.div>
      <motion.div className="text-center text-2xl md:text-3xl md:font-medium font-medium text-[#ea5285]">
        Crafting Unforgettable Moments, One Wedding at a Time
      </motion.div>
      <motion.div className="flex items-center justify-center gap-8">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="bg-[#ea5285] p-0.5 px-1.5 rounded-xs border-2 border-[#ea5285] "
        >
          Discover Our Services
        </motion.div>
        <motion.div className=" border-2 border-[#fffbeb] p-0.5 px-1.5 rounded-xs backdrop-blur-xs ">
          <p className="">View Our Work</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
