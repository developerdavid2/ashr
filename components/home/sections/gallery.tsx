import { MasonryGallery } from "@/components/custom/gallery/mansory-gallery";

// Gallery images data with relevant Unsplash images
const galleryImages = [
  // AUTOMOTIVE
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199331/ashr-run-drive-7_e25w8u.jpg",
    alt: "Luxury Sports Car - Automotive",
    category: "Automotive",
    width: 450,
    height: 325,
  },
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199331/ashr-run-drive-8_eyjoi8.jpg",
    alt: "Modern SUV - Automotive",
    category: "Automotive",
    width: 450,
    height: 450,
  },
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199331/ashr-run-drive-9_mujac9.jpg",
    alt: "Classic Car Collection - Automotive",
    category: "Automotive",
    width: 450,
    height: 380,
  },
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199330/ashr-run-drive-3_sx2fb3.jpg",
    alt: "Performance Vehicle - Automotive",
    category: "Automotive",
    width: 450,
    height: 540,
  },

  // CERAMICS & TILES
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765206788/high-taste-11_b9t2dt.jpg",
    alt: "Luxury Ceramic Tiles - Ceramics",
    category: "Ceramics",
    width: 450,
    height: 380,
  },
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765206787/high-taste-10_kq0gqn.jpg",
    alt: "Modern Tile Patterns - Ceramics",
    category: "Ceramics",
    width: 450,
    height: 300,
  },
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765206786/high-taste-9_rdjvfy.jpg",
    alt: "Designer Ceramic Collection - Ceramics",
    category: "Ceramics",
    width: 450,
    height: 400,
  },
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765206783/high-taste-8_afyeuv.jpg",
    alt: "Textured Wall Tiles - Ceramics",
    category: "Ceramics",
    width: 450,
    height: 300,
  },

  // BATHROOM FITTINGS
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765206778/high-taste-5_h4ycfw.jpg",
    alt: "Modern Bathroom Fixtures - Bathroom",
    category: "Bathroom",
    width: 450,
    height: 280,
  },
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765206775/high-taste-12_d3h4y2.jpg",
    alt: "Luxury Bathroom Faucet - Bathroom",
    category: "Bathroom",
    width: 450,
    height: 480,
  },
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765206777/high-taste-1_wtgci1.jpg",
    alt: "Contemporary Shower System - Bathroom",
    category: "Bathroom",
    width: 450,
    height: 550,
  },
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765206777/high-taste-3_kzw0lu.jpg",
    alt: "Designer Sink & Fittings - Bathroom",
    category: "Bathroom",
    width: 450,
    height: 600,
  },

  // INTERIOR DESIGN
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765214052/designs-2_wosj8w.jpg",
    alt: "Modern Living Room - Interior",
    category: "Interior",
    width: 450,
    height: 325,
  },
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765214051/designs-1_wabhel.jpg",
    alt: "Contemporary Office Space - Interior",
    category: "Interior",
    width: 450,
    height: 450,
  },
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765214049/designs-6_v97gup.jpg",
    alt: "Luxury Dining Area - Interior",
    category: "Interior",
    width: 450,
    height: 280,
  },
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765214047/designs-5_biry56.jpg",
    alt: "Modern Kitchen Design - Interior",
    category: "Interior",
    width: 450,
    height: 540,
  },

  // INDUSTRIAL (Manholes, Gully, Infrastructure)
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765206407/simtex-13_pynmmx.jpg",
    alt: "Urban Infrastructure - Industrial",
    category: "Industrial",
    width: 450,
    height: 380,
  },
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765206316/simtex-14_xglzjg.png",
    alt: "Construction Materials - Industrial",
    category: "Industrial",
    width: 450,
    height: 300,
  },
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765201687/simtex-3_xp3h1v.jpg",
    alt: "Civil Engineering Project - Industrial",
    category: "Industrial",
    width: 450,
    height: 400,
  },
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765201685/simtex-12_lsvwxz.jpg",
    alt: "Drainage System - Industrial",
    category: "Industrial",
    width: 450,
    height: 300,
  },

  // MORE CERAMICS & TILES
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765206780/high-taste-7_j1gcxk.jpg",
    alt: "Marble Tile Showcase - Ceramics",
    category: "Ceramics",
    width: 450,
    height: 280,
  },
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765206777/high-taste-4_cbeuox.jpg",
    alt: "Hexagonal Tile Pattern - Ceramics",
    category: "Ceramics",
    width: 450,
    height: 480,
  },

  // MORE AUTOMOTIVE
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199330/ashr-run-drive-6_h0kxdc.jpg",
    alt: "Luxury Sedan - Automotive",
    category: "Automotive",
    width: 450,
    height: 550,
  },
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765199329/ashr-run-drive-10_a5aj0d.jpg",
    alt: "Sports Car Detail - Automotive",
    category: "Automotive",
    width: 450,
    height: 600,
  },

  // MORE INTERIOR
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765214046/designs-4_nnrxeh.jpg",
    alt: "Minimalist Bedroom - Interior",
    category: "Interior",
    width: 450,
    height: 325,
  },
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765214044/designs-9_tqmrig.jpg",
    alt: "Modern Lounge Area - Interior",
    category: "Interior",
    width: 450,
    height: 450,
  },

  // MORE INDUSTRIAL
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765201683/simtex-11_vqtgoh.jpg",
    alt: "Infrastructure Development - Industrial",
    category: "Industrial",
    width: 450,
    height: 380,
  },
  {
    src: "https://res.cloudinary.com/damkwypfe/image/upload/v1765201681/simtex-4_osbzqy.png",
    alt: "Concrete Structures - Industrial",
    category: "Industrial",
    width: 450,
    height: 300,
  },
];

export function Gallery() {
  return (
    <section id="home-gallery" className="relative overflow-hidden bg-black/95">
      <div className="relative overflow-hidden py-20 sm:py-28 md:py-36 lg:py-44">
        {/* Large GALLERY background text */}
        <h1 className="font-mokoto pointer-events-none absolute top-10 left-1/2 z-0 -translate-x-1/2 text-[5rem] leading-none text-gray-300/15 select-none sm:text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[15rem]">
          GALLERY
        </h1>
        <h2 className="font-kapital mb-20 text-center text-3xl font-bold text-neutral-200 uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          GALLERY
        </h2>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start gap-16">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-24 w-full bg-gradient-to-b from-black/95 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-24 w-full bg-gradient-to-t from-black/95 to-transparent" />

          {/* Gallery with marquee animation - ADDED pauseOnHover explicitly */}
          <MasonryGallery
            images={galleryImages}
            animated={true}
            pauseOnHover={true}
          />
        </div>
      </div>
    </section>
  );
}
