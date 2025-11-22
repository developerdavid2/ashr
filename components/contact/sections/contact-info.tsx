// components/contact/ContactInfo.tsx
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="text-center lg:text-left">
            <div className="w-20 h-20 bg-gradient-to-br from-[#A9802C] to-[#C9A961] rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-kapital text-3xl mb-4">Visit Our Showroom</h3>
            <p className="text-gray-600 leading-relaxed">
              1QMB Street, Off Oriwu Street,
              <br />
              Next to Petrocam Petrol Station,
              <br />
              By ELF Bus Stop, Lekki Phase 1 Expressway,
              <br />
              Lagos, Nigeria
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#A9802C] to-[#C9A961] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-kapital text-3xl mb-4">Call Us</h3>
            <a
              href="tel:+2349096666610"
              className="text-2xl font-bold text-[#A9802C]"
            >
              +234 909 666 6610
            </a>
          </div>

          <div className="text-center lg:text-right">
            <div className="w-20 h-20 bg-gradient-to-br from-[#A9802C] to-[#C9A961] rounded-2xl flex items-center justify-center mx-auto lg:mx-auto mb-6">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-kapital text-3xl mb-4">Email Us</h3>
            <a
              href="mailto:info@ashrgroup.com.ng"
              className="text-xl text-[#A9802C]"
            >
              info@ashrgroup.com.ng
            </a>
            <p className="mt-4 text-sm text-gray-500 flex items-center justify-center lg:justify-end gap-2">
              <Clock className="w-4 h-4" /> Mon–Sat: 8AM–6PM
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Our showroom is open — visit us to explore interiors, ceramics,
            sanitary wares, and lifestyle solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
