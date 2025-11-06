import React from "react";

import { Separator } from "@/components/ui/separator";
import ScrollVelocity from "@/components/custom/scroll-velocity";

export const TrustedBrandsSection = () => {
  return (
    <section className=" mask-x-from-80% mask-x-to-95% overflow-x-hidden pb-16 sm:pb-20 md:pb-28 lg:pb-32 font-kapital-stencil">
      {/* ScrollVelocity Sections */}
      <div className="relative overflow-hidden rotate-1 opacity-40">
        <Separator className="mt-6 mb-2 bg-main" />
        <ScrollVelocity
          texts={[
            "TILES  ✧ CERAMICS DISTRIBUTORS ✧ INDUSTRIAL MANUFACTURERS ✧ FACILITY MANAGERS ✧ GOVERNMENT PROCUREMENT PROJECTS ✧ ",
          ]}
          velocity={45}
          className="text-main custom-scroll-text font-kapital-stencil whitespace-nowrap"
        />
        <Separator className="mt-2 bg-main" />
        <div className="absolute top-0 left-0 w-24 h-full pointer-events-none bg-gradient-to-r from-slate-950 to-transparent" />
        <div className="absolute top-0 right-0 w-24 h-full pointer-events-none bg-gradient-to-l from-slate-950 to-transparent" />
      </div>

      <div className="relative mt-4 overflow-hidden -rotate-1 opacity-40">
        <Separator className="mt-6 mb-2 bg-[#B38930]" />
        <ScrollVelocity
          texts={[
            "AUTOMOTIVE DEALERS ✦ REAL ESTATE DEVELOPERS ✦ INTERIOR CONTRACTORS ✦ CONSTRUCTION FIRMS ✦ ",
          ]}
          velocity={40}
          className="custom-scroll-text font-mokoto whitespace-nowrap text-[#B38930]"
        />
        <Separator className="mt-2 bg-[#B38930]" />
        <div className="absolute top-0 left-0 w-24 h-full pointer-events-none bg-gradient-to-r from-slate-950 to-transparent" />
        <div className="absolute top-0 right-0 w-24 h-full pointer-events-none bg-gradient-to-l from-slate-950 to-transparent" />
      </div>
    </section>
  );
};
