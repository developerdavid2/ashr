"use client";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "@/components/custom/logo";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterGroup {
  heading: string;
  links: FooterLink[];
}

const socialLinks = [
  { icon: FaXTwitter, href: "#" },
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
      { label: "Blogs", href: "/blogs" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Subsidiaries",
    links: [
      { label: "ASHR Run & Drive", href: "/businesses/ashr-run-drive" },
      { label: "ASHR Designs", href: "/businesses/ashr-designs" },
      { label: "Simtex Manhole Covers", href: "/businesses/simtex-manhole" },
      { label: "High Taste Ceramics", href: "/businesses/high-taste-ceramics" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black py-20 text-white sm:py-28">
      {/* Large BG text */}

      <h1
        className="font-mokoto pointer-events-none absolute -bottom-[14%] left-1/2 z-0 container mx-auto max-w-7xl -translate-x-1/2 mask-b-to-80% text-[7rem] text-gray-500/15 select-none sm:text-[10rem] lg:text-[15rem]"
        style={{
          lineHeight: "1",
          whiteSpace: "nowrap",
        }}
      >
        ASHR GROUP
      </h1>

      {/* CTA header */}
      <div className="relative container mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-kapital-stencil mb-3 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              TRY ASHR TODAY
            </h2>
            <p className="font-poppins max-w-sm text-sm text-white/70 sm:text-base">
              Get in touch with ASHR Group or any of our businesses
            </p>
          </div>

          <Link
            href="/contact"
            className="font-poppins inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/10 px-6 py-3 backdrop-blur-md transition hover:bg-white hover:text-black sm:px-8 sm:py-4"
          >
            CONTACT US
          </Link>
        </div>

        <div className="mt-10 border-t border-white/20 sm:mt-12" />
      </div>

      {/* MAIN FOOTER */}
      <div className="container mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 md:grid-cols-4">
          {/* company block */}
          <div className="sm:col-span-2">
            <Link href="/" className="mb-3 flex items-center gap-2">
              <Logo />
              <h3 className="font-kapital-stencil text-2xl font-bold">
                ASHR GROUP
              </h3>
            </Link>
            <p className="font-poppins max-w-sm text-sm leading-relaxed text-white/60 sm:text-base">
              Building trust, quality and innovation for modern living across
              Africa.
            </p>

            <div className="mt-6 flex items-center space-x-5">
              {socialLinks.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className="hover:text-[#A9802C] hover:opacity-70"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* loop link groups */}
          {footerGroups.map((group, idx) => (
            <div key={idx}>
              <h4 className="font-poppins mb-3 text-base font-semibold">
                {group.heading}
              </h4>
              <ul className="font-poppins space-y-2 text-sm text-white/60 sm:text-base">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link className="hover:text-[#A9802C]" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* bottom bar */}
        <div className="font-poppins mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 text-xs text-white/50 sm:mt-16 sm:text-sm md:flex-row">
          <p>© 2025 ASHR Group. All rights reserved.</p>

          <div className="flex space-x-8">
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
