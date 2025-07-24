"use client";

import Hero from "@/components/Hero";
import { OurServices } from "@/components/OurServices";
import OurStory from "@/components/OurStory";
import { Portfolio } from "@/components/Portfolio";


export default function Home() {
  return (
    <div className="font-serif bg-pink-50">
      <Hero />
      <OurStory />
      <OurServices />
      <Portfolio />
    </div>
  );
}
