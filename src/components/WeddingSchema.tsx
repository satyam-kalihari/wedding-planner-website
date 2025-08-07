// components/WeddingSchema.tsx
import Script from "next/script";

export default function WeddingSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EventPlanningBusiness",
    name: "PerfectEvent & Weddings",
    description:
      "Professional wedding planning and event management services in Nagpur, Maharashtra",
    url: "https://perfecteventandweddingplanner.in",
    logo: "https://perfecteventandweddingplanner.in/logo.png",
    telephone: "+917588880000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address, Nagpur",
      addressLocality: "Nagpur",
      addressRegion: "Maharashtra",
      postalCode: "4400XX",
      addressCountry: "India",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "21.1458",
      longitude: "79.0882",
    },
    image: [
      "https://perfecteventandweddingplanner.in/images/wedding-1.jpg",
      "https://perfecteventandweddingplanner.in/images/wedding-2.jpg",
    ],
    priceRange: "$$-$$$",
    sameAs: [
      "https://www.facebook.com/PerfectEventNagpur",
      "https://www.instagram.com/PerfectEventNagpur",
      "https://www.pinterest.com/PerfectEventNagpur",
    ],
  };

  return (
    <Script
      id="wedding-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
