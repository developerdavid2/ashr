import React from "react";
import { AshrRunDriveHero } from "@/components/businesses/ashr-run-drive/sections/ashr-run-drive-hero";
import { AshrRunDriveAbout } from "@/components/businesses/ashr-run-drive/sections/ashr-run-drive-about";
import { AshrRunDriveOffer } from "@/components/businesses/ashr-run-drive/sections/what-we-offer";
import { AshrRunDriveGallery } from "@/components/businesses/ashr-run-drive/sections/ashr-run-gallery";
import AshrRunDriveNewsAndBlogs from "@/components/businesses/ashr-run-drive/sections/ashr-run-latest";
import { AshrRunDriveCTA } from "@/components/businesses/ashr-run-drive/sections/ashr-run-drive-cta";

const Page = () => {
  return (
    <main className="font-poppins min-h-screen">
      <AshrRunDriveHero />
      <AshrRunDriveAbout logo="/logos/ashr-run-drive.png" />
      <div className="bg-main relative min-h-[1500px] overflow-hidden rounded-t-[2rem] lg:rounded-t-[5rem]">
        <div className="absolute top-[0%] right-[40%] z-[50] h-[150%] w-32 rotate-[30deg] bg-gradient-to-b from-neutral-200 via-white to-transparent opacity-10 blur-[100px] sm:blur-[170px]"></div>
        <AshrRunDriveOffer />
        <AshrRunDriveGallery />
      </div>
      <AshrRunDriveNewsAndBlogs />
      <AshrRunDriveCTA />
    </main>
  );
};

export default Page;
