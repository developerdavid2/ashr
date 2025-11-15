"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Marquee Component
interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

// Vehicle Gallery Images
const vehicleImages = [
  // Column 1
  [
    {
      src: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=600&h=800&fit=crop",
      alt: "Luxury SUV",
      width: 600,
      height: 800,
    },
    {
      src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop",
      alt: "Sports Car",
      width: 600,
      height: 400,
    },
    {
      src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=700&fit=crop",
      alt: "Modern Sedan",
      width: 600,
      height: 700,
    },
  ],
  // Column 2
  [
    {
      src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=500&fit=crop",
      alt: "Premium Car",
      width: 600,
      height: 500,
    },
    {
      src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=800&fit=crop",
      alt: "Luxury Vehicle",
      width: 600,
      height: 800,
    },
    {
      src: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=600&fit=crop",
      alt: "Executive Car",
      width: 600,
      height: 600,
    },
  ],
  // Column 3
  [
    {
      src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=700&fit=crop",
      alt: "Convertible",
      width: 600,
      height: 700,
    },
    {
      src: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=500&fit=crop",
      alt: "Family SUV",
      width: 600,
      height: 500,
    },
    {
      src: "https://images.unsplash.com/photo-1551830820-330a71b99659?w=600&h=800&fit=crop",
      alt: "Luxury Interior",
      width: 600,
      height: 800,
    },
  ],
  // Column 4
  [
    {
      src: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&h=600&fit=crop",
      alt: "Business Car",
      width: 600,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=750&fit=crop",
      alt: "Premium SUV",
      width: 600,
      height: 750,
    },
    {
      src: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&h=500&fit=crop",
      alt: "Showroom Car",
      width: 600,
      height: 500,
    },
  ],
];

export const AshrRunDriveGallery = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const ImageCard = ({ image, columnIndex, imageIndex }: any) => (
    <div
      className="relative overflow-hidden rounded-2xl group cursor-pointer transition-all duration-300"
      style={{
        filter:
          hoveredImage === `${columnIndex}-${imageIndex}`
            ? "drop-shadow(0px 8px 16px rgba(169, 128, 44, 0.4))"
            : "drop-shadow(0px 2px 4px rgba(0,0,0,0.1))",
      }}
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
          <p className="text-sm text-white/80">View Details →</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10 max-w-7xl mb-16">
        {/* Header */}
        <div className="flex flex-col space-y-6 mb-12 sm:mb-16">
          <h2 className="font-kapital font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white">
            OUR <span style={{ color: "#9F8E6D" }}>INVENTORY</span>
          </h2>

          <p className="max-w-4xl text-base sm:text-lg md:text-xl font-light leading-relaxed text-gray-300">
            Explore our curated selection of premium vehicles. From luxury SUVs
            to executive sedans, every car in our showroom is verified,
            inspected, and ready for you.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {["All Vehicles", "SUVs", "Sedans", "Luxury", "New Arrivals"].map(
            (filter, idx) => (
              <button
                key={idx}
                className={cn(
                  "px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300",
                  idx === 0
                    ? "text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200",
                )}
                style={idx === 0 ? { backgroundColor: "#9F8E6D" } : {}}
              >
                {filter}
              </button>
            ),
          )}
        </div>
      </div>

      {/* Mobile Gallery - 2 Columns */}
      <div className="relative sm:hidden justify-center items-center mx-auto container w-full flex gap-3 overflow-hidden h-[600px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)]">
        {/* Column 1 */}
        <Marquee pauseOnHover vertical className="[--duration:25s]">
          {vehicleImages[0].map((image, idx) => (
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
          {vehicleImages[1].map((image, idx) => (
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
          {vehicleImages[0].map((image, idx) => (
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
          {vehicleImages[1].map((image, idx) => (
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
          {vehicleImages[2].map((image, idx) => (
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
          {vehicleImages[0].map((image, idx) => (
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
          {vehicleImages[1].map((image, idx) => (
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
          {vehicleImages[2].map((image, idx) => (
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
          {vehicleImages[3].map((image, idx) => (
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
            href="/contact"
            className="group inline-flex items-center gap-3 text-white uppercase text-sm sm:text-base font-semibold px-8 sm:px-10 py-4 sm:py-5 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl"
            style={{ backgroundColor: "#9F8E6D" }}
          >
            <span>View Full Inventory</span>
            <ArrowUpRight className="size-4 sm:size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
