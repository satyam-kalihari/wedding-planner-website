// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import localFont from "next/font/local";
import WeddingSchema from "@/components/WeddingSchema";

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
    "PerfectEvent & Weddings | Best Wedding Planners in Nagpur | Maharashtra",
  description:
    "Nagpur's top-rated wedding planning agency specializing in luxury Indian weddings. Full-service event management for stress-free celebrations. Get free consultation today!",
  keywords: [
    "best wedding planner in Nagpur",
    "luxury wedding planners Maharashtra",
    "affordable wedding organizers Nagpur",
    "corporate event management Nagpur",
    "destination wedding planners India",
    "Nagpur wedding decorators",
    "Maharashtra wedding coordinators",
    "pre-wedding shoot locations Nagpur",
    "wedding venue booking Nagpur",
    "bridal makeup artists Nagpur",
    "wedding catering services Nagpur",
  ].join(", "),
  authors: [
    {
      name: "PerfectEvent & Weddings",
      url: "https://perfecteventandweddingplanner.in",
    },
  ],
  creator: "PerfectEvent & Weddings",
  publisher: "PerfectEvent & Weddings",
  robots: "index, follow",
  alternates: {
    canonical: "https://perfecteventandweddingplanner.in",
  },
  metadataBase: new URL("https://perfecteventandweddingplanner.in"),
  openGraph: {
    title: "PerfectEvent & Weddings | Luxury Wedding Planner in Nagpur",
    description:
      "Nagpur's premier wedding planning agency creating unforgettable celebrations with complete event management services.",
    url: "https://perfecteventandweddingplanner.in",
    siteName: "PerfectEvent & Weddings",
    images: [
      {
        url: "/images/og-image-wedding.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury wedding by PerfectEvent & Weddings in Nagpur",
      },
    ],
    locale: "en_IN",
    type: "website",
    emails: ["theperfectplanner14@gmail.com"],
    phoneNumbers: ["+919665510693"],
  },
  twitter: {
    card: "summary_large_image",
    title: "PerfectEvent & Weddings | Nagpur's Wedding Experts",
    description:
      "Creating magical weddings in Nagpur with complete planning and coordination services.",
    images: ["/images/og-image-wedding.jpg"],
    creator: "@PerfectEventNagpur",
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
        <link
          rel="preload"
          href="/images/hero-banner.webp"
          as="image"
          imageSrcSet="
            /images/og-image-wedding.webp 400w,
            /images/og-image-wedding.webp 800w,
            /images/og-image-wedding.webp 1200w
          "
          imageSizes="100vw"
        />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Nagpur" />
        <meta name="geo.position" content="21.149813;79.082056" />
        <meta name="ICBM" content="21.149813, 79.0808205682" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${fontVariables} antialiased`}>
        <WeddingSchema />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
