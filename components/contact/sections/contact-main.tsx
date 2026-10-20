// components/contact/contact-main.tsx
"use client";

import ContactForm from "@/components/contact/sections/contact-form";
import ContactInfo from "@/components/contact/sections/contact-info";
import ContactCTA from "@/components/contact/sections/contact-cta";
import { ContactMap } from "@/components/contact/sections/contact-map-section";

export default function ContactMain() {
  return (
    <>
      {/* MAIN CONTACT SECTION */}
      <section className="bg-main relative overflow-hidden py-20 lg:py-32">
        <div className="relative z-10 container mx-auto max-w-7xl px-6 lg:px-8">
          {/* Decorative blur orb */}
          <div className="absolute top-[20%] left-[10%] z-0 size-12 rounded-full bg-gradient-to-br from-white to-zinc-900/15 blur-3xl sm:-top-8 sm:size-16 md:-top-10 md:size-20" />

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            {/* LEFT: FORM */}
            <div className="flex items-start justify-center lg:justify-start">
              <ContactForm />
            </div>

            {/* RIGHT: INFO + MAP */}
            <div className="flex h-full min-h-0 flex-col">
              <p className="font-poppins mb-10 max-w-3xl text-center text-base leading-relaxed font-light text-gray-200 sm:text-lg lg:text-start lg:text-xl">
                Our team would love to connect with you and learn more about how
                we can support your vision. Let's start a conversation.
              </p>

              <div className="mb-12">
                <ContactInfo />
              </div>

              {/* Map — Takes remaining space */}
              <div className="min-h-0 flex-1">
                <ContactMap />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
