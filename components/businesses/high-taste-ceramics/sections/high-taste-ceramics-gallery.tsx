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
        "group relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-300",
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
        className="h-auto w-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Overlay on Hover */}
      <div className="absolute inset-0 flex items-end rounded-2xl bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="text-white">
          <h4 className="mb-1 text-xl font-bold">{image.alt}</h4>
          <p className="text-sm text-white/80">View Gallery →</p>
        </div>
      </div>
    </div>
  );

  return (
    <section
      className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-32"
      id="high-taste-ceramics-gallery"
    >
      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col space-y-6 sm:mb-16">
          <h2 className="font-kapital text-main/50 text-4xl leading-tight font-light sm:text-5xl md:text-6xl lg:text-7xl">
            OUR{" "}
            <span className="font-bold" style={{ color: "#A9802C" }}>
              COLLECTIONS
            </span>
          </h2>

          <p className="font-poppins max-w-5xl text-sm leading-relaxed font-light text-gray-700 sm:text-lg md:text-xl">
            Discover our curated selection of luxury Italian tiles, premium
            bathroom fittings, and designer sanitaryware.
          </p>
        </div>
      </div>

      {/* Mobile Gallery - 2 Columns */}
      <div className="relative container mx-auto flex h-[600px] w-full items-center justify-center overflow-hidden sm:hidden">
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
      <div className="relative container mx-auto hidden h-[800px] w-full items-center justify-center overflow-hidden sm:flex lg:hidden">
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
      <div className="relative container mx-auto hidden h-[1000px] w-full items-center justify-center overflow-hidden lg:flex">
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
    </section>
  );
};
