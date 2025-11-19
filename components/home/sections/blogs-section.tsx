import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type BlogItem = {
  id: number;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  href: string;
};

const blogItems: BlogItem[] = [
  {
    id: 1,
    title: "Choosing the Right Ceramic Tiles for Your Space",
    category: "Ceramics",
    readTime: "5 Min Read",
    date: "2024-03-12",
    image: "/blogs/blogs-ceramics.jpg",
    href: "/blogs/ceramic-tiles-guide",
  },
  {
    id: 2,
    title: "Interior Design Trends for 2025",
    category: "Interior",
    readTime: "7 Min Read",
    date: "2024-03-08",
    image: "/blogs/blogs-interior.jpeg",
    href: "/blogs/design-trends-2025",
  },
  {
    id: 3,
    title: "Top 5 Things to Consider When Buying a Car",
    category: "Industrial",
    readTime: "4 Min Read",
    date: "2024-03-01",
    image: "/blogs/blogs-car.jpeg",
    href: "/blogs/top-things-buying-car",
  },
];

export function BlogCard({ item }: { item: BlogItem }) {
  return (
    <Link href={item.href} className="block">
      <div className="group/card relative cursor-pointer rounded-xl border border-gray-200 bg-gray-100/50 hover:bg-black overflow-hidden transition duration-300 hover:shadow-2xl">
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
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span
                  className="px-2.5 py-1 sm:px-3 sm:py-1 text-[0.65rem] sm:text-xs font-medium rounded-full border border-gray-300 bg-white/90 backdrop-blur-sm text-gray-700
                transition-all duration-300
                group-hover/card:bg-[#A9802C]
                group-hover/card:border-[#A9802C]
                group-hover/card:text-white"
                >
                  {item.category}
                </span>
                <span className="text-[0.65rem] sm:text-xs text-gray-500 group-hover/card:text-gray-400 transition-colors duration-300">
                  {item.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-tight text-[#131313] group-hover/card:text-white mb-2 sm:mb-3">
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
            <div className="flex items-center justify-between mt-3 sm:mt-4">
              <p className="text-[0.65rem] sm:text-xs text-gray-500 group-hover/card:text-gray-400 transition-colors duration-300">
                {new Date(item.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>

              {/* Arrow */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 group-hover/card:bg-white flex items-center justify-center transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#131313] group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function BlogsSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 font-poppins">
      <div className="container mx-auto px-4 sm:px-6 max-w-full sm:max-w-md md:max-w-2xl lg:max-w-7xl">
        <div className="flex items-center justify-between gap-4 sm:gap-0 mb-8 sm:mb-12">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-kapital uppercase">
            Blogs
          </h2>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 py-2 px-4 sm:py-4 sm:px-6 text-[#A9802C] border-2 border-[#A9802C] hover:text-white hover:bg-[#A9802C] text-xs sm:text-sm font-medium transition-all duration-300 group rounded"
          >
            VIEW MORE BLOGS
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6">
          {blogItems.map((item) => (
            <BlogCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
