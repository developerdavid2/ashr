import CTASection from "@/components/custom/cta-section";

export function AshrDesignsCTA() {
  return (
    <CTASection
      title={
        <>
          <span className="text-gray-400 font-light">TRANSFORM YOUR</span>{" "}
          <span className="text-[#A9802C]">SPACE</span>
          <br className="hidden sm:block" />
          <span className="text-gray-400 font-light">WITH</span>{" "}
          <span className="text-[#A9802C]">MODERN DESIGNS</span>
        </>
      }
      description="From kitchens and wardrobes to doors, lighting, and full space finishing—ASHR Designs transforms ordinary rooms into elegant, functional living experiences."
      primaryHref="/contact"
      primaryLabel="BOOK A DESIGN CONSULTATION"
    />
  );
}
