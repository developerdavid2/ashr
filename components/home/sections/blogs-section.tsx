"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { EnhancedBlogItem, getAllBlogs } from "@/constants/blogs-data";

export function BlogCard({ item }: { item: EnhancedBlogItem }) {
  return (
    <Link href={`/blogs/${item.slug}`} className="block">
      <div className="group/card hover:bg-main/90 relative cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-gray-100/50 transition duration-300 hover:shadow-2xl">
        <div className="flex flex-col gap-0 sm:flex-row sm:gap-6">
          {/* IMAGE - Left side */}
          <div className="relative h-40 w-full flex-shrink-0 overflow-hidden rounded-t-xl sm:h-auto sm:w-40 sm:rounded-l-xl sm:rounded-tr-none md:w-48">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover grayscale transition-all duration-500 group-hover/card:scale-105 group-hover/card:grayscale-0"
            />
          </div>

          {/* CONTENT - Right side */}
          <div className="relative z-20 flex flex-1 flex-col justify-between p-4 sm:p-5 md:p-6">
            <div>
              {/* Category and Read Time */}
              <div className="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">
                <span className="rounded-full border border-gray-300 bg-white/90 px-2.5 py-1 text-[0.65rem] font-medium text-gray-700 backdrop-blur-sm transition-all duration-300 group-hover/card:border-[#A9802C] group-hover/card:bg-[#A9802C] group-hover/card:text-white sm:px-3 sm:py-1 sm:text-xs">
                  {item.category}
                </span>
                <span className="text-[0.65rem] text-gray-500 transition-colors duration-300 group-hover/card:text-gray-400 sm:text-xs">
                  {item.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-2 text-base leading-tight font-semibold text-[#131313] group-hover/card:text-white sm:mb-3 sm:text-lg md:text-xl lg:text-2xl">
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
            <div className="mt-3 flex items-center justify-between sm:mt-4">
              <p className="text-[0.65rem] text-gray-500 transition-colors duration-300 group-hover/card:text-gray-400 sm:text-xs">
                {item.date &&
                  new Date(item.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
              </p>

              {/* Arrow */}
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 transition-all duration-300 group-hover/card:bg-white sm:h-10 sm:w-10">
                <ArrowUpRight className="h-4 w-4 text-[#131313] transition-transform duration-300 group-hover/card:translate-x-1 group-hover/card:-translate-y-1 sm:h-5 sm:w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function BlogsSection() {
  const [blogItems, setBlogItems] = useState<EnhancedBlogItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const allBlogs = await getAllBlogs();
        // Get the first 3 most recent blogs
        const recentBlogs = allBlogs.slice(0, 3);
        setBlogItems(recentBlogs);
      } catch (error) {
        console.error("Error loading blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  return (
    <section className="font-poppins bg-gradient-to-b from-white to-gray-50 py-20 sm:py-28 md:py-36">
      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
        <div className="mb-8 flex items-center justify-between gap-4 sm:mb-12 sm:gap-0">
          <h2 className="font-kapital text-3xl font-bold uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Blogs
          </h2>
          <Link
            href="/blogs"
            className="group inline-flex items-center gap-2 rounded border-2 border-[#A9802C] px-4 py-2 text-xs font-medium text-[#A9802C] transition-all duration-300 hover:bg-[#A9802C] hover:text-white sm:px-6 sm:py-4 sm:text-sm"
          >
            VIEW MORE BLOGS
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {loading ? (
          <div className="flex flex-col gap-4 sm:gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-40 animate-pulse rounded-xl bg-gray-200"
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4 sm:gap-6">
            {blogItems.map((item) => (
              <BlogCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
