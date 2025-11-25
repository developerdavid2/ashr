import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { GoldShineButton } from "@/components/custom/gold-shine-button";
import { cn } from "@/lib/utils";

export default function ContactCTA() {
  return (
    <section className="bg-main overflow-hidden py-24 lg:py-32">
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="absolute -top-20 right-30 h-60 w-60 overflow-hidden rounded-xl sm:size-96">
          <Image
            src="/cta/liquid-cta.png"
            alt="Blob Liquid"
            fill
            className="h-full w-full"
            loading="lazy"
          />
        </div>
        {/* GLASSMORPHIC CARD */}
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/20 bg-black/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-sm sm:p-10 lg:p-12">
          <div className="relative z-20">
            <h2 className="font-kapital text-3xl leading-tight font-light text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              READY TO GET
              <span className="font-bold text-[#C9A961]"> STARTED?</span>
            </h2>

            <p className="font-poppins mx-auto mt-4 mb-8 max-w-5xl text-center text-sm leading-relaxed font-light text-gray-200 sm:text-base md:text-lg lg:text-xl">
              Let’s bring your vision to life — with excellence as standard.
            </p>

            <div className="font-poppins mb-8 flex w-full max-w-md flex-col justify-center gap-3 px-4 sm:mb-10 sm:max-w-none sm:gap-4 md:mb-12 md:flex-row">
              <GoldShineButton
                href="/contact"
                className={cn(
                  "flex w-full flex-col items-center justify-center px-6 py-3 text-sm! sm:w-auto sm:px-8 sm:text-base! md:text-[1rem]!",
                )}
              >
                SPEAK WITH AN ADVISOR
              </GoldShineButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
