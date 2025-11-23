"use client";

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { useState } from "react";

// Marquee Component

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
      className="group relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-300"
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
        className="h-auto w-full rounded-2xl"
        loading="lazy"
      />

      {/* Overlay on Hover */}
      <div className="absolute inset-0 flex items-end rounded-2xl bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="text-white">
          <h4 className="mb-1 text-xl font-bold">{image.alt}</h4>
          <p className="text-sm text-white/80">View Details →</p>
        </div>
      </div>
    </div>
  );

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32"
      id="ashr-run-drive-gallery"
    >
      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col space-y-6 sm:mb-16">
          <h2 className="font-kapital text-3xl leading-tight font-light text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            OUR{" "}
            <span className="font-bold" style={{ color: "#C9A961" }}>
              INVENTORY
            </span>
          </h2>

          <p className="font-poppins max-w-5xl text-sm leading-relaxed font-light text-gray-200 sm:text-base md:text-lg lg:text-xl">
            Explore our curated selection of premium vehicles. From luxury SUVs
            to executive sedans, every car in our showroom is verified,
            inspected, and ready for you.
          </p>
        </div>
      </div>

      {/* Mobile Gallery - 2 Columns */}
      <div className="relative container mx-auto flex h-[600px] w-full items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)] sm:hidden">
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
      <div className="relative container mx-auto hidden h-[800px] w-full items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_4%,black_96%,transparent_100%)] sm:flex lg:hidden">
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
      <div className="relative container mx-auto hidden h-[1000px] w-full items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_3%,black_97%,transparent_100%)] lg:flex">
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
    </section>
  );
};
