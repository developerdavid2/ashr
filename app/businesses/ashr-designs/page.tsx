// app/businesses/ashr-designs/page.tsx
import { generateMetadata } from "@/components/seo/page-seo";
import { Metadata } from "next";
import { AshrDesignsHero } from "@/components/businesses/ashr-designs/sections/ashr-designs-hero";
import { AshrDesignsAbout } from "@/components/businesses/ashr-designs/sections/ashr-designs-about";
import { AshrDesignsOffer } from "@/components/businesses/ashr-designs/sections/ashr-designs-offer";
import { AshrDesignsGallery } from "@/components/businesses/ashr-designs/sections/ashr-designs-gallery";
import AshrDesignsNewsAndBlogs from "@/components/businesses/ashr-designs/sections/ashr-designs-latest";
import { AshrDesignsCTA } from "@/components/businesses/ashr-designs/sections/ashr-designs-cta";

// ————————————————————————
// PREMIUM SEO FOR ASHR DESIGNS
// ————————————————————————
export const metadata: Metadata = generateMetadata({
  title: "ASHR Designs – Luxury Interior Design & Bespoke Furniture in Nigeria",
  description:
    "Transform your space with ASHR Designs — Nigeria’s leading luxury interior design studio. Bespoke furniture, premium finishes, and African-inspired contemporary aesthetics in Lagos and Abuja.",
  image: "https://ashrgroup.com.ng/og-designs.jpg", // ← Create this 1200×630 image
  url: "/businesses/ashr-designs",
  type: "website",
});

const Page = () => {
  return (
    <main className="font-poppins min-h-screen">
      <AshrDesignsHero />
      <AshrDesignsAbout logo="/logos/ashr-design-logo.png" />
      <div className="bg-main relative min-h-[1500px] overflow-hidden rounded-t-[2rem] lg:rounded-t-[5rem]">
        <div className="absolute top-[0%] right-[40%] z-[50] h-[150%] w-32 rotate-[30deg] bg-gradient-to-b from-neutral-200 via-white to-transparent opacity-10 blur-[100px] sm:blur-[170px]"></div>
        <AshrDesignsOffer />
        <AshrDesignsGallery />
      </div>
      <AshrDesignsNewsAndBlogs />
      <AshrDesignsCTA />
    </main>
  );
};

export default Page;
