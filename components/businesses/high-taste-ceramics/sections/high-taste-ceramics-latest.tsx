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

// News Data for High Taste Ceramics
const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "2025 Italian Tile Collection Now in Stock",
    category: "Ceramics",
    date: "2025-11-05",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    href: "/news/italian-tile-collection-2025",
  },
  {
    id: 2,
    title: "Showroom Expansion: New Bathroom Display Section",
    category: "Ceramics",
    date: "2025-10-20",
    image:
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&h=600&fit=crop",
    href: "/news/showroom-expansion-bathroom",
  },
  {
    id: 3,
    title: "Professional Installation Team Expanded",
    category: "Ceramics",
    date: "2025-10-08",
    image:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=600&fit=crop",
    href: "/news/installation-team-expanded",
  },
  {
    id: 4,
    title: "Major Supply to Luxury Hotel Project",
    category: "Ceramics",
    date: "2025-09-28",
    image:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&h=600&fit=crop",
    href: "/news/luxury-hotel-supply",
  },
];

// Blog Data for High Taste Ceramics
const blogItems: BlogItem[] = [
  {
    id: 1,
    title: "How to Choose the Perfect Tiles for Your Home",
    category: "Ceramics",
    readTime: "8 Min Read",
    date: "2025-11-06",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    href: "/blogs/choosing-perfect-tiles",
  },
  {
    id: 2,
    title: "Creating a Spa-Like Bathroom in Your Nigerian Home",
    category: "Ceramics",
    readTime: "6 Min Read",
    date: "2025-10-22",
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&h=600&fit=crop",
    href: "/blogs/spa-like-bathroom",
  },
];

// News Section
export function HighTasteCeramicsNews() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:mb-16 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-kapital mb-4 text-4xl leading-tight font-bold text-black/50 sm:text-5xl md:text-6xl lg:text-7xl">
              LATEST <span style={{ color: "#A9802C" }}>NEWS</span>
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              Stay updated with new arrivals, showroom updates, and the latest
              luxury tile collections at High Taste Ceramics.
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
export function HighTasteCeramicsBlogs() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:mb-16 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-kapital mb-4 text-4xl leading-tight font-bold text-black/50 sm:text-5xl md:text-6xl lg:text-7xl">
              CERAMICS <span style={{ color: "#A9802C" }}>INSIGHTS</span>
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              Expert guides on tile selection, bathroom design inspiration, and
              luxury ceramic trends for modern homes.
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
export default function HighTasteCeramicsNewsAndBlogs() {
  return (
    <>
      <HighTasteCeramicsNews />
      <HighTasteCeramicsBlogs />
    </>
  );
}
