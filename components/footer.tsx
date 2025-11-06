"use client";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";

// ---- types
interface FooterLink {
  label: string;
  href: string;
}

interface FooterGroup {
  heading: string;
  links: FooterLink[];
}

// ---- data
const socialLinks = [
  { icon: X, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Facebook, href: "#" },
];

const footerGroups: FooterGroup[] = [
  {
    heading: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "News", href: "/news" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Subsidiaries",
    links: [
      { label: "ASHR Run & Drive", href: "/run-and-drive" },
      { label: "ASHR Designs", href: "/ashr-designs" },
      { label: "Simtex Manhole Covers", href: "/simtex" },
      { label: "High Taste Ceramics", href: "/high-taste" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-black text-white border-t border-white/10 py-32 overflow-hidden">
      {/* Large ASHR background text - moved outside container for better positioning */}
      <h1
        className="font-mokoto text-[15rem] text-gray-500/15 absolute -bottom-[11%] left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 mask-b-to-80%"
        style={{
          lineHeight: "1",
          whiteSpace: "nowrap",
        }}
      >
        ASHR GROUP
      </h1>
      {/* CTA header */}
      <div className="container mx-auto px-6 pb-24 relative">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h2 className="font-kapital-stencil text-5xl leading-tight mb-4">
              TRY ASHR TODAY
            </h2>
            <p className="text-white/70 font-poppins max-w-sm">
              Get in touch with ASHR Group or any of our businesses
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-6 md:mt-0 inline-flex items-center justify-center px-8 py-4 rounded-lg
            font-poppins border border-white/40 backdrop-blur-md bg-white/10 hover:bg-white hover:text-black
            transition"
          >
            CONTACT US
          </Link>
        </div>

        <div className="mt-12 border-t border-white/20" />
      </div>

      {/* MAIN FOOTER */}
      <div className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* company block */}
          <div className="col-span-2">
            <h3 className="font-kapital text-2xl mb-4">ASHR GROUP</h3>
            <p className="text-white/60 font-poppins max-w-sm leading-relaxed">
              Building trust, quality and innovation for modern living across
              Africa.
            </p>

            <div className="flex items-center space-x-5 mt-6">
              {socialLinks.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className="hover:opacity-70 hover:text-[#A9802C]"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* loop link groups */}
          {footerGroups.map((group, idx) => (
            <div key={idx}>
              <h4 className="font-poppins font-semibold mb-4">
                {group.heading}
              </h4>
              <ul className="space-y-2 font-poppins text-white/60">
                {group.links.map((lnk) => (
                  <li key={lnk.href}>
                    <Link className="hover:text-[#A9802C]" href={lnk.href}>
                      {lnk.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* bottom bar */}
        <div className="border-t border-white/20 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/50 font-poppins">
          <p>© 2025 ASHR Group. All rights reserved.</p>

          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link className="hover:text-white" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="hover:text-white" href="/terms">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
