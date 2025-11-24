"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

// FRP Manhole & Gully Cover Gallery Images
const productImages = [
  // Column 1
  [
    {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=800&fit=crop",
      alt: "FRP Manhole Cover Installation",
      width: 600,
      height: 800,
    },
    {
      src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
      alt: "Drainage Infrastructure",
      width: 600,
      height: 400,
    },
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=700&fit=crop",
      alt: "Urban Road Construction",
      width: 600,
      height: 700,
    },
  ],
  // Column 2
  [
    {
      src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=500&fit=crop",
      alt: "Industrial Manhole System",
      width: 600,
      height: 500,
    },
    {
      src: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&h=800&fit=crop",
      alt: "Heavy-Duty Gully Cover",
      width: 600,
      height: 800,
    },
    {
      src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop",
      alt: "Estate Drainage System",
      width: 600,
      height: 600,
    },
  ],
  // Column 3
  [
    {
      src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=700&fit=crop",
      alt: "Highway Infrastructure",
      width: 600,
      height: 700,
    },
    {
      src: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&h=500&fit=crop",
      alt: "Commercial Installation",
      width: 600,
      height: 500,
    },
    {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=800&fit=crop",
      alt: "Round FRP Manhole Cover",
      width: 600,
      height: 800,
    },
  ],
  // Column 4
  [
    {
      src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=600&fit=crop",
      alt: "Square Gully Trap Cover",
      width: 600,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=750&fit=crop",
      alt: "Industrial Grade Cover",
      width: 600,
      height: 750,
    },
    {
      src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=500&fit=crop",
      alt: "Anti-Theft FRP Design",
      width: 600,
      height: 500,
    },
  ],
];

export const SimtexGallery = () => {
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
          <p className="text-sm text-white/80">View Product Details →</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col space-y-6 sm:mb-16">
          <h2 className="font-kapital text-4xl leading-tight font-light text-white sm:text-5xl md:text-6xl lg:text-7xl">
            PRODUCT{" "}
            <span className="font-bold" style={{ color: "#A9802C" }}>
              GALLERY
            </span>
          </h2>

          <p className="max-w-4xl text-base leading-relaxed font-light text-gray-300 sm:text-lg md:text-xl">
            Browse our complete range of FRP manhole and gully covers. From
            residential estates to heavy industrial applications, see our
            products in action across Nigeria's infrastructure projects.
          </p>
        </div>
      </div>

      {/* Mobile Gallery - 2 Columns */}
      <div className="relative container mx-auto flex h-[600px] w-full items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)] sm:hidden">
        {/* Column 1 */}
        <Marquee pauseOnHover vertical className="[--duration:25s]">
          {productImages[0].map((image, idx) => (
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
          {productImages[1].map((image, idx) => (
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
          {productImages[0].map((image, idx) => (
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
          {productImages[1].map((image, idx) => (
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
          {productImages[2].map((image, idx) => (
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
      <div className="relative hidden h-[1000px] w-full items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_3%,black_97%,transparent_100%)] lg:flex">
        {/* Column 1 - Scrolling Down */}
        <Marquee pauseOnHover vertical className="[--duration:35s]">
          {productImages[0].map((image, idx) => (
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
          {productImages[1].map((image, idx) => (
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
          {productImages[2].map((image, idx) => (
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
          {productImages[3].map((image, idx) => (
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
