"use client";

import { Marquee } from "@/components/ui/marquee";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import Image from "next/image";
import { useMemo, useState } from "react";

// Interior Design Gallery Images
const interiorImages = [
  // Column 1
  [
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765214051/designs-1_wabhel.jpg",
      alt: "Modern Kitchen Design",
      width: 600,
      height: 800,
    },

    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765214052/designs-2_wosj8w.jpg",
      alt: "Master Bedroom Suite",
      width: 600,
      height: 700,
    },
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765214045/designs-3_euphxt.jpg",
      alt: "Luxury Kitchen",
      width: 600,
      height: 500,
    },
  ],
  // Column 2
  [
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765214046/designs-4_nnrxeh.jpg",
      alt: "Living Room Interior",
      width: 600,
      height: 400,
    },

    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765214047/designs-5_biry56.jpg",
      alt: "Contemporary Living Space",
      width: 600,
      height: 800,
    },
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765214049/designs-6_v97gup.jpg",
      alt: "Walk-in Closet",
      width: 600,
      height: 600,
    },
  ],
  // Column 3
  [
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765214044/designs-7_njg90e.jpg",
      alt: "Minimalist Bedroom",
      width: 600,
      height: 700,
    },
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765214044/designs-8_e4mwfm.jpg",
      alt: "Home Office Design",
      width: 600,
      height: 500,
    },
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765214044/designs-9_tqmrig.jpg",
      alt: "Dining Room Setup",
      width: 600,
      height: 800,
    },
  ],
  // Column 4
  [
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765214044/designs-10_inntbz.jpg",
      alt: "Luxury Bathroom",
      width: 600,
      height: 600,
    },
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765214044/designs-11_jeziha.jpg",
      alt: "Kitchen with Island",
      width: 600,
      height: 750,
    },
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765214045/designs-12_qnc5ja.jpg",
      alt: "Modern Wardrobe System",
      width: 600,
      height: 500,
    },
  ],
];

export const AshrDesignsGallery = () => {
  // Flatten images for the lightbox
  const allImages = useMemo(() => {
    return interiorImages.flat().map((img) => ({
      src: img.src,
      thumb: img.src,
      caption: img.alt,
      type: "image",
    }));
  }, []);

  // Open lightbox function
  const openLightbox = (columnIndex: number, imageIndex: number) => {
    const clickedImage = interiorImages[columnIndex][imageIndex];

    // Calculate the global index to open the correct slide
    let globalIndex = 0;
    let found = false;
    for (let col = 0; col < interiorImages.length; col++) {
      for (let row = 0; row < interiorImages[col].length; row++) {
        if (
          interiorImages[col][row].src === clickedImage.src &&
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

    // Trigger Fancybox
    Fancybox.show(allImages, {
      startIndex: globalIndex,
      mainClass: "ashr-fancybox-container",

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
      {/* Fancybox CSS styling to match Ashr Run Drive */}
      <style jsx global>{`
        .ashr-fancybox-container .fancybox__caption {
          font-family: "Mokoto", sans-serif;
          text-transform: uppercase;
          color: #c9a961;
          font-size: 2rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          border-radius: 9999px;
          margin-bottom: 20px;
          display: inline-block;
          max-width: 90%;
        }
        .ashr-fancybox-container .fancybox__caption-container {
          display: flex;
          justify-content: center;
          pointer-events: none;
        }
      `}</style>

      <section
        className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-32"
        id="ashr-designs-gallery"
      >
        <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
          <div className="mb-12 flex flex-col space-y-6 sm:mb-16">
            <h2 className="font-kapital text-3xl leading-tight font-light text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              SPACES WE'VE{" "}
              <span className="font-bold" style={{ color: "#A9802C" }}>
                TRANSFORMED
              </span>
            </h2>
            <p className="font-poppins max-w-5xl text-sm leading-relaxed font-light text-gray-700 sm:text-base md:text-lg lg:text-xl">
              Explore our portfolio of completed interior design projects across
              Lagos and beyond. From luxury kitchens to complete home
              renovations, every space tells a story of craftsmanship and
              attention to detail.
            </p>
          </div>
        </div>

        {/* Mobile (2 Columns) */}
        <div className="relative container mx-auto flex h-[600px] w-full items-center justify-center overflow-hidden sm:hidden">
          <div className="group">
            <Marquee
              pauseOnHover
              vertical
              className="[--duration:25s] group-hover:[animation-play-state:paused]"
            >
              {interiorImages[0].map((image, idx) => (
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
              {interiorImages[1].map((image, idx) => (
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
        <div className="relative container mx-auto hidden h-[800px] w-full items-center justify-center overflow-hidden sm:flex lg:hidden">
          <div className="group">
            <Marquee
              pauseOnHover
              vertical
              className="[--duration:30s] group-hover:[animation-play-state:paused]"
            >
              {interiorImages[0].map((image, idx) => (
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
              {interiorImages[1].map((image, idx) => (
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
              {interiorImages[2].map((image, idx) => (
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
        <div className="relative container mx-auto hidden h-[1000px] w-full items-center justify-center overflow-hidden lg:flex">
          <div className="group">
            <Marquee
              pauseOnHover
              vertical
              className="[--duration:35s] group-hover:[animation-play-state:paused]"
            >
              {interiorImages[0].map((image, idx) => (
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
              {interiorImages[1].map((image, idx) => (
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
              {interiorImages[2].map((image, idx) => (
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
              {interiorImages[3].map((image, idx) => (
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

      {/* NO MORE CUSTOM LIGHTBOX - FANCYBOX HANDLES IT! */}
    </>
  );
};
