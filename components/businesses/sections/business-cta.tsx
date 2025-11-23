import React from "react";
import CTASection from "@/components/custom/cta-section";

export const BusinessCTASection = () => {
  return (
    <CTASection
      title={
        <>
          <span className="text-main/50 font-light">INVESTING IN</span>{" "}
          <span className="text-[#A9802C]">IDEAS </span>
          <br className="hidden sm:block" />
          <span className="text-main/50 font-light">CREATING</span>{" "}
          <span className="text-[#A9802C]">VALUE</span>
        </>
      }
      description="Our businesses thrive on innovation, leadership, and strategic partnerships that create long-term impact across multiple sectors."
      primaryHref="/contact"
      primaryLabel="GET IN TOUCH"
    />
  );
};

export default BusinessCTASection;
