// components/blogs/AuthorSection.tsx
import Image from "next/image";

const authors = [
  {
    name: "Chioma Okeke",
    role: "Chief Designer, ASHR Designs",
    avatar: "https://i.pravatar.cc/400?img=47",
  },
  {
    name: "Tunde Adebayo",
    role: "Director, ASHR Run & Drive",
    avatar: "https://i.pravatar.cc/400?img=12",
  },
  {
    name: "Aisha Bello",
    role: "Product Innovation Lead",
    avatar: "https://i.pravatar.cc/400?img=45",
  },
  {
    name: "Engr. Musa Ibrahim",
    role: "Head of Industrial Projects",
    avatar: "https://i.pravatar.cc/400?img=33",
  },
];

export default function AuthorSection() {
  return (
    <section className="bg-main font-poppins py-16 text-white md:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-kapital text-3xl leading-tight font-bold text-neutral-200 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Meet Our Voices
        </h2>
        <p className="font-poppins mx-auto mt-4 mb-8 max-w-5xl text-center text-sm leading-relaxed font-light text-gray-200 sm:text-base md:text-lg lg:text-xl">
          Thought leaders shaping luxury, innovation, and sustainability across
          Africa.
        </p>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {authors.map((a) => (
            <div key={a.name} className="group cursor-pointer">
              <div className="relative mx-auto mb-6 size-20 overflow-hidden rounded-full border-4 border-white/10 transition-colors group-hover:border-[#C9A961] lg:size-32">
                <Image
                  src={a.avatar}
                  alt={a.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-sm font-semibold md:text-lg">{a.name}</h4>
              <p className="text-xs text-gray-400 md:text-sm">{a.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
