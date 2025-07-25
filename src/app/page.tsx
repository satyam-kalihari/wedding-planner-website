"use client";

import Hero from "@/components/Hero";
import KindWords from "@/components/KindWords";
import { OurServices } from "@/components/OurServices";
import OurStory from "@/components/OurStory";
import { Portfolio } from "@/components/Portfolio";

export default function Home() {
  return (
    <div className="font-serif bg-pink-50 overflow-x-clip">
      <Hero />
      <OurStory />
      <OurServices />
      <Portfolio />
      <KindWords />
    </div>
  );
}
