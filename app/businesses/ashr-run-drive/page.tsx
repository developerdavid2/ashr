import React from "react";
import { AshrRunDriveHero } from "@/components/businesses/ashr-run-drive/sections/ashr-run-drive-hero";
import { AshrRunDriveAbout } from "@/components/businesses/ashr-run-drive/sections/ashr-run-drive-about";
import { AshrRunDriveOffer } from "@/components/businesses/ashr-run-drive/sections/what-we-offer";
import { AshrRunDriveGallery } from "@/components/businesses/ashr-run-drive/sections/ashr-run-gallery";
import AshrRunDriveNewsAndBlogs from "@/components/businesses/ashr-run-drive/sections/ashr-run-latest";

const Page = () => {
  return (
    <main className="min-h-screen font-poppins ">
      <AshrRunDriveHero />
      <AshrRunDriveAbout logo="/logos/ashr-run-drive.png" />
      <div className="bg-main min-h-[1500px] relative overflow-hidden">
        <div className="absolute top-[0%] right-[40%] rotate-[30deg] w-32 h-[150%] bg-gradient-to-b from-neutral-200 via-white to-transparent blur-[100px] sm:blur-[170px] opacity-10 z-[50]"></div>
        <AshrRunDriveOffer />
        <AshrRunDriveGallery />
      </div>
      <AshrRunDriveNewsAndBlogs />
    </main>
  );
};

export default Page;
