import { AboutSection } from "@/components/home/sections/about-section";
import { BusinessSection } from "@/components/home/sections/business-section";
import { BlogSection } from "@/components/blog-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/home/sections/hero";
import { TryAshrae } from "@/components/try-ashrae";
import NewsBlogsSection from "@/components/home/sections/news-blogs-section";

export default function Page() {
  return (
    <main className="min-h-screen font-inter">
      <Hero />
      <div className="bg-gray-200/40">
        <BusinessSection />
        <AboutSection />
      </div>
      <NewsBlogsSection />
      <WhyChooseUs />
      <Gallery />
      <TryAshrae />
    </main>
  );
}
