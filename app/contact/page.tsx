// app/contact/page.tsx
"use client"; // ← THIS LINE IS REQUIRED NOW

import ContactHero from "@/components/contact/sections/contact-hero";
import ContactInfo from "@/components/contact/sections/contact-info";
import ContactForm from "@/components/contact/sections/contact-form";
import ContactCTA from "@/components/contact/sections/contact-cta";
import dynamic from "next/dynamic";

// Now dynamic({ ssr: false }) is allowed
const ContactMap = dynamic(
  () => import("@/components/contact/sections/contact-map"),
  { ssr: false },
);

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
