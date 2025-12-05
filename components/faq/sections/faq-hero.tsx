// components/faq/faq-hero.tsx
export default function FAQHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <h1
        className="font-mokoto pointer-events-none absolute top-[15%] left-1/2 -translate-x-1/2 text-[8rem] whitespace-nowrap text-gray-500/12 select-none sm:text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[25rem]"
        style={{
          lineHeight: 1,
          maskImage: "linear-gradient(to bottom, black 0%, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 85%)",
        }}
      >
        FAQ
      </h1>

      <div className="relative z-10 container mx-auto px-6 py-32 pb-10 text-center lg:pt-52">
        <div className="mx-auto max-w-5xl">
          <span className="mb-8 inline-block rounded-full border border-[#A9802C]/30 bg-[#A9802C]/10 px-6 py-3 text-xs font-medium tracking-widest text-[#A9802C] uppercase backdrop-blur-xl">
            Answers to Your Questions
          </span>
          <h2 className="font-kapital mb-4 text-4xl leading-tight font-bold sm:mb-6 md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="text-main/80">FREQUENTLY</span>{" "}
            <span className="font-kapital-stencil text-[#A9802C]">ASKED </span>
            <br className="hidden sm:block" />
            <span className="text-black/80">QUESTIONS</span>
          </h2>
          <p className="font-poppins text-base leading-relaxed font-light text-gray-700 sm:text-lg md:text-xl">
            Everything you need to know about partnering with, purchasing from,
            or experiencing the ASHR standard of excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
