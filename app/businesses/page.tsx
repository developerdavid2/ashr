import React from "react";
import { BusinessesHero } from "@/components/businesses/sections/businesses-hero";
import { BusinessesGrid } from "@/components/businesses/sections/businesses-grid";
import BusinessCTASection from "@/components/businesses/sections/business-cta";

export default function Page() {
  return (
    <main className="min-h-screen font-poppins ">
      <BusinessesHero />
      <BusinessesGrid />
      <BusinessCTASection />
    </main>
  );
}
