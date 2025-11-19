"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

// Ceramics & Tiles Gallery Images
const ceramicsImages = [
  // Column 1
  [
    {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=800&fit=crop",
      alt: "Luxury Bathroom with Italian Tiles",
      width: 600,
      height: 800,
    },
    {
      src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=600&h=400&fit=crop",
      alt: "Modern Bathroom Design",
      width: 600,
      height: 400,
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=700&fit=crop",
      alt: "Marble Effect Floor Tiles",
      width: 600,
      height: 700,
    },
  ],
  // Column 2
  [
    {
      src: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=600&h=500&fit=crop",
      alt: "Spa-Style Bathroom",
      width: 600,
      height: 500,
    },
    {
      src: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&h=800&fit=crop",
      alt: "Contemporary Tile Installation",
      width: 600,
      height: 800,
    },
    {
      src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=600&fit=crop",
      alt: "Luxury Bathroom Fittings",
      width: 600,
      height: 600,
    },
  ],
  // Column 3
  [
    {
      src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=700&fit=crop",
      alt: "Kitchen Backsplash Tiles",
      width: 600,
      height: 700,
    },
    {
      src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=500&fit=crop",
      alt: "Master Bathroom Suite",
      width: 600,
      height: 500,
    },
    {
      src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=800&fit=crop",
      alt: "Premium Floor Tiles",
      width: 600,
      height: 800,
    },
  ],
  // Column 4
  [
    {
      src: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=600&h=600&fit=crop",
      alt: "Designer Sanitaryware",
      width: 600,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=750&fit=crop",
      alt: "Wall Tile Installation",
      width: 600,
      height: 750,
    },
    {
      src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=500&fit=crop",
      alt: "Ceramic Tile Showroom",
      width: 600,
      height: 500,
    },
  ],
];

export const HighTasteCeramicsGallery = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const ImageCard = ({ image, columnIndex, imageIndex }: any) => (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl group cursor-pointer transition-all duration-300",
        hoveredImage === `${columnIndex}-${imageIndex}`
          ? "drop-shadow-[0px_8px_16px_rgba(169,128,44,0.4)]"
          : "drop-shadow-[0px_2px_4px_rgba(0,0,0,0.1)]",
      )}
      onMouseEnter={() => setHoveredImage(`${columnIndex}-${imageIndex}`)}
      onMouseLeave={() => setHoveredImage(null)}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end p-6">
        <div className="text-white">
          <h4 className="text-xl font-bold mb-1">{image.alt}</h4>
          <p className="text-sm text-white/80">View Gallery →</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10 max-w-7xl mb-16">
        {/* Header */}
        <div className="flex flex-col space-y-6 mb-12 sm:mb-16">
          <h2 className="font-kapital font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-black/50">
            OUR <span style={{ color: "#A9802C" }}>COLLECTIONS</span>
          </h2>

          <p className="max-w-4xl text-base sm:text-lg md:text-xl font-light leading-relaxed text-gray-600">
            Discover our curated selection of luxury Italian tiles, premium
            bathroom fittings, and designer sanitaryware. Each installation
            showcases quality craftsmanship and timeless elegance for homes and
            commercial spaces across Lagos and beyond.
          </p>
        </div>
      </div>

      {/* Mobile Gallery - 2 Columns */}
      <div className="relative sm:hidden justify-center items-center mx-auto container w-full flex gap-3 overflow-hidden h-[600px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)]">
        {/* Column 1 */}
        <Marquee pauseOnHover vertical className="[--duration:25s]">
          {ceramicsImages[0].map((image, idx) => (
            <ImageCard
              key={idx}
              image={image}
              columnIndex={0}
              imageIndex={idx}
            />
          ))}
        </Marquee>

        {/* Column 2 */}
        <Marquee pauseOnHover vertical reverse className="[--duration:30s]">
          {ceramicsImages[1].map((image, idx) => (
            <ImageCard
              key={idx}
              image={image}
              columnIndex={1}
              imageIndex={idx}
            />
          ))}
        </Marquee>
      </div>

      {/* Tablet Gallery - 3 Columns */}
      <div className="relative hidden sm:flex lg:hidden justify-center items-center mx-auto container w-full gap-4 overflow-hidden h-[800px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_4%,black_96%,transparent_100%)]">
        {/* Column 1 */}
        <Marquee pauseOnHover vertical className="[--duration:30s]">
          {ceramicsImages[0].map((image, idx) => (
            <ImageCard
              key={idx}
              image={image}
              columnIndex={0}
              imageIndex={idx}
            />
          ))}
        </Marquee>

        {/* Column 2 */}
        <Marquee pauseOnHover vertical reverse className="[--duration:35s]">
          {ceramicsImages[1].map((image, idx) => (
            <ImageCard
              key={idx}
              image={image}
              columnIndex={1}
              imageIndex={idx}
            />
          ))}
        </Marquee>

        {/* Column 3 */}
        <Marquee pauseOnHover vertical className="[--duration:28s]">
          {ceramicsImages[2].map((image, idx) => (
            <ImageCard
              key={idx}
              image={image}
              columnIndex={2}
              imageIndex={idx}
            />
          ))}
        </Marquee>
      </div>

      {/* Desktop Gallery - 4 Columns */}
      <div className="relative hidden lg:flex justify-center items-center mx-auto container w-full gap-4 overflow-hidden h-[1000px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_3%,black_97%,transparent_100%)]">
        {/* Column 1 - Scrolling Down */}
        <Marquee pauseOnHover vertical className="[--duration:35s]">
          {ceramicsImages[0].map((image, idx) => (
            <ImageCard
              key={idx}
              image={image}
              columnIndex={0}
              imageIndex={idx}
            />
          ))}
        </Marquee>

        {/* Column 2 - Scrolling Up */}
        <Marquee pauseOnHover vertical reverse className="[--duration:40s]">
          {ceramicsImages[1].map((image, idx) => (
            <ImageCard
              key={idx}
              image={image}
              columnIndex={1}
              imageIndex={idx}
            />
          ))}
        </Marquee>

        {/* Column 3 - Scrolling Down */}
        <Marquee pauseOnHover vertical className="[--duration:30s]">
          {ceramicsImages[2].map((image, idx) => (
            <ImageCard
              key={idx}
              image={image}
              columnIndex={2}
              imageIndex={idx}
            />
          ))}
        </Marquee>

        {/* Column 4 - Scrolling Up */}
        <Marquee pauseOnHover vertical reverse className="[--duration:38s]">
          {ceramicsImages[3].map((image, idx) => (
            <ImageCard
              key={idx}
              image={image}
              columnIndex={3}
              imageIndex={idx}
            />
          ))}
        </Marquee>
      </div>

      {/* Bottom CTA */}
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10 max-w-7xl mt-16">
        <div className="text-center">
          <Link
            href="/showroom"
            className="group inline-flex items-center gap-3 text-white uppercase text-sm sm:text-base font-semibold px-8 sm:px-10 py-4 sm:py-5 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl"
            style={{ backgroundColor: "#A9802C" }}
          >
            <span>Visit Our Showroom</span>
            <ArrowUpRight className="size-4 sm:size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
