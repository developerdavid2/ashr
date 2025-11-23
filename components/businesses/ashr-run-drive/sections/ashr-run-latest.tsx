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

// News Data for ASHR Run and Drive
const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "ASHR Run and Drive Adds 2025 SUV Collection",
    category: "Automotive",
    date: "2025-11-10",
    image:
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop",
    href: "/news/2025-suv-collection",
  },
  {
    id: 2,
    title: "New Flexible Payment Plans Now Available",
    category: "Automotive",
    date: "2025-10-28",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
    href: "/news/flexible-payment-plans",
  },
  {
    id: 3,
    title: "Corporate Fleet Program Expanded",
    category: "Automotive",
    date: "2025-10-15",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
    href: "/news/fleet-program-expanded",
  },
];

// Blog Data for ASHR Run and Drive
const blogItems: BlogItem[] = [
  {
    id: 1,
    title: "10 Things to Check Before Buying a Used Car in Nigeria",
    category: "Automotive",
    readTime: "7 Min Read",
    date: "2025-11-05",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
    href: "/blogs/buying-used-car-checklist",
  },
  {
    id: 2,
    title: "Best SUVs for Nigerian Roads and Weather",
    category: "Automotive",
    readTime: "5 Min Read",
    date: "2025-10-28",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop",
    href: "/blogs/best-suvs-nigeria",
  },
  {
    id: 3,
    title: "How to Finance Your Car Purchase: A Complete Guide",
    category: "Automotive",
    readTime: "6 Min Read",
    date: "2025-10-15",
    image:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&h=600&fit=crop",
    href: "/blogs/car-financing-guide",
  },
];

// News Section
export function AshrRunDriveNews() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:mb-16 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-kapital text-main/50 text-3xl leading-tight font-light sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              LATEST{" "}
              <span className="font-bold" style={{ color: "#A9802C" }}>
                NEWS
              </span>
            </h2>
            <p className="font-poppins max-w-2xl text-sm leading-relaxed font-light text-gray-700 sm:text-lg md:text-xl">
              Stay updated with the latest announcements, new arrivals, and
              updates from ASHR Run and Drive.
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
export function AshrRunDriveBlogs() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:mb-16 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-kapital text-main/50 text-3xl leading-tight font-light sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              AUTOMOTIVE{" "}
              <span className="font-bold" style={{ color: "#A9802C" }}>
                INSIGHTS
              </span>
            </h2>
            <p className="font-poppins max-w-2xl text-sm leading-relaxed font-light text-gray-700 sm:text-lg md:text-xl">
              Expert advice, buying guides, and tips to help you make the best
              automotive decisions.
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
export default function AshrRunDriveNewsAndBlogs() {
  return (
    <>
      <AshrRunDriveNews />
      <AshrRunDriveBlogs />
    </>
  );
}
