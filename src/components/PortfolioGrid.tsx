import { motion } from "motion/react";
import React, { useState } from "react";

// Define images and topics outside the component to prevent recreation on every render.
const allImages = {
  some1: [
    "/images/PEP_gallary/image21.jpg",
    "/images/PEP_gallary/image26.jpg",
    "/images/PEP_gallary/image39.jpg",
    "/images/PEP_gallary/image8.jpg",
    "/images/PEP_gallary/image5.jpg",
    "/images/PEP_gallary/image6.jpg",
  ],
  some2: [
    "/images/PEP_gallary/image7.jpg",
    "/images/PEP_gallary/image31.jpg",
    "/images/PEP_gallary/image9.jpg",
    "/images/PEP_gallary/image10.jpg",
    "/images/PEP_gallary/image11.jpg",
    "/images/PEP_gallary/image12.jpg",
  ],
  some3: [
    "/images/PEP_gallary/image34.jpg",
    "/images/PEP_gallary/image14.jpg",
    "/images/PEP_gallary/image33.jpg",
    "/images/PEP_gallary/image16.jpg",
    "/images/PEP_gallary/image27.jpg",
    "/images/PEP_gallary/image36.jpg",
  ],
  some4: [
    "/images/PEP_gallary/image19.jpg",
    "/images/PEP_gallary/image30.jpg",
    "/images/PEP_gallary/image1.jpg",
    "/images/PEP_gallary/image22.jpg",
    "/images/PEP_gallary/image37.jpg",
    "/images/PEP_gallary/image24.jpg",
  ],
  some5: [
    "/images/PEP_gallary/image35.jpg",
    "/images/PEP_gallary/image2.jpg",
    "/images/PEP_gallary/image17.jpg",
    "/images/PEP_gallary/image28.jpg",
    "/images/PEP_gallary/image29.jpg",
    "/images/PEP_gallary/image20.jpg", //
    "/images/PEP_gallary/image4.jpg",
    "/images/PEP_gallary/image32.jpg",
    "/images/PEP_gallary/image15.jpg",
    "/images/PEP_gallary/image13.jpg",
    "/images/PEP_gallary/image25.jpg",
    "/images/PEP_gallary/image18.jpg",
    "/images/PEP_gallary/image23.jpg",
    "/images/PEP_gallary/image38.jpg",
    "/images/PEP_gallary/image3.jpg",
  ],
};

// Define the topics for the filter buttons
const topics = ["1", "2", "3", "4", "5"];

const PortfolioGrid = () => {
  // Single state to manage the selected topic.
  const [selectedTopic, setSelectedTopic] = useState<string>("some1");

  // Derive the images to display directly from the state. No useEffect needed.
  const imagesToDisplay =
    allImages[selectedTopic as keyof typeof allImages] || allImages.some1;

  return (
    <>
      {/* filter option */}
      <div className="flex justify-center items-center gap-1 ">
        {topics.map((topic) => (
          <motion.button
            key={topic}
            onClick={() => setSelectedTopic("some" + topic)}
            className={`capitalize border-1 h-[38px] border-[#D1D5DB] text-[#1F2937] py-2 px-3 md:px-5 rounded-xs transition-colors duration-300 ${
              selectedTopic === "some"+topic
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
      <div className="portfolio-grid md:h-[95vh] md:overflow-y-auto">
        <div className=" grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:gap-4 w-full   gap-2 px-2">
          {imagesToDisplay.map((image, index) => {
            if (index < 6) {
              return (
                <motion.div
                  key={index} // A more stable key for animations
                  className="bg-cover h-[200px] md:h-[250px] lg:h-[300px] bg-center bg-no-repeat rounded-xs overflow-hidden"
                  style={{ backgroundImage: `url(${image})` }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                ></motion.div>
              );
            }
            return;
          })}
        </div>
      </div>
    </>
  );
};

export default PortfolioGrid;
