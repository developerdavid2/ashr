import { NewsItem } from "@/types/news";

const mockNews: NewsItem[] = [
  {
    id: "1",
    slug: "ashr-run-and-drive-adds-new-premium-models-2025",
    title: "ASHR Run & Drive Unveils 8 New Premium Models for 2025",
    excerpt:
      "Luxury meets performance: Introducing the most advanced lineup yet, designed for African roads.",
    content: "Full article...",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=800&fit=crop&q=80",
    category: "Automotive",
    date: "2025-11-18",
    featured: true,
  },
  {
    id: "2",
    slug: "high-taste-ceramics-eternal-gold-launch",
    title: "High Taste Ceramics Launches 'Eternal Gold' Luxury Collection",
    excerpt:
      "Handcrafted tiles blending African heritage with modern opulence.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=80",
    category: "Ceramics",
    date: "2025-11-15",
  },
  {
    id: "3",
    slug: "ashr-designs-flagship-showroom-victoria-island",
    title: "ASHR Designs Opens Flagship Showroom in Victoria Island",
    excerpt: "A new era of luxury interior design now open to the public.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b2ccb7355?w=1200&h=800&fit=crop&q=80",
    category: "Interiors",
    date: "2025-11-12",
  },
  {
    id: "4",
    slug: "industrial-division-sustainable-manufacturing-contract",
    title: "Industrial Division Secures $45M Sustainable Manufacturing Deal",
    excerpt:
      "Partnering with West African governments for green industrial growth.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=1200&h=800&fit=crop&q=80",
    category: "Industrial",
    date: "2025-11-08",
  },
  {
    id: "5",
    slug: "ashr-group-2025-sustainability-report",
    title: "ASHR Group Releases 2025 Sustainability & Impact Report",
    excerpt:
      "Over 8,000 lives impacted. Zero-waste facilities now operational in 3 countries.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=800&fit=crop&q=80",
    category: "All",
    date: "2025-11-01",
  },
  {
    id: "6",
    slug: "ashr-run-drive-electric-vehicle-partnership",
    title: "ASHR Run & Drive Partners with Global EV Leader",
    excerpt:
      "Electric revolution begins: First ASHR electric SUVs arriving Q1 2026.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&h=800&fit=crop&q=80",
    category: "Automotive",
    date: "2025-10-28",
  },
  {
    id: "7",
    slug: "high-taste-ceramics-innovation-award-2025",
    title: "High Taste Ceramics Wins African Design Innovation Award 2025",
    excerpt:
      "Recognized for pioneering sustainable ceramic manufacturing techniques.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop&q=80",
    category: "Ceramics",
    date: "2025-10-25",
  },
  {
    id: "8",
    slug: "ashr-designs-dubai-exhibition-2025",
    title: "ASHR Designs Showcases at Dubai Design Week 2025",
    excerpt: "African luxury interiors take center stage on global platform.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=1200&h=800&fit=crop&q=80",
    category: "Interiors",
    date: "2025-10-22",
  },
  {
    id: "9",
    slug: "industrial-division-new-factory-abuja",
    title: "New State-of-the-Art Factory Opens in Abuja",
    excerpt:
      "Creating 2,000+ jobs and powering industrial growth in Northern Nigeria.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop&q=80",
    category: "Industrial",
    date: "2025-10-18",
  },
  {
    id: "10",
    slug: "ashr-group-ceo-forbes-africa-30-under-30",
    title: "ASHR Group CEO Named to Forbes Africa 30 Under 30",
    excerpt:
      "Leadership in innovation and sustainable business earns global recognition.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop&q=80",
    category: "All",
    date: "2025-10-15",
  },
  {
    id: "11",
    slug: "ashr-run-drive-safety-campaign-2025",
    title: "ASHR Run & Drive Launches Nationwide Road Safety Campaign",
    excerpt:
      "Partnering with FRSC to reduce accidents by 40% in target regions.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=800&fit=crop&q=80",
    category: "Automotive",
    date: "2025-10-10",
  },
  {
    id: "12",
    slug: "high-taste-ceramics-eco-friendly-production",
    title: "High Taste Ceramics Achieves 100% Eco-Friendly Production",
    excerpt: "Zero chemical waste. Full solar-powered manufacturing now live.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?w=1200&h=800&fit=crop&q=80",
    category: "Ceramics",
    date: "2025-10-05",
  },
  {
    id: "13",
    slug: "ashr-designs-collaborates-with-top-african-artists",
    title: "ASHR Designs Collaborates with 12 African Artists",
    excerpt: "Limited-edition furniture collection launches December 2025.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=1200&h=800&fit=crop&q=80",
    category: "Interiors",
    date: "2025-09-30",
  },
  {
    id: "14",
    slug: "industrial-division-expands-to-ghana",
    title: "Industrial Division Expands Operations to Ghana",
    excerpt: "New facility in Accra to serve growing West African demand.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&h=800&fit=crop&q=80",
    category: "Industrial",
    date: "2025-09-25",
  },
  {
    id: "15",
    slug: "ashr-group-community-scholarship-program",
    title: "ASHR Group Awards 500 New Scholarships in 2025",
    excerpt: "Empowering the next generation of African innovators.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=800&fit=crop&q=80",
    category: "All",
    date: "2025-09-20",
  },
  {
    id: "16",
    slug: "ashr-run-drive-wins-best-customer-service-award",
    title: "ASHR Run & Drive Wins 'Best Customer Service' Award 2025",
    excerpt: "99.2% customer satisfaction rating sets new industry benchmark.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=800&fit=crop&q=80",
    category: "Automotive",
    date: "2025-09-15",
  },
  {
    id: "17",
    slug: "high-taste-ceramics-export-to-europe",
    title: "High Taste Ceramics Begins Export to Europe",
    excerpt: "First shipment of luxury tiles arrives in Paris and Milan.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&h=800&fit=crop&q=80",
    category: "Ceramics",
    date: "2025-09-10",
  },
  {
    id: "18",
    slug: "ashr-designs-wins-international-design-award",
    title: "ASHR Designs Wins Red Dot Design Award 2025",
    excerpt: "African excellence recognized on global stage.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&h=800&fit=crop&q=80",
    category: "Interiors",
    date: "2025-09-05",
  },
  {
    id: "19",
    slug: "industrial-division-carbon-neutral-certification",
    title: "Industrial Division Achieves Carbon Neutral Status",
    excerpt: "First in West Africa to reach full carbon neutrality.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&h=800&fit=crop&q=80",
    category: "Industrial",
    date: "2025-08-30",
  },
  {
    id: "20",
    slug: "ashr-group-10-year-anniversary",
    title: "ASHR Group Celebrates 10 Years of Innovation & Trust",
    excerpt: "From vision to reality: A decade of building Africa's future.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=800&fit=crop&q=80",
    category: "All",
    date: "2025-08-25",
  },
  {
    id: "21",
    slug: "ashr-run-drive-launches-mobile-service-vans",
    title: "ASHR Run & Drive Launches 24/7 Mobile Service Fleet",
    excerpt: "Premium service now comes to you — anywhere in Lagos & Abuja.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&h=800&fit=crop&q=80",
    category: "Automotive",
    date: "2025-08-20",
  },
  {
    id: "22",
    slug: "high-taste-ceramics-opens-lagos-showroom",
    title: "High Taste Ceramics Opens Flagship Showroom in Lekki",
    excerpt: "Experience luxury tiles like never before.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop&q=80",
    category: "Ceramics",
    date: "2025-08-15",
  },
  {
    id: "23",
    slug: "ashr-designs-partners-with-marriott-hotels",
    title: "ASHR Designs Partners with Marriott for Luxury Hotel Projects",
    excerpt:
      "Bringing African elegance to 5-star hospitality across the continent.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop&q=80",
    category: "Interiors",
    date: "2025-08-10",
  },
  {
    id: "24",
    slug: "industrial-division-ai-automation",
    title: "Industrial Division Implements AI-Powered Automation",
    excerpt: "Efficiency increased by 300%. Production costs reduced by 42%.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop&q=80",
    category: "Industrial",
    date: "2025-08-05",
  },
  {
    id: "25",
    slug: "ashr-group-women-in-leadership-initiative",
    title: "ASHR Group Launches Women in Leadership Program",
    excerpt: "50 women selected for executive training across all divisions.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop&q=80",
    category: "All",
    date: "2025-07-30",
  },
  {
    id: "26",
    slug: "ashr-run-drive-racing-team-debut",
    title: "ASHR Run & Drive Racing Team Makes Championship Debut",
    excerpt: "First African team to compete in international rally series.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1200&h=800&fit=crop&q=80",
    category: "Automotive",
    date: "2025-07-25",
  },
  {
    id: "27",
    slug: "high-taste-ceramics-recycling-program",
    title: "High Taste Ceramics Launches Tile Recycling Initiative",
    excerpt: "Old tiles transformed into beautiful new designs.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop&q=80",
    category: "Ceramics",
    date: "2025-07-20",
  },
  {
    id: "28",
    slug: "ashr-designs-sustainable-materials",
    title: "ASHR Designs Introduces 100% Sustainable Material Line",
    excerpt: "Furniture made from recycled ocean plastic and reclaimed wood.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&h=800&fit=crop&q=80",
    category: "Interiors",
    date: "2025-07-15",
  },
  {
    id: "29",
    slug: "industrial-division-iso-certification",
    title: "Industrial Division Achieves ISO 9001 & 14001 Certifications",
    excerpt:
      "Global standards met. Quality and environmental excellence confirmed.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&q=80",
    category: "Industrial",
    date: "2025-07-10",
  },
  {
    id: "30",
    slug: "ashr-group-year-end-celebration-2025",
    title: "ASHR Group Hosts Year-End Celebration for Staff & Partners",
    excerpt: "Honoring excellence, growth, and the journey ahead.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=800&fit=crop&q=80",
    category: "All",
    date: "2025-07-01",
  },
];

export async function getAllNews(): Promise<NewsItem[]> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return mockNews;
}

export async function getNewsBySlug(slug: string): Promise<NewsItem | null> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return mockNews.find((item) => item.slug === slug) || null;
}

export async function getFeaturedNews(): Promise<NewsItem | null> {
  return mockNews.find((item) => item.featured) || mockNews[0];
}
