// lib/blog-data.ts
import { BlogItem } from "@/types/blogs";

// Enhanced BlogItem type with additional fields
export type EnhancedBlogItem = BlogItem & {
  contentImages?: string[];
  blockquote?: {
    text: string;
    author?: string;
    authorTitle?: string;
  };
  sections?: {
    heading: string;
    content: string[];
  }[];
  tags?: string[];
  conclusion?: string;
};

const mockBlogs: EnhancedBlogItem[] = [
  {
    id: "1",
    slug: "top-5-things-to-consider-when-buying-a-car-2025",
    title: "Top 5 Things to Consider When Buying a Luxury Car in 2025",
    excerpt:
      "From performance to resale value — make an informed decision that matches your lifestyle.",
    content:
      "In today's fast-evolving automotive landscape, choosing the right luxury vehicle is more than just a purchase—it's an investment in lifestyle, status, and long-term satisfaction. Whether you're upgrading from a trusted sedan or entering the world of premium SUVs, these five critical factors will guide you toward a decision you'll never regret.",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=800&fit=crop&q=80",
    category: "Automotive",
    date: "2025-11-18",
    readTime: "8 min read",
    featured: true,
    author: {
      name: "Tunde Adebayo",
      role: "Director, ASHR Run & Drive",
      avatar: "https://i.pravatar.cc/400?img=12",
    },
    contentImages: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=80",
      "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=1600&q=80",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1600&q=80",
    ],
    blockquote: {
      text: "The true measure of luxury isn't just what you drive—it's how seamlessly that vehicle integrates into every aspect of your life, from daily commutes to weekend adventures.",
      author: "Tunde Adebayo",
      authorTitle: "Director, ASHR Run & Drive",
    },
    sections: [
      {
        heading: "1. Total Cost of Ownership Beyond the Sticker Price",
        content: [
          "The initial price tag is just the beginning. Premium vehicles come with premium maintenance schedules, specialized service requirements, and insurance rates that reflect their value. Factor in fuel efficiency (especially with rising global energy costs), warranty coverage, and depreciation curves.",
          "A well-maintained German luxury sedan might hold 65% of its value after three years, while some Asian counterparts retain up to 72%. These numbers aren't just statistics—they represent tens of millions of naira in real-world value when it's time to upgrade.",
        ],
      },
      {
        heading: "2. Performance That Matches Your Driving Reality",
        content: [
          "Horsepower figures are seductive, but real-world performance matters more. Consider your typical routes: Lagos traffic demands smooth stop-start efficiency and advanced driver assists, while weekend escapes to Ibadan or Abuja call for highway stability and overtaking confidence.",
          "Test drive in conditions that mirror your daily life—don't fall for showroom glamour alone. The car that excels on a test track might frustrate you in stop-and-go traffic, while a comfort-focused cruiser could leave you wanting more on open highways.",
        ],
      },
      {
        heading: "3. Technology Integration with African Connectivity",
        content: [
          "Modern luxury cars are rolling smartphones. Ensure Apple CarPlay and Android Auto work seamlessly with Nigerian networks. Voice commands should understand local accents. Navigation must include real-time traffic for Lagos gridlock.",
          "And crucially, over-the-air updates should function reliably on MTN, Airtel, or Glo—many premium brands still struggle with this in emerging markets. Nothing is more frustrating than owning cutting-edge technology that can't connect to your reality.",
        ],
      },
      {
        heading: "4. After-Sales Support and Parts Availability",
        content: [
          "The true test of luxury isn't the purchase—it's the ownership experience. Research authorized service centers in your city. How long for routine maintenance? Are genuine parts readily available or imported with 3-month delays?",
          "Visit service centers before you buy. Talk to existing owners. Read online forums. The five hours you spend researching now could save you hundreds of hours of frustration later.",
        ],
      },
      {
        heading: "5. Resale Value and Market Perception",
        content: [
          "In Nigeria's status-conscious market, certain brands command premium resale prices regardless of condition, while others depreciate rapidly. Research platforms like Jiji and Cars45 for three-year-old examples of your shortlisted models.",
          "The difference can be ₦5–15 million. Sometimes, paying more upfront for a Mercedes-Benz GLE saves you more at trade-in than buying 'cheaper' alternatives. Think of it as investing in a blue-chip stock versus a speculative asset—both might perform, but one offers more predictable returns.",
        ],
      },
    ],
    conclusion:
      "Remember: A luxury car should enhance your life, not complicate it. Choose the vehicle that aligns with your values, driving patterns, and long-term financial wisdom. The perfect car isn't the most expensive—it's the one that feels like an extension of your success.",
    tags: ["Automotive", "Luxury Cars", "Buying Guide", "Investment"],
  },
  {
    id: "2",
    slug: "interior-design-trends-2025-african-luxury",
    title: "Interior Design Trends 2025: The Rise of African Luxury",
    excerpt:
      "Earth tones, handcrafted textures, and bold geometric patterns define the new era of opulence.",
    content:
      "The global design world is experiencing a seismic shift. After decades of Scandinavian minimalism dominating luxury interiors, 2025 marks the year African aesthetics move from 'inspiration' to 'aspiration.' From Lagos penthouses to Nairobi villas, a new design language is being written—one that celebrates heritage without being bound by it.",
    image:
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=1200&h=800&fit=crop&q=80",
    category: "Interiors",
    date: "2025-11-15",
    readTime: "12 min read",
    featured: true,
    author: {
      name: "Chioma Okeke",
      role: "Chief Designer, ASHR Designs",
      avatar: "https://i.pravatar.cc/400?img=47",
    },
    contentImages: [
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=1600&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=1600&q=80",
    ],
    blockquote: {
      text: "We're not copying the West anymore. We're creating a design vocabulary so compelling that the world is copying us.",
      author: "Chioma Okeke",
      authorTitle: "Chief Designer, ASHR Designs",
    },
    sections: [
      {
        heading: "Earth Tones Meet Jewel Accents",
        content: [
          "Gone are the days of all-white minimalism. The 2025 palette draws from African landscapes: terracotta from Saharan sunsets, deep ochres from Savannah soil, charcoal from volcanic rock, and cream from desert sand. But here's the twist—these are punctuated with jewel-tone accents in emerald, sapphire, and ruby.",
          "Think burnt sienna walls with cobalt velvet seating. Beige limestone floors with amethyst accent chairs. The key is balance: 70% earth tones provide calm, while 30% vibrant accents create energy. This isn't maximalism or minimalism—it's 'intentionalism.'",
        ],
      },
      {
        heading: "Handcrafted Textures as Hero Elements",
        content: [
          "Mass production is out. Artisan craftsmanship is in. Clients are investing in one-of-a-kind pieces: hand-woven Cameroonian Ndop textiles for throw pillows, Nigerian Aso-Oke reupholstered dining chairs, Ghanaian Kente accent walls behind bar areas.",
          "But this isn't rustic—it's refined. These traditional techniques are being applied to contemporary silhouettes. A minimalist Italian sofa upholstered in Adire. A modern chandelier with cowrie shell detailing. A glass coffee table with hand-carved Makonde wood base.",
        ],
      },
      {
        heading: "Bold Geometric Patterns Without Overwhelm",
        content: [
          "African geometric patterns—from Zulu beadwork to Malian mud cloth—are being used with surgical precision. Instead of covering entire rooms, designers are creating 'pattern moments': a single accent wall, a statement rug, or custom artwork.",
          "The secret? Limiting to two patterns maximum per room, ensuring they share a common color story. For example, a geometric Kuba cloth pillow pattern echoed in a custom terrazzo floor design—same visual DNA, different scales, cohesive result.",
        ],
      },
      {
        heading: "Natural Materials With High-Tech Finishes",
        content: [
          "Wood, stone, clay, and metal are being treated with modern techniques. Water-repellent treatments on woven fiber wall panels. UV-resistant coatings on outdoor wooden furniture. Nano-sealed marble that resists staining.",
          "This allows natural materials to exist in high-traffic, high-function spaces without compromise. Your kids can eat ice cream on that handcrafted wooden dining table. Your guests can place wine glasses on that unpolished stone bar top. Beauty meets practicality.",
        ],
      },
    ],
    conclusion:
      "African luxury design in 2025 isn't about rejecting global trends—it's about having the confidence to set them. The world is watching. And for the first time, they're taking notes from us.",
    tags: ["Interior Design", "African Luxury", "Design Trends", "2025"],
  },
  {
    id: "3",
    slug: "why-quality-frp-manhole-covers-matter-urban-safety",
    title:
      "Why Quality FRP Manhole Covers Are Essential for Urban Infrastructure Safety",
    excerpt:
      "Durability, anti-theft design, and load-bearing capacity — the unseen heroes of modern cities.",
    content:
      "Every day, millions of Nigerians walk, drive, and cycle over infrastructure so ordinary that it's invisible—until it fails. Manhole covers might not spark Instagram posts or dinner conversations, but their failure can cause catastrophic accidents, traffic disruptions, and even fatalities. As Nigeria urbanizes at unprecedented speed, the choice between cheap cast iron and premium FRP (Fiber Reinforced Plastic) isn't just technical—it's moral.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop&q=80",
    category: "Industrial",
    date: "2025-11-10",
    readTime: "10 min read",
    author: {
      name: "Engr. Musa Ibrahim",
      role: "Head of Industrial Projects",
      avatar: "https://i.pravatar.cc/400?img=33",
    },
    contentImages: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=80",
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=1600&q=80",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80",
    ],
    blockquote: {
      text: "The measure of a society's development isn't in its tallest buildings—it's in the reliability of its most basic infrastructure. A city is only as strong as its weakest manhole cover.",
      author: "Engr. Musa Ibrahim",
      authorTitle: "Head of Industrial Projects",
    },
    sections: [
      {
        heading: "The Silent Epidemic of Manhole-Related Accidents",
        content: [
          "According to Lagos State Emergency Management Agency, an average of 47 serious accidents per year are linked to missing, broken, or displaced manhole covers. These aren't statistical abstractions—they're motorcyclists with shattered femurs, children who fell into open sewers, and cars with destroyed suspensions.",
          "The problem isn't just physical danger. Each missing cover becomes an illegal scrap metal transaction, funding informal economies while exposing citizens to risk. Cast iron covers in Lagos have an average lifespan of 18 months before theft. FRP covers? They're worthless to scrap dealers, making them theft-proof by design.",
        ],
      },
      {
        heading: "Load-Bearing Standards: Why 40 Tons Matters",
        content: [
          "International standards classify manhole covers by load capacity: Class A15 (1.5 tons - pedestrian areas), Class B125 (12.5 tons - parking), Class C250 (25 tons - residential streets), and Class D400 (40 tons - highways). Most Nigerian roads require D400, yet many use underrated covers to cut costs.",
          "Premium FRP covers from ASHR Industrial are rated for Class E600 (60 tons)—capable of supporting fully loaded articulated trucks. This isn't over-engineering; it's understanding Nigerian reality where roads designated for cars often carry goods vehicles due to route limitations.",
        ],
      },
      {
        heading: "Corrosion Resistance in Tropical Climates",
        content: [
          "Lagos humidity averages 85%. Combined with saltwater proximity, sewage gases, and seasonal flooding, cast iron covers corrode within 5-7 years, requiring replacement. Maintenance costs over 10 years exceed the initial 'savings' from buying cheaper materials.",
          "FRP is chemically inert. It doesn't rust, corrode, or degrade from exposure to acids, bases, or saltwater. A properly installed FRP cover has a functional lifespan of 30+ years. The math is simple: three cast iron replacements over 21 years cost more than one FRP installation.",
        ],
      },
      {
        heading: "Locking Mechanisms and Anti-Displacement Design",
        content: [
          "Advanced FRP covers feature integrated locking systems that require specialized tools to open—preventing unauthorized access while remaining serviceable for maintenance crews. The cover and frame are engineered as a unified system, eliminating the 'rattle and shift' common with loose-fitting cast iron designs.",
          "This matters during floods. Traditional covers lift and float away, creating hazards and exposing infrastructure. FRP covers with proper locking remain in place even under water pressure, protecting both citizens and underground utilities.",
        ],
      },
    ],
    conclusion:
      "Every manhole cover represents a choice: invest in quality once, or pay for poor quality repeatedly—in money, in accidents, in lost public trust. Nigeria's urbanization is inevitable. The question is whether our infrastructure will keep pace with our ambitions.",
    tags: ["Infrastructure", "FRP", "Urban Safety", "Engineering"],
  },
  {
    id: "4",
    slug: "choosing-ceramic-tiles-for-african-climate",
    title:
      "Choosing the Right Ceramic Tiles for African Homes: A Complete Guide",
    excerpt:
      "Heat resistance, slip rating, and aesthetic longevity — what truly matters.",
    content:
      "Walk into any Lagos tile showroom and you'll be overwhelmed: Italian porcelain, Spanish ceramics, Indian stone, Chinese mosaics—all promising 'luxury' and 'durability.' But behind the sales pitch, technical specifications determine whether your beautiful new floor will look showroom-fresh in five years or become a maintenance nightmare in five months. Here's how to choose tiles that thrive in African climates.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=80",
    category: "Ceramics",
    date: "2025-11-05",
    readTime: "9 min read",
    featured: true,
    author: {
      name: "Aisha Bello",
      role: "Product Innovation Lead, High Taste Ceramics",
      avatar: "https://i.pravatar.cc/400?img=45",
    },
    contentImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600&q=80",
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1600&q=80",
    ],
    blockquote: {
      text: "Beautiful tiles that crack, stain, or fade aren't beautiful—they're expensive mistakes. Technical performance is the foundation of aesthetic longevity.",
      author: "Aisha Bello",
      authorTitle: "Product Innovation Lead",
    },
    sections: [
      {
        heading: "Understanding PEI Rating for Traffic Levels",
        content: [
          "The Porcelain Enamel Institute (PEI) rates ceramic hardness from 1-5. PEI 1-2 tiles are for walls only. PEI 3 works for low-traffic residential areas like bedrooms. PEI 4 handles medium-high traffic including kitchens and hallways. PEI 5 is commercial-grade for malls and airports.",
          "Common mistake: using PEI 3 tiles in living rooms or dining areas because they're cheaper. Within two years, surface glaze wears away, exposing dull substrate beneath. Always choose PEI 4 minimum for any floor application in Nigerian homes where extended families and frequent guests mean higher-than-expected traffic.",
        ],
      },
      {
        heading: "Water Absorption Rate Matters More Than You Think",
        content: [
          "Tiles are classified by water absorption: Impervious (under 0.5%), Vitreous (0.5-3%), Semi-vitreous (3-7%), and Non-vitreous (above 7%). In humid climates, water absorption directly affects mold growth, staining, and structural integrity.",
          "For bathrooms, kitchens, and outdoor areas, use only vitreous or impervious tiles. Higher absorption tiles in wet areas become breeding grounds for mildew and eventually crack from freeze-thaw cycles (yes, Nigerian highlands experience near-freezing nights). The ₦2,000 per square meter you save on semi-vitreous tiles will cost ₦15,000 per square meter in replacement within 3-5 years.",
        ],
      },
      {
        heading: "Slip Resistance: The R-Rating System",
        content: [
          "R-ratings measure slip resistance: R9 (standard residential), R10 (wet areas like bathrooms), R11 (commercial wet areas), R12-R13 (industrial). Nigerian regulations are lax, so manufacturers sell R9 tiles for bathrooms—a recipe for accidents.",
          "Minimum recommendations: R10 for all bathrooms and pool decks, R11 for outdoor steps and commercial kitchens. Don't rely on texture alone—many 'textured' tiles still have R9 ratings. Demand certification. Your family's safety is worth the specification sheet review.",
        ],
      },
      {
        heading: "UV Resistance for Outdoor Applications",
        content: [
          "Nigerian sun is unforgiving. UV radiation degrades inferior tile glazes, causing color fading and surface chalking. Outdoor tiles must have UV-stable glazes tested to ISO 10545-16 standards.",
          "This is why that 'imported Italian marble-look' tile on your patio looks washed out after one rainy season. True outdoor-rated tiles use ceramic pigments that penetrate below the surface rather than sitting on top. They cost 30% more but maintain color for decades, not months.",
        ],
      },
    ],
    conclusion:
      "Tiles are a 20-year investment. Choose based on science, not showroom aesthetics. The tile that looks slightly less perfect but has superior technical specifications will outlast and outperform the 'stunning' tile that lacks proper ratings. Beauty that endures is beauty built on engineering.",
    tags: ["Ceramics", "Home Improvement", "Buying Guide", "Architecture"],
  },
  {
    id: "5",
    slug: "future-of-luxury-suvs-africa-2030",
    title: "The Future of Luxury SUVs in Africa: What to Expect by 2030",
    excerpt:
      "Electric powertrains, autonomous features, and African-specific engineering.",
    content:
      "The luxury SUV market in Africa is on the cusp of its most dramatic transformation since air conditioning became standard. By 2030, the vehicles dominating Banana Island driveways and Karen estates will bear little resemblance to today's models—not just in powertrains, but in how they're engineered, sold, and serviced. Here's what the next five years hold.",
    image:
      "https://images.unsplash.com/photo-1606660269760-08e8bc3e8b38?w=1200&h=800&fit=crop&q=80",
    category: "Automotive",
    date: "2025-10-28",
    readTime: "11 min read",
    author: {
      name: "Tunde Adebayo",
      role: "Director, ASHR Run & Drive",
      avatar: "https://i.pravatar.cc/400?img=12",
    },
    contentImages: [
      "https://images.unsplash.com/photo-1606660269760-08e8bc3e8b38?w=1600&q=80",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1600&q=80",
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1600&q=80",
    ],
    blockquote: {
      text: "The African luxury car buyer of 2030 won't tolerate vehicles designed for Europe and 'adapted' for here. They'll demand vehicles engineered from the ground up for African roads, African climates, and African infrastructure.",
      author: "Tunde Adebayo",
      authorTitle: "Director, ASHR Run & Drive",
    },
    sections: [
      {
        heading: "Electric Becomes Viable (Finally)",
        content: [
          "By 2030, expect 35-40% of luxury SUVs sold in Nigeria to be electric. Not because of environmental consciousness (though that helps), but because TCO (Total Cost of Ownership) will favor EVs. With charging infrastructure reaching critical mass in Lagos, Abuja, and Port Harcourt, range anxiety will become a relic.",
          "Key enabler: Solar-integrated charging. Premium residential estates will offer solar carports as standard, providing free daily charging. For a ₦45 million luxury EV with 600km range, you'll spend approximately ₦300,000 annually on electricity versus ₦4.8 million on premium petrol. The math is undeniable.",
        ],
      },
      {
        heading: "Level 3 Autonomy for Highway Cruising",
        content: [
          "Full autonomy remains distant, but Level 3 (hands-off highway driving) will be standard in premium SUVs by 2028-2030. This transforms the Lagos-Ibadan expressway from a stressful drive to productive work time or relaxation.",
          "African-specific feature: pothole detection and avoidance. Cameras and LiDAR systems will map road conditions in real-time, automatically steering around damage or alerting drivers. This isn't available in European models because European roads don't need it—evidence that African engineering requirements are creating unique innovations.",
        ],
      },
      {
        heading: "Subscription-Based Ownership Models",
        content: [
          "By 2030, 20-25% of luxury SUV 'buyers' will actually be subscribers. Pay ₦2.5-4.5 million monthly for a premium SUV that includes insurance, maintenance, roadside assistance, and the ability to swap models seasonally or for special occasions.",
          "This appeals to Nigeria's growing professional class who want flexibility without depreciation concerns. Drive an EQS SUV during the week, swap for a G-Wagon for weekend trips. All under one subscription. Traditional ownership for those who want legacy assets; subscription for those who want experiences.",
        ],
      },
      {
        heading: "Biometric Security and Personalization",
        content: [
          "Passwords are dead. Your luxury SUV will recognize you via facial recognition, fingerprint, or even gait analysis as you approach. Once inside, the vehicle adjusts seating, climate, entertainment, and even suspension settings to your biometric profile.",
          "Family sharing becomes seamless: the vehicle knows whether it's you, your spouse, or your driver behind the wheel, adjusting accordingly. No more fumbling with 'Driver 1' and 'Driver 2' memory settings. The vehicle knows. And in security-conscious African markets, this biometric layer adds theft deterrence beyond traditional immobilizers.",
        ],
      },
    ],
    conclusion:
      "The African luxury SUV market of 2030 will be defined not by what Western manufacturers offer us, but by what we demand they engineer for us. The shift is already beginning—luxury brands are opening African R&D centers not as PR gestures, but because they realize African requirements are creating innovations that enhance global product lines.",
    tags: ["Automotive", "Future Tech", "Electric Vehicles", "Luxury SUVs"],
  },
];

// Utility functions
export async function getAllBlogs(): Promise<EnhancedBlogItem[]> {
  await new Promise((r) => setTimeout(r, 600));
  return mockBlogs;
}

export async function getFeaturedBlogs(): Promise<EnhancedBlogItem[]> {
  await new Promise((r) => setTimeout(r, 400));
  return mockBlogs.filter((b) => b.featured).slice(0, 4);
}

export async function getBlogBySlug(
  slug: string,
): Promise<EnhancedBlogItem | null> {
  await new Promise((r) => setTimeout(r, 300));
  return mockBlogs.find((b) => b.slug === slug) || null;
}

export async function getRelatedBlogs(
  currentSlug: string,
  category: string,
  limit: number = 3,
): Promise<EnhancedBlogItem[]> {
  // Get blogs from same category, excluding current blog
  const related = mockBlogs
    .filter((item) => item.slug !== currentSlug && item.category === category)
    .slice(0, limit);

  // If not enough related blogs in same category, fill with recent blogs
  if (related.length < limit) {
    const additional = mockBlogs
      .filter((item) => item.slug !== currentSlug && !related.includes(item))
      .slice(0, limit - related.length);
    return [...related, ...additional];
  }

  return related;
}
