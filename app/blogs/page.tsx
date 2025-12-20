import { generateMetadata } from "@/components/seo/page-seo";
import BlogHero from "@/components/blogs/sections/blogs-hero";
import BlogsMain from "@/components/blogs/sections/blogs-main";

// PREMIUM SEO FOR BLOGS PAGE
export const metadata = generateMetadata({
  title:
    "Blogs & Insights – ASHR Group | Luxury Lifestyle, Automotive & Design",
  description:
    "Expert insights on luxury automotive trends, African-inspired interior design, premium ceramics, industrial innovation, and the art of elevated living — from ASHR Group.",
  image: "https://ashrgroup.com.ng/og-blogs.jpg",
  url: "/blogs",
  type: "website",
});

export default function BlogsPage() {
  return (
    <>
      <BlogHero />
      <BlogsMain />
    </>
  );
}
