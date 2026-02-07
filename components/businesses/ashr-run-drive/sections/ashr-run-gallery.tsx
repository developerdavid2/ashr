"use client";

import { Marquee } from "@/components/ui/marquee";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import Image from "next/image";
import { useMemo, useState } from "react";

// Extended image type to include associated images
interface VehicleImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  associatedImages?: {
    src: string;
    alt: string;
    label: string; // e.g., "Front", "Side", "Back", "Interior"
  }[];
}

const vehicleImages: VehicleImage[][] = [
  [
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199329/ashr-run-drive-1_gpvssi.jpg",
      alt: "Range Rover Velar 2018 R-Dynamic",
      width: 600,
      height: 700,
      // For demo purposes, duplicating the same image with different labels
      // Replace these with actual different angle images later
      associatedImages: [
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199329/ashr-run-drive-1_gpvssi.jpg",
          alt: "Range Rover Velar 2018 R-Dynamic - Front",
          label: "Front",
        },
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199329/ashr-run-drive-1_gpvssi.jpg",
          alt: "Range Rover Velar 2018 R-Dynamic - Side",
          label: "Side",
        },
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199329/ashr-run-drive-1_gpvssi.jpg",
          alt: "Range Rover Velar 2018 R-Dynamic - Back",
          label: "Back",
        },
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199329/ashr-run-drive-1_gpvssi.jpg",
          alt: "Range Rover Velar 2018 R-Dynamic - Interior",
          label: "Interior",
        },
      ],
    },
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199329/ashr-run-drive-2_mgc8t2.jpg",
      alt: "Mercedes-Benz GLC300 2020",
      width: 600,
      height: 400,
      associatedImages: [
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199329/ashr-run-drive-2_mgc8t2.jpg",
          alt: "Mercedes-Benz GLC300 2020 - Front",
          label: "Front",
        },
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199329/ashr-run-drive-2_mgc8t2.jpg",
          alt: "Mercedes-Benz GLC300 2020 - Side",
          label: "Side",
        },
      ],
    },
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199330/ashr-run-drive-3_sx2fb3.jpg",
      alt: "Lexus GX460 premium 2012",
      width: 600,
      height: 800,
      associatedImages: [
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199330/ashr-run-drive-3_sx2fb3.jpg",
          alt: "Lexus GX460 premium 2012 - Front",
          label: "Front",
        },
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199330/ashr-run-drive-3_sx2fb3.jpg",
          alt: "Lexus GX460 premium 2012 - Side",
          label: "Side",
        },
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199330/ashr-run-drive-3_sx2fb3.jpg",
          alt: "Lexus GX460 premium 2012 - Back",
          label: "Back",
        },
      ],
    },
  ],
  [
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199330/ashr-run-drive-4_kh3ks1.jpg",
      alt: "Mitsubishi L200 2024 brand new 4x4",
      width: 600,
      height: 500,
      associatedImages: [
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199330/ashr-run-drive-4_kh3ks1.jpg",
          alt: "Mitsubishi L200 2024 brand new 4x4 - Front",
          label: "Front",
        },
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199330/ashr-run-drive-4_kh3ks1.jpg",
          alt: "Mitsubishi L200 2024 brand new 4x4 - Side",
          label: "Side",
        },
      ],
    },
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199331/ashr-run-drive-5_gxfpqp.jpg",
      alt: "Toyota Prado VXR 2021",
      width: 600,
      height: 700,
      associatedImages: [
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199331/ashr-run-drive-5_gxfpqp.jpg",
          alt: "Toyota Prado VXR 2021 - Front",
          label: "Front",
        },
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199331/ashr-run-drive-5_gxfpqp.jpg",
          alt: "Toyota Prado VXR 2021 - Side",
          label: "Side",
        },
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199331/ashr-run-drive-5_gxfpqp.jpg",
          alt: "Toyota Prado VXR 2021 - Back",
          label: "Back",
        },
      ],
    },
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199330/ashr-run-drive-6_h0kxdc.jpg",
      alt: "Reg. Lexus GX460 2015 Premium Edition",
      width: 600,
      height: 600,
      associatedImages: [
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199330/ashr-run-drive-6_h0kxdc.jpg",
          alt: "Reg. Lexus GX460 2015 Premium Edition - Front",
          label: "Front",
        },
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199330/ashr-run-drive-6_h0kxdc.jpg",
          alt: "Reg. Lexus GX460 2015 Premium Edition - Interior",
          label: "Interior",
        },
      ],
    },
  ],
  [
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199331/ashr-run-drive-7_e25w8u.jpg",
      alt: "Lexus RX350 2016",
      width: 600,
      height: 700,
      associatedImages: [
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199331/ashr-run-drive-7_e25w8u.jpg",
          alt: "Lexus RX350 2016 - Front",
          label: "Front",
        },
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199331/ashr-run-drive-7_e25w8u.jpg",
          alt: "Lexus RX350 2016 - Side",
          label: "Side",
        },
      ],
    },
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199331/ashr-run-drive-8_eyjoi8.jpg",
      alt: "Mercedes-Benz GLE 450 AMG 2016 Pearl White",
      width: 600,
      height: 500,
      associatedImages: [
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199331/ashr-run-drive-8_eyjoi8.jpg",
          alt: "Mercedes-Benz GLE 450 AMG 2016 Pearl White - Front",
          label: "Front",
        },
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199331/ashr-run-drive-8_eyjoi8.jpg",
          alt: "Mercedes-Benz GLE 450 AMG 2016 Pearl White - Side",
          label: "Side",
        },
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199331/ashr-run-drive-8_eyjoi8.jpg",
          alt: "Mercedes-Benz GLE 450 AMG 2016 Pearl White - Back",
          label: "Back",
        },
      ],
    },
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199331/ashr-run-drive-9_mujac9.jpg",
      alt: "Exeed 300T 2.0L by Chery 2024",
      width: 600,
      height: 800,
      associatedImages: [
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199331/ashr-run-drive-9_mujac9.jpg",
          alt: "Exeed 300T 2.0L by Chery 2024 - Front",
          label: "Front",
        },
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199331/ashr-run-drive-9_mujac9.jpg",
          alt: "Exeed 300T 2.0L by Chery 2024 - Interior",
          label: "Interior",
        },
      ],
    },
  ],
  [
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199329/ashr-run-drive-10_a5aj0d.jpg",
      alt: "Porsche 911 Turbo 2015 560HP",
      width: 600,
      height: 600,
      associatedImages: [
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199329/ashr-run-drive-10_a5aj0d.jpg",
          alt: "Porsche 911 Turbo 2015 560HP - Front",
          label: "Front",
        },
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199329/ashr-run-drive-10_a5aj0d.jpg",
          alt: "Porsche 911 Turbo 2015 560HP - Side",
          label: "Side",
        },
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199329/ashr-run-drive-10_a5aj0d.jpg",
          alt: "Porsche 911 Turbo 2015 560HP - Back",
          label: "Back",
        },
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199329/ashr-run-drive-10_a5aj0d.jpg",
          alt: "Porsche 911 Turbo 2015 560HP - Interior",
          label: "Interior",
        },
      ],
    },
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199331/ashr-run-drive-11_oussig.jpg",
      alt: "Premium SUVMercedes-Benz GLE53 AMG 2021",
      width: 600,
      height: 750,
      associatedImages: [
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199331/ashr-run-drive-11_oussig.jpg",
          alt: "Premium SUVMercedes-Benz GLE53 AMG 2021 - Front",
          label: "Front",
        },
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199331/ashr-run-drive-11_oussig.jpg",
          alt: "Premium SUVMercedes-Benz GLE53 AMG 2021 - Side",
          label: "Side",
        },
      ],
    },
    {
      src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199330/ashr-run-drive-12_qpdq3n.jpg",
      alt: "LEXUS LS460 2012 luxury edition",
      width: 600,
      height: 500,
      associatedImages: [
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199330/ashr-run-drive-12_qpdq3n.jpg",
          alt: "LEXUS LS460 2012 luxury edition - Front",
          label: "Front",
        },
        {
          src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199330/ashr-run-drive-12_qpdq3n.jpg",
          alt: "LEXUS LS460 2012 luxury edition - Interior",
          label: "Interior",
        },
      ],
    },
  ],
];

