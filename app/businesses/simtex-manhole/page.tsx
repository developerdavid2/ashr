// app/businesses/simtex-manhole/page.tsx
import { generateMetadata } from "@/components/seo/page-seo";
import { Metadata } from "next";
import { SimtexHero } from "@/components/businesses/simtex-manhole/sections/simtex-hero";
import { SimtexAbout } from "@/components/businesses/simtex-manhole/sections/simtex-about";
import { SimtexOffer } from "@/components/businesses/simtex-manhole/sections/simtex-offer";
import { SimtexGallery } from "@/components/businesses/simtex-manhole/sections/simtex-gallery";
import SimtexNewsAndBlogs from "@/components/businesses/simtex-manhole/sections/simtex-latest";
import { SimtexCTA } from "@/components/businesses/simtex-manhole/sections/simtex-cta";

// PREMIUM SEO FOR SIMTEX MANHOLE COVERS
export const metadata: Metadata = generateMetadata({
  title:
    "Simtex – FRP Manhole Covers & Gully Traps | Industrial Strength Nigeria",
  description:
    "Simtex by ASHR Group — Nigeria’s leading manufacturer of heavy-duty FRP manhole covers, gully traps, and drainage solutions. Anti-theft, corrosion-resistant, load-bearing up to 40 tons. Trusted by government and estates.",
  image: "https://ashrgroup.com.ng/og-simtex.jpg", // ← Create this 1200×630
  url: "/businesses/simtex-manhole",
  type: "website",
});

const Page = () => {
  return (
    <main className="font-poppins min-h-screen">
      <SimtexHero />
      <SimtexAbout logo="/logos/simtex-logo.png" />
      <div className="bg-main relative min-h-[1500px] overflow-hidden">
        <div className="absolute top-[0%] right-[40%] z-[50] h-[150%] w-32 rotate-[30deg] bg-gradient-to-b from-neutral-200 via-white to-transparent opacity-10 blur-[100px] sm:blur-[170px]"></div>
        <SimtexOffer />
        <SimtexGallery />
      </div>
      <SimtexNewsAndBlogs />
      <SimtexCTA />
    </main>
  );
};

export default Page;
