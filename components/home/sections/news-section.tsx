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
      <div className="group/card relative cursor-pointer rounded-xl border border-gray-200 bg-gray-100/50 hover:bg-black overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-2xl h-[320px] sm:h-[350px]">
        {/* IMAGE */}
        <div className="relative h-40 sm:h-48 w-full overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover grayscale group-hover/card:grayscale-0 group-hover/card:scale-105 transition-all duration-500 p-4 sm:p-6"
          />

          {/* badge */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 p-3 sm:p-4">
            <span
              className="px-2.5 py-1 sm:px-3 sm:py-1 text-[0.65rem] sm:text-xs font-medium rounded-full border border-gray-300 bg-white/90 backdrop-blur-sm text-gray-700
            transition-all duration-300
            group-hover/card:bg-[#A9802C]
            group-hover/card:border-[#A9802C]
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

        {/* CONTENT */}
        <div className="p-4 sm:p-6 relative z-20 flex flex-col justify-between h-[calc(320px-160px)] sm:h-[calc(350px-192px)]">
          <div>
            <h3 className="text-base sm:text-xl font-semibold leading-tight text-[#131313] group-hover/card:text-white">
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

            <p className="text-[0.65rem] sm:text-xs text-gray-500 group-hover/card:text-gray-400 transition-colors duration-300 mt-2 sm:mt-3 mb-3 sm:mb-4">
              {new Date(item.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#131313] group-hover/card:text-white transition-colors duration-300">
            <span>Learn more</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function NewsSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 font-poppins">
      <div className="container mx-auto px-4 sm:px-6 max-w-full sm:max-w-md md:max-w-2xl lg:max-w-7xl">
        <div className="flex items-center justify-between gap-4 sm:gap-0 mb-8 sm:mb-12">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-kapital uppercase">
            News
          </h2>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 py-3 px-5 sm:py-4 sm:px-6 text-[#A9802C] border-2 border-[#A9802C] hover:text-white hover:bg-[#A9802C] text-xs sm:text-sm font-medium transition-all duration-300 group rounded"
          >
            VIEW ALL UPDATES
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
