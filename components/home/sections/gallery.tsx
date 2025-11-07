import * as React from "react";
import { MasonryGallery } from "@/components/custom/gallery/mansory-gallery";

// Sample gallery images data
const galleryImages = [
  {
    src: "https://picsum.photos/450/325?image=100",
    alt: "Gallery Image 1",
    width: 450,
    height: 325,
  },
  {
    src: "https://picsum.photos/450/450?image=200",
    alt: "Gallery Image 2",
    width: 450,
    height: 450,
  },
  {
    src: "https://picsum.photos/450/280?image=300",
    alt: "Gallery Image 3",
    width: 450,
    height: 280,
  },
  {
    src: "https://picsum.photos/450/540?image=400",
    alt: "Gallery Image 4",
    width: 450,
    height: 540,
  },
  {
    src: "https://picsum.photos/450/380?image=500",
    alt: "Gallery Image 5",
    width: 450,
    height: 380,
  },
  {
    src: "https://picsum.photos/450/300?image=600",
    alt: "Gallery Image 6",
    width: 450,
    height: 300,
  },
  {
    src: "https://picsum.photos/450/400?image=700",
    alt: "Gallery Image 7",
    width: 450,
    height: 400,
  },
  {
    src: "https://picsum.photos/450/300?image=800",
    alt: "Gallery Image 8",
    width: 450,
    height: 300,
  },
  {
    src: "https://picsum.photos/450/280?image=900",
    alt: "Gallery Image 9",
    width: 450,
    height: 280,
  },
  {
    src: "https://picsum.photos/450/480?image=925",
    alt: "Gallery Image 10",
    width: 450,
    height: 480,
  },
  {
    src: "https://picsum.photos/450/550?image=950",
    alt: "Gallery Image 11",
    width: 450,
    height: 550,
  },
  {
    src: "https://picsum.photos/450/600?image=1000",
    alt: "Gallery Image 12",
    width: 450,
    height: 600,
  },
  {
    src: "https://picsum.photos/450/325?image=25",
    alt: "Gallery Image 13",
    width: 450,
    height: 325,
  },
  {
    src: "https://picsum.photos/450/450?image=50",
    alt: "Gallery Image 14",
    width: 450,
    height: 450,
  },
  {
    src: "https://picsum.photos/450/280?image=75",
    alt: "Gallery Image 15",
    width: 450,
    height: 280,
  },
  {
    src: "https://picsum.photos/450/540?image=100",
    alt: "Gallery Image 16",
    width: 450,
    height: 540,
  },
  {
    src: "https://picsum.photos/450/380?image=125",
    alt: "Gallery Image 17",
    width: 450,
    height: 380,
  },
  {
    src: "https://picsum.photos/450/300?image=161",
    alt: "Gallery Image 18",
    width: 450,
    height: 300,
  },
  {
    src: "https://picsum.photos/450/400?image=175",
    alt: "Gallery Image 19",
    width: 450,
    height: 400,
  },
  {
    src: "https://picsum.photos/450/300?image=200",
    alt: "Gallery Image 20",
    width: 450,
    height: 300,
  },
  {
    src: "https://picsum.photos/450/280?image=225",
    alt: "Gallery Image 21",
    width: 450,
    height: 280,
  },
  {
    src: "https://picsum.photos/450/480?image=250",
    alt: "Gallery Image 22",
    width: 450,
    height: 480,
  },
  {
    src: "https://picsum.photos/450/550?image=275",
    alt: "Gallery Image 23",
    width: 450,
    height: 550,
  },
  {
    src: "https://picsum.photos/450/600?image=300",
    alt: "Gallery Image 24",
    width: 450,
    height: 600,
  },
  {
    src: "https://picsum.photos/450/325?image=13",
    alt: "Gallery Image 25",
    width: 450,
    height: 325,
  },
  {
    src: "https://picsum.photos/450/450?image=26",
    alt: "Gallery Image 26",
    width: 450,
    height: 450,
  },
  {
    src: "https://picsum.photos/450/280?image=39",
    alt: "Gallery Image 27",
    width: 450,
    height: 280,
  },
  {
    src: "https://picsum.photos/450/540?image=52",
    alt: "Gallery Image 28",
    width: 450,
    height: 540,
  },
  {
    src: "https://picsum.photos/450/380?image=65",
    alt: "Gallery Image 29",
    width: 450,
    height: 380,
  },
  {
    src: "https://picsum.photos/450/300?image=78",
    alt: "Gallery Image 30",
    width: 450,
    height: 300,
  },
];

export function Gallery() {
  return (
    <section
      id="home-gallery"
      className="bg-main relative py-32 overflow-hidden pt-32"
    >
      <div className="relative py-20 sm:py-28 md:py-36 lg:py-44 overflow-hidden ">
        {/* Large GALLERY background text */}
        <h1 className="font-mokoto text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[15rem] text-gray-300/8 absolute -top-0 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 leading-none mask-b-to-80%">
          GALLERY
        </h1>
        <h2 className="text-white font-bold font-kapital text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 text-center">
          GALLERY
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-16 items-start relative z-10 my-40">
          <div className="absolute top-0 inset-x-0 w-full h-24 pointer-events-none bg-gradient-to-b from-main to-transparent z-30" />
          <div className="absolute bottom-0 inset-x-0 w-full h-24 pointer-events-none bg-gradient-to-t from-main to-transparent z-30" />

          {/* Gallery with marquee animation */}
          <MasonryGallery
            images={galleryImages}
            animated={true}
            animationSpeed="normal"
          />
        </div>
      </div>
    </section>
  );
}
