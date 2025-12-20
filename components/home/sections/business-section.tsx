"use client";
import { BusinessInfoCard } from "@/components/our-businesses/business-info-card";
import { useState } from "react";

const businesses = [
  {
    title: "ASHR Run 'N' Drive",
    tagline: "…feel the difference",
    description:
      "Trusted car sales and automotive solutions tailored to your lifestyle and budget.",
    image: "/home-business/ashr.jpeg",
    logo: "/logos/ashr-run-drive.png",
    link: "/businesses/ashr-run-drive",
  },
  {
    title: "ASHR Designs",
    tagline: "…reflect your style",
    description:
      "Modern interiors and lifestyle solutions that redefine spaces.",
    image: "/home-business/interior.jpeg",
    logo: "/logos/ashr-design-logo.png",
    link: "/businesses/ashr-designs",
  },
  {
    title: "Simtex Manhole Cover",
    tagline: "...expectations to reality",
    description:
      "Durable FRP manhole & gully covers engineered for safety and strength.",
    image: "/home-business/manhole.jpg",
    logo: "/logos/simtex-white.webp",
    link: "/businesses/simtex-manhole",
  },
  {
    title: "High Taste Ceramics",
    tagline: "....elegance in every creation",
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
      className="relative py-20 sm:py-28 md:py-36 lg:py-44"
    >
      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
        <h2 className="text-main/90 font-kapital mb-4 text-center text-3xl font-bold uppercase sm:mb-6 sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl xl:text-7xl">
          Our Business
        </h2>

        <p className="font-poppins mx-auto mb-8 max-w-full px-4 text-center text-sm leading-relaxed font-light sm:mb-10 sm:max-w-xl sm:text-base md:mb-12 md:max-w-4xl md:text-lg lg:text-xl">
          ASHR Group delivers premium automotive, interior, ceramic and
          industrial solutions engineered for reliability and performance.
        </p>
        {/* Grid layout for mobile/tablet, flex for desktop */}
        <div className="grid grid-cols-1 gap-4 overflow-hidden sm:grid-cols-2 md:flex md:flex-row md:gap-0 md:space-x-4">
          {businesses.map((business, index) => (
            <BusinessInfoCard
              key={index}
              title={business.title}
              description={business.description}
              image={business.image}
              logo={business.logo}
              link={business.link}
              tagline={business.tagline}
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
