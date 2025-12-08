"use client";

import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface MasonryGalleryProps {
  images: GalleryImage[];
  animated?: boolean;
  pauseOnHover?: boolean;
}

export function MasonryGallery({
  images,
  animated = true,
  pauseOnHover = true,
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

  const renderImageCard = (img: GalleryImage, imgIndex: number) => (
    <div
      key={`img-${imgIndex}`}
      className="relative overflow-hidden rounded-xl"
      onMouseEnter={() => setHoveredIndex(imgIndex)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <Image
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
        className="h-full w-full rounded-xl object-cover transition-transform duration-700 hover:scale-105"
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
        <div className="flex flex-col">
          {columnImages.map((img, i) => renderImageCard(img, i))}
        </div>
      );
    }

    return (
      <div className="group">
        <Marquee
          vertical
          reverse={isReversed}
          pauseOnHover={pauseOnHover}
          repeat={7}
          className="[--duration:26s] [--gap:1.5rem] group-hover:[animation-play-state:paused]"
        >
          {columnImages.map((img, i) => renderImageCard(img, i))}
        </Marquee>
      </div>
    );
  };

  return (
    <div
      className="relative mx-auto w-full max-w-full overflow-hidden px-4 opacity-90"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        className={cn(
          "grid w-full grid-cols-2 md:hidden",
          animated && "h-[700px]",
        )}
      >
        {mobileColumns.map((col, i) => renderColumn(col, i, i % 2 === 1))}
      </div>
      <div
        className={cn(
          "hidden w-full grid-cols-3 md:grid lg:hidden",
          animated && "h-[800px]",
        )}
      >
        {tabletColumns.map((col, i) => renderColumn(col, i, i % 2 === 1))}
      </div>
      <div
        className={cn(
          "hidden w-full grid-cols-4 lg:grid xl:hidden",
          animated && "h-[950px]",
        )}
      >
        {desktopColumns.map((col, i) => renderColumn(col, i, i % 2 === 1))}
      </div>
      <div
        className={cn(
          "hidden w-full grid-cols-5 xl:grid 2xl:hidden",
          animated && "h-[1050px]",
        )}
      >
        {xlColumns.map((col, i) => renderColumn(col, i, i % 2 === 1))}
      </div>
      <div
        className={cn(
          "hidden w-full grid-cols-6 2xl:grid",
          animated && "h-[1200px]",
        )}
      >
        {xxlColumns.map((col, i) => renderColumn(col, i, i % 2 === 1))}
      </div>
    </div>
  );
}
