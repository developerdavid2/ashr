"use client";

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Fancybox } from "@fancyapps/ui";

// High Taste Ceramics Images
const ceramicsImages = [
  // Column 1
  [
    {
      src: "/high-taste-ceramics/high-taste-1.jpg",
      alt: "Creavit Wall hung WCs",
      width: 600,
      height: 800,
    },
    {
      src: "/high-taste-ceramics/high-taste-2.jpg",
      alt: "Premium fittings and Stylish furniture",
      width: 600,
      height: 400,
    },
    {
      src: "/high-taste-ceramics/high-taste-3.jpg",
      alt: "Creavit RAYA Anthracite 100cm Vanity Set",
      width: 600,
      height: 700,
    },
  ],
  // Column 2
  [
    {
      src: "/high-taste-ceramics/high-taste-4.jpg",
      alt: "Creavit Round Wash Hand Basin",
      width: 600,
      height: 500,
    },
    {
      src: "/high-taste-ceramics/high-taste-5.jpg",
      alt: "Creavit Handicapped WC, Washbasin & Accessories",
      width: 600,
      height: 800,
    },
    {
      src: "/high-taste-ceramics/high-taste-6.jpg",
      alt: "Creavit Vanity Set",
      width: 600,
      height: 600,
    },
  ],
  // Column 3
  [
    {
      src: "/high-taste-ceramics/high-taste-7.jpg",
      alt: "Luxurious Showers",
      width: 600,
      height: 700,
    },
    {
      src: "/high-taste-ceramics/high-taste-8.jpg",
      alt: "Luxurious Bathtubs",
      width: 600,
      height: 500,
    },
    {
      src: "/high-taste-ceramics/high-taste-9.jpg",
      alt: "Premium Kitchen Fittings",
      width: 600,
      height: 800,
    },
  ],
  // Column 4
  [
    {
      src: "/high-taste-ceramics/high-taste-10.jpg",
      alt: "Glossy Tiles Fittings",
      width: 600,
      height: 600,
    },
    {
      src: "/high-taste-ceramics/high-taste-11.jpg",
      alt: "Modern Pivot Doors",
      width: 600,
      height: 750,
    },
    {
      src: "/high-taste-ceramics/high-taste-12.jpg",
      alt: "Staturio Contesa",
      width: 600,
      height: 500,
    },
  ],
];

