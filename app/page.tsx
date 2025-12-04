// app/page.tsx
import { Metadata } from "next";
import { AboutSection } from "@/components/home/sections/about-section";
import { BusinessSection } from "@/components/home/sections/business-section";
import { Gallery } from "@/components/home/sections/gallery";
import { Hero } from "@/components/home/sections/hero";
import NewsSection from "@/components/home/sections/news-section";
import { TrustedBrandsSection } from "@/components/home/sections/trusted-brands-section";
import { WhyChooseUs } from "@/components/home/sections/why-choose-us";
import BlogsSection from "@/components/home/sections/blogs-section";
import { generateMetadata } from "@/components/seo/page-seo";

// ————————————————————————
// PREMIUM SEO & METADATA
// ————————————————————————
export const metadata = generateMetadata({
  title: "ASHR Group – Redefining Luxury in Automotive, Interiors & Industry",
  description:
    "Nigeria’s premier luxury conglomerate delivering excellence in automotive, interiors, ceramics, and industrial solutions.",
  url: "/",
  image: "/og-home.jpg",
});
export default function Page() {
  return (
    <main className="font-poppins min-h-screen">
      <Hero />
      <div className="bg-gray-200/40">
        <BusinessSection />
        <AboutSection />
      </div>
      <NewsSection />
      <BlogsSection />
      <WhyChooseUs />
      <TrustedBrandsSection />
      <Gallery />
    </main>
  );
}
