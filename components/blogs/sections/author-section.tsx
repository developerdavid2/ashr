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
    <section className="py-24 bg-main text-white font-poppins">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-kapital font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-neutral-200">
          Meet Our Voices
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto mb-8">
          Thought leaders shaping luxury, innovation, and sustainability across
          Africa.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {authors.map((a) => (
            <div key={a.name} className="group cursor-pointer">
              <div className="relative size-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-[#C9A961] transition-colors">
                <Image
                  src={a.avatar}
                  alt={a.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-semibold text-lg">{a.name}</h4>
              <p className="text-gray-400 text-sm">{a.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
