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

// News Data for ASHR Design
const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "ASHR Designs Opens Expanded Showroom in Lekki",
    category: "Interior Design",
    date: "2025-11-02",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    href: "/news/showroom-expansion",
  },
  {
    id: 2,
    title: "New Luxury Kitchen Collection Launched",
    category: "Interior Design",
    date: "2025-10-18",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=800&fit=crop",
    href: "/news/luxury-kitchen-collection",
  },
  {
    id: 3,
    title: "Free Design Consultations Now Available",
    category: "Interior Design",
    date: "2025-10-05",
    image:
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=600&h=600&fit=crop",
    href: "/news/design-consultations",
  },
  {
    id: 4,
    title: "50+ Homes Transformed This Year",
    category: "Interior Design",
    date: "2025-09-20",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80",
    href: "/news/homes-transformed",
  },
];

// Blog Data for ASHR Design
const blogItems: BlogItem[] = [
  {
    id: 1,
    title: "Small Kitchen, Big Impact: Maximizing Space in Nigerian Homes",
    category: "Interior Design",
    readTime: "6 Min Read",
    date: "2025-11-08",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=700&fit=crop",
    href: "/blogs/maximizing-small-kitchens",
  },
  {
    id: 2,
    title: "The Complete Guide to Home Lighting in 2025",
    category: "Interior Design",
    readTime: "8 Min Read",
    date: "2025-10-25",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=600&fit=crop",
    href: "/blogs/home-lighting-guide-2025",
  },
];

// News Card Component

// News Section
export function SimtexNews() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <h2 className="font-kapital font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-black/50 mb-4">
              LATEST <span style={{ color: "#A9802C" }}>NEWS</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Explore updates on new collections, showroom expansions, and the
              latest happenings at ASHR Designs.
            </p>
          </div>

          <Link
            href="/news"
            className="inline-flex items-center gap-2 py-3 px-5 sm:py-4 sm:px-6 text-[#A9802C] border-2 border-[#A9802C] hover:text-white hover:bg-[#A9802C] text-xs sm:text-sm font-medium transition-all duration-300 group rounded"
          >
            VIEW ALL UPDATES
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <h2 className="font-kapital font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-black/50 mb-4">
              DESIGN <span style={{ color: "#A9802C" }}>INSIGHTS</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Expert interior design guides, styling tips, and modern living
              inspiration for your home.
            </p>
          </div>

          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 py-3 px-5 sm:py-4 sm:px-6 text-[#A9802C] border-2 border-[#A9802C] hover:text-white hover:bg-[#A9802C] text-xs sm:text-sm font-medium transition-all duration-300 group rounded"
          >
            VIEW ALL UPDATES
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