export const AshrRunDriveGallery = () => {
  const [hoveredImage, setHoveredImage] = useState<{
    columnIndex: number;
    imageIndex: number;
  } | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // Flatten all images including associated ones for lightbox
  const allLightboxImages = useMemo(() => {
    const images: Array<{
      src: string;
      thumb: string;
      caption: string;
      type: string;
    }> = [];

    vehicleImages.forEach((column) => {
      column.forEach((image) => {
        // Add main image
        images.push({
          src: image.src,
          thumb: image.src,
          caption: image.alt,
          type: "image",
        });

        // Add associated images if they exist
        if (image.associatedImages && image.associatedImages.length > 0) {
          image.associatedImages.forEach((assocImg) => {
            images.push({
              src: assocImg.src,
              thumb: assocImg.src,
              caption: assocImg.alt,
              type: "image",
            });
          });
        }
      });
    });

    return images;
  }, []);

  // Calculate global index for lightbox
  const getGlobalIndex = (
    columnIndex: number,
    imageIndex: number,
    associatedIndex: number = -1,
  ) => {
    let globalIndex = 0;

    for (let col = 0; col < vehicleImages.length; col++) {
      for (let row = 0; row < vehicleImages[col].length; row++) {
        if (col === columnIndex && row === imageIndex) {
          if (associatedIndex === -1) {
            return globalIndex;
          } else {
            // Add 1 for main image, then add associatedIndex
            return globalIndex + 1 + associatedIndex;
          }
        }

        // Count main image
        globalIndex++;

        // Count associated images
        const assocCount =
          vehicleImages[col][row].associatedImages?.length || 0;
        globalIndex += assocCount;
      }
    }

    return globalIndex;
  };

  const openLightbox = (
    columnIndex: number,
    imageIndex: number,
    associatedIndex: number = -1,
  ) => {
    const startIndex = getGlobalIndex(columnIndex, imageIndex, associatedIndex);

    Fancybox.show(allLightboxImages, {
      startIndex: startIndex,
      mainClass: "ashr-fancybox-container",
      Carousel: {
        infinite: true,
        transition: "fade",
      },
    });
  };

  const handleMouseEnter = (
    columnIndex: number,
    imageIndex: number,
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setHoveredImage({ columnIndex, imageIndex });
    setTooltipPosition({
      x: rect.right + 20, // Position to the right of the image
      y: rect.top,
    });
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const ImageCard = ({ image, columnIndex, imageIndex }: any) => {
    const [cardHovered, setCardHovered] = useState(false);
    const isHovered =
      hoveredImage?.columnIndex === columnIndex &&
      hoveredImage?.imageIndex === imageIndex;
    const hasAssociatedImages =
      image.associatedImages && image.associatedImages.length > 0;

    return (
      <div
        className="group relative cursor-zoom-in overflow-hidden rounded-2xl transition-all duration-500"
        style={{ aspectRatio: `${image.width}/${image.height}` }}
        onClick={() => openLightbox(columnIndex, imageIndex)}
        onMouseEnter={(e) => {
          setCardHovered(true);
          if (hasAssociatedImages) {
            handleMouseEnter(columnIndex, imageIndex, e);
          }
        }}
        onMouseLeave={(e) => {
          // Only clear hover if we're not moving to the tooltip
          const relatedTarget = e.relatedTarget as HTMLElement;
          const isMovingToTooltip = relatedTarget?.closest(
            ".preview-tooltip-panel",
          );

          setCardHovered(false);
          if (hasAssociatedImages && !isMovingToTooltip) {
            handleMouseLeave();
          }
        }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={`h-full w-full rounded-2xl object-cover transition-transform duration-700 ${
            cardHovered ? "scale-110" : "scale-100"
          }`}
          loading="lazy"
        />

        {/* Hover Overlay */}
        <div
          className={`pointer-events-none absolute inset-0 flex items-center justify-center rounded-2xl bg-black/60 opacity-0 transition-opacity duration-300 ${
            cardHovered ? "opacity-100" : ""
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
            {hasAssociatedImages && (
              <p className="text-xs text-[#C9A961]">
                {image.associatedImages.length} more views
              </p>
            )}
          </div>
        </div>

        {/* Title overlay */}
        <div
          className={`absolute right-0 bottom-0 left-0 bg-linear-to-t from-black/80 to-transparent p-4 transition-opacity ${cardHovered ? "opacity-100" : "opacity-0"}`}
        >
          <h4 className="font-poppins font-semibold text-white uppercase text-shadow-lg">
            {image.alt}
          </h4>
        </div>
      </div>
    );
  };

  // Tooltip/Preview Panel Component
  const PreviewTooltip = () => {
    if (!hoveredImage) return null;

    const image =
      vehicleImages[hoveredImage.columnIndex][hoveredImage.imageIndex];
    if (!image.associatedImages || image.associatedImages.length === 0)
      return null;

    return (
      <div
        className="preview-tooltip-panel pointer-events-auto fixed z-[9999]"
        style={{
          left: `${tooltipPosition.x}px`,
          top: `${tooltipPosition.y}px`,
          maxWidth: "400px",
        }}
        onMouseEnter={() => setHoveredImage(hoveredImage)}
        onMouseLeave={() => setHoveredImage(null)}
      >
        <div className="preview-tooltip-panel animate-in fade-in slide-in-from-left-5 rounded-2xl border border-[#C9A961]/30 bg-black/95 p-4 shadow-2xl backdrop-blur-xl duration-200">
          <h3 className="font-poppins mb-3 text-sm font-semibold text-[#C9A961] uppercase">
            Additional Views
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {image.associatedImages.map((assocImg, idx) => (
              <div
                key={idx}
                className="group/preview relative cursor-pointer overflow-hidden rounded-lg transition-transform hover:scale-105"
                onClick={(e) => {
                  e.stopPropagation();
                  openLightbox(
                    hoveredImage.columnIndex,
                    hoveredImage.imageIndex,
                    idx,
                  );
                }}
              >
                <Image
                  src={assocImg.src}
                  alt={assocImg.alt}
                  width={200}
                  height={150}
                  className="h-32 w-full rounded-lg object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover/preview:opacity-100">
                  <span className="text-xs font-medium text-white">View</span>
                </div>
                <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                  <p className="text-xs font-medium text-[#C9A961]">
                    {assocImg.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
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
        className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32"
        id="ashr-run-drive-gallery"
      >
        <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
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
              inspected, and ready for you. Hover to preview different angles.
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

        {/* Tooltip Preview Panel - Rendered outside marquee container */}
        <PreviewTooltip />
      </section>
    </>
  );
};
