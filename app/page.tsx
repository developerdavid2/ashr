import { AboutSection } from "@/components/about-section";
import { BusinessSection } from "@/components/home/sections/business-section";
import { BlogSection } from "@/components/blog-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/home/sections/hero";
import { TryAshrae } from "@/components/try-ashrae";

export default function Page() {
  return (
    <main className="min-h-screen font-inter">
      <Hero />
      <BusinessSection />
      <AboutSection />
      <BlogSection />
      <WhyChooseUs />
      <Gallery />
      <TryAshrae />
    </main>
  );
}
