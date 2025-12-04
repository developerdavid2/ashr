"use client";

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { useState, useMemo } from "react";
import FsLightbox from "fslightbox-react";

// ... (Keep your vehicleImages array exactly as it is) ...
const vehicleImages = [
  [
    {
      src: "/ashr-run-drive/ashr-run-drive-1.jpg",
      alt: "Range Rover Velar 2018 R-Dynamic",
      width: 600,
      height: 700,
    },
    {
      src: "/ashr-run-drive/ashr-run-drive-2.jpg",
      alt: "Mercedes-Benz GLC300 2020",
      width: 600,
      height: 400,
    },
    {
      src: "/ashr-run-drive/ashr-run-drive-3.jpg",
      alt: "Lexus GX460 premium 2012",
      width: 600,
      height: 800,
    },
  ],
  [
    {
      src: "/ashr-run-drive/ashr-run-drive-4.jpg",
      alt: "Mitsubishi L200 2024 brand new 4x4",
      width: 600,
      height: 500,
    },
    {
      src: "/ashr-run-drive/ashr-run-drive-5.jpg",
      alt: "Toyota Prado VXR 2021",
      width: 600,
      height: 700,
    },
    {
      src: "/ashr-run-drive/ashr-run-drive-6.jpg",
      alt: "Reg. Lexus GX460 2015 Premium Edition",
      width: 600,
      height: 600,
    },
  ],
  [
    {
      src: "/ashr-run-drive/ashr-run-drive-7.jpg",
      alt: "Lexus RX350 2016",
      width: 600,
      height: 700,
    },
    {
      src: "/ashr-run-drive/ashr-run-drive-8.jpg",
      alt: "Mercedes-Benz GLE 450 AMG 2016 Pearl White",
      width: 600,
      height: 500,
    },
    {
      src: "/ashr-run-drive/ashr-run-drive-9.jpg",
      alt: "Exeed 300T 2.0L by Chery 2024",
      width: 600,
      height: 800,
    },
  ],
  [
    {
      src: "/ashr-run-drive/ashr-run-drive-10.jpg",
      alt: "Porsche 911 Turbo 2015 560HP",
      width: 600,
      height: 600,
    },
    {
      src: "/ashr-run-drive/ashr-run-drive-11.jpg",
      alt: "Premium SUVMercedes-Benz GLE53 AMG 2021",
      width: 600,
      height: 750,
    },
    {
      src: "/ashr-run-drive/ashr-run-drive-12.jpg",
      alt: "LEXUS LS460 2012 luxury edition",
      width: 600,
      height: 500,
    },
  ],
];

export const AshrRunDriveGallery = () => {
  // LIGHTBOX STATE — use a counter to force re-render
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 0,
  });

  const allImages = useMemo(() => {
    return vehicleImages.flat().map((img, index) => ({
      ...img,
      _id: `${img.src}-${index}`, // unique ID even if src repeats
    }));
  }, []);

  // Extract sources and captions
  const lightboxSources = allImages.map((img) => img.src);
  const lightboxCaptions = allImages.map((img) => img.alt);
  const openLightbox = (columnIndex: number, imageIndex: number) => {
    const clickedImage = vehicleImages[columnIndex][imageIndex];

    // Find correct index using the original nested structure
    let globalIndex = 0;
    for (let col = 0; col < vehicleImages.length; col++) {
      for (let row = 0; row < vehicleImages[col].length; row++) {
        if (
          vehicleImages[col][row].src === clickedImage.src &&
          col === columnIndex &&
          row === imageIndex
        ) {
          setLightboxController({
            toggler: !lightboxController.toggler,
            slide: globalIndex + 1,
          }); // +1 because FsLightbox is 1-indexed
          return;
        }
        globalIndex++;
      }
    }
  };

  const ImageCard = ({ image, columnIndex, imageIndex }: any) => {
    const [hovered, setHovered] = useState(false);

    return (
      <div
        className="group relative cursor-zoom-in overflow-hidden rounded-2xl transition-all duration-500"
        style={{ aspectRatio: `${image.width}/${image.height}` }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => openLightbox(columnIndex, imageIndex)}
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
            <p className="text-sm font-medium text-white">Click to enlarge</p>
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
      <section
        className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32"
        id="ashr-run-drive-gallery"
      >
        <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
          <div className="mb-12 flex flex-col space-y-6 sm:mb-16">
            <h2 className="font-kapital text-3xl leading-tight font-light text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              OUR{" "}
              <span className="font-bold" style={{ color: "#C9A961" }}>
                INVENTORY
              </span>
            </h2>
            <p className="font-poppins max-w-5xl text-sm leading-relaxed font-light text-gray-200 sm:text-base md:text-lg lg:text-xl">
              Explore our curated selection of premium vehicles. From luxury
              SUVs to executive sedans, every car in our showroom is verified,
              inspected, and ready for you.
            </p>
          </div>
        </div>

        {/* Mobile (2 Columns) */}
        <div className="relative container mx-auto flex h-[600px] w-full items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)] sm:hidden">
          <div className="group">
            <Marquee
              pauseOnHover
              vertical
              className="[--duration:25s] group-hover:[animation-play-state:paused]"
            >
              {vehicleImages[0].map((image, idx) => (
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
              className="[--duration:30s] group-hover:[animation-play-state:paused]"
            >
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
        </div>

        {/* Tablet (3 Columns) */}
        <div className="relative container mx-auto hidden h-[800px] w-full items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_4%,black_96%,transparent_100%)] sm:flex lg:hidden">
          <div className="group">
            <Marquee
              pauseOnHover
              vertical
              className="[--duration:30s] group-hover:[animation-play-state:paused]"
            >
              {vehicleImages[0].map((image, idx) => (
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

          <div className="group">
            <Marquee
              pauseOnHover
              vertical
              className="[--duration:28s] group-hover:[animation-play-state:paused]"
            >
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
        </div>

        {/* Desktop (4 Columns) */}
        <div className="relative container mx-auto hidden h-[1000px] w-full items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_3%,black_97%,transparent_100%)] lg:flex">
          <div className="group">
            <Marquee
              pauseOnHover
              vertical
              className="[--duration:35s] group-hover:[animation-play-state:paused]"
            >
              {vehicleImages[0].map((image, idx) => (
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

          <div className="group">
            <Marquee
              pauseOnHover
              vertical
              className="[--duration:30s] group-hover:[animation-play-state:paused]"
            >
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

          <div className="group">
            <Marquee
              pauseOnHover
              vertical
              reverse
              className="[--duration:38s] group-hover:[animation-play-state:paused]"
            >
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
        </div>
      </section>

      {/* LIGHTBOX — THE CORRECT WAY */}
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={lightboxSources}
        captions={lightboxCaptions}
        slide={lightboxController.slide} // 1-indexed!
        type="image"
      />
    </>
  );
};
