// app/contact/page.tsx
import { generateMetadata } from "@/components/seo/page-seo";
import ContactHero from "@/components/contact/sections/contact-hero";
import ContactMain from "@/components/contact/sections/contact-main";

// PREMIUM SEO FOR CONTACT PAGE
export const metadata = generateMetadata({
  title: "Contact ASHR Group – Luxury Automotive, Interiors & Ceramics",
  description:
    "Get in touch with ASHR Group. Visit our showrooms in Lagos & Abuja, call +234 909 666 6610, or send us a message. We respond within 24 hours.",
  image: "https://ashrgroup.com.ng/og-contact.jpg",
  url: "/contact",
  type: "website",
});

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMain />
    </>
  );
}
