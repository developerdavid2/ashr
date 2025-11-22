// components/contact/ContactHero.tsx
export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <h1
        className="font-mokoto text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[25rem] text-gray-500/12 absolute top-[15%] left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 whitespace-nowrap"
        style={{
          lineHeight: 1,
          maskImage: "linear-gradient(to bottom, black 0%, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 85%)",
        }}
      >
        CONTACT
      </h1>

      <div className="container mx-auto px-6 py-32 lg:py-52 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block px-6 py-3 text-xs font-medium tracking-widest uppercase bg-[#A9802C]/10 text-[#A9802C] backdrop-blur-xl border border-[#A9802C]/30 rounded-full mb-8">
            Let's Start a Conversation
          </span>
          <h2 className="font-kapital text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none">
            <span className="text-black/60">GET IN</span>{" "}
            <span className="text-[#A9802C]">TOUCH</span>
          </h2>
          <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Whether you're ready to transform your space, source premium
            vehicles, or explore partnership opportunities — we're here.
          </p>
        </div>
      </div>
    </section>
  );
}
