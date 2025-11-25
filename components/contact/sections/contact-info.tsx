// components/contact/sections/contact-info.tsx
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="font-poppins space-y-8">
      {/* Top Pills */}
      <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
        <a
          href="mailto:info@ashrgroup.com.ng"
          className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/20"
        >
          <Mail className="h-5 w-5 text-[#C9A961]" />
          <span className="font-medium text-white">info@ashrgroup.com.ng</span>
        </a>
        <a
          href="tel:+2349096666610"
          className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/20"
        >
          <Phone className="h-5 w-5 text-[#C9A961]" />
          <span className="font-medium text-white">+234 909 666 6610</span>
        </a>
      </div>

      {/* Business Hours */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-start backdrop-blur-xl">
        <div className="mb-6 flex flex-col items-start justify-start gap-3">
          <MapPin className="h-8 w-8 text-[#C9A961]" />
          <h3 className="font-kapital text-2xl text-white">
            ASHR Headquarters & <br /> Showroom
          </h3>
        </div>
        <div className="space-y-4 text-white/90">
          <p className="max-w-sm text-start text-sm leading-relaxed lg:text-base">
            1QMB Street, Off Oriwu Street, Next to Petrocam Petrol Station, By
            ELF Bus Stop, Lekki Phase 1 Expressway, Lagos, Nigeria
          </p>
        </div>
      </div>
    </div>
  );
}
