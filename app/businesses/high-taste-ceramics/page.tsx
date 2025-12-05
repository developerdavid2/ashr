// app/businesses/high-taste-ceramics/page.tsx
import { generateMetadata } from "@/components/seo/page-seo";
import { Metadata } from "next";
import { HighTasteCeramicsHero } from "@/components/businesses/high-taste-ceramics/sections/high-taste-ceramics-hero";
import { HighTasteCeramicsAbout } from "@/components/businesses/high-taste-ceramics/sections/high-taste-ceramics-about";
import { HighTasteCeramicsOffer } from "@/components/businesses/high-taste-ceramics/sections/high-taste-ceramics-offer";
import { HighTasteCeramicsGallery } from "@/components/businesses/high-taste-ceramics/sections/high-taste-ceramics-gallery";
import HighTasteCeramicsNewsAndBlogs from "@/components/businesses/high-taste-ceramics/sections/high-taste-ceramics-latest";
import { HighTasteCeramicsCta } from "@/components/businesses/high-taste-ceramics/sections/high-taste-ceramics-cta";

// PREMIUM SEO FOR HIGH TASTE CERAMICS
export const metadata: Metadata = generateMetadata({
  title:
    "High Taste Ceramics – Premium Italian Tiles & Luxury Sanitaryware in Nigeria",
  description:
    "Discover High Taste Ceramics — Nigeria’s leading importer of luxury Italian tiles, Spanish porcelain, designer bathroom fittings, and exclusive sanitaryware. Showrooms in Lagos and Abuja.",
  image: "https://ashrgroup.com.ng/og-ceramics.jpg", // ← Create this 1200×630
  url: "/businesses/high-taste-ceramics",
  type: "website",
});

const Page = () => {
  return (
    <main className="font-poppins min-h-screen">
      <HighTasteCeramicsHero />
      <HighTasteCeramicsAbout logo="/logos/ceramics-black.png" />
      <div className="bg-main relative min-h-[1500px] overflow-hidden">
        <div className="absolute top-[0%] right-[40%] z-[50] h-[150%] w-32 rotate-[30deg] bg-gradient-to-b from-neutral-200 via-white to-transparent opacity-10 blur-[100px] sm:blur-[170px]"></div>
        <HighTasteCeramicsOffer />
        <HighTasteCeramicsGallery />
      </div>
      <HighTasteCeramicsNewsAndBlogs />
      <HighTasteCeramicsCta />
    </main>
  );
};

export default Page;
