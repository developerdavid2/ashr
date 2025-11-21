import { BlogItem } from "@/types/blogs";

const mockBlogs: BlogItem[] = [
  {
    id: "1",
    slug: "top-5-things-to-consider-when-buying-a-car-2025",
    title: "Top 5 Things to Consider When Buying a Luxury Car in 2025",
    excerpt:
      "From performance to resale value — make an informed decision that matches your lifestyle.",
    content: "Full article coming soon...",
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
  },
  {
    id: "2",
    slug: "interior-design-trends-2025-african-luxury",
    title: "Interior Design Trends 2025: The Rise of African Luxury",
    excerpt:
      "Earth tones, handcrafted textures, and bold geometric patterns define the new era of opulence.",
    content: "...",
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
  },
  {
    id: "3",
    slug: "why-quality-frp-manhole-covers-matter-urban-safety",
    title:
      "Why Quality FRP Manhole Covers Are Essential for Urban Infrastructure Safety",
    excerpt:
      "Durability, anti-theft design, and load-bearing capacity — the unseen heroes of modern cities.",
    content: "...",
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
  },
  {
    id: "4",
    slug: "choosing-ceramic-tiles-for-african-climate",
    title:
      "Choosing the Right Ceramic Tiles for African Homes: A Complete Guide",
    excerpt:
      "Heat resistance, slip rating, and aesthetic longevity — what truly matters.",
    content: "...",
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
  },
  {
    id: "5",
    slug: "future-of-luxury-suvs-africa-2030",
    title: "The Future of Luxury SUVs in Africa: What to Expect by 2030",
    excerpt:
      "Electric powertrains, autonomous features, and African-specific engineering.",
    content: "...",
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
  },
  {
    id: "6",
    slug: "bathroom-design-mistakes-to-avoid",
    title: "7 Bathroom Design Mistakes That Can Cost You Thousands",
    excerpt:
      "Avoid these common pitfalls when renovating your luxury bathroom.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop&q=80",
    category: "Ceramics",
    date: "2025-10-22",
    readTime: "7 min read",
    author: {
      name: "Aisha Bello",
      role: "Product Innovation Lead, High Taste Ceramics",
      avatar: "https://i.pravatar.cc/400?img=45",
    },
  },
  {
    id: "7",
    slug: "maintenance-tips-luxury-vehicles-nigeria",
    title: "Essential Maintenance Tips for Luxury Vehicles in Nigeria",
    excerpt:
      "Protect your investment with expert care advice for African climates.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=800&fit=crop&q=80",
    category: "Automotive",
    date: "2025-10-18",
    readTime: "9 min read",
    author: {
      name: "Tunde Adebayo",
      role: "Director, ASHR Run & Drive",
      avatar: "https://i.pravatar.cc/400?img=12",
    },
  },
  {
    id: "8",
    slug: "industrial-frp-applications-beyond-manholes",
    title: "Beyond Manholes: Innovative FRP Applications in Construction",
    excerpt:
      "Exploring fiber-reinforced plastic solutions transforming modern infrastructure.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&h=800&fit=crop&q=80",
    category: "Industrial",
    date: "2025-10-15",
    readTime: "11 min read",
    author: {
      name: "Engr. Musa Ibrahim",
      role: "Head of Industrial Projects",
      avatar: "https://i.pravatar.cc/400?img=33",
    },
  },
  {
    id: "9",
    slug: "small-space-luxury-interior-design",
    title: "Creating Luxury in Small Spaces: Interior Design Strategies",
    excerpt:
      "Maximize elegance without compromise — expert tips for compact living.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=1200&h=800&fit=crop&q=80",
    category: "Interiors",
    date: "2025-10-12",
    readTime: "10 min read",
    author: {
      name: "Chioma Okeke",
      role: "Chief Designer, ASHR Designs",
      avatar: "https://i.pravatar.cc/400?img=47",
    },
  },
  {
    id: "10",
    slug: "porcelain-vs-ceramic-tiles-comparison",
    title: "Porcelain vs Ceramic Tiles: Which Is Right for Your Home?",
    excerpt: "A detailed comparison of durability, cost, and aesthetic appeal.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop&q=80",
    category: "Ceramics",
    date: "2025-10-08",
    readTime: "8 min read",
    author: {
      name: "Aisha Bello",
      role: "Product Innovation Lead, High Taste Ceramics",
      avatar: "https://i.pravatar.cc/400?img=45",
    },
  },
  {
    id: "11",
    slug: "electric-vehicles-charging-infrastructure-nigeria",
    title:
      "Electric Vehicles in Nigeria: The Charging Infrastructure Challenge",
    excerpt:
      "Understanding the roadblocks and solutions for EV adoption in West Africa.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&h=800&fit=crop&q=80",
    category: "Automotive",
    date: "2025-10-05",
    readTime: "13 min read",
    author: {
      name: "Tunde Adebayo",
      role: "Director, ASHR Run & Drive",
      avatar: "https://i.pravatar.cc/400?img=12",
    },
  },
  {
    id: "12",
    slug: "load-rating-standards-manhole-covers-explained",
    title: "Load Rating Standards for Manhole Covers: A Complete Guide",
    excerpt:
      "From A15 to E600 — understanding international safety classifications.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=1200&h=800&fit=crop&q=80",
    category: "Industrial",
    date: "2025-10-01",
    readTime: "12 min read",
    author: {
      name: "Engr. Musa Ibrahim",
      role: "Head of Industrial Projects",
      avatar: "https://i.pravatar.cc/400?img=33",
    },
  },
  {
    id: "13",
    slug: "kitchen-design-trends-2025-nigeria",
    title: "Kitchen Design Trends 2025: What Nigerian Homeowners Want",
    excerpt:
      "Smart storage, bold colors, and multifunctional islands dominate.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=800&fit=crop&q=80",
    category: "Interiors",
    date: "2025-09-28",
    readTime: "9 min read",
    author: {
      name: "Chioma Okeke",
      role: "Chief Designer, ASHR Designs",
      avatar: "https://i.pravatar.cc/400?img=47",
    },
  },
  {
    id: "14",
    slug: "anti-slip-tiles-safety-guide",
    title: "Anti-Slip Tiles: The Complete Safety Guide for Wet Areas",
    excerpt:
      "R-ratings, surface textures, and the science of preventing falls.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?w=1200&h=800&fit=crop&q=80",
    category: "Ceramics",
    date: "2025-09-25",
    readTime: "10 min read",
    author: {
      name: "Aisha Bello",
      role: "Product Innovation Lead, High Taste Ceramics",
      avatar: "https://i.pravatar.cc/400?img=45",
    },
  },
  {
    id: "15",
    slug: "buying-imported-cars-nigeria-guide",
    title: "The Ultimate Guide to Buying Imported Cars in Nigeria",
    excerpt: "Customs, duties, documentation — everything you need to know.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=800&fit=crop&q=80",
    category: "Automotive",
    date: "2025-09-22",
    readTime: "15 min read",
    author: {
      name: "Tunde Adebayo",
      role: "Director, ASHR Run & Drive",
      avatar: "https://i.pravatar.cc/400?img=12",
    },
  },
  {
    id: "16",
    slug: "frp-vs-cast-iron-manhole-covers",
    title: "FRP vs Cast Iron Manhole Covers: The Complete Comparison",
    excerpt: "Weight, theft-resistance, lifespan — which material wins?",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&h=800&fit=crop&q=80",
    category: "Industrial",
    date: "2025-09-18",
    readTime: "11 min read",
    author: {
      name: "Engr. Musa Ibrahim",
      role: "Head of Industrial Projects",
      avatar: "https://i.pravatar.cc/400?img=33",
    },
  },
  {
    id: "17",
    slug: "lighting-design-luxury-homes",
    title: "Lighting Design 101: Illuminating Luxury Homes",
    excerpt:
      "Layered lighting, smart controls, and creating ambiance with intention.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&h=800&fit=crop&q=80",
    category: "Interiors",
    date: "2025-09-15",
    readTime: "10 min read",
    author: {
      name: "Chioma Okeke",
      role: "Chief Designer, ASHR Designs",
      avatar: "https://i.pravatar.cc/400?img=47",
    },
  },
  {
    id: "18",
    slug: "grout-selection-ceramic-tiles",
    title: "Choosing the Right Grout for Your Ceramic Tiles",
    excerpt:
      "Color matching, waterproofing, and long-term durability considerations.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&h=800&fit=crop&q=80",
    category: "Ceramics",
    date: "2025-09-12",
    readTime: "7 min read",
    author: {
      name: "Aisha Bello",
      role: "Product Innovation Lead, High Taste Ceramics",
      avatar: "https://i.pravatar.cc/400?img=45",
    },
  },
  {
    id: "19",
    slug: "resale-value-luxury-cars-nigeria",
    title: "Maximizing Resale Value: Which Luxury Cars Hold Their Worth?",
    excerpt: "Brand reputation, mileage, and market demand analysis.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1200&h=800&fit=crop&q=80",
    category: "Automotive",
    date: "2025-09-08",
    readTime: "12 min read",
    author: {
      name: "Tunde Adebayo",
      role: "Director, ASHR Run & Drive",
      avatar: "https://i.pravatar.cc/400?img=12",
    },
  },
  {
    id: "20",
    slug: "sustainable-luxury-interiors-ocean-plastic-furniture",
    title:
      "From Ocean Plastic to Palace Furniture: The New Face of Sustainable Luxury",
    excerpt: "How ASHR Designs turns marine waste into heirloom pieces.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&h=800&fit=crop&q=80",
    category: "Interiors",
    date: "2025-09-05",
    readTime: "14 min read",
    author: {
      name: "Chioma Okeke",
      role: "Chief Designer, ASHR Designs",
      avatar: "https://i.pravatar.cc/400?img=47",
    },
  },
  {
    id: "21",
    slug: "eternal-gold-ceramics-behind-the-scenes",
    title: "Behind the Eternal Gold Collection: Craftsmanship Meets Innovation",
    excerpt:
      "A journey through the kiln with Africa's finest ceramic artisans.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop&q=80",
    category: "Ceramics",
    date: "2025-09-01",
    readTime: "15 min read",
    author: {
      name: "Aisha Bello",
      role: "Product Innovation Lead",
      avatar: "https://i.pravatar.cc/400?img=45",
    },
  },
  {
    id: "22",
    slug: "car-financing-options-nigeria",
    title: "Car Financing in Nigeria: Understanding Your Options",
    excerpt:
      "Bank loans, leasing, trade-ins — a comprehensive financial guide.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&h=800&fit=crop&q=80",
    category: "Automotive",
    date: "2025-08-28",
    readTime: "10 min read",
    author: {
      name: "Tunde Adebayo",
      role: "Director, ASHR Run & Drive",
      avatar: "https://i.pravatar.cc/400?img=12",
    },
  },
  {
    id: "23",
    slug: "urban-drainage-infrastructure-best-practices",
    title: "Modern Urban Drainage: Infrastructure Best Practices",
    excerpt: "Preventing flooding with smart design and quality materials.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop&q=80",
    category: "Industrial",
    date: "2025-08-25",
    readTime: "13 min read",
    author: {
      name: "Engr. Musa Ibrahim",
      role: "Head of Industrial Projects",
      avatar: "https://i.pravatar.cc/400?img=33",
    },
  },
  {
    id: "24",
    slug: "wardrobe-organization-luxury-homes",
    title: "Wardrobe Organization Systems for Luxury Homes",
    excerpt: "Custom solutions that maximize space and maintain elegance.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1558618666-336f4e1e8f7e?w=1200&h=800&fit=crop&q=80",
    category: "Interiors",
    date: "2025-08-22",
    readTime: "8 min read",
    author: {
      name: "Chioma Okeke",
      role: "Chief Designer, ASHR Designs",
      avatar: "https://i.pravatar.cc/400?img=47",
    },
  },
  {
    id: "25",
    slug: "large-format-tiles-installation-guide",
    title: "Installing Large Format Tiles: What You Need to Know",
    excerpt: "120x240cm tiles require precision — expert installation tips.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop&q=80",
    category: "Ceramics",
    date: "2025-08-18",
    readTime: "11 min read",
    author: {
      name: "Aisha Bello",
      role: "Product Innovation Lead, High Taste Ceramics",
      avatar: "https://i.pravatar.cc/400?img=45",
    },
  },
  {
    id: "26",
    slug: "luxury-suv-safety-features-2025",
    title: "Top Safety Features in 2025 Luxury SUVs",
    excerpt:
      "From adaptive cruise control to 360-degree cameras — technology that saves lives.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1606660269760-08e8bc3e8b38?w=1200&h=800&fit=crop&q=80",
    category: "Automotive",
    date: "2025-08-15",
    readTime: "9 min read",
    author: {
      name: "Tunde Adebayo",
      role: "Director, ASHR Run & Drive",
      avatar: "https://i.pravatar.cc/400?img=12",
    },
  },
  {
    id: "27",
    slug: "theft-proof-infrastructure-solutions",
    title: "Theft-Proof Infrastructure: How FRP Is Changing Urban Security",
    excerpt: "Zero scrap value means zero theft motivation — the new standard.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&q=80",
    category: "Industrial",
    date: "2025-08-12",
    readTime: "10 min read",
    author: {
      name: "Engr. Musa Ibrahim",
      role: "Head of Industrial Projects",
      avatar: "https://i.pravatar.cc/400?img=33",
    },
  },
  {
    id: "28",
    slug: "color-psychology-interior-design",
    title: "Color Psychology in Interior Design: Creating Emotional Spaces",
    excerpt:
      "How to use color to influence mood, productivity, and relaxation.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=1200&h=800&fit=crop&q=80",
    category: "Interiors",
    date: "2025-08-08",
    readTime: "12 min read",
    author: {
      name: "Chioma Okeke",
      role: "Chief Designer, ASHR Designs",
      avatar: "https://i.pravatar.cc/400?img=47",
    },
  },
  {
    id: "29",
    slug: "outdoor-tiles-weather-resistance",
    title: "Outdoor Tiles: Choosing Weather-Resistant Solutions for Patios",
    excerpt:
      "Freeze-thaw cycles, UV resistance, and slip safety for exterior spaces.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop&q=80",
    category: "Ceramics",
    date: "2025-08-05",
    readTime: "9 min read",
    author: {
      name: "Aisha Bello",
      role: "Product Innovation Lead, High Taste Ceramics",
      avatar: "https://i.pravatar.cc/400?img=45",
    },
  },
  {
    id: "30",
    slug: "luxury-car-insurance-nigeria-guide",
    title: "Comprehensive Guide to Luxury Car Insurance in Nigeria",
    excerpt: "Coverage types, premium factors, and getting the best deal.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=800&fit=crop&q=80",
    category: "Automotive",
    date: "2025-08-01",
    readTime: "14 min read",
    author: {
      name: "Tunde Adebayo",
      role: "Director, ASHR Run & Drive",
      avatar: "https://i.pravatar.cc/400?img=12",
    },
  },
];
export async function getAllBlogs(): Promise<BlogItem[]> {
  await new Promise((r) => setTimeout(r, 600));
  return mockBlogs;
}

export async function getFeaturedBlogs(): Promise<BlogItem[]> {
  await new Promise((r) => setTimeout(r, 400));
  return mockBlogs.filter((b) => b.featured).slice(0, 4);
}

export async function getBlogBySlug(slug: string): Promise<BlogItem | null> {
  await new Promise((r) => setTimeout(r, 300));
  return mockBlogs.find((b) => b.slug === slug) || null;
}
