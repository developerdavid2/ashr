// components/contact/ContactCTA.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#A9802C] to-[#8a6a22] text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-kapital text-6xl lg:text-8xl mb-8">
          Ready to Get Started?
        </h2>
        <p className="text-2xl mb-12 max-w-3xl mx-auto font-light">
          Let’s bring your vision to life — with excellence as standard.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-4 px-12 py-6 bg-black text-white rounded-xl font-bold uppercase tracking-wider hover:bg-gray-900 transition-all duration-300 shadow-2xl"
        >
          Speak With an Advisor
          <ArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </section>
  );
}
