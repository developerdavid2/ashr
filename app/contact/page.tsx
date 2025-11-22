// app/contact/page.tsx
"use client";

import ContactHero from "@/components/contact/sections/contact-hero";
import ContactInfo from "@/components/contact/sections/contact-info";
import ContactMap from "@/components/contact/sections/contact-map";
import ContactForm from "@/components/contact/sections/contact-form";
import ContactCTA from "@/components/contact/sections/contact-cta";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactMap />
      <ContactForm />
      <ContactCTA />
    </>
  );
}
