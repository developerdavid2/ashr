// components/contact/ContactHero.tsx
export default function ContactHero() {
  return (
    <section className="font-poppins relative overflow-hidden bg-linear-to-b from-white to-gray-50">
      <h1
        className="font-mokoto pointer-events-none absolute top-[15%] left-1/2 z-0 -translate-x-1/2 text-[8rem] whitespace-nowrap text-gray-500/12 select-none sm:text-[12rem] md:text-[16rem] lg:text-[20rem]"
        style={{
          lineHeight: 1,
          maskImage: "linear-gradient(to bottom, black 0%, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 85%)",
        }}
      >
        CONTACT
      </h1>

      <div className="relative z-10 container mx-auto px-6 py-32 pb-10 text-center lg:pt-52 lg:pb-32">
        <div className="mx-auto max-w-5xl">
          <span className="mb-8 inline-block rounded-full border border-[#A9802C]/30 bg-[#A9802C]/10 px-6 py-3 text-xs font-medium tracking-widest text-[#A9802C] uppercase backdrop-blur-xl">
            Let's Start a Conversation
          </span>
          <h2 className="font-kapital mb-4 text-4xl leading-tight font-bold sm:mb-6 md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="text-main/80">GET IN</span>{" "}
            <span className="font-bold text-[#A9802C]">TOUCH</span>
          </h2>
          <p className="font-poppins mt-6 text-base leading-relaxed font-light text-gray-700 sm:text-lg md:text-xl">
            Whether you're ready to transform your space, source premium
            vehicles, or explore partnership opportunities — we're here.
          </p>
        </div>
      </div>
    </section>
  );
}
