"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import * as React from "react";

export interface BusinessType {
  name: string;
  description: string;
  image: string;
  logo: string;
  href?: string;
}

const businesses: BusinessType[] = [
  {
    name: "ASHR Run 'N' Drive",
    description: "Car dealership, sales of individual & fleet vehicles.",
    image: "/home-business/ashr.jpeg",
    logo: "/logos/ashr-run-drive.png",
    href: "/businesses/ashr-run-drive",
  },
  {
    name: "ASHR Designs",
    description:
      "Interior solutions: kitchens, wardrobes, doors, lighting, paint, ",
    image: "/home-business/interior.jpeg",
    logo: "/logos/ashr-design-logo.png",
    href: "/businesses/ashr-designs",
  },
  {
    name: "Simtex Manhole Cover",
    description: "Fiber Reinforced Plastic manhole covers & gully covers.",
    image: "/home-business/manhole.jpg",
    logo: "/logos/simtex-white.webp",
    href: "/businesses/simtex-manhole",
  },
  {
    name: "High Taste Ceramics",
    description: "Tiles, sanitary wares, bathroom fittings, lifestyle ceramics",

    image: "/home-business/ceramics.jpeg",
    logo: "/logos/ceramics-white.png",
    href: "/businesses/high-taste-ceramics",
  },
];

export function BusinessCard({
  business,
  index,
}: {
  business: BusinessType;
  index: number;
}) {
  return (
    <div className="group relative h-[500px] cursor-pointer overflow-hidden rounded-xl">
      {/* background image */}
      <Image
        src={business.image}
        alt={business.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="scale-110 object-cover transition-all duration-[900ms] ease-out group-hover:scale-100"
        loading="lazy"
      />

      {/* dark fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>

      {/* top-right logo bubble */}
      <div className="absolute top-8 right-8">
        <div className="flex size-24 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10 p-3 backdrop-blur-md">
          <Image
            src={business.logo}
            alt={`${business.name} logo`}
            fill
            className="object-contain"
            loading="eager"
          />
        </div>
      </div>

      {/* content */}
      <div className="absolute right-0 bottom-0 left-0 translate-y-0 p-8 transition-transform duration-500 ease-out lg:translate-y-16 lg:group-hover:translate-y-0">
        <h3 className="md:text-3x font-mokoto mb-3 text-2xl font-bold text-white/85">
          {business.name}
        </h3>

        <p className="mb-7 line-clamp-2 max-w-xl text-white/80">
          {business.description}
        </p>

        {/* Mobile & tablet always visible, lg and up: hidden until hover */}
        <div className="block transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
          <Link
            href={business.href || "#"}
            className="group inline-flex items-center gap-2 rounded border-2 border-white px-5 py-3 text-xs font-medium text-white transition-all duration-300 hover:border-[#A9802C] hover:bg-[#A9802C] hover:text-white sm:px-6 sm:py-4 sm:text-sm"
          >
            EXPLORE MORE
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function BusinessesGrid() {
  return (
    <section className="mb-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* BIG CARD 1 (top-left) */}
        <div className="lg:col-span-2">
          <BusinessCard business={businesses[0]} index={0} />
        </div>

        {/* NORMAL CARD 2 */}
        <div className="">
          <BusinessCard business={businesses[1]} index={1} />
        </div>

        {/* NORMAL CARD 3 */}
        <div className="">
          <BusinessCard business={businesses[2]} index={2} />
        </div>

        {/* BIG CARD 4 (bottom-right) */}
        <div className="lg:col-span-2">
          <BusinessCard business={businesses[3]} index={3} />
        </div>
      </div>
    </section>
  );
}
