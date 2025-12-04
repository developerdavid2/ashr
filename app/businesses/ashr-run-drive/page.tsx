// app/businesses/ashr-run-drive/page.tsx
import { generateMetadata } from "@/components/seo/page-seo";
import { Metadata } from "next";
import { AshrRunDriveHero } from "@/components/businesses/ashr-run-drive/sections/ashr-run-drive-hero";
import { AshrRunDriveAbout } from "@/components/businesses/ashr-run-drive/sections/ashr-run-drive-about";
import { AshrRunDriveOffer } from "@/components/businesses/ashr-run-drive/sections/what-we-offer";
import { AshrRunDriveGallery } from "@/components/businesses/ashr-run-drive/sections/ashr-run-gallery";
import AshrRunDriveNewsAndBlogs from "@/components/businesses/ashr-run-drive/sections/ashr-run-latest";
import { AshrRunDriveCTA } from "@/components/businesses/ashr-run-drive/sections/ashr-run-drive-cta";

// ————————————————————————
// PREMIUM SEO FOR ASHR RUN & DRIVE
// ————————————————————————
export const metadata: Metadata = generateMetadata({
  title:
    "ASHR Run & Drive – Premium & Luxury Cars in Nigeria | Mercedes-Benz Partner",
  description:
    "Experience unmatched luxury and performance with ASHR Run & Drive — Nigeria’s premier destination for Mercedes-Benz, Range Rover, BMW, Porsche, and certified pre-owned luxury vehicles in Lagos and Abuja.",
  image: "https://ashrgroup.com.ng/og-run-drive.jpg", // ← Create this 1200×630
  url: "/businesses/ashr-run-drive",
  type: "website",
});

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
