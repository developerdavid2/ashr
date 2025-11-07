"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface MasonryGalleryProps {
  images: GalleryImage[];
  animated?: boolean;
  animationSpeed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
}

export function MasonryGallery({
  images,
  animated = false,
  animationSpeed = "normal",
  pauseOnHover = false,
}: MasonryGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const splitIntoColumns = (items: GalleryImage[], numColumns: number) => {
    const columns: GalleryImage[][] = Array.from(
      { length: numColumns },
      () => [],
    );
    items.forEach((item, index) => columns[index % numColumns].push(item));
    return columns;
  };

  const mobileColumns = splitIntoColumns(images, 2);
  const tabletColumns = splitIntoColumns(images, 3);
  const desktopColumns = splitIntoColumns(images, 4);
  const xlColumns = splitIntoColumns(images, 5);
  const xxlColumns = splitIntoColumns(images, 6);

  const getDuration = () => {
    switch (animationSpeed) {
      case "slow":
        return "60s";
      case "fast":
        return "20s";
      default:
        return "40s";
    }
  };

  const renderImageCard = (img: GalleryImage, imgIndex: number) => (
    <div
      key={`img-${imgIndex}`}
      className="relative overflow-hidden rounded transition-all duration-300 ease-in-out shrink-0"
      style={{
        filter:
          hoveredIndex === imgIndex
            ? "drop-shadow(0px 5px 5px rgba(0,0,0,0.4))"
            : "drop-shadow(0px 2px 2px rgba(0,0,0,0.4))",
      }}
      onMouseEnter={() => setHoveredIndex(imgIndex)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <Image
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
        className="w-full h-auto rounded"
        loading="lazy"
      />
    </div>
  );

  const renderColumn = (
    columnImages: GalleryImage[],
    columnIndex: number,
    isReversed = false,
  ) => {
    if (!animated) {
      return (
        <div
          key={columnIndex}
          className="flex flex-col gap-[var(--masonry-gap)]"
        >
          {columnImages.map((img, imgIndex) => renderImageCard(img, imgIndex))}
        </div>
      );
    }

    return (
      <Marquee
        key={columnIndex}
        vertical
        reverse={isReversed}
        pauseOnHover={pauseOnHover}
        repeat={4}
        className={cn(
          "h-full [--gap:var(--masonry-gap)]",
          `[--duration:${getDuration()}]`,
        )}
      >
        {columnImages.map((img, imgIndex) => renderImageCard(img, imgIndex))}
      </Marquee>
    );
  };

  return (
    <div className="w-full mx-auto relative overflow-hidden [--masonry-gap:0.8rem] opacity-70">
      {/* Mobile */}
      <div
        className={`grid grid-cols-2 md:hidden ${animated ? "h-[600px] overflow-hidden" : ""}`}
      >
        {mobileColumns.map((column, index) =>
          renderColumn(column, index, index % 2 === 1),
        )}
      </div>

      {/* Tablet */}
      <div
        className={`hidden md:grid lg:hidden grid-cols-3 ${animated ? "h-[600px] overflow-hidden" : ""}`}
      >
        {tabletColumns.map((column, index) =>
          renderColumn(column, index, index % 2 === 1),
        )}
      </div>

      {/* Desktop */}
      <div
        className={`hidden lg:grid xl:hidden grid-cols-4 ${animated ? "h-[700px] overflow-hidden" : ""}`}
      >
        {desktopColumns.map((column, index) =>
          renderColumn(column, index, index % 2 === 1),
        )}
      </div>

      {/* XL */}
      <div
        className={`hidden xl:grid 2xl:hidden grid-cols-5 ${animated ? "h-[700px] overflow-hidden" : ""}`}
      >
        {xlColumns.map((column, index) =>
          renderColumn(column, index, index % 2 === 1),
        )}
      </div>

      {/* 2XL */}
      <div
        className={`hidden 2xl:grid grid-cols-6 ${animated ? "h-[1200px] overflow-hidden" : ""}`}
      >
        {xxlColumns.map((column, index) =>
          renderColumn(column, index, index % 2 === 1),
        )}
      </div>
    </div>
  );
}
