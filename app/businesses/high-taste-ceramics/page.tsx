import React from "react";
import { HighTasteCeramicsHero } from "@/components/businesses/high-taste-ceramics/sections/high-taste-ceramics-hero";
import { HighTasteCeramicsAbout } from "@/components/businesses/high-taste-ceramics/sections/high-taste-ceramics-about";
import { HighTasteCeramicsOffer } from "@/components/businesses/high-taste-ceramics/sections/high-taste-ceramics-offer";
import { HighTasteCeramicsGallery } from "@/components/businesses/high-taste-ceramics/sections/high-taste-ceramics-gallery";
import HighTasteCeramicsNewsAndBlogs from "@/components/businesses/high-taste-ceramics/sections/high-taste-ceramics-latest";
import { HighTasteCeramicsCta } from "@/components/businesses/high-taste-ceramics/sections/high-taste-ceramics-cta";

const Page = () => {
  return (
    <main className="min-h-screen font-poppins ">
      <HighTasteCeramicsHero />
      <HighTasteCeramicsAbout logo="/logos/ceramics-black.png" />
      <div className="bg-main min-h-[1500px] relative overflow-hidden">
        <div className="absolute top-[0%] right-[40%] rotate-[30deg] w-32 h-[150%] bg-gradient-to-b from-neutral-200 via-white to-transparent blur-[100px] sm:blur-[170px] opacity-10 z-[50]"></div>
        <HighTasteCeramicsOffer />
        <HighTasteCeramicsGallery />
      </div>
      <HighTasteCeramicsNewsAndBlogs />
      <HighTasteCeramicsCta />
    </main>
  );
};

export default Page;
