// app/news/[slug]/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import FsLightbox from "fslightbox-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NewsItem } from "@/types/news";
import { NewsCard } from "@/components/news/sections/news-card"; // ← CORRECT IMPORT

// Current news with full content + lightbox images
const currentNews: NewsItem = {
  id: "1",
  slug: "ashr-group-launches-new-ceramics-division",
  title: "ASHR Group Unveils Revolutionary Spanish Ceramic Collection in Lagos",
  excerpt: "A fusion of European craftsmanship and African luxury aesthetics.",
  content: "Full article content will come from Sanity later...",
  image:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
  category: "Ceramics",
  date: "2025-11-28",
  featured: true,
  contentImages: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1600&q=80",
  ],
};

// Related news — content is optional, so no error
const relatedNews: NewsItem[] = [
  {
    id: "2",
    slug: "new-frp-factory-opens-in-owerri",
    title: "ASHR Industrial Opens State-of-the-Art FRP Factory in Owerri",
    excerpt:
      "Setting new standards in infrastructure durability across West Africa.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop&q=80",
    category: "Industrial",
    date: "2025-11-20",
  },
  {
    id: "3",
    slug: "run-and-drive-partners-with-mercedes",
    title: "ASHR Run & Drive Becomes Official Mercedes-Benz Partner in Nigeria",
    excerpt:
      "Exclusive access to the latest S-Class and GLE models now available.",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80",
    category: "Automotive",
    date: "2025-11-15",
  },
  {
    id: "4",
    slug: "african-luxury-interiors-showcase",
    title: "ASHR Interiors to Showcase at African Luxury Design Week 2025",
    excerpt:
      "Redefining opulence with handcrafted pieces inspired by the continent.",
    image:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=1200&h=800&fit=crop&q=80",
    category: "Interiors",
    date: "2025-11-10",
  },
];

