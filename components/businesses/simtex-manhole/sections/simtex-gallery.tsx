"use client";

import { Marquee } from "@/components/ui/marquee";
import { Fancybox } from "@fancyapps/ui";
import Image from "next/image";
import { useMemo, useState } from "react";

// FRP Manhole & Gully Cover Gallery Images
// Images are re-balanced to minimize height differences between columns.
const productImages = [
  // Column 1 (Target Height: ~2250)
  [
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765201678/simtex-1_bseq4f.jpg",
      alt: "10X10 Simtex FRP Manhole Cover",
      width: 600,
      height: 800,
    },
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765201687/simtex-3_xp3h1v.jpg",
      alt: "18×18 Inch Simtex FRP Square Manhole Cover",
      width: 600,
      height: 700,
    },
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765201680/simtex-8_qu5ect.jpg",
      alt: "24×24 Inch Simtex FRP Square Manhole Cover",
      width: 600,
      height: 500,
    },
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765201685/simtex-12_lsvwxz.jpg",
      alt: "45x45cm - C250 Simtex FRP Water Gully Cover",
      width: 600,
      height: 500,
    },
  ],
  // Column 2 (Target Height: ~2450)
  [
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765201683/simtex-2_rweqdn.jpg",
      alt: "12×12 Inch Simtex FRP Square Manhole Cover",
      width: 600,
      height: 900,
    },
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765201679/simtex-5_vlak1j.jpg",
      alt: "15 X 27 Water Gully Cover",
      width: 600,
      height: 800,
    },
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765201682/simtex-10_wlceyg.jpg",
      alt: "30×30 Inch Simtex FRP Square Manhole Cover ",
      width: 600,
      height: 600,
    },
  ],
  // Column 3 (Target Height: ~2150)
  [
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765201681/simtex-4_osbzqy.png",
      alt: "22.6 X 22.6 Water Gully Cover",
      width: 600,
      height: 500,
    },
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765201680/simtex-7_de2xxr.jpg",
      alt: "28 × 28 Inch Simtex FRP Square Manhole Cover ",
      width: 600,
      height: 700,
    },
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765201682/simtex-9_igdai1.jpg",
      alt: "78cm Round Heavy Duty Simtex FRP Manhole Cover",
      width: 600,
      height: 800,
    },
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765201683/simtex-11_vqtgoh.jpg",
      alt: "60 X 60cm Simtex FRP Manhole Cover",
      width: 600,
      height: 750,
    },
  ],
  // Column 4 (Target Height: ~1900)
  [
    // Column 4 only has one image in the 4-column layout to fill space
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765201682/simtex-6_artuch.jpg",
      alt: "15×15 Inch Simtex FRP Square Manhole Cover ",
      width: 600,
      height: 600,
    },
    // Adding placeholder for balance in 4-column layout
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765206407/simtex-13_pynmmx.jpg",
      alt: "78×78 Inch Simtex FRP Square Manhole Cover",
      width: 600,
      height: 600,
    },
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765206316/simtex-14_xglzjg.png",
      alt: "40 x 40 2.5-T SIMTEX FRP (Gray) MANHOLE COVER",
      width: 600,
      height: 700,
    },
  ],
];

