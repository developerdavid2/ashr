// app/faq/page.tsx
import { generateMetadata } from "@/components/seo/page-seo";
import FAQHero from "@/components/faq/sections/faq-hero";
import FAQMain from "@/components/faq/sections/faq-main";

// PREMIUM SEO FOR FAQ PAGE
export const metadata = generateMetadata({
  title: "Frequently Asked Questions – ASHR Group",
  description:
    "Everything you need to know about ASHR Group — our products, services, sustainability, partnerships, and luxury standards across automotive, interiors, ceramics, and industrial divisions.",
  image: "https://ashrgroup.com.ng/og-faq.jpg",
  url: "/faq",
  type: "website",
});

export default function FAQPage() {
  return (
    <>
      <FAQHero />
      <FAQMain />
    </>
  );
}
