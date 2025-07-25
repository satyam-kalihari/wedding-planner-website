import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const reviews = [
  {
    content:
      "Perfect Wedding truly lived up to their name. From our first meeting to the final dance, they were attentive, creative, and kept us stress-free throughout the entire planning process.",
    image: "/images/kind-words-image-1.jpg",
    name: "Sarah M.",
    date: "June 2023",
  },
  {
    content:
      "Our destination wedding seemed impossible to plan from overseas, but the team at Perfect Wedding made it seamless. Their attention to detail and ability to anticipate our needs was remarkable.",
    image: "/images/kind-words-image-2.jpg",
    name: "Thomas R.",
    date: "March 2023",
  },
  {
    content:
      "Hiring Perfect Wedding for day-of coordination was the best decision we made. They stepped in seamlessly, handled every detail, and allowed us to be fully present on our special day.",
    image: "/images/kind-words-image-3.jpg",
    name: "Emily K.",
    date: "September 2023",
  },
];

const KindWords = () => {
  return (
    <div className="min-h-[100vh] pt-6 w-[100vw] flex flex-col p-5 md:p-[40px] lg:p-[80px] items-center justify-center gap-12">
      <div>
        <h1 className="text-5xl md:text-7xl text-[#1F2937] overflow-hidden">
          Kind Words
        </h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1, transition: { duration: 3 } }}
          className="h-[4px] w-[70%] bg-[#ea5285]  mt-5 ml-2 rounded-b-xs"
        ></motion.div>
      </div>
      <p className="text-[#1F2937] text-center">
        What our couples say about their experience with Perfect Wedding.
      </p>
      <div id="reviews" className=" overflow-x-auto w-[100vw] px-6 scroll-m-0">
        <div className="flex items-center gap-8">
          {reviews.map((review, index) => (
            <div key={review.name + index}>
              <motion.div className="rounded-sm p-6 md:p-8 h-[310px] w-[350px] lg:w-[380px] bg-white shadow-lg flex flex-col justify-center items-center gap-6">
                <motion.div>
                  <Image
                    src={"/icons/quote.svg"}
                    alt="double quote"
                    width={50}
                    height={50}
                  />
                </motion.div>
                <p className="text-center text-[#374151]">{review.content}</p>
                <div className="flex items-center gap-4">
                  <div>
                    <Image
                      src={review.image}
                      alt="image"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <div className="text-[#1F2937]">{review.name}</div>
                    <div className="text-[#6B7280]">{review.date}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KindWords;
