import * as React from "react";
import { MasonryGallery } from "@/components/custom/gallery/mansory-gallery";

// Gallery images data with relevant Unsplash images
const galleryImages = [
  // AUTOMOTIVE
  {
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=450&h=325&fit=crop",
    alt: "Luxury Sports Car - Automotive",
    category: "Automotive",
    width: 450,
    height: 325,
  },
  {
    src: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=450&h=450&fit=crop",
    alt: "Modern SUV - Automotive",
    category: "Automotive",
    width: 450,
    height: 450,
  },
  {
    src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=450&h=280&fit=crop",
    alt: "Classic Car Collection - Automotive",
    category: "Automotive",
    width: 450,
    height: 280,
  },
  {
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=450&h=540&fit=crop",
    alt: "Performance Vehicle - Automotive",
    category: "Automotive",
    width: 450,
    height: 540,
  },

  // CERAMICS & TILES
  {
    src: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=450&h=380&fit=crop",
    alt: "Luxury Ceramic Tiles - Ceramics",
    category: "Ceramics",
    width: 450,
    height: 380,
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=450&h=300&fit=crop",
    alt: "Modern Tile Patterns - Ceramics",
    category: "Ceramics",
    width: 450,
    height: 300,
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=450&h=400&fit=crop",
    alt: "Designer Ceramic Collection - Ceramics",
    category: "Ceramics",
    width: 450,
    height: 400,
  },
  {
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=450&h=300&fit=crop",
    alt: "Textured Wall Tiles - Ceramics",
    category: "Ceramics",
    width: 450,
    height: 300,
  },

  // BATHROOM FITTINGS
  {
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=450&h=280&fit=crop",
    alt: "Modern Bathroom Fixtures - Bathroom",
    category: "Bathroom",
    width: 450,
    height: 280,
  },
  {
    src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=450&h=480&fit=crop",
    alt: "Luxury Bathroom Faucet - Bathroom",
    category: "Bathroom",
    width: 450,
    height: 480,
  },
  {
    src: "https://images.unsplash.com/photo-1584622781867-6taac8d6954c?w=450&h=550&fit=crop",
    alt: "Contemporary Shower System - Bathroom",
    category: "Bathroom",
    width: 450,
    height: 550,
  },
  {
    src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=450&h=600&fit=crop",
    alt: "Designer Sink & Fittings - Bathroom",
    category: "Bathroom",
    width: 450,
    height: 600,
  },

  // INTERIOR DESIGN
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=450&h=325&fit=crop",
    alt: "Modern Living Room - Interior",
    category: "Interior",
    width: 450,
    height: 325,
  },
  {
    src: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=450&h=450&fit=crop",
    alt: "Contemporary Office Space - Interior",
    category: "Interior",
    width: 450,
    height: 450,
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=450&h=280&fit=crop",
    alt: "Luxury Dining Area - Interior",
    category: "Interior",
    width: 450,
    height: 280,
  },
  {
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=450&h=540&fit=crop",
    alt: "Modern Kitchen Design - Interior",
    category: "Interior",
    width: 450,
    height: 540,
  },

  // INDUSTRIAL (Manholes, Gully, Infrastructure)
  {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=450&h=380&fit=crop",
    alt: "Urban Infrastructure - Industrial",
    category: "Industrial",
    width: 450,
    height: 380,
  },
  {
    src: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=450&h=300&fit=crop",
    alt: "Construction Materials - Industrial",
    category: "Industrial",
    width: 450,
    height: 300,
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=450&h=400&fit=crop",
    alt: "Civil Engineering Project - Industrial",
    category: "Industrial",
    width: 450,
    height: 400,
  },
  {
    src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=450&h=300&fit=crop",
    alt: "Drainage System - Industrial",
    category: "Industrial",
    width: 450,
    height: 300,
  },

  // MORE CERAMICS & TILES
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=450&h=280&fit=crop",
    alt: "Marble Tile Showcase - Ceramics",
    category: "Ceramics",
    width: 450,
    height: 280,
  },
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=450&h=480&fit=crop",
    alt: "Hexagonal Tile Pattern - Ceramics",
    category: "Ceramics",
    width: 450,
    height: 480,
  },

  // MORE AUTOMOTIVE
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=450&h=550&fit=crop",
    alt: "Luxury Sedan - Automotive",
    category: "Automotive",
    width: 450,
    height: 550,
  },
  {
    src: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=450&h=600&fit=crop",
    alt: "Sports Car Detail - Automotive",
    category: "Automotive",
    width: 450,
    height: 600,
  },

  // MORE INTERIOR
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=450&h=325&fit=crop",
    alt: "Minimalist Bedroom - Interior",
    category: "Interior",
    width: 450,
    height: 325,
  },
  {
    src: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?w=450&h=450&fit=crop",
    alt: "Modern Lounge Area - Interior",
    category: "Interior",
    width: 450,
    height: 450,
  },

  // MORE BATHROOM
  {
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=450&h=280&fit=crop",
    alt: "Luxury Spa Bathroom - Bathroom",
    category: "Bathroom",
    width: 450,
    height: 280,
  },
  {
    src: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=450&h=540&fit=crop",
    alt: "Modern Vanity Unit - Bathroom",
    category: "Bathroom",
    width: 450,
    height: 540,
  },

  // MORE INDUSTRIAL
  {
    src: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=450&h=380&fit=crop",
    alt: "Infrastructure Development - Industrial",
    category: "Industrial",
    width: 450,
    height: 380,
  },
  {
    src: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=450&h=300&fit=crop",
    alt: "Concrete Structures - Industrial",
    category: "Industrial",
    width: 450,
    height: 300,
  },
];

export function Gallery() {
  return (
    <section id="home-gallery" className="bg-black/95 relative overflow-hidden">
      <div className="relative py-20 sm:py-28 md:py-36 lg:py-44 overflow-hidden ">
        {/* Large GALLERY background text */}
        <h1 className="font-mokoto text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[15rem] text-gray-300/15 absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 leading-none mask-b-to-80%">
          GALLERY
        </h1>
        <h2 className="font-bold text-neutral-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-kapital uppercase text-center mb-20 text-center">
          GALLERY
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-16 items-start relative z-10">
          <div className="absolute top-0 inset-x-0 w-full h-24 pointer-events-none bg-gradient-to-b from-main to-transparent z-30" />
          <div className="absolute bottom-0 inset-x-0 w-full h-24 pointer-events-none bg-gradient-to-t from-main to-transparent z-30" />

          {/* Gallery with marquee animation */}
          <MasonryGallery
            images={galleryImages}
            animated={true}
            animationSpeed="normal"
          />
        </div>
      </div>
    </section>
  );
}
