"use client";

import Hero from "@/components/Hero";
import { OurServices } from "@/components/OurServices";
import OurStory from "@/components/OurStory";


export default function Home() {
  return (
    <div className="font-serif bg-pink-50">
      <Hero />
      <OurStory />
      <OurServices />
    </div>
  );
}
