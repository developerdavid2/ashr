// components/blogs/BlogGridCard.tsx
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { BlogItem } from "@/types/blogs";
import * as React from "react";

export default function BlogGridCard({ item }: { item: BlogItem }) {
  return (
    <Link href={`/blogs/${item.slug}`} className="block font-poppins">
      <div className="group relative cursor-pointer rounded-xl border border-gray-200 bg-gray-100/50 hover:bg-main/90 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-[470px]">
        {/* IMAGE */}
        <div className="relative h-40 sm:h-48 w-full rounded-xl overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 p-4 sm:p-6 rounded-xl"
            loading="lazy"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 text-xs font-medium bg-[#C9A961]/10 group-hover:bg-white/10 text-[#C9A961] rounded-full">
              {item.category}
            </span>
            <span className="text-xs text-gray-500 flex items-center gap-1 group-hover:text-gray-300">
              <Clock className="w-3 h-3" /> {item.readTime}
            </span>
          </div>

          <h3 className="text-xl md:text-xl font-semibold text-zinc-900/90 mb-4 group-hover:text-white transition-colors line-clamp-2">
            <span
              className="[--u:0%] group-hover:[--u:100%]"
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

          <p className="text-gray-500 group-hover:text-gray-300 text-sm line-clamp-2 mb-4">
            {item.excerpt}
          </p>

          <div className="flex items-center gap-3">
            <Image
              src={item.author.avatar}
              alt={item.author.name}
              width={36}
              height={36}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-gray-500 group-hover:text-gray-300">
                {item.author.name}
              </p>
              <p className="text-xs text-gray-500 group-hover:text-[#C9A961]">
                {item.author.role.split(",")[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
