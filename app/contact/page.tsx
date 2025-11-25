// app/contact/page.tsx
"use client";

import ContactHero from "@/components/contact/sections/contact-hero";
import ContactForm from "@/components/contact/sections/contact-form";
import ContactInfo from "@/components/contact/sections/contact-info";
import ContactCTA from "@/components/contact/sections/contact-cta";
import dynamic from "next/dynamic";
import { Loader2Icon, LoaderIcon } from "lucide-react";

const ContactMapLazy = dynamic(
  () => import("@/components/contact/sections/contact-map"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full flex-col items-center justify-center gap-y-4 rounded-3xl bg-neutral-800/50 backdrop-blur-sm">
        <Loader2Icon className="size-14 animate-spin text-white/60" />
        <span className="text-white/80">Loading Map...</span>
      </div>
    ),
  },
);

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      {/* MAIN CONTACT SECTION – HEIGHT-MATCHED LUXURY GRID */}
      <section className="bg-main relative overflow-hidden py-20 lg:py-32">
        <div className="relative z-10 container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="absolute top-[20%] left-[10%] z-0 size-12 rounded-full bg-linear-to-br from-white to-zinc-900/15 will-change-transform select-none sm:-top-8 sm:size-16 md:-top-10 md:size-18" />
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            {/* LEFT: FORM */}
            <div className="flex items-start">
              <ContactForm />
            </div>

            {/* RIGHT: INFO + MAP → PERFECT HEIGHT MATCH */}
            <div className="flex h-full min-h-0 flex-col overflow-hidden">
              <p className="font-poppins mb-8 max-w-3xl text-center text-sm leading-relaxed font-light text-gray-200 sm:text-base md:text-lg lg:text-start lg:text-xl">
                Our team would love to connect with you and learn more about how
                we can support your needs. Let’s start a conversation!
              </p>
              {/* Contact Info – Compact & Elegant */}
              <div className="mb-10 lg:mb-12">
                <ContactInfo /> {/* We’ll revamp this below */}
              </div>

              {/* Map – Takes remaining space */}
              <div className="min-h-0 flex-1">
                <div className="h-full min-h-[300px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                  <ContactMapLazy />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
