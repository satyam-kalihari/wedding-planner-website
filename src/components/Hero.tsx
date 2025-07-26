import { motion } from "motion/react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="h-[100vh] w-full flex flex-col gap-8 items-center justify-center bg-[url(/images/hero-image-3.jpg)] md:bg-[url(/images/hero-image-3.jpg)] md:bg-fixed bg-cover bg-center bg-no-repeat "
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
        <Link className="cursor-default" href={"#services"}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#ea5285] cursor-default p-0.5 px-1.5 rounded-xs border-2 border-[#ea5285] "
          >
            Discover Our Services
          </motion.div>
        </Link>
        <Link className="cursor-default" href={"#portfolio"}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="border-2 border-[#fffbeb] p-0.5 px-1.5 rounded-xs backdrop-blur-xs "
          >
            View Our Work
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
