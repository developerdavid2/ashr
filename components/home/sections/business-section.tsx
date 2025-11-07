"use client";
import { BusinessInfoCard } from "@/components/custom/our-businesses/business-info-card";
import { useState } from "react";

const businesses = [
  {
    title: "ASHR Run and Drive",
    description:
      "Trusted car sales and automotive solutions tailored to your lifestyle and budget.",
    image: "/home-business/ashr.jpeg",
    logo: "/logos/ashr-run-drive.PNG",
    link: "/businesses/ashr-run-drive",
  },
  {
    title: "ASHR Designs",
    description:
      "Modern interiors and lifestyle solutions that redefine spaces.",
    image: "/home-business/interior.jpeg",
    logo: "/logos/ashr-logo.PNG",
    link: "/businesses/ashr-designs",
  },
  {
    title: "Simtex Manhole Cover",
    description:
      "Durable FRP manhole & gully covers engineered for safety and strength.",
    image: "/home-business/manhole.jpeg",
    logo: "/logos/simtex-white.webp",
    link: "/businesses/simtex-manhole",
  },
  {
    title: "High Taste Ceramics",
    description:
      "Premium ceramics, tiles, and bathroom fittings for every space.",
    image: "/home-business/ceramics.jpeg",
    logo: "/logos/ceramics-white.png",
    link: "/businesses/high-taste-ceramics",
  },
];

export function BusinessSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="home-businesses"
      className="relative py-24 sm:py-32 md:py-40 lg:py-44"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-kapital uppercase text-center mb-4 sm:mb-6 md:mb-8">
          Our Business
        </h2>
        <p className="mb-8 sm:mb-10 md:mb-12 text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed font-poppins text-center px-4">
          ASHR Group delivers premium automotive, interior, ceramic and
          industrial solutions engineered for reliability and performance.
        </p>
        {/* Grid layout for mobile/tablet, flex for desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:flex md:flex-row md:space-x-4 md:gap-0 overflow-hidden">
          {businesses.map((business, index) => (
            <BusinessInfoCard
              key={index}
              title={business.title}
              description={business.description}
              image={business.image}
              logo={business.logo}
              link={business.link}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
