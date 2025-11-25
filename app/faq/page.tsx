"use client";

import * as React from "react";
import { useState } from "react";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { GoldShineButton } from "@/components/custom/gold-shine-button";

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
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
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
      <section className="font-poppins relative overflow-hidden bg-linear-to-b from-white to-gray-50">
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

        <div className="relative z-10 container mx-auto px-6 py-32 pb-10 text-center lg:pt-52">
          <div className="mx-auto max-w-5xl">
            <span className="mb-8 inline-block rounded-full border border-[#A9802C]/30 bg-[#A9802C]/10 px-6 py-3 text-xs font-medium tracking-widest text-[#A9802C] uppercase backdrop-blur-xl">
              Answers to Your Questions
            </span>
            <h2 className="font-kapital mb-4 text-4xl leading-tight font-bold sm:mb-6 md:text-6xl lg:text-7xl xl:text-8xl">
              <span className="text-main/80">FREQUENTLY</span>{" "}
              <span className="font-kapital-stencil text-[#A9802C]">
                ASKED{" "}
              </span>
              <br className="hidden sm:block" />
              <span className="text-black/80">QUESTIONS</span>
            </h2>
            <p className="font-poppins text-base leading-relaxed font-light text-gray-700 sm:text-lg md:text-xl">
              Everything you need to know about partnering with, purchasing
              from, or experiencing the ASHR standard of excellence.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION - Core Values Inspired */}
      <section className="overflow-hidden bg-white py-16 lg:py-32">
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
                    <div className="grid grid-cols-12 items-center gap-8">
                      {/* Icon */}
                      <div className="col-span-2 flex justify-center">
                        <div
                          className={cn(
                            "size-6 rounded-full bg-linear-to-br from-[#A9802C] to-[#C9A961] p-1 transition-transform duration-500 sm:size-10 lg:size-16",
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
                      <div className="col-span-8">
                        <h3 className="font-kapital text-main/80 text-xl leading-tight sm:text-2xl lg:pr-10 lg:text-4xl">
                          {faq.question}
                        </h3>
                      </div>

                      {/* Right Arrow Indicator */}
                      <div className="hidden justify-end lg:col-span-2 lg:flex">
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
                    <div className="px-8 pb-12 lg:px-28 lg:pb-16">
                      <p className="font-poppins text-base leading-relaxed font-light text-gray-600 sm:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>

                  {/* Separator Line */}
                  {!isLast && (
                    <div className="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HORIZONTAL MASONRY GALLERY - Now Mobile-Perfect */}
      <section className="overflow-hidden bg-gray-50 py-16 lg:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-kapital text-main/80 mb-8 text-center text-3xl leading-tight font-light sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Experience{" "}
            <span className="font-bold text-[#A9802C]">Excellence</span>
          </h2>

          {/* First Row - Forward */}
          <Marquee
            pauseOnHover
            className="[--duration:40s] [--gap:0.5rem] md:[--gap:1rem]"
          >
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="group hover:shadow-3xl relative mx-2 h-64 w-64 overflow-hidden rounded-xl shadow-2xl transition-all duration-500 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96"
              >
                <Image
                  src={src}
                  alt="ASHR Excellence"
                  fill
                  className="object-cover transition-transform duration-1000"
                  sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 33vw"
                />
                <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/70 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="text-lg font-medium text-white">
                    ASHR Project {i + 1}
                  </p>
                </div>
              </div>
            ))}
          </Marquee>

          {/* Second Row - Reverse */}
          <Marquee
            pauseOnHover
            reverse
            className="mt-3 [--duration:40s] [--gap:0.5rem] md:[--gap:1rem]"
          >
            {[...galleryImages].reverse().map((src, i) => (
              <div
                key={i}
                className="group hover:shadow-3xl relative mx-2 h-56 w-72 overflow-hidden rounded-xl shadow-2xl transition-all duration-500 sm:h-64 sm:w-80 md:h-80 md:w-96 lg:h-96 lg:w-md"
              >
                <Image
                  src={src}
                  alt="ASHR Excellence"
                  fill
                  className="object-cover transition-transform duration-1000"
                  sizes="(max-width: 640px) 75vw, (max-width: 1024px) 45vw, 35vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-main py-24 text-white lg:py-32">
        <div className="relative z-10 container mx-auto max-w-7xl px-4 text-center sm:px-6 md:max-w-3xl lg:max-w-7xl">
          <h2 className="font-kapital text-3xl leading-tight font-light text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            STILL HAVE{" "}
            <span className="font-bold text-[#C9A961]">QUESTIONS?</span>
          </h2>
          <p className="font-poppins mx-auto mt-4 mb-8 max-w-5xl text-center text-sm leading-relaxed font-light text-gray-200 sm:text-base md:text-lg lg:text-xl">
            Our team is ready to provide personalized answers and guide you
            toward the perfect solution.
          </p>

          <div className="font-poppins mb-8 flex w-full max-w-md flex-col justify-center gap-3 px-4 sm:mb-10 sm:max-w-none sm:gap-4 md:mb-12 md:flex-row">
            <GoldShineButton
              href="/contact"
              className={cn(
                "flex w-full flex-col items-center justify-center px-6 py-3 !text-sm sm:w-auto sm:px-8 sm:text-base! md:text-[1rem]!",
              )}
            >
              GET IN TOUCH
            </GoldShineButton>
          </div>
        </div>
      </section>
    </>
  );
}
