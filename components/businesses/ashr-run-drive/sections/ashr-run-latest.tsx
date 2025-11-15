import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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

// News Card Component
function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link href={item.href} className="block">
      <div className="group/card relative cursor-pointer rounded-xl border border-gray-200 bg-white hover:bg-black overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl h-[320px] sm:h-[350px]">
        {/* IMAGE */}
        <div className="relative h-40 sm:h-48 w-full overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover grayscale group-hover/card:grayscale-0 group-hover/card:scale-105 transition-all duration-500 p-4 sm:p-6"
          />

          {/* Badge */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 p-3 sm:p-4">
            <span className="px-3 py-1 text-xs font-semibold rounded-full border transition-all duration-300 border-gray-300 bg-white/90 backdrop-blur-sm text-gray-700 group-hover/card:bg-[#A9802C] group-hover/card:border-[#A9802C] group-hover/card:text-white">
              {item.category}
            </span>
          </div>

          {/* Arrow Bubble */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 p-3 sm:p-4 opacity-0 group-hover/card:opacity-100 transition duration-300">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-black" />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-4 sm:p-6 relative z-20 flex flex-col justify-between h-[calc(320px-160px)] sm:h-[calc(350px-192px)]">
          <div>
            <h3 className="text-base sm:text-xl font-semibold leading-tight text-black group-hover/card:text-white transition-colors">
              <span
                className="[--u:0%] group-hover/card:[--u:100%]"
                style={{
                  textDecoration: "none",
                  backgroundImage: "linear-gradient(currentColor,currentColor)",
                  backgroundPosition: "0% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "var(--u) 2px",
                  transition: "background-size .3s",
                }}
              >
                {item.title}
              </span>
            </h3>

            <p className="text-xs text-gray-500 group-hover/card:text-gray-400 transition-colors duration-300 mt-3 mb-4">
              {new Date(item.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-black group-hover/card:text-white transition-colors duration-300">
            <span>Learn more</span>
            <ArrowUpRight className="w-4 h-4 group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
}

// Blog Card Component
function BlogCard({ item }: { item: BlogItem }) {
  return (
    <Link href={item.href} className="block">
      <div className="group/card relative cursor-pointer rounded-xl border border-gray-200 bg-white hover:bg-black overflow-hidden transition-all duration-300 hover:shadow-2xl">
        <div className="flex flex-col sm:flex-row gap-0 sm:gap-6">
          {/* IMAGE - Left side */}
          <div className="relative w-full sm:w-40 md:w-48 h-40 sm:h-auto flex-shrink-0 overflow-hidden rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover grayscale group-hover/card:grayscale-0 group-hover/card:scale-105 transition-all duration-500"
            />
          </div>

          {/* CONTENT - Right side */}
          <div className="flex-1 p-4 sm:p-5 md:p-6 relative z-20 flex flex-col justify-between">
            <div>
              {/* Category and Read Time */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full border transition-all duration-300 border-gray-300 bg-white/90 backdrop-blur-sm text-gray-700 group-hover/card:bg-[#A9802C] group-hover/card:border-[#A9802C] group-hover/card:text-white">
                  {item.category}
                </span>
                <span className="text-xs text-gray-500 group-hover/card:text-gray-400 transition-colors duration-300">
                  {item.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold leading-tight text-black group-hover/card:text-white mb-3 transition-colors">
                <span
                  className="[--u:0%] group-hover/card:[--u:100%]"
                  style={{
                    textDecoration: "none",
                    backgroundImage:
                      "linear-gradient(currentColor,currentColor)",
                    backgroundPosition: "0% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "var(--u) 2px",
                    transition: "background-size .3s",
                  }}
                >
                  {item.title}
                </span>
              </h3>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-4">
              <p className="text-xs text-gray-500 group-hover/card:text-gray-400 transition-colors duration-300">
                {new Date(item.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>

              {/* Arrow */}
              <div className="w-10 h-10 rounded-full bg-gray-200 group-hover/card:bg-white flex items-center justify-center transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 text-black group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// News Section
export function AshrRunDriveNews() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <h2 className="font-kapital font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-black/50 mb-4">
              LATEST <span style={{ color: "#A9802C" }}>NEWS</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Stay updated with the latest announcements, new arrivals, and
              updates from ASHR Run and Drive.
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
export function AshrRunDriveBlogs() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <h2 className="font-kapital font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-black/50 mb-4">
              AUTOMOTIVE <span style={{ color: "#A9802C" }}>INSIGHTS</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Expert advice, buying guides, and tips to help you make the best
              automotive decisions.
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
export default function AshrRunDriveNewsAndBlogs() {
  return (
    <>
      <AshrRunDriveNews />
      <AshrRunDriveBlogs />
    </>
  );
}
