import CTASection from "@/components/custom/cta-section";

export function SimtexCTA() {
  return (
    <CTASection
      title={
        <>
          <span className="text-main/50 font-light">READY TO</span>{" "}
          <span className="text-[#A9802C]">UPGRADE </span>
          <br />
          <span className="text-main/50 font-light">YOUR</span>{" "}
          <span className="text-[#A9802C]">INFRASTRUCTURE</span>
        </>
      }
      description="Request a quote, schedule a site visit, or speak with our technical team about your project requirements. We're here to help you choose the right solution."
      primaryHref="/contact"
      primaryLabel="REQUEST PROJECT QUOTE"
    />
  );
}
