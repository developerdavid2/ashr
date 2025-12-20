import BusinessCTASection from "@/components/businesses/sections/business-cta";
import { BusinessesGrid } from "@/components/businesses/sections/businesses-grid";
import { BusinessesHero } from "@/components/businesses/sections/businesses-hero";
import { generateMetadata } from "@/components/seo/page-seo";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title:
    "Our Businesses – Automotive, Interiors, Ceramics & Industrial | ASHR Group",
  description:
    "Explore ASHR Group’s portfolio of excellence: premium automotive solutions, Spanish ceramics, bespoke luxury interiors, and cutting-edge industrial infrastructure across Nigeria and Africa.",
  image: "https://ashrgroup.com.ng/og-businesses.png", // ← Create this 1200×630
  url: "/businesses",
  type: "website",
});

export default function Page() {
  return (
    <main className="font-poppins min-h-screen">
      <BusinessesHero />
      <BusinessesGrid />
      <BusinessCTASection />
    </main>
  );
}
