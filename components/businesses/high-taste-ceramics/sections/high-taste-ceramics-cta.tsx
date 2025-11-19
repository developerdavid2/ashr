import CTASection from "@/components/custom/cta-section";

export function HighTasteCeramicsCta() {
  return (
    <CTASection
      title={
        <>
          <span className="text-gray-400 font-light">READY TO</span>{" "}
          <span className="text-[#A9802C]">LIGHT</span>
          <br className="hidden sm:block" />
          <span className="text-gray-400 font-light">UP</span>{" "}
          <span className="text-[#A9802C]">YOUR SPACE</span>
        </>
      }
      description="From kitchens and wardrobes to doors, lighting, and full space finishing—ASHR Designs transforms ordinary rooms into elegant, functional living experiences."
      primaryHref="/contact"
      primaryLabel="REQUEST DESIGN CONSULTATION"
    />
  );
}
