import { motion } from "motion/react";
import React, { useState } from "react";


// Define images and topics outside the component to prevent recreation on every render.
const allImages = {
  all: [
    "/images/portfolio-image-1.png",
    "/images/portfolio-image-2.png",
    "/images/portfolio-image-3.png",
    "/images/portfolio-image-4.png",
    "/images/portfolio-image-5.png",
    "/images/portfolio-image-6.png",
  ],
  classic: [
    "/images/portfolio-image-4.png",
    "/images/portfolio-image-3.png",
    "/images/portfolio-image-6.png",
    "/images/portfolio-image-2.png",
    "/images/portfolio-image-5.png",
    "/images/portfolio-image-1.png",
  ],
  rustic: [
    "/images/portfolio-image-3.png",
    "/images/portfolio-image-5.png",
    "/images/portfolio-image-4.png",
    "/images/portfolio-image-3.png",
    "/images/portfolio-image-1.png",
    "/images/portfolio-image-2.png",
  ],
  destination: [
    "/images/portfolio-image-2.png",
    "/images/portfolio-image-4.png",
    "/images/portfolio-image-6.png",
    "/images/portfolio-image-1.png",
    "/images/portfolio-image-3.png",
    "/images/portfolio-image-5.png",
  ],
  intimate: [
    "/images/portfolio-image-6.png",
    "/images/portfolio-image-4.png",
    "/images/portfolio-image-2.png",
    "/images/portfolio-image-1.png",
    "/images/portfolio-image-3.png",
    "/images/portfolio-image-5.png",
  ],
};

// Define the topics for the filter buttons
const topics = ["all", "classic", "rustic", "destination", "intimate"];

const PortfolioGrid = () => {
  // Single state to manage the selected topic.
  const [selectedTopic, setSelectedTopic] = useState<string>("all");

  // Derive the images to display directly from the state. No useEffect needed.
  const imagesToDisplay = allImages[selectedTopic as keyof typeof allImages] || allImages.all;

  return (
    <>
      {/* filter option */}
      <div className="flex justify-center items-center gap-1">
        {topics.map((topic) => (
          <motion.button
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            className={`capitalize border-1 h-[38px] border-[#D1D5DB] text-[#1F2937] py-2 px-3 md:px-5 rounded-xs transition-colors duration-300 ${
              selectedTopic === topic
                ? "bg-[#ea5285] text-white border-[#ea5285]"
                : ""
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {topic}
          </motion.button>
        ))}
      </div>
      <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:gap-4 w-full h-auto gap-2 px-2">
        {imagesToDisplay.map((image, index) => (
          <motion.div
            key={index} // A more stable key for animations
            className="bg-cover h-[200px] md:h-[250px] lg:h-[300px] bg-center bg-no-repeat rounded-xs overflow-hidden"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          ></motion.div>
        ))}
      </div>
    </>
  );
};

export default PortfolioGrid;
