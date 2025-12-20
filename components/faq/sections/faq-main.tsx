// components/faq/faq-main.tsx
"use client";

import { GoldShineButton } from "@/components/custom/gold-shine-button";
import { Marquee } from "@/components/ui/marquee";
import { ArrowRight, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    question: "What makes ASHR Group different from other conglomerates?",
    answer:
      "We are a fully integrated Nigerian luxury ecosystem — from automotive distribution and industrial manufacturing to premium ceramics and bespoke interior design. Every division upholds the same uncompromising standard of excellence, innovation, and sustainability.",
  },
  // {
  //   question: "Where are ASHR products manufactured?",
  //   answer:
  //     "Our ceramics and industrial products are proudly manufactured in state-of-the-art facilities across Nigeria and Ghana. Automotive vehicles are sourced from globally trusted OEM partners and customized to NIgerian specifications. All interior solutions are designed and handcrafted in Lagos.",
  // },
  {
    question: "Do you offer interior design consultations?",
    answer:
      "Yes. ASHR Designs provides complimentary design consultations for projects. Our team handles everything from concept to installation — kitchens, wardrobes, lighting, flooring, and full residential/commercial fit-outs.",
  },
  {
    question: "Are your ceramic tiles suitable for outdoor use?",
    answer:
      "Absolutely. High Taste Ceramics produces porcelain and anti-slip tiles specifically engineered for African climates — extreme heat, heavy rain, and high traffic. All come with 30+ year warranties.",
  },
  // {
  //   question: "How can I become an authorized dealer or distributor?",
  //   answer:
  //     "We selectively partner with established businesses that share our values. Submit your inquiry via the Contact page and our partnerships team will respond within 48 hours.",
  // },
  // {
  //   question: "What is your sustainability commitment?",
  //   answer:
  //     "Zero-waste manufacturing, recycled ocean plastic furniture, solar-powered factories, and community reforestation programs. Sustainability is not marketing — it’s embedded in our DNA.",
  // },
];

const galleryImages = [
  "https://res.cloudinary.com/damkwypfe/image/upload/v1765206787/high-taste-10_kq0gqn.jpg",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  "https://res.cloudinary.com/damkwypfe/image/upload/v1765201687/simtex-3_xp3h1v.jpg",
  "https://res.cloudinary.com/damkwypfe/image/upload/v1765199330/ashr-run-drive-4_kh3ks1.jpg",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
  "https://res.cloudinary.com/damkwypfe/image/upload/v1765201685/simtex-12_lsvwxz.jpg",
  "https://res.cloudinary.com/damkwypfe/image/upload/v1765199329/ashr-run-drive-2_mgc8t2.jpg",
  "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
];

export default function FAQMain() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {/* FAQ ACCORDION */}
      <section className="overflow-hidden bg-white py-16 lg:py-32">
        <div className="container mx-auto max-w-5xl px-6 lg:px-8">
          <div className="space-y-0">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="group border-b border-gray-200 last:border-b-0"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-10 text-left transition-colors duration-500 group-hover:bg-gray-50/50 lg:py-14"
                  >
                    <div className="grid grid-cols-12 items-center gap-8">
                      <div className="col-span-2 flex justify-center">
                        <div
                          className={`size-6 rounded-full bg-gradient-to-br from-[#A9802C] to-[#C9A961] p-1 transition-transform duration-500 sm:size-10 lg:size-16 ${isOpen ? "scale-110" : ""}`}
                        >
                          <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                            {isOpen ? (
                              <Minus className="h-8 w-8 text-[#A9802C]" />
                            ) : (
                              <Plus className="h-8 w-8 text-[#A9802C]" />
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="col-span-8">
                        <h3 className="font-kapital text-main/80 text-xl leading-tight sm:text-2xl lg:pr-10 lg:text-4xl">
                          {faq.question}
                        </h3>
                      </div>

                      <div className="hidden justify-end lg:col-span-2 lg:flex">
                        <ArrowRight
                          className={`h-8 w-8 text-[#A9802C] transition-transform duration-500 ${isOpen ? "rotate-90" : ""}`}
                        />
                      </div>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="px-8 pb-12 lg:px-28 lg:pb-16">
                      <p className="font-poppins text-base leading-relaxed font-light text-gray-600 sm:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>

                  {index !== faqs.length - 1 && (
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HORIZONTAL MASONRY GALLERY */}
      <section className="overflow-hidden bg-gray-50 py-16 lg:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-kapital text-main/80 mb-8 text-center text-3xl leading-tight font-light sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Experience{" "}
            <span className="font-bold text-[#A9802C]">Excellence</span>
          </h2>

          <Marquee pauseOnHover className="[--duration:40s] [--gap:1rem]">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="group hover:shadow-3xl relative mx-2 h-64 w-80 overflow-hidden rounded-xl shadow-2xl transition-all duration-500 sm:h-72 md:h-80 lg:h-96 lg:w-96"
              >
                <Image
                  src={src}
                  alt="ASHR Excellence"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </Marquee>

          <Marquee
            pauseOnHover
            reverse
            className="mt-4 [--duration:45s] [--gap:1rem]"
          >
            {[...galleryImages].reverse().map((src, i) => (
              <div
                key={i}
                className="group hover:shadow-3xl relative mx-2 h-56 w-72 overflow-hidden rounded-xl shadow-2xl transition-all duration-500 sm:h-64 md:h-80 lg:h-96 lg:w-full"
              >
                <Image
                  src={src}
                  alt="ASHR Excellence"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 640px) 75vw, (max-width: 1024px) 45vw, 30vw"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-main py-24 text-white lg:py-32">
        <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6">
          <h2 className="font-kapital text-3xl leading-tight font-light text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            STILL HAVE{" "}
            <span className="font-bold text-[#C9A961]">QUESTIONS?</span>
          </h2>
          <p className="font-poppins mx-auto mt-4 mb-8 max-w-5xl text-center text-sm leading-relaxed font-light text-gray-200 sm:text-base md:text-lg lg:text-xl">
            Our team is ready to provide personalized answers and guide you
            toward the perfect solution.
          </p>

          <GoldShineButton
            href="/contact"
            className="mx-auto flex w-full max-w-md items-center justify-center px-8 py-4 text-base sm:w-auto"
          >
            GET IN TOUCH
          </GoldShineButton>
        </div>
      </section>
    </>
  );
}
