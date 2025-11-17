import React from "react";
import { SimtexHero } from "@/components/businesses/simtex-manhole/sections/simtex-hero";
import { SimtexAbout } from "@/components/businesses/simtex-manhole/sections/simtex-about";
import { SimtexOffer } from "@/components/businesses/simtex-manhole/sections/simtex-offer";
import { SimtexGallery } from "@/components/businesses/simtex-manhole/sections/simtex-gallery";
import SimtexNewsAndBlogs from "@/components/businesses/simtex-manhole/sections/simtex-latest";
import { SimtexCTA } from "@/components/businesses/simtex-manhole/sections/simtex-cta";

const Page = () => {
  return (
    <main className="min-h-screen font-poppins ">
      <SimtexHero />
      <SimtexAbout logo="/logos/simtex-logo.png" />
      <div className="bg-main min-h-[1500px] relative overflow-hidden">
        <div className="absolute top-[0%] right-[40%] rotate-[30deg] w-32 h-[150%] bg-gradient-to-b from-neutral-200 via-white to-transparent blur-[100px] sm:blur-[170px] opacity-10 z-[50]"></div>
        <SimtexOffer />
        <SimtexGallery />
      </div>
      <SimtexNewsAndBlogs />
      <SimtexCTA />
    </main>
  );
};

export default Page;
