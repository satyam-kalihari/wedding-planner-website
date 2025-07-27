// components/LenisProvider.tsx
"use client";

import { ReactNode, useEffect } from "react";
// import Lenis from "@studio-freight/lenis";
import Lenis from "lenis";

interface LenisProviderProps {
  children: ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // How long the scroll animation takes
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      // direction: "vertical", // 'vertical' or 'horizontal'
      // gestureDirection: "vertical", // 'vertical' or 'horizontal'
      // mouseMultiplier: 1, // How much the mouse wheel scrolls
      // smoothTouch: false, // Smooth scrolling on touch devices
      touchMultiplier: 2,
      infinite: false, // For infinite scrolling
      anchors: true, // Enable smooth scrolling for anchor links
    });

    // Add event listener for scroll
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []); // Empty dependency array means this runs once on mount

  return <>{children}</>;
}
