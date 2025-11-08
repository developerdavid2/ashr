import { AboutSection } from "@/components/home/sections/about-section";
import { BusinessSection } from "@/components/home/sections/business-section";

import { Gallery } from "@/components/home/sections/gallery";
import { Hero } from "@/components/home/sections/hero";
import NewsSection from "@/components/home/sections/news-section";
import { TrustedBrandsSection } from "@/components/home/sections/trusted-brands-section";
import { WhyChooseUs } from "@/components/home/sections/why-choose-us";
import BlogsSection from "@/components/home/sections/blogs-section";

export default function Page() {
  return (
    <main className="min-h-screen font-poppins">
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