export const HighTasteCeramicsGallery = () => {
  // Flatten images for Fancybox
  const allImages = useMemo(() => {
    return ceramicsImages.flat().map((img) => ({
      src: img.src,
      thumb: img.src,
      caption: img.alt,
      type: "image",
    }));
  }, []);

  // Open Fancybox at correct index
  const openLightbox = (columnIndex: number, imageIndex: number) => {
    const clickedImage = ceramicsImages[columnIndex][imageIndex];

    // Calculate the global index to open the correct slide
    let globalIndex = 0;
    let found = false;
    for (let col = 0; col < ceramicsImages.length; col++) {
      for (let row = 0; row < ceramicsImages[col].length; row++) {
        if (
          ceramicsImages[col][row].src === clickedImage.src &&
          col === columnIndex &&
          row === imageIndex
        ) {
          found = true;
          break;
        }
        globalIndex++;
      }
      if (found) break;
    }

    // 3. Trigger Fancybox
    Fancybox.show(allImages, {
      startIndex: globalIndex,
      mainClass: "ashr-fancybox-container", // Custom class for styling

      Carousel: {
        infinite: true,
        transition: "fade",
      },
    });
  };

  const ImageCard = ({ image, columnIndex, imageIndex }: any) => {
    const [hovered, setHovered] = useState(false);

    return (
      <div
        className="group relative cursor-zoom-in overflow-hidden rounded-2xl transition-all duration-500"
        style={{ aspectRatio: `${image.width}/${image.height}` }}
        onClick={() => openLightbox(columnIndex, imageIndex)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={`h-full w-full rounded-2xl object-cover transition-transform duration-700 ${
            hovered ? "scale-110" : "scale-100"
          }`}
          loading="lazy"
        />

        {/* Hover Overlay */}
        <div
          className={`pointer-events-none absolute inset-0 flex items-center justify-center rounded-2xl bg-black/60 opacity-0 transition-opacity duration-300 ${
            hovered ? "opacity-100" : ""
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <svg
              className="h-12 w-12 text-[#C9A961]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <p className="text-sm font-medium text-white">Click to view</p>
          </div>
        </div>

        {/* Title overlay */}
        <div
          className={`absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity ${hovered ? "opacity-100" : "opacity-0"}`}
        >
          <h4 className="font-poppins font-semibold text-white uppercase text-shadow-lg">
            {image.alt}
          </h4>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* CUSTOM STYLING FOR HIGH TASTE CERAMICS */}
      <style jsx global>{`
        .high-taste-fancybox .fancybox__caption {
          font-family: "Mokoto", serif !important;
          text-transform: uppercase;
          color: #c9a961 !important;
          font-size: 1.8rem !important;
          font-weight: bold !important;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(12px);
          padding: 1.2rem 3rem !important;
          border-radius: 9999px;
          border: 2px solid #c9a961;
          box-shadow: 0 10px 30px rgba(201, 169, 97, 0.3);
          margin-bottom: 20px;
        }
        .high-taste-fancybox .fancybox__thumbs .fancybox__thumb {
          border: 3px solid transparent;
          transition: all 0.3s ease;
        }
        .high-taste-fancybox .fancybox__thumbs .is-active .fancybox__thumb {
          border-color: #c9a961 !important;
        }
      `}</style>

      <section
        className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-32"
        id="high-taste-ceramics-gallery"
      >
        <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6">
          <div className="mb-16 text-center">
            <h2 className="font-kapital text-4xl text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
              OUR <span className="font-bold text-[#C9A961]">COLLECTIONS</span>
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-lg font-light text-gray-700">
              Discover our curated selection of luxury Italian tiles, premium
              bathroom fittings, and designer sanitaryware.
            </p>
          </div>
        </div>

        {/* Mobile (2 Columns) */}
        <div className="flex h-[700px] gap-4 px-4 sm:hidden">
          <div className="group">
            <Marquee
              pauseOnHover
              vertical
              className="[--duration:25s] group-hover:[animation-play-state:paused]"
            >
              {ceramicsImages[0].map((image, idx) => (
                <div key={idx} className="mb-8 last:mb-0">
                  <ImageCard image={image} columnIndex={0} imageIndex={idx} />
                </div>
              ))}
            </Marquee>
          </div>
          <div className="group">
            <Marquee
              pauseOnHover
              vertical
              reverse
              className="[--duration:30s] group-hover:[animation-play-state:paused]"
            >
              {ceramicsImages[1].map((image, idx) => (
                <div key={idx} className="mb-8 last:mb-0">
                  <ImageCard image={image} columnIndex={1} imageIndex={idx} />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* Tablet (3 Columns) */}
        <div className="relative container mx-auto hidden h-[800px] w-full items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_4%,black_96%,transparent_100%)] sm:flex lg:hidden">
          {/* ... (Columns 0, 1, 2) Same as your original code, just using new ImageCard */}
          <div className="group">
            <Marquee
              pauseOnHover
              vertical
              className="[--duration:30s] group-hover:[animation-play-state:paused]"
            >
              {ceramicsImages[0].map((image, idx) => (
                <ImageCard
                  key={idx}
                  image={image}
                  columnIndex={0}
                  imageIndex={idx}
                />
              ))}
            </Marquee>
          </div>
          <div className="group">
            <Marquee
              pauseOnHover
              vertical
              reverse
              className="[--duration:35s] group-hover:[animation-play-state:paused]"
            >
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
          <div className="group">
            <Marquee
              pauseOnHover
              vertical
              className="[--duration:28s] group-hover:[animation-play-state:paused]"
            >
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
        </div>

        {/* Desktop (4 Columns) */}
        <div className="relative container mx-auto hidden h-[1000px] w-full items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_3%,black_97%,transparent_100%)] lg:flex">
          {/* ... (Columns 0, 1, 2, 3) Same as your original code */}
          <div className="group">
            <Marquee
              pauseOnHover
              vertical
              className="[--duration:35s] group-hover:[animation-play-state:paused]"
            >
              {ceramicsImages[0].map((image, idx) => (
                <ImageCard
                  key={idx}
                  image={image}
                  columnIndex={0}
                  imageIndex={idx}
                />
              ))}
            </Marquee>
          </div>
          <div className="group">
            <Marquee
              pauseOnHover
              vertical
              reverse
              className="[--duration:40s] group-hover:[animation-play-state:paused]"
            >
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
          <div className="group">
            <Marquee
              pauseOnHover
              vertical
              className="[--duration:30s] group-hover:[animation-play-state:paused]"
            >
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
          <div className="group">
            <Marquee
              pauseOnHover
              vertical
              reverse
              className="[--duration:38s] group-hover:[animation-play-state:paused]"
            >
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
        </div>
      </section>
    </>
  );
};
