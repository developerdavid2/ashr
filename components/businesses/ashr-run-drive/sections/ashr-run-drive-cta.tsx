import CTASection from "@/components/custom/cta-section";

export function AshrRunDriveCTA() {
  return (
    <CTASection
      title={
        <>
          <span className="text-gray-400 font-light">START YOUR</span>{" "}
          <span className="text-[#A9802C]">JOURNEY</span>
          <br className="hidden sm:block" />
          <span className="text-gray-400 font-light">WITH</span>{" "}
          <span className="text-[#A9802C]">CONFIDENCE</span>
        </>
      }
      description="Whether you're upgrading your personal vehicle or building a corporate fleet, ASHR Run and Drive delivers quality, transparency, and exceptional service every step of the way."
      primaryHref="/contact"
      primaryLabel="SPEAK WITH AN ADVISOR"
      secondaryHref="/financing"
      secondaryLabel="EXPLORE FINANCING"
    />
  );
}
