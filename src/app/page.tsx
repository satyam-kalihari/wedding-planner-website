"use client";

import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="bg-blue-600">
      <motion.div className="h-[100vh] w-full bg-amber-50"></motion.div>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0, transition: { duration: 3 } }}
        className="h-[100vh] w-full bg-amber-500"
      ></motion.div>
      <motion.div className="h-[100vh] w-full bg-red-500"></motion.div>
    </div>
  );
}
