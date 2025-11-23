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
export function AshrDesignsNews() {
  return (
    <section
      className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 md:py-24 lg:py-32"
      id="ashr-design-news"
    >
      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:mb-16 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-kapital text-main/50 mb-4 text-4xl leading-tight font-light sm:text-5xl md:text-6xl lg:text-7xl">
              LATEST{" "}
              <span className="font-bold" style={{ color: "#A9802C" }}>
                NEWS
              </span>
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              Explore updates on new collections, showroom expansions, and the
              latest happenings at ASHR Designs.
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
export function AshrDesignsBlogs() {
  return (
    <section
      className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 md:py-24 lg:py-32"
      id="ashr-designs-blogs"
    >
      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:mb-16 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-kapital text-main/50 mb-4 text-4xl leading-tight font-light sm:text-5xl md:text-6xl lg:text-7xl">
              DESIGN{" "}
              <span className="font-bold" style={{ color: "#A9802C" }}>
                INSIGHTS
              </span>
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              Expert interior design guides, styling tips, and modern living
              inspiration for your home.
            </p>
          </div>

          <Link
            href="/blogs"
            className="group inline-flex items-center gap-2 rounded border-2 border-[#A9802C] px-5 py-3 text-xs font-medium text-[#A9802C] transition-all duration-300 hover:bg-[#A9802C] hover:text-white sm:px-6 sm:py-4 sm:text-sm"
          >
            VIEW ALL UPDATES
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
export default function AshrDesignsNewsAndBlogs() {
  return (
    <>
      <AshrDesignsNews />
      <AshrDesignsBlogs />
    </>
  );
}
