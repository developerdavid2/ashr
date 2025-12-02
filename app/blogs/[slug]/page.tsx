// app/blogs/[slug]/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import FsLightbox from "fslightbox-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BlogGridCard from "@/components/blogs/sections/blog-grid-card";
import { BlogItem } from "@/types/blogs";

// Mock data (replace with Sanity later)
const blogData = {
  id: "1",
  slug: "top-5-things-to-consider-when-buying-a-car",
  title: "Top 5 Things to Consider When Buying a Luxury Car in 2025",
  excerpt:
    "From performance to resale value — make an informed decision that matches your lifestyle.",
  image:
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80",
  category: "Automotive",
  date: "2025-11-18",
  readTime: "12 min read",
  // Images for lightbox
  contentImages: [
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200",
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c??w=1200",
  ],
};

// Related blogs
const relatedBlogs: BlogItem[] = [
  {
    id: "2",
    slug: "interior-design-trends-2025",
    title: "Interior Design Trends 2025: African Luxury Rising",
    excerpt:
      "How traditional craftsmanship meets modern minimalism in Nigeria's premium homes.",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&h=800&fit=crop&q=80",
    category: "Interiors", // This matches your union type
    readTime: "10 min read",
    date: "2025-11-10",
  },
  {
    id: "3",
    slug: "frp-manhole-covers-safety",
    title: "Why FRP Manhole Covers Are Revolutionizing Urban Safety",
    excerpt:
      "The engineering breakthrough preventing accidents and theft in Nigerian cities.",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&h=800&fit=crop&q=80",
    category: "Industrial",
    readTime: "8 min read",
    date: "2025-11-05",
  },
  {
    id: "4",
    slug: "choosing-ceramic-tiles",
    title: "The Ultimate Guide to Choosing Premium Ceramic Tiles",
    excerpt:
      "From Spanish porcelain to Indian artistry — make choices that last decades.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    category: "Ceramics",
    readTime: "15 min read",
    date: "2025-10-28",
  },
];
export default function BlogPostPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [email, setEmail] = useState("");

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(!lightboxOpen);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
  };

  return (
    <div className="sm:px-6 sm:py-32">
      {/* HERO - CONTAINED IN MAX-W-7XL */}
      <section className="relative overflow-hidden">
        <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
          <div className="relative h-[50vh] overflow-hidden rounded-xl md:h-[60vh] lg:h-[60vh]">
            <Image
              src={blogData.image}
              alt={blogData.title}
              fill
              priority
              className="object-cover brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
          </div>

          <div className="absolute right-0 bottom-0 left-0 p-8 md:p-12 lg:p-16">
            <span className="mb-4 inline-block rounded-full bg-[#C9A961]/20 px-4 py-2 text-xs font-medium text-[#C9A961]">
              {blogData.category}
            </span>
            <h1 className="font-kapital mb-4 text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
              {blogData.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 md:text-base">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {blogData.readTime}
              </div>
              <div>
                {new Date(blogData.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT - PURE BLACK WITH FULL TAILWIND FLEXIBILITY */}
      <section className="font-poppins py-16 leading-relaxed">
        <div className="container mx-auto max-w-4xl px-6 lg:px-8">
          {/* Article Body - NOW WITH FULL TAILWIND CONTROL */}
          <article className="space-y-6">
            {/* Introduction */}
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              In today's fast-evolving automotive landscape, choosing the right
              luxury vehicle is more than just a purchase—it's an investment in
              lifestyle, status, and long-term satisfaction. Whether you're
              upgrading from a trusted sedan or entering the world of premium
              SUVs, these five critical factors will guide you toward a decision
              you'll never regret.
            </p>

            {/* Quote 1 */}
            <blockquote className="my-12 rounded-r-2xl border-l-[6px] border-[#C9A961] bg-gradient-to-r from-[#C9A961]/10 to-transparent py-8 pr-6 pl-8 text-xl leading-relaxed font-medium text-[#C9A961] italic shadow-lg md:text-2xl">
              "The true measure of luxury isn't just what you drive—it's how
              seamlessly that vehicle integrates into every aspect of your life,
              from daily commutes to weekend adventures."
            </blockquote>

            {/* Section 1 */}
            <h2 className="font-kapital mt-12 mb-4 text-2xl font-bold text-gray-700 md:text-4xl">
              1. Total Cost of Ownership Beyond the Sticker Price
            </h2>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              The initial price tag is just the beginning. Premium vehicles come
              with premium maintenance schedules, specialized service
              requirements, and insurance rates that reflect their value. Factor
              in fuel efficiency (especially with rising global energy costs),
              warranty coverage, and depreciation curves.
            </p>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              A well-maintained German luxury sedan might hold 65% of its value
              after three years, while some Asian counterparts retain up to 72%.
              These numbers aren't just statistics—they represent tens of
              millions of naira in real-world value when it's time to upgrade.
            </p>

            {/* Image 1 - Clickable */}
            <div
              className="my-12 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => openLightbox(0)}
            >
              <Image
                src={blogData.contentImages[0]}
                alt="Luxury car dashboard"
                width={1200}
                height={675}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>

            {/* Section 2 */}
            <h2 className="font-kapital mt-12 mb-4 text-2xl font-bold text-gray-700 md:text-4xl">
              2. Performance That Matches Your Driving Reality
            </h2>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              Horsepower figures are seductive, but real-world performance
              matters more. Consider your typical routes: Lagos traffic demands
              smooth stop-start efficiency and advanced driver assists, while
              weekend escapes to Ibadan or Abuja call for highway stability and
              overtaking confidence.
            </p>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              Test drive in conditions that mirror your daily life—don't fall
              for showroom glamour alone. The car that excels on a test track
              might frustrate you in stop-and-go traffic, while a
              comfort-focused cruiser could leave you wanting more on open
              highways.
            </p>

            {/* Section 3 */}
            <h2 className="font-kapital mt-12 mb-4 text-2xl font-bold text-gray-700 md:text-4xl">
              3. Technology Integration with African Connectivity
            </h2>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              Modern luxury cars are rolling smartphones. Ensure Apple CarPlay
              and Android Auto work seamlessly with Nigerian networks. Voice
              commands should understand local accents. Navigation must include
              real-time traffic for Lagos gridlock.
            </p>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              And crucially, over-the-air updates should function reliably on
              MTN, Airtel, or Glo—many premium brands still struggle with this
              in emerging markets. Nothing is more frustrating than owning
              cutting-edge technology that can't connect to your reality.
            </p>

            {/* Section 4 */}
            <h2 className="font-kapital mt-12 mb-4 text-2xl font-bold text-gray-700 md:text-4xl">
              4. After-Sales Support and Parts Availability
            </h2>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              The true test of luxury isn't the purchase—it's the ownership
              experience. Research authorized service centers in your city. How
              long for routine maintenance? Are genuine parts readily available
              or imported with 3-month delays?
            </p>

            {/* Quote 2 */}
            <blockquote className="my-12 rounded-r-2xl border-l-[6px] border-[#C9A961] bg-linear-to-r from-[#C9A961]/10 to-transparent py-8 pr-6 pl-8 text-xl leading-relaxed font-medium text-[#C9A961] italic shadow-lg md:text-2xl">
              "The true measure of luxury isn't just what you drive—it's how
              seamlessly that vehicle integrates into every aspect of your life,
              from daily commutes to weekend adventures."
            </blockquote>

            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              Visit service centers before you buy. Talk to existing owners.
              Read online forums. The five hours you spend researching now could
              save you hundreds of hours of frustration later.
            </p>

            {/* Image 2 - Clickable */}
            <div
              className="my-12 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => openLightbox(1)}
            >
              <Image
                src={blogData.contentImages[1]}
                alt="Premium service center"
                width={1200}
                height={675}
                className="w-full rounded-xl shadow-2xl"
              />
            </div>

            {/* Section 5 */}
            <h2 className="font-kapital mt-12 mb-4 text-2xl font-bold text-gray-700 md:text-4xl">
              5. Resale Value and Market Perception
            </h2>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              In Nigeria's status-conscious market, certain brands command
              premium resale prices regardless of condition, while others
              depreciate rapidly. Research platforms like Jiji and Cars45 for
              three-year-old examples of your shortlisted models.
            </p>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              The difference can be ₦5–15 million. Sometimes, paying more
              upfront for a Mercedes-Benz GLE saves you more at trade-in than
              buying "cheaper" alternatives. Think of it as investing in a
              blue-chip stock versus a speculative asset—both might perform, but
              one offers more predictable returns.
            </p>

            {/* Conclusion */}
            <h2 className="font-kapital mt-12 mb-4 text-2xl font-bold text-gray-700 md:text-4xl">
              The Bottom Line
            </h2>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              Remember: A luxury car should enhance your life, not complicate
              it. Choose the vehicle that aligns with your values, driving
              patterns, and long-term financial wisdom. The perfect car isn't
              the most expensive—it's the one that feels like an extension of
              your success.
            </p>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              Take your time. Do your research. Test drive extensively. And when
              you finally make that purchase, you'll drive away knowing you've
              made a decision backed by knowledge, not just emotion.
            </p>
          </article>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap gap-3">
            <span className="rounded-full bg-[#C9A961]/10 px-4 py-2 text-sm font-medium text-[#C9A961]">
              {blogData.category}
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-gray-400">
              Luxury Lifestyle
            </span>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <FsLightbox
        toggler={lightboxOpen}
        sources={blogData.contentImages}
        sourceIndex={lightboxIndex}
      />

      {/* RELATED INSIGHTS - LIGHT BACKGROUND */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-kapital mb-4 text-center text-3xl leading-tight text-gray-900 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Related <span className="font-bold text-[#A9802C]">Insights</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relatedBlogs.map((blog) => (
              <BlogGridCard key={blog.id} item={blog} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-2 rounded border-2 border-[#A9802C] px-5 py-3 text-xs font-medium text-[#A9802C] transition-all duration-300 hover:bg-[#A9802C] hover:text-white sm:px-6 sm:py-4 sm:text-sm"
            >
              EXPLORE MORE BLOGS
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* SUBSCRIBE CTA - BG-MAIN */}
      <section className="bg-main py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-kapital mb-4 text-3xl leading-tight text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Stay <span className="font-bold text-[#C9A961]">Inspired</span>
          </h2>
          <p className="font-poppins mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
            Get exclusive insights, product launches, and luxury lifestyle tips
            delivered to your inbox.
          </p>
          <div className="font-poppins mx-auto flex max-w-md gap-3">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-xl border-white/20 bg-white/10 text-white placeholder:text-gray-400"
            />
            <Button
              onClick={handleSubscribe}
              className="h-12 rounded-xl bg-[#C9A961] px-8 font-bold text-black hover:bg-[#d4b86a]"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
