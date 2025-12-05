import { FeaturedNewsCarousel } from "@/components/news/sections/featured-news-carousel";
import NewsHero from "@/components/news/sections/news-hero";
import { generateMetadata } from "@/components/seo/page-seo";

import NewsMain from "@/components/news/sections/news-main";

// ————————————————————————
// PREMIUM SEO FOR NEWS PAGE
// ————————————————————————
export const metadata = generateMetadata({
  title: "Newsroom – ASHR Group | Latest Updates & Announcements",
  description:
    "Stay informed with the latest news, partnerships, product launches, and milestones from ASHR Group and its subsidiaries: Run & Drive, Designs, High Taste Ceramics, and Simtex.",
  image: "https://ashrgroup.com.ng/og-newsroom.jpg",
  url: "/news",
  type: "website",
});

export default function NewsPageClient() {
  return (
    <>
      <NewsHero />
      <FeaturedNewsCarousel />
      <NewsMain />
    </>
  );
}
