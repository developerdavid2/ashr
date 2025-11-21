// components/news/NewsCard.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NewsItem } from "@/types/news";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link href={`/news/${item.slug}`} className="block font-poppins">
      <div className="group/card relative cursor-pointer rounded-xl border border-gray-200 bg-gray-100/50 hover:bg-main/90 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-[420px]">
        {/* IMAGE */}
        <div className="relative h-40 sm:h-48 w-full rounded-xl overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover grayscale group-hover/card:grayscale-0 transition-all duration-500 p-4 sm:p-6 rounded-xl"
            loading="lazy"
          />

          {/* badge */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 p-3 sm:p-4">
            <span
              className="px-2.5 py-1 sm:px-3 sm:py-1 text-[0.65rem] sm:text-xs font-medium rounded-full border border-gray-300 bg-white/90 backdrop-blur-lg text-gray-700
            transition-all duration-300
            group-hover/card:bg-black/10
            group-hover/card:border-black/10
            group-hover/card:text-white"
            >
              {item.category}
            </span>
          </div>

          {/* arrow bubble */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 p-3 sm:p-4 opacity-0 group-hover/card:opacity-100 transition duration-300">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#131313]" />
            </div>
          </div>
        </div>

        <div className="p-6 flex flex-col justify-between h-[calc(420px-224px)]">
          <div>
            <h3 className="text-base sm:text-xl font-semibold leading-tight text-zinc-900/90 group-hover/card:text-white line-clamp-2">
              <span
                className="[--u:0%] group-hover/card:[--u:100%]"
                style={{
                  textDecoration: "none",
                  backgroundImage: "linear-gradient(currentColor,currentColor)",
                  backgroundPosition: "0% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "var(--u) 2px",
                  transition: "background-size .5s",
                }}
              >
                {item.title}
              </span>
            </h3>
            <p className="text-sm text-gray-500 group-hover/card:text-gray-300 mt-2">
              {new Date(item.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#A9802C] group-hover/card:text-white font-semibold">
            <span>Learn more</span>
            <ArrowUpRight className="w-5 h-5 group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
