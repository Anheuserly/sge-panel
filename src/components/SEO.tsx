// app/components/SEO.tsx

"use client";
import React from "react";
import Script from "next/script";

export default function SEO() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Shree Ganesh Enterprises",
    url: "https://www.amcmep.in",
    image: "https://www.amcmep.in/amcmep-icon.png",
    logo: "https://www.amcmep.in/amcmep-icon.png",
    telephone: "+91-9871936847",
    email: "anilkumarsaini0507@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "House No. 535, Second Floor, Left Side, Khasra No. 60, 128-D21, Chattarpur Pahadi",
      addressLocality: "New Delhi",
      postalCode: "110074",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.5068707,
      longitude: 77.1847125,
    },
    founder: {
      "@type": "Person",
      name: "Shashank Saini",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9871936847",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
    hasPart: [
      {
        "@type": "WebPage",
        url: "https://www.amcmep.in/about",
        name: "About Us",
      },
      {
        "@type": "WebPage",
        url: "https://www.amcmep.in/contact",
        name: "Contact Us",
      },
      {
        "@type": "WebPage",
        url: "https://www.amcmep.in/partners",
        name: "Partners",
      },
    ],
    sameAs: [
      "https://www.facebook.com/amcmep",
      "https://www.linkedin.com/company/amcmep",
      "https://www.google.com/maps/place/Shree+Ganesh+Enterprises/@28.5068754,77.1821376,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1f768fdfa54b:0xd41288173e5dfa86!8m2!3d28.5068707!4d77.1847125!16s%2Fg%2F11lnqngb0y?entry=ttu&g_ep=EgoyMDI1MDkwOS4wIKXMDSoASAFQAw%3D%3D",
    ],
    serviceType: [
      "Fire Protection",
      "Fire Extinguishers",
      "AMC Contracts",
      "Plumbing",
      "Electrical",
      "HVAC",
      "IT Solutions",
      "Security Systems",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does AMCMEP provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide fire protection, fire extinguishers, AMC contracts, plumbing, electrical, HVAC, IT solutions, and security systems across Delhi NCR.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide 24/7 fire safety support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, AMCMEP offers 24/7 emergency fire safety and maintenance services for residential, commercial, and industrial clients.",
        },
      },
      {
        "@type": "Question",
        name: "Where are you located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are based in Delhi NCR and serve clients across the region.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="ld-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <Script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