export const SimtexGallery = () => {
  // Flatten images for the lightbox
  const allImages = useMemo(() => {
    // Only map the true 12 original images for Fancybox
    const originalImages = [
      ...productImages[0].slice(0, 3), // Simtex 1, 3, 8
      ...productImages[1].slice(0, 3), // Simtex 2, 5, 10
      ...productImages[2].slice(0, 3), // Simtex 4, 7, 9
      ...productImages[3].slice(0, 3), // Simtex 6
    ];

    // Ensure only unique and real images are in the lightbox array
    const realImages = originalImages.filter(
      (img) => img.alt.indexOf("Filler") === -1,
    );

    return realImages.map((img) => ({
      src: img.src,
      thumb: img.src,
      caption: img.alt,
      type: "image",
    }));
  }, []);

  // 2. Updated Open Function (Adjusted logic to match the new image array structure)
  const openLightbox = (columnIndex: number, imageIndex: number) => {
    const clickedImage = productImages[columnIndex][imageIndex];

    // Find the real index of the clicked image in the 'allImages' (Fancybox) array
    const globalIndex = allImages.findIndex(
      (img) => img.src === clickedImage.src,
    );

    if (globalIndex === -1) {
      // Don't open lightbox for filler images
      return;
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

    // Determine if this is a filler image
    const isFiller = image.alt.indexOf("Filler") > -1;

    return (
      <div
        // KEY FIX: Using the image's original aspect ratio instead of a fixed "3/4"
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
          } ${isFiller ? "opacity-50 grayscale" : ""}`}
          loading="lazy"
        />

        {/* Hover Overlay */}
        {!isFiller && (
          <div
            className={`pointer-events-none absolute inset-0 flex items-center justify-center rounded-2xl bg-black/60 opacity-0 transition-opacity duration-300 ${
              hovered ? "opacity-100" : ""
            }`}
          >
            <div className="flex flex-col items-center gap-2">
              <svg
                className="h-12 w-12 text-[#A9802C]"
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
        )}

        {/* Title overlay */}
        <div
          className={`absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <h4 className="font-poppins font-semibold text-white uppercase text-shadow-lg">
            {image.alt}
          </h4>
        </div>
      </div>
    );
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col space-y-6 sm:mb-16">
          <h2 className="font-kapital text-4xl leading-tight font-light text-white sm:text-5xl md:text-6xl lg:text-7xl">
            PRODUCT{" "}
            <span className="font-bold" style={{ color: "#C9A961" }}>
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

      {/* Marquee Gallery Container */}
      <div className="relative container mx-auto w-full items-center justify-center overflow-hidden">
        {/* Mobile (2 Columns) - Uses a combination of columns for a better height spread */}
        <div className="flex h-[600px] w-full px-4 sm:hidden">
          {/* Group 1: Columns 0 & 3 */}
          <div className="group w-1/2">
            <Marquee
              pauseOnHover
              vertical
              // ADDED  here for consistent vertical spacing
              className="[--duration:28s] group-hover:[animation-play-state:paused]"
            >
              {[...productImages[0], ...productImages[3]].map((image, idx) => (
                // REMOVED mb-8 from inner div
                <div key={idx}>
                  <ImageCard image={image} columnIndex={0} imageIndex={idx} />
                </div>
              ))}
            </Marquee>
          </div>
          {/* Group 2: Columns 1 & 2 */}
          <div className="group w-1/2">
            <Marquee
              pauseOnHover
              vertical
              reverse
              // ADDED  here for consistent vertical spacing
              className="[--duration:33s] group-hover:[animation-play-state:paused]"
            >
              {[...productImages[1], ...productImages[2]].map((image, idx) => (
                // REMOVED mb-8 from inner div
                <div key={idx}>
                  <ImageCard image={image} columnIndex={1} imageIndex={idx} />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* Tablet (3 Columns) - Uses a combination of columns for a better height spread */}
        <div className="hidden h-[800px] px-4 sm:flex lg:hidden">
          <div className="group w-1/3">
            <Marquee
              pauseOnHover
              vertical
              // ADDED
              className="[--duration:33s] group-hover:[animation-play-state:paused]"
            >
              {[...productImages[0], productImages[1][0]].map((image, idx) => (
                <div key={idx}>
                  <ImageCard image={image} columnIndex={0} imageIndex={idx} />
                </div>
              ))}
            </Marquee>
          </div>
          <div className="group w-1/3">
            <Marquee
              pauseOnHover
              vertical
              reverse
              // ADDED
              className="[--duration:37s] group-hover:[animation-play-state:paused]"
            >
              {[...productImages[2], productImages[1][1]].map((image, idx) => (
                <div key={idx}>
                  <ImageCard image={image} columnIndex={2} imageIndex={idx} />
                </div>
              ))}
            </Marquee>
          </div>
          <div className="group w-1/3">
            <Marquee
              pauseOnHover
              vertical
              // ADDED
              className="[--duration:35s] group-hover:[animation-play-state:paused]"
            >
              {[productImages[1][2], ...productImages[3]].map((image, idx) => (
                <div key={idx}>
                  <ImageCard image={image} columnIndex={3} imageIndex={idx} />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* Desktop (4 Columns) - Uses the fully balanced structure */}
        <div className="hidden h-[1000px] px-4 lg:flex">
          <div className="group w-1/4">
            <Marquee
              pauseOnHover
              vertical
              // ADDED
              className="[--duration:35s] group-hover:[animation-play-state:paused]"
            >
              {productImages[0].map((image, idx) => (
                <div key={idx}>
                  <ImageCard image={image} columnIndex={0} imageIndex={idx} />
                </div>
              ))}
            </Marquee>
          </div>
          <div className="group w-1/4">
            <Marquee
              pauseOnHover
              vertical
              reverse
              // ADDED
              className="[--duration:39s] group-hover:[animation-play-state:paused]"
            >
              {productImages[1].map((image, idx) => (
                <div key={idx}>
                  <ImageCard image={image} columnIndex={1} imageIndex={idx} />
                </div>
              ))}
            </Marquee>
          </div>
          <div className="group w-1/4">
            <Marquee
              pauseOnHover
              vertical
              // ADDED
              className="[--duration:36s] group-hover:[animation-play-state:paused]"
            >
              {productImages[2].map((image, idx) => (
                <div key={idx}>
                  <ImageCard image={image} columnIndex={2} imageIndex={idx} />
                </div>
              ))}
            </Marquee>
          </div>
          <div className="group w-1/4">
            <Marquee
              pauseOnHover
              vertical
              reverse
              // ADDED
              className="[--duration:34s] group-hover:[animation-play-state:paused]"
            >
              {productImages[3].map((image, idx) => (
                <div key={idx}>
                  <ImageCard image={image} columnIndex={3} imageIndex={idx} />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};
