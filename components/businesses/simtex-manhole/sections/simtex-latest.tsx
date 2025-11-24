import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NewsCard } from "@/components/home/sections/news-section";
import { BlogCard } from "@/components/home/sections/blogs-section";

// Types
type NewsItem = {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  href: string;
};

type BlogItem = {
  id: number;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  href: string;
};

// News Data for Simtex Manhole Cover
const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Simtex Supplies 500+ Covers to Lekki Estate Project",
    category: "Industrial",
    date: "2025-10-30",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    href: "/news/lekki-estate-project",
  },
  {
    id: 2,
    title: "Partnership with Lagos State Infrastructure Agency",
    category: "Industrial",
    date: "2025-10-12",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    href: "/news/lagos-state-partnership",
  },
  {
    id: 3,
    title: "New Heavy-Duty E600 Series Launched",
    category: "Industrial",
    date: "2025-09-25",
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
    href: "/news/e600-series-launch",
  },
  {
    id: 4,
    title: "Production Capacity Increased by 40%",
    category: "Industrial",
    date: "2025-09-08",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
    href: "/news/production-expansion",
  },
];

// Blog Data for Simtex Manhole Cover
const blogItems: BlogItem[] = [
  {
    id: 1,
    title: "Why Metal Manhole Covers Are Becoming Obsolete",
    category: "Industrial",
    readTime: "6 Min Read",
    date: "2025-11-04",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
    href: "/blogs/metal-covers-obsolete",
  },
  {
    id: 2,
    title: "Understanding Load Ratings: A15 to E600 Explained",
    category: "Industrial",
    readTime: "5 Min Read",
    date: "2025-10-20",
    image:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=600&fit=crop",
    href: "/blogs/load-ratings-explained",
  },
];

// News Section
export function SimtexNews() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:mb-16 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-kapital text-main/50 mb-4 text-4xl leading-tight font-light sm:text-5xl md:text-6xl lg:text-7xl">
              LATEST{" "}
              <span className="font-bold" style={{ color: "#A9802C" }}>
                NEWS
              </span>
            </h2>
            <p className="font-poppins max-w-2xl text-sm leading-relaxed font-light text-gray-700 sm:text-lg md:text-xl">
              Stay updated with the latest projects, partnerships, and product
              innovations from Simtex Manhole Cover.
            </p>
          </div>

          <Link
            href="/news"
            className="group inline-flex items-center gap-2 rounded border-2 border-[#A9802C] px-5 py-3 text-xs font-medium text-[#A9802C] transition-all duration-300 hover:bg-[#A9802C] hover:text-white sm:px-6 sm:py-4 sm:text-sm"
          >
            VIEW ALL UPDATES
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Blogs Section
export function SimtexBlogs() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:mb-16 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-kapital text-main/50 mb-4 text-4xl leading-tight font-light sm:text-5xl md:text-6xl lg:text-7xl">
              INDUSTRY{" "}
              <span className="font-bold" style={{ color: "#A9802C" }}>
                INSIGHTS
              </span>
            </h2>
            <p className="font-poppins max-w-2xl text-sm leading-relaxed font-light text-gray-700 sm:text-lg md:text-xl">
              Expert technical guides, infrastructure insights, and FRP
              technology innovations for modern urban development.
            </p>
          </div>

          <Link
            href="/blogs"
            className="group inline-flex items-center gap-2 rounded border-2 border-[#A9802C] px-5 py-3 text-xs font-medium text-[#A9802C] transition-all duration-300 hover:bg-[#A9802C] hover:text-white sm:px-6 sm:py-4 sm:text-sm"
          >
            EXPLORE MORE BLOGS
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          {blogItems.map((item) => (
            <BlogCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Combined Export Component
export default function SimtexNewsAndBlogs() {
  return (
    <>
      <SimtexNews />
      <SimtexBlogs />
    </>
  );
}
