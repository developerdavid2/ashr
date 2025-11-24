import CTASection from "@/components/custom/cta-section";

export function HighTasteCeramicsCta() {
  return (
    <CTASection
      title={
        <>
          <span className="font-light text-gray-400">READY TO</span>{" "}
          <span className="text-[#A9802C]">LIGHT </span>
          <br />
          <span className="font-light text-gray-400">UP</span>{" "}
          <span className="text-[#A9802C]">YOUR SPACE</span>
        </>
      }
      description="From kitchens and wardrobes to doors, lighting, and full space finishing—ASHR Designs transforms ordinary rooms into elegant, functional living experiences."
      primaryHref="/contact"
      primaryLabel="REQUEST DESIGN CONSULTATION"
    />
  );
}
