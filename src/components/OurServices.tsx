import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

export const OurServices = () => {
  const services = [
    {
      image: "/images/our-services-image-1.png",
      heading: "Full Planning",
      icon: "/icons/date_check.svg",
      description:
        'Comprehensive planning from engagement to "I do." We handle every detail so you can focus on enjoying the journey.',
    },
    {
      image: "/images/our-services-image-2.png",
      heading: "Partial Planning",
      icon: "/icons/list.svg",
      description:
        "Perfect for couples who have started planning but need professional guidance to bring their vision to life.",
    },
    {
      image: "/images/our-services-image-3.png",
      heading: "Day-of Coordination",
      icon: "/icons/time.svg",
      description:
        "We step in during the final weeks to ensure your wedding day unfolds seamlessly, just as you've planned.",
    },
  ];
  return (
    <>
      <div className="min-h-[100vh] pt-6 w-full flex flex-col p-5 md:p-[40px] lg:p-[80px] items-center justify-center gap-12">
        <motion.div className="text-5xl md:text-7xl text-[#1F2937] overflow-hidden">
          Our Services
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1, transition: { duration: 3 } }}
            className="h-[4px] w-[70%] bg-[#ea5285] mt-5 ml-2 rounded-b-xs"
          ></motion.div>
        </motion.div>
        <div className="text-[#1F2937] text-center">
          From comprehensive planning to day-of coordination, we offer a range
          of services tailored to your unique needs and vision.
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {services.map((service, index) => (
            <div key={index}>
              <div className=" relative rounded-sm h-[500px] w-[350px] bg-white shadow-lg overflow-hidden">
                <div
                  className="h-[50%] w-full bg-no-repeat bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                <div className="bg-[#ea5285] h-[64px] w-[64px] flex items-center justify-center absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] rounded-full">
                  <Image src={service.icon} width={18} height={32} alt="icon" />
                </div>
                <div className="p-6 mt-2 flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <h3 className="text-2xl font-medium text-gray-800">
                      {service.heading}
                    </h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                  <button className="h-[40px] px-2 border-2 rounded-xs border-[#ea5285]  text-[#ea5285]">
                    Request a Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" relative rounded-sm h-[500px] w-[350px] md:w-full md:flex bg-white shadow-lg overflow-hidden">
          <div className="h-[50%] md:w-[40%] md:h-full w-full bg-[url(/images/our-services-image-4.png)] bg-no-repeat bg-cover bg-center"></div>
          <div className="p-6 mt-2 flex flex-col justify-center gap-4 md:gap-8 md:w-[60%]">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-medium text-gray-800">
                Destination Weddings
              </h3>
            </div>
            <p className="text-gray-600 text-lg hidden md:block">
              Dream of saying &quot;I do&quot; on a white sand beach, in a
              historic European castle, or amid breathtaking mountain vistas?
              Our destination wedding services handle the unique logistics of
              planning from afar, from venue selection to local vendor
              coordination.
            </p>
            <p className="text-gray-600 text-lg">
              We&apos;ll create an unforgettable experience not just for you,
              but for every guest who joins your celebration.
            </p>
            <button className="h-[40px] md:w-[200px] px-2 border-2 rounded-xs bg-[#ea5285] border-[#ea5285]  text-white">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
