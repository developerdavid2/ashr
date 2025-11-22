// app/faq/page.tsx
"use client";

import * as React from "react";
import { useState } from "react";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

// FAQ Data
const faqs = [
  {
    question: "What makes ASHR Group different from other conglomerates?",
    answer:
      "We are a fully integrated African luxury ecosystem — from automotive distribution and industrial manufacturing to premium ceramics and bespoke interior design. Every division upholds the same uncompromising standard of excellence, innovation, and sustainability.",
  },
  {
    question: "Where are ASHR products manufactured?",
    answer:
      "Our ceramics and industrial products are proudly manufactured in state-of-the-art facilities across Nigeria and Ghana. Automotive vehicles are sourced from globally trusted OEM partners and customized to African specifications. All interior solutions are designed and handcrafted in Lagos.",
  },
  {
    question: "Do you offer interior design consultations?",
    answer:
      "Yes. ASHR Designs provides complimentary design consultations for projects above ₦50M. Our team handles everything from concept to installation — kitchens, wardrobes, lighting, flooring, and full residential/commercial fit-outs.",
  },
  {
    question: "Are your ceramic tiles suitable for outdoor use?",
    answer:
      "Absolutely. High Taste Ceramics produces porcelain and anti-slip tiles specifically engineered for African climates — extreme heat, heavy rain, and high traffic. All come with 25+ year warranties.",
  },
  {
    question: "How can I become an authorized dealer or distributor?",
    answer:
      "We selectively partner with established businesses that share our values. Submit your inquiry via the Contact page and our partnerships team will respond within 48 hours.",
  },
  {
    question: "What is your sustainability commitment?",
    answer:
      "Zero-waste manufacturing, recycled ocean plastic furniture, solar-powered factories, and community reforestation programs. Sustainability is not marketing — it’s embedded in our DNA.",
  },
];

// Gallery Images (horizontal masonry)
const galleryImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  "https://images.unsplash.com/photo-1618221195710-ddb4537d2a66?w=800&q=80",
  "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
  "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&q=80",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {/* HERO - Same DNA as News/Blog */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <h1
          className="font-mokoto pointer-events-none absolute top-[15%] left-1/2 z-0 -translate-x-1/2 text-[8rem] whitespace-nowrap text-gray-500/12 select-none sm:text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[25rem]"
          style={{
            lineHeight: 1,
            maskImage: "linear-gradient(to bottom, black 0%, transparent 85%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 85%)",
          }}
        >
          FAQ
        </h1>

        <div className="relative z-10 container mx-auto px-6 py-32 text-center lg:py-52">
          <div className="mx-auto max-w-5xl">
            <span className="mb-8 inline-block rounded-full border border-[#A9802C]/30 bg-[#A9802C]/10 px-6 py-3 text-xs font-medium tracking-widest text-[#A9802C] uppercase backdrop-blur-xl">
              Answers to Your Questions
            </span>
            <h2 className="font-kapital text-5xl leading-none sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="text-black/50">FREQUENTLY</span>{" "}
              <span className="text-[#A9802C]">ASKED</span>
              <br className="hidden sm:block" />
              <span className="text-black/50">QUESTIONS</span>
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-xl font-light text-gray-600">
              Everything you need to know about partnering with, purchasing
              from, or experiencing the ASHR standard of excellence.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION - Core Values Inspired */}
      <section className="bg-white py-20 lg:py-32">
        <div className="container mx-auto max-w-5xl px-6 lg:px-8">
          <div className="space-y-0">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const isLast = index === faqs.length - 1;

              return (
                <div
                  key={index}
                  className="group border-b border-gray-200 last:border-b-0"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-10 text-left transition-colors duration-500 group-hover:bg-gray-50/50 lg:py-14"
                  >
                    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                      {/* Icon */}
                      <div className="flex justify-center lg:col-span-2">
                        <div
                          className={cn(
                            "h-16 w-16 rounded-full bg-gradient-to-br from-[#A9802C] to-[#C9A961] p-1 transition-transform duration-500",
                            isOpen && "scale-110",
                          )}
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

                      {/* Question */}
                      <div className="lg:col-span-8">
                        <h3 className="font-kapital pr-10 text-2xl leading-tight text-black lg:text-4xl">
                          {faq.question}
                        </h3>
                      </div>

                      {/* Right Arrow Indicator */}
                      <div className="flex justify-end lg:col-span-2">
                        <ArrowRight
                          className={cn(
                            "h-8 w-8 text-[#A9802C] transition-transform duration-500",
                            isOpen && "rotate-90",
                          )}
                        />
                      </div>
                    </div>
                  </button>

                  {/* Answer - Smooth Height Transition */}
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-700 ease-in-out",
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                    )}
                  >
                    <div className="px-0 pb-12 lg:px-28 lg:pb-16">
                      <p className="text-lg leading-relaxed font-light text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>

                  {/* Separator Line */}
                  {!isLast && (
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HORIZONTAL MASONRY GALLERY */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <h2 className="font-kapital mb-16 text-center text-5xl lg:text-6xl">
            Experience <span className="text-[#A9802C]">Excellence</span>
          </h2>

          <div className="relative">
            <Marquee pauseOnHover className="[--duration:45s]">
              {galleryImages.map((src, i) => (
                <div
                  key={i}
                  className="group relative mx-4 h-96 w-80 overflow-hidden rounded-3xl shadow-2xl"
                >
                  <Image
                    src={src}
                    alt="ASHR Project"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              ))}
            </Marquee>

            <Marquee pauseOnHover reverse className="mt-8 [--duration:50s]">
              {[...galleryImages].reverse().map((src, i) => (
                <div
                  key={i}
                  className="group relative mx-4 h-80 w-96 overflow-hidden rounded-3xl shadow-2xl"
                >
                  <Image
                    src={src}
                    alt="ASHR Project"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-24 text-white lg:py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-kapital mb-8 text-6xl leading-none lg:text-8xl">
            STILL HAVE <span className="text-[#C9A961]">QUESTIONS?</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-300">
            Our team is ready to provide personalized answers and guide you
            toward the perfect solution.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 rounded-xl bg-[#A9802C] px-10 py-5 font-semibold tracking-wider uppercase shadow-2xl transition-all duration-300 hover:bg-[#8a6a22] hover:shadow-[#C9A961]/30"
          >
            Get in Touch
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </section>
    </>
  );
}
