import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const reviews = [
  {
    content:
      "They have completely justified their organisation name” Perfect events and wedding planner “. Entire arrangement was done flawlessly. Thank you so much for making the function memorable.",
    image: "/images/kind-words-image-1.jpg",
    name: "Konica Bhardwaj",
    date: "April 2025",
  },
  {
    content:
      "Working with Oshin and team made our wedding planning stress-free! From the initial consultation to the big day, they handled everything seamlessly, allowing us to enjoy every moment. Highly recommended!",
    image: "/images/kind-words-image-2.jpg",
    name: "Monika Dongre",
    date: "2024",
  },
  {
    content:
      "Trust worthy. Oshin personally ensured that both the planning process and the day itself felt effortless for us, so we could focus on making memories . Perfect events team was our wedding angel and we cannot recommend her more highly.",
    image: "/images/kind-words-image-3.jpg",
    name: "ASHWINI RATHOD",
    date: "2024",
  },
];

const KindWords = () => {
  return (
    <div
      id="testimonials"
      className="min-h-[100vh] bg-pink-50 pt-6 w-[100vw] flex flex-col p-5 md:p-[40px] lg:p-[80px] items-center justify-center gap-12"
    >
      <div>
        <h1 className="text-5xl md:text-7xl text-[#1F2937] overflow-hidden">
          Kind Words
        </h1>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1, transition: { duration: 3 } }}
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
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 2 + index * (Math.random() * 0.5), repeat: Infinity, repeatType: "reverse" },
                  }}
                >
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
