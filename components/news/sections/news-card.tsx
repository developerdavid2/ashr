// components/news/NewsCard.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NewsItem } from "@/types/news";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link href={`/news/${item.slug}`} className="font-poppins block">
      <div className="group/card hover:bg-main/90 relative h-fit cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-gray-100/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
        {/* IMAGE */}
        <div className="relative h-40 w-full overflow-hidden rounded-xl sm:h-48">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="rounded-xl object-cover p-4 grayscale transition-all duration-500 group-hover/card:grayscale-0 sm:p-6"
            loading="lazy"
          />

          {/* badge */}
          <div className="absolute top-3 left-3 p-3 sm:top-4 sm:left-4 sm:p-4">
            <span className="rounded-full border border-gray-300 bg-white/90 px-2.5 py-1 text-[0.65rem] font-medium text-gray-700 backdrop-blur-lg transition-all duration-300 group-hover/card:border-black/10 group-hover/card:bg-black/10 group-hover/card:text-white sm:px-3 sm:py-1 sm:text-xs">
              {item.category}
            </span>
          </div>

          {/* arrow bubble */}
          <div className="absolute top-3 right-3 p-3 opacity-0 transition duration-300 group-hover/card:opacity-100 sm:top-4 sm:right-4 sm:p-4">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white sm:h-8 sm:w-8">
              <ArrowUpRight className="h-3.5 w-3.5 text-[#131313] sm:h-4 sm:w-4" />
            </div>
          </div>
        </div>

        <div className="flex h-[calc(420px-224px)] flex-col justify-between p-6">
          <div>
            <h3 className="line-clamp-2 text-base leading-tight font-semibold text-zinc-900/90 group-hover/card:text-white sm:text-xl">
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
            <p className="mt-2 text-sm text-gray-500 group-hover/card:text-gray-300">
              {new Date(item.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="flex items-center gap-2 font-semibold text-[#A9802C] group-hover/card:text-white">
            <span>Learn more</span>
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover/card:translate-x-1 group-hover/card:-translate-y-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
