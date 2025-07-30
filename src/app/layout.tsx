// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorantGaramond = localFont({
  src: "../../public/fonts/CormorantGaramond-VariableFont_wght.ttf",
  variable: "--font-cormorant-garamond",
});

export const metadata: Metadata = {
  title:
    "PerfectEvent & Weddings | Luxury Wedding Planner in Nagpur, Maharashtra",
  description:
    "Expert wedding planners based in Nagpur, Maharashtra, specializing in bespoke, luxury Indian weddings and unforgettable celebrations. From intimate gatherings to grand events, we bring your dream day to life. Contact us for a free consultation!",
  keywords:
    "wedding planner Nagpur, luxury weddings Maharashtra, destination weddings India, wedding coordinator Nagpur, event management Nagpur, bespoke weddings, Indian wedding planner, wedding decorator Nagpur, pre-wedding planning, post-wedding events, event nagpur, nagpur",
  authors: [{ name: "PerfectEvent & Weddings" }],
  creator: "PerfectEvent & Weddings",
  publisher: "PerfectEvent & Weddings",
  robots: "index, follow",
  openGraph: {
    title:
      "PerfectEvent & Weddings | Luxury Wedding Planner in Nagpur, Maharashtra",
    description:
      "Discover premier wedding planning services in Nagpur, Maharashtra. Our experienced team offers full-service event design, coordination, and management for truly magical and stress-free weddings.",
    url: "https://www.your-domain.com", //Replace with your actual domain
    siteName: "PerfectEvent & Weddings",
    images: [
      {
        url: "/images/og-image-wedding.png",
        width: 1200,
        height: 630,
        alt: "Beautiful wedding planned by PerfectEvent & Weddings",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PerfectEvent & Weddings | Your Dream Day, Flawlessly Planned",
    description:
      "Crafting unforgettable moments and making your wedding dreams a beautiful reality in Nagpur and across India.",
    images: ["/images/og-image-wedding.png"], // Path relative to the 'public' directory
    creator: "@YourTwitterHandle", // TODO: Replace with your actual Twitter handle
  },
};

const cormorant = localFont({
  src: "../../public/fonts/Cormorant-VariableFont_wght.ttf",
  variable: "--font-cormorant",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVariables = `${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${cormorantGaramond.variable}`;
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload the LCP image for faster loading. */}
        {/* TODO: Replace '/images/hero-background.jpg' with the actual path to your LCP image. */}
        <link
          rel="preload"
          href="/public/images/og-image-wedding.png"
          as="image"
        />
      </head>
      <body className={`${fontVariables} antialiased`}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
