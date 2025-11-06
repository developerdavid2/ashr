import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const newsItems = [
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
    title: "Expanding Our Automotive Portfolio",
    category: "Company",
    date: "2024-03-10",
    image: "/news/automotive.jpg",
    href: "/news/automotive-expansion",
  },
  {
    id: 3,
    title: "New Showroom Opening in Lagos",
    category: "Company",
    date: "2024-03-05",
    image: "/news/showroom.jpg",
    href: "/news/lagos-showroom",
  },
];

const blogItems = [
  {
    id: 1,
    title: "Choosing the Right Ceramic Tiles for Your Space",
    category: "Ceramics",
    date: "2024-03-12",
    image: "/news/blogs-ceramics.jpg",
    href: "/blogs/ceramic-tiles-guide",
  },
  {
    id: 2,
    title: "Interior Design Trends for 2025",
    category: "Interior",
    date: "2024-03-08",
    image: "/blogs/interior-design.jpg",
    href: "/blogs/design-trends-2025",
  },
  {
    id: 3,
    title: "Maintaining Your FRP Manhole Covers",
    category: "Industrial",
    date: "2024-03-01",
    image: "/blogs/manhole-maintenance.jpg",
    href: "/blogs/manhole-maintenance",
  },
];

function ArticleCard({ item }) {
  return (
    <Link href={item.href} className="block group/card">
      <div className="flex flex-col rounded-xl border border-gray-200 bg-gray-100/50 group-hover/card:bg-[#131313] group-hover/card:shadow-2xl group-hover/card:-translate-y-2 transition-all duration-300 h-[350px] overflow-hidden">
        {/* Image Section */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover grayscale group-hover/card:grayscale-0 group-hover/card:scale-105 transition-all duration-500 p-6"
          />
          {/* Category Badge */}
          <div className="absolute top-4 left-4 p-4">
            <span className="px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 group-hover/card:bg-[#A9802C] group-hover/card:text-white group-hover/card:border-[#A9802C] transition-all duration-300">
              {item.category}
            </span>
          </div>
          {/* Arrow Icon */}
          <div className="absolute top-4 right-4 p-3 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-[#131313]" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between p-6 flex-1">
          <div>
            <h3 className="font-semibold text-xl text-[#131313] group-hover/card:text-white mb-3 transition-colors duration-300 leading-tight line-clamp-2">
              {item.title}
            </h3>
            <p className="text-xs text-gray-500 group-hover/card:text-gray-400 transition-colors duration-300 mb-4">
              {new Date(item.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-[#131313] group-hover/card:text-white transition-colors duration-300">
            <span>Learn more</span>
            <ArrowUpRight className="w-4 h-4 group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function NewsBlogsSection() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* NEWS SECTION */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-kapital font-bold uppercase">
              News
            </h2>
            <Link
              href="/news"
              className="px-6 py-3 bg-[#131313] text-white text-sm font-medium hover:bg-[#A9802C] transition-colors duration-300"
            >
              EXPLORE MORE
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <ArticleCard key={item.id} item={item} type="news" />
            ))}
          </div>
        </section>

        {/* BLOGS SECTION */}
        <section>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-kapital font-bold uppercase">
              Blogs
            </h2>
            <Link
              href="/blogs"
              className="px-6 py-3 bg-[#131313] text-white text-sm font-medium hover:bg-[#A9802C] transition-colors duration-300"
            >
              EXPLORE MORE
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogItems.map((item) => (
              <ArticleCard key={item.id} item={item} type="blog" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
