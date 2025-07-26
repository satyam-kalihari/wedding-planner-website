"use client";

import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import KindWords from "@/components/KindWords";
import Navbar from "@/components/Navbar";
import { OurServices } from "@/components/OurServices";
import OurStory from "@/components/OurStory";
import { Portfolio } from "@/components/Portfolio";
import YourDay from "@/components/YourDay";

export default function Home() {
  return (
    <div className="font-serif bg-white overflow-x-clip">
      <Navbar />
      <Hero />
      <OurStory />
      <OurServices />
      <Portfolio />
      <KindWords />
      <YourDay />
      <ContactUs />
      <Footer />
    </div>
  );
}
