"use client";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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
    name: "ASHR Run and Drive",
    description:
      "Trusted automotive dealer specializing in SUVs, fleet vehicles, sourcing & optimized delivery.",
    image: "/home-business/ashr.jpeg",
    logo: "/logos/ashr-run-drive.png",
    href: "/businesses/ashr-run-and-drive",
  },
  {
    name: "ASHR Designs",
    description:
      "Premium interior solutions – kitchens, wardrobes, doors, paints, lighting & spatial experience design.",
    image: "/home-business/ceramics.jpeg",
    logo: "/logos/ashr-design-logo.png",
    href: "/businesses/ashr-run-and-drive",
  },
  {
    name: "Simtex Manhole Cover",
    description:
      "Fiber Reinforced Plastic (FRP) manhole & gully covers engineered for durability and safety.",
    image: "/home-business/interior.jpeg",
    logo: "/logos/simtex-white.webp",
    href: "/businesses/ashr-run-and-drive",
  },
  {
    name: "High Taste Ceramics",
    description:
      "Luxury tiles, sanitary wares, and bathroom fittings curated to elevate modern living.",
    image: "/home-business/manhole.jpeg",
    logo: "/logos/ceramics-white.png",
    href: "/businesses/ashr-run-and-drive",
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
    <div className="group relative h-[500px] rounded-xl overflow-hidden cursor-pointer">
      {/* background image */}
      <Image
        src={business.image}
        alt={business.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover scale-110 group-hover:scale-100 transition-all duration-[900ms] ease-out"
      />

      {/* dark fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent"></div>

      {/* top-right logo bubble */}
      <div className="absolute top-8 right-8">
        <div className="bg-white/10 backdrop-blur-md border border-white/20  p-3 flex items-center justify-center size-24 rounded-full overflow-hidden">
          <Image
            src={business.logo}
            alt={`${business.name} logo`}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h3 className="text-4xl font-bold text-white mb-3 font-mokoto">
          {business.name}
        </h3>

        <p className="text-white/80 line-clamp-2 max-w-xl mb-7">
          {business.description}
        </p>

        {/* Mobile & tablet always visible */}
        <div className="translate-y-0 lg:translate-y-30 lg:group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <Link
            href={business.href}
            className="inline-flex items-center gap-2 py-3 sm:py-4 px-5 sm:px-6 text-white border-2 border-white hover:text-white hover:bg-[#A9802C] hover:border-[#A9802C] text-xs sm:text-sm font-medium transition-all duration-300 group rounded"
          >
            EXPLORE MORE
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function BusinessesGrid() {
  return (
    <section className=" bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
