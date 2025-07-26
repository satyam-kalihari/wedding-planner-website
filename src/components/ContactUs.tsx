import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  const instaLink =
    "https://www.instagram.com/nagpurs_perfect_weddingplanner?igsh=MXR0aGduMXM0ZzhicQ== ";
  const googleLink = "https://g.co/kgs/TuRshJ";
  
  return (
    <div
      id="contact"
      className="min-h-[100vh] pt-6 w-full flex flex-col p-5 md:p-[40px] lg:p-[80px] items-center justify-center gap-12"
    >
      <div>
        <h1 className="text-5xl md:text-7xl text-[#1F2937] overflow-hidden">
          Get in Touch
        </h1>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1, transition: { duration: 3 } }}
          className="h-[4px] w-[70%] bg-[#ea5285]  mt-5 ml-2 rounded-b-xs"
        ></motion.div>
      </div>
      <p className="text-[#1F2937] text-center">
        Ready to start planning? Reach out to us for a complimentary
        consultation.
      </p>
      <div className="flex flex-col md:flex-row gap-8 w-full text-[#374151]">
        {/* CONTACT FORM  */}
        <div className=" w-full md:w-[50%] ">
          <ContactForm />
        </div>

        {/* CONTACT INFO */}
        <div className="w-full md:w-[50%] bg-red-50 p-8 flex flex-col gap-6 rounded-xs">
          <h2 className="text-2xl text-[#1F2937] font-normal text-center rounded-xs">
            Contact Information
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              {/* MAIL */}
              <div className="flex gap-4 items-center">
                <div className="bg-[#ea5285] h-[32px] w-[32px] md:h-[64px] md:w-[64px] flex items-center justify-center rounded-full">
                  <Image
                    src={"/icons/mail.svg"}
                    width={18}
                    height={32}
                    alt="icon"
                  />
                </div>
                <div>
                  <h3 className="text-[#1F2937]">Email</h3>
                  <p>hello@perfectwedding.com</p>
                </div>
              </div>
              {/* PHONE */}
              <div className="flex gap-4 items-center">
                <div className="bg-[#ea5285] h-[32px] w-[32px] md:h-[64px] md:w-[64px] flex items-center justify-center rounded-full">
                  <Image
                    src={"/icons/phone.svg"}
                    width={18}
                    height={32}
                    alt="icon"
                  />
                </div>
                <div>
                  <h3 className="text-[#1F2937]">Phone</h3>
                  <p>+91 9665510693</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {/* LOCATION */}
              <div className="flex gap-4 items-center">
                <div className="bg-[#ea5285] h-[32px] w-[32px] md:h-[64px] md:w-[64px] flex items-center justify-center rounded-full">
                  <Image
                    src={"/icons/location.svg"}
                    width={18}
                    height={32}
                    alt="icon"
                  />
                </div>
                <div>
                  <h3 className="text-[#1F2937]">Office</h3>
                  <p>
                    123 Wedding Lane Suite
                    <br /> 200 San Francisco, CA 94105
                  </p>
                </div>
              </div>
              {/* HOURS */}
              <div className="flex gap-4 items-center">
                <div className="bg-[#ea5285] h-[32px] w-[32px] md:h-[64px] md:w-[64px] flex items-center justify-center rounded-full">
                  <Image
                    src={"/icons/clock.svg"}
                    width={18}
                    height={32}
                    alt="icon"
                  />
                </div>
                <div>
                  <h3 className="text-[#1F2937]">Hours</h3>
                  <p className=" text-wrap">
                    Monday - Friday: 9am - 6pm <br /> Saturday: 10am - 4pm{" "}
                    <br /> Sunday: By appointment only
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* DOWN */}
          <div className="flex flex-col justify-center items-center gap-4 mt-3">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1, transition: { duration: 3 } }}
              className="h-[4px] w-[80%] bg-[#ea5285] mt-5 ml-2 rounded-xs"
            ></motion.div>
            <div className="flex justify-center items-center gap-8">
              <motion.div
                onClick={() => window.open(instaLink, "_blank")}
                className="bg-[#ea5285] shadow-lg shadow-gray-400 h-[32px] w-[32px] md:h-[64px] md:w-[64px] flex items-center justify-center rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={"/icons/insta.svg"}
                  width={18}
                  height={32}
                  alt="icon"
                />
              </motion.div>
              <motion.div
                onClick={() => window.open("", "_blank")}
                className="bg-[#ea5285] shadow-lg shadow-gray-400 h-[32px] w-[32px] md:h-[64px] md:w-[64px] flex items-center justify-center rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={"/icons/facebook.svg"}
                  width={18}
                  height={32}
                  alt="icon"
                />
              </motion.div>
              <motion.div
                onClick={() => window.open(googleLink, "_blank")}
                className="bg-[#ea5285] shadow-lg shadow-gray-400 h-[32px] w-[32px] md:h-[64px] md:w-[64px] flex items-center justify-center rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={"/icons/google.svg"}
                  width={18}
                  height={32}
                  alt="icon"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
