import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type NewsItem = {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  href: string;
};

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "ASHR Run and Drive adds new models",
    category: "Company",
    date: "2024-03-15",
    image: "/news/news-car.webp",
    href: "/news/ashr-new-models",
  },
  {
    id: 2,
    title: "High Taste Ceramics launches new luxury tiles collection.",
    category: "Company",
    date: "2024-03-10",
    image: "/news/news-ceramics.jpeg",
    href: "/news/automotive-expansion",
  },
  {
    id: 3,
    title: "Simtex expands industrial partnerships across Nigeria.",
    category: "Company",
    date: "2024-03-05",
    image: "/news/news-manhole.jpg",
    href: "/news/lagos-showroom",
  },
];

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link href={item.href} className="block">
      <div className="group/card hover:bg-main/90 relative h-[320px] cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-gray-100/50 transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:h-[350px]">
        {/* IMAGE */}
        <div className="relative h-40 w-full overflow-hidden sm:h-48">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover p-4 grayscale transition-all duration-500 group-hover/card:scale-102 group-hover/card:grayscale-0 sm:p-6"
          />

          {/* badge */}
          <div className="absolute top-3 left-3 p-3 sm:top-4 sm:left-4 sm:p-4">
            <span className="rounded-full border border-gray-300 bg-white/90 px-2.5 py-1 text-[0.65rem] font-medium text-gray-700 backdrop-blur-sm transition-all duration-300 group-hover/card:border-[#A9802C] group-hover/card:bg-[#A9802C] group-hover/card:text-white sm:px-3 sm:py-1 sm:text-xs">
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

        {/* CONTENT */}
        <div className="relative z-20 flex h-[calc(320px-160px)] flex-col justify-between p-4 sm:h-[calc(350px-192px)] sm:p-6">
          <div>
            <h3 className="line-clamp-2 text-base leading-tight font-semibold text-[#131313] group-hover/card:text-white sm:text-xl">
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

            <p className="mt-2 mb-3 text-[0.65rem] text-gray-500 transition-colors duration-300 group-hover/card:text-gray-400 sm:mt-3 sm:mb-4 sm:text-xs">
              {new Date(item.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-[#131313] transition-colors duration-300 group-hover/card:text-white sm:text-sm">
            <span>Learn more</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/card:translate-x-1 group-hover/card:-translate-y-1 sm:h-4 sm:w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function NewsSection() {
  return (
    <section className="font-poppins bg-gradient-to-b from-gray-50 to-white py-20 sm:py-28 md:py-36">
      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
        <div className="mb-8 flex items-center justify-between gap-4 sm:mb-12 sm:gap-0">
          <h2 className="text-main/90 font-kapital text-3xl font-bold uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            News
          </h2>
          <Link
            href="/news"
            className="group inline-flex items-center rounded border-2 border-[#A9802C] px-4 py-2 text-xs font-medium text-[#A9802C] transition-all duration-300 hover:bg-[#A9802C] hover:text-white sm:px-6 sm:py-4 sm:text-sm"
          >
            VIEW ALL UPDATES
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
