import { CoreValues } from "@/components/about/sections/about-core-values";
import AboutCTASection from "@/components/about/sections/about-cta-section";
import { AboutHero } from "@/components/about/sections/about-hero";
import { AboutLeadership } from "@/components/about/sections/about-leadership";
import { AboutMissionVision } from "@/components/about/sections/about-mission-vision";
import { AboutOverview } from "@/components/about/sections/about-overview";
import { generateMetadata } from "@/components/seo/page-seo";

export const metadata = generateMetadata({
  title: "About ASHR Group – Vision, Legacy & Excellence in Luxury Nigeria",
  description:
    "Discover the story behind Nigeria’s fastest-growing luxury conglomerate. Excellence in automotive, interiors, Spanish ceramics, and industrial innovation since inception.",
  url: "/",
  image: "/og-about.png",
  type: "website",
});
export default function Page() {
  return (
    <main className="font-poppins min-h-screen">
      <AboutHero />

      <div className="bg-main relative min-h-[1500px] overflow-hidden rounded-t-4xl lg:rounded-t-[5rem]">
        <div className="absolute top-[0%] right-[40%] z-50 h-[150%] w-32 rotate-30 bg-linear-to-b from-neutral-200 via-white to-transparent opacity-10 blur-[100px] sm:blur-[170px]"></div>

        {/* Decorative stacked circles */}
        <div className="absolute right-1/2 -bottom-20 translate-x-1/2 opacity-70">
          <div className="relative flex items-center justify-center">
            <div className="absolute size-80 overflow-hidden rounded-full border border-white/5 bg-linear-to-br from-gray-600 via-[#1D1F1F] via-20% to-[#1D1F1F]/70 shadow-[0_0_80px_rgba(0,0,0,0.4)] backdrop-blur-3xl sm:size-96 md:size-112 lg:size-128" />
            <div className="absolute size-64 overflow-hidden rounded-full border border-white/10 bg-linear-to-br from-gray-600 via-[#1D1F1F] via-20% to-[#A9802C]/40 shadow-[0_0_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:size-76 md:size-88 lg:size-100" />
            <div className="absolute size-4 overflow-hidden rounded-full border border-white/20 bg-[#3A3848]/80 bg-linear-to-br from-gray-600 via-[#1D1F1F] via-20% to-[#1D1F1F]/70 shadow-[0_0_20px_rgba(0,0,0,0.3)] sm:size-56 md:size-64 lg:size-72" />
          </div>
        </div>

        <AboutOverview />
        <AboutMissionVision />
      </div>

      <CoreValues />
      {/* <AboutLeadership /> */}
      <AboutCTASection />
    </main>
  );
}
