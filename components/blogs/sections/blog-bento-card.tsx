// components/blogs/BlogBentoCard.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { BlogItem } from "@/types/blogs";
import * as React from "react";

interface Props {
  item: BlogItem;
  variant: "featured" | "horizontal" | "semi";
  delay?: number;
}

export default function BlogBentoCard({ item, variant }: Props) {
  if (variant === "featured") {
    return (
      <Link href={`/blogs/${item.slug}`} className="group/card block h-full">
        <div className="group/card relative cursor-pointer rounded-xl border border-gray-200 bg-white hover:bg-main/90 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-[500px] md:h-[600px] lg:h-full p-4 lg:p-8 flex flex-col justify-between">
          <div className="flex flex-col">
            {/* Title */}
            <h3 className="text-xl md:text-xl font-semibold text-zinc-900/90 mb-4 group-hover/card:text-white transition-colors line-clamp-2">
              <span
                className="[--u:0%] group-hover/card:[--u:100%]"
                style={{
                  backgroundImage: "linear-gradient(currentColor,currentColor)",
                  backgroundPosition: "0% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "var(--u) 2px",
                  transition: "background-size .7s",
                }}
              >
                {item.title}
              </span>
            </h3>
            {/* Excerpt */}
            <p className="text-gray-500 group-hover/card:text-gray-300 text-sm lg:text-base line-clamp-2 mb-4">
              {item.excerpt}
            </p>
          </div>
          {/* Image Section */}
          <div className="relative h-52 md:h-72 lg:h-96 overflow-hidden bg-gray-100 rounded-xl">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover grayscale-100 group-hover/card:grayscale-0 group-hover/card:scale-105 transition-transform duration-700 w-full h-full"
            />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover/card:border-gray-500 transition-all duration-500">
            <div className="flex items-center gap-3">
              <Image
                src={item.author.avatar}
                alt={item.author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="flex flex-col justify-center space-y-2">
                <p className="text-sm font-medium text-gray-500 group-hover/card:text-gray-300">
                  {item.author.name}
                </p>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 text-xs font-medium bg-[#C9A961]/10 group-hover/card:bg-white/10 text-[#C9A961] rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1 group-hover/card:text-gray-300">
                    <Clock className="w-3 h-3" /> {item.readTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Arrow Icon */}
            <div className="flex justify-end mt-4">
              <div className="w-8 h-8 rounded-full bg-gray-100 group-hover/card:bg-[#C9A961] group-hover/card:rotate-45 flex items-center justify-center transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 text-gray-700 group-hover/card:text-white  transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
  if (variant === "semi") {
    return (
      <Link href={`/blogs/${item.slug}`} className="group/card block h-full">
        <div className="group/card relative cursor-pointer rounded-xl border border-gray-200 bg-white hover:bg-main/90 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl p-4 lg:p-8 flex flex-col justify-between">
          {/* Image Section */}
          <div className="relative h-32 overflow-hidden bg-gray-100">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="flex flex-col mt-4">
            {/* Title */}
            <h3 className="text-xl md:text-xl font-semibold text-zinc-900/90 mb-4 group-hover/card:text-white transition-colors line-clamp-2">
              <span
                className="[--u:0%] group-hover/card:[--u:100%]"
                style={{
                  backgroundImage: "linear-gradient(currentColor,currentColor)",
                  backgroundPosition: "0% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "var(--u) 2px",
                  transition: "background-size .7s",
                }}
              >
                {item.title}
              </span>
            </h3>
            {/* Excerpt */}
            <p className="text-gray-500 group-hover/card:text-gray-300 text-sm lg:text-base line-clamp-2 mb-4">
              {item.excerpt}
            </p>
          </div>
          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover/card:border-gray-500 transition-all duration-500">
            <div className="flex items-center gap-3">
              <Image
                src={item.author.avatar}
                alt={item.author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="flex flex-col justify-center space-y-2">
                <p className="text-sm font-medium text-gray-500 group-hover/card:text-gray-300">
                  {item.author.name}
                </p>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 text-xs font-medium bg-[#C9A961]/10 group-hover/card:bg-white/10 text-[#C9A961] rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1 group-hover/card:text-gray-300">
                    <Clock className="w-3 h-3" /> {item.readTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Arrow Icon */}
            <div className="flex justify-end mt-4">
              <div className="w-8 h-8 rounded-full bg-gray-100 group-hover/card:bg-[#C9A961] group-hover/card:rotate-45 flex items-center justify-center transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 text-gray-700 group-hover/card:text-white  transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Horizontal Card Variant
  return (
    <Link href={`/blogs/${item.slug}`} className="group/card block">
      <div className="group/card relative cursor-pointer rounded-xl border border-gray-200 bg-white hover:bg-main/90 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-[150px] p-4 lg:p-6 flex justify-between gap-4">
        {/* Image - Left Side */}
        <div className="relative w-32 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100 flex">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Content - Right Side */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Category & Read Time */}
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-xs font-medium bg-[#C9A961]/10 group-hover/card:bg-white/10 text-[#C9A961] rounded-full">
                {item.category}
              </span>
              <span className="text-xs text-gray-500 flex items-center gap-1 group-hover/card:text-gray-300">
                <Clock className="w-3 h-3" /> {item.readTime}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-xl font-semibold text-zinc-900/90 mt-4 group-hover/card:text-white transition-colors line-clamp-2">
              <span
                className="[--u:0%] group-hover/card:[--u:100%]"
                style={{
                  backgroundImage: "linear-gradient(currentColor,currentColor)",
                  backgroundPosition: "0% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "var(--u) 2px",
                  transition: "background-size .7s",
                }}
              >
                {item.title}
              </span>
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
