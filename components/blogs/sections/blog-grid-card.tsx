// components/blogs/BlogGridCard.tsx
import { BlogItem } from "@/types/blogs";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogGridCard({ item }: { item: BlogItem }) {
  return (
    <Link href={`/blogs/${item.slug}`} className="font-poppins block">
      <div className="group hover:bg-main/90 relative h-fit cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-gray-100/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
        {/* IMAGE */}
        <div className="relative h-40 w-full overflow-hidden rounded-xl sm:h-48">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="rounded-xl object-cover p-4 grayscale transition-all duration-500 group-hover:grayscale-0 sm:p-6"
            loading="lazy"
          />
        </div>

        <div className="p-6">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-[#C9A961]/10 px-3 py-1 text-xs font-medium text-[#C9A961] group-hover:bg-white/10">
              {item.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-500 group-hover:text-gray-300">
              <Clock className="h-3 w-3" /> {item.readTime}
            </span>
          </div>

          <h3 className="mb-4 line-clamp-2 text-xl font-semibold text-zinc-900/90 transition-colors group-hover:text-white md:text-xl">
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

          <p className="mb-4 line-clamp-2 text-sm text-gray-500 group-hover:text-gray-300">
            {item.excerpt}
          </p>

          {/* <div className="flex items-center gap-3">
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
          </div> */}
        </div>
      </div>
    </Link>
  );
}