export default function NewsArticlePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Use a counter to force re-render every time
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const openLightbox = (index: number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index + 1, // FsLightbox is 1-indexed
    });
  };
  return (
    <div className="sm:px-6 sm:py-32">
      {/* HERO — IDENTICAL TO BLOG */}
      <section className="relative overflow-hidden">
        <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
          <div className="relative h-[50vh] overflow-hidden rounded-xl md:h-[60vh] lg:h-[60vh]">
            <Image
              src={currentNews.image}
              alt={currentNews.title}
              fill
              priority
              className="object-cover brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
          </div>

          <div className="absolute right-0 bottom-0 left-0 p-8 md:p-12 lg:p-16">
            <span className="mb-4 inline-block rounded-full bg-[#C9A961]/20 px-4 py-2 text-xs font-medium text-[#C9A961]">
              {currentNews.category}
            </span>
            <h1 className="font-kapital mb-4 text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
              {currentNews.title}
            </h1>
            <div className="flex items-center gap-2 text-sm text-gray-300 md:text-base">
              <Calendar className="h-4 w-4" />
              {new Date(currentNews.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
        </div>
      </section>
      {/* LONG-FORM MAIN CONTENT */}
      <section className="font-poppins py-16 leading-relaxed">
        <div className="container mx-auto max-w-4xl px-6 lg:px-8">
          <article className="space-y-8">
            {/* LEAD PARAGRAPH */}
            <p className="text-lg leading-relaxed font-medium text-gray-700 md:text-xl">
              Lagos, Nigeria — In a glittering ceremony attended by Nigeria’s
              most influential architects, interior designers, and government
              dignitaries, ASHR Group officially launched its exclusive Spanish
              ceramic collection — a bold statement that redefines luxury
              surfaces in Africa.
            </p>

            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              Held at the brand-new ASHR Ceramics flagship showroom in Victoria
              Island, the event marked more than a product launch — it was a
              declaration: African luxury is no longer defined by imported
              trends, but by curated excellence that speaks to heritage,
              craftsmanship, and forward-thinking design.
            </p>

            {/* POWERFUL QUOTE */}
            <blockquote className="my-16 rounded-r-2xl border-l-8 border-[#C9A961] bg-gradient-to-r from-[#C9A961]/10 to-transparent py-10 pr-8 pl-10 text-2xl leading-relaxed font-medium text-[#C9A961] italic shadow-2xl md:text-3xl">
              “This isn’t just about tiles. This is about bringing the soul of
              Valencia and the spirit of Africa into every home that dares to be
              extraordinary.”
              <br />
              <span className="mt-4 block text-lg font-normal text-gray-600">
                — Name name, CEO, ASHR Group
              </span>
            </blockquote>

            {/* IMAGE 1 */}
            <div
              className="my-12 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => openLightbox(0)} // or (1) for second image
            >
              <Image
                src={currentNews.contentImages![0]}
                alt="ASHR Ceramics launch event"
                width={1600}
                height={900}
                className="w-full rounded-2xl shadow-2xl"
              />
              <p className="mt-3 text-center text-sm text-gray-500 italic">
                Guests experiencing the new collection at the Victoria Island
                showroom
              </p>
            </div>

            <h2 className="font-kapital mt-16 mb-6 text-3xl font-bold text-gray-800 md:text-5xl">
              A Partnership Forged in Excellence
            </h2>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              The collection is the result of an exclusive partnership with
              three of Spain’s most revered ceramic houses — including a
              120-year-old atelier in Valencia known for supplying royal palaces
              and a cutting-edge manufacturer in Castellón leading the world in
              large-format porcelain technology.
            </p>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              Every piece in the ASHR Spanish Collection has been personally
              curated by the brand’s design council — a team that includes
              award-winning Nigerian architects and European-trained ceramists —
              ensuring that technical perfection meets cultural resonance.
            </p>

            <h2 className="font-kapital mt-16 mb-6 text-3xl font-bold text-gray-800 md:text-5xl">
              Beyond Aesthetics: Engineering for African Realities
            </h2>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              While beauty is immediate, durability is eternal. Each tile has
              been rigorously tested for Nigeria’s unique climate challenges —
              from intense heat and humidity to heavy foot traffic in high-end
              residences and commercial spaces.
            </p>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              The result? Porcelain slabs that resist scratching, staining, and
              fading for decades — certified to European standards but
              engineered for African longevity.
            </p>

            {/* IMAGE 2 */}
            <div
              className="my-16 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => openLightbox(1)}
            >
              <Image
                src={currentNews.contentImages![1]}
                alt="Close-up of premium Spanish porcelain"
                width={1600}
                height={900}
                className="w-full rounded-2xl shadow-2xl"
              />
              <p className="mt-3 text-center text-sm text-gray-500 italic">
                Hand-finished stoneware with 24K gold inlay — exclusive to ASHR
              </p>
            </div>

            <h2 className="font-kapital mt-16 mb-6 text-3xl font-bold text-gray-800 md:text-5xl">
              Limited Editions & Global Firsts
            </h2>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              Among the highlights is the “Afro-Iberian Series” — a limited run
              of 200 pieces featuring hand-painted motifs inspired by Adire,
              Nsibidi, and Aso-Oke patterns, executed on Spanish porcelain using
              traditional talavera techniques.
            </p>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              Another standout is the 3.2-meter monolithic slab — the largest
              single-piece porcelain ever imported into Africa — designed for
              seamless kitchen islands and statement walls in penthouses and
              presidential suites.
            </p>

            {/* IMAGE 3 */}
            <div
              className="my-16 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => openLightbox(2)}
            >
              <Image
                src={currentNews.contentImages![2]}
                alt="Monolithic porcelain slab installation"
                width={1600}
                height={900}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>

            <h2 className="font-kapital mt-16 mb-6 text-3xl font-bold text-gray-800 md:text-5xl">
              Available Now — But Not For Long
            </h2>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              The full collection is now on display and available for
              reservation at ASHR Ceramics showrooms in Lagos (Victoria Island &
              Ikoyi), Abuja, and Port Harcourt. Select limited-edition pieces
              are already sold out on pre-order.
            </p>
            <p className="text-base leading-relaxed font-medium text-gray-700 md:text-lg">
              This is more than a launch. This is the moment African luxury
              surfaces came of age.
            </p>
          </article>

          {/* TAGS */}
          <div className="mt-16 flex flex-wrap gap-4">
            <span className="rounded-full bg-[#C9A961]/10 px-5 py-2.5 text-sm font-medium text-[#C9A961]">
              {currentNews.category}
            </span>
            <span className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-gray-400">
              Press Release
            </span>
            <span className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-gray-400">
              Product Launch
            </span>
          </div>
        </div>
      </section>
      // Replace FsLightbox
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={currentNews.contentImages || []}
        slide={lightboxController.slide}
      />
      {/* RELATED NEWS */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-kapital mb-4 text-center text-3xl leading-tight text-gray-900 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            More <span className="font-bold text-[#A9802C]">News</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relatedNews.map((news) => (
              <NewsCard key={news.id} item={news} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/news"
              className="group inline-flex items-center gap-2 rounded border-2 border-[#A9802C] px-6 py-4 text-sm font-medium text-[#A9802C] transition-all hover:bg-[#A9802C] hover:text-white"
            >
              VIEW ALL NEWS
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </section>
      {/* SUBSCRIBE */}
      <section className="bg-main py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-kapital mb-4 text-3xl leading-tight text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Stay <span className="font-bold text-[#C9A961]">Informed</span>
          </h2>
          <p className="font-poppins mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
            Be the first to know about exclusive launches, partnerships, and
            industry-defining moments.
          </p>
          <form className="mx-auto flex max-w-md gap-3">
            <Input
              type="email"
              placeholder="your@email.com"
              className="h-12 rounded-xl border-white/20 bg-white/10 text-white placeholder:text-gray-400"
            />
            <Button className="h-12 rounded-xl bg-[#C9A961] px-8 font-bold text-black hover:bg-[#d4b86a]">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
