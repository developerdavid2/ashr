import React from "react";
import { AshrDesignsHero } from "@/components/businesses/ashr-designs/sections/ashr-designs-hero";
import { AshrDesignsAbout } from "@/components/businesses/ashr-designs/sections/ashr-designs-about";
import { AshrDesignsOffer } from "@/components/businesses/ashr-designs/sections/ashr-designs-offer";
import { AshrDesignsGallery } from "@/components/businesses/ashr-designs/sections/ashr-designs-gallery";
import AshrDesignsNewsAndBlogs from "@/components/businesses/ashr-designs/sections/ashr-designs-latest";
import { AshrDesignsCTA } from "@/components/businesses/ashr-designs/sections/ashr-designs-cta";

const Page = () => {
  return (
    <main className="min-h-screen font-poppins ">
      <AshrDesignsHero />
      <AshrDesignsAbout logo="/logos/ashr-design-logo.png" />
      <div className="bg-main min-h-[1500px] relative overflow-hidden">
        <div className="absolute top-[0%] right-[40%] rotate-[30deg] w-32 h-[150%] bg-gradient-to-b from-neutral-200 via-white to-transparent blur-[100px] sm:blur-[170px] opacity-10 z-[50]"></div>
        <AshrDesignsOffer />
        <AshrDesignsGallery />
      </div>
      <AshrDesignsNewsAndBlogs />
      <AshrDesignsCTA />
    </main>
  );
};

export default Page;
