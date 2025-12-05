// app/privacy-policy/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – ASHR Group",
  description:
    "How ASHR Group collects, uses, and protects your personal information. We respect your privacy and never sell your data.",
};

// Reusable clickable link with ASHR gold style
const ClickableLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="font-medium text-[#C9A961] underline underline-offset-4 transition-all duration-300 hover:text-[#d4b86a] hover:no-underline"
  >
    {children}
  </a>
);

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* HERO — ASHR STYLE */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-24 md:py-32 lg:py-40">
        {/* Massive Background Text */}
        <h1
          className="font-mokoto pointer-events-none absolute top-[20%] left-1/2 -translate-x-1/2 text-[10rem] whitespace-nowrap text-gray-400/10 select-none sm:text-[14rem] md:text-[18rem] lg:text-[22rem]"
          style={{
            lineHeight: 1,
            maskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 80%)",
          }}
        >
          PRIVACY
        </h1>

        <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="space-y-6 text-center">
            {/* Gold Badge */}
            <span className="inline-block rounded-full border border-[#C9A961]/30 bg-[#C9A961]/10 px-6 py-3 text-sm font-medium tracking-wider text-[#C9A961] uppercase backdrop-blur-xl">
              Last Updated • December 2025
            </span>

            {/* Main Heading */}
            <h2 className="font-kapital mb-4 text-4xl leading-tight sm:mb-6 md:text-6xl lg:text-7xl xl:text-8xl">
              <span className="text-main/80 font-bold">Privacy</span>{" "}
              <span className="font-bold text-[#C9A961]">Policy</span>
            </h2>

            <p className="font-poppins mx-auto max-w-4xl text-lg leading-relaxed font-light text-gray-600 md:text-xl">
              At ASHR Group, your trust is our foundation. This policy explains
              how we collect, use, and protect your information — in plain
              words.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-white py-20 md:py-28 lg:py-36">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="space-y-16">
            {/* Full Policy – Elegant Sections */}
            <div className="mx-auto max-w-4xl space-y-12">
              {[
                {
                  title: "Information We Collect",
                  content:
                    "We only collect what we need: your name, email, phone number, and message when you fill a form, subscribe, or contact us. We also use cookies and analytics to improve site performance and user experience.",
                },
                {
                  title: "How We Use Your Data",
                  content:
                    "Your information helps us respond to inquiries, send updates (only if you agree), improve our website, and provide better service. We do not sell or share your data with advertisers or third parties.",
                },
                {
                  title: "Data Security",
                  content:
                    "We use bank-level encryption (SSL/TLS), secure servers, and restricted access. Your data is stored safely and regularly backed up. We follow international security standards.",
                },
                {
                  title: "Your Rights",
                  content:
                    "You can request to see, update, or delete your data at any time. Just email privacy@ashrgroup.com.ng — we’ll respond within 7 days.",
                },
                {
                  title: "Cookies & Tracking",
                  content:
                    "We use essential cookies for functionality and analytics cookies (Google Analytics) to understand how visitors use our site. You can disable non-essential cookies in your browser.",
                },
                {
                  title: "Third-Party Services",
                  content:
                    "We use trusted partners like Vercel (hosting), Google Analytics, and email providers — all compliant with global privacy laws.",
                },
                {
                  title: "Changes to This Policy",
                  content:
                    "We may update this policy occasionally. The latest version is always here. Last updated: December 2025.",
                },
                {
                  title: "Contact Us",
                  content: (
                    <>
                      Questions? Concerns? Reach out anytime:
                      <br />
                      Email us at{" "}
                      <ClickableLink href="mailto:privacy@ashrgroup.com.ng">
                        privacy@ashrgroup.com.ng
                      </ClickableLink>{" "}
                      or call us at{" "}
                      <ClickableLink href="tel:+2349096666610">
                        +234 909 666 6610
                      </ClickableLink>
                    </>
                  ),
                },
              ].map((section, i) => (
                <div key={i} className="space-y-4">
                  <h3 className="font-kapital text-3xl text-gray-900 md:text-4xl">
                    {section.title}
                  </h3>
                  <p className="font-poppins text-base leading-relaxed font-light text-gray-600 md:text-lg">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#C9A961]/30 to-transparent" />

            {/* Simple Summary – Big & Bold */}
            <div className="space-y-8 text-center">
              <h2 className="font-kapital text-4xl text-gray-900 md:text-6xl">
                In <span className="text-[#C9A961]">Plain Words</span>
              </h2>
              <div className="mx-auto grid max-w-4xl gap-8 text-left md:grid-cols-2">
                {[
                  "We only collect basic info: name, email, phone — nothing more.",
                  "We never sell, rent, or share your data with third parties.",
                  "You can ask us to delete or update your info anytime.",
                  "Cookies help us improve your experience — you can disable them.",
                  "All data is encrypted and stored securely in Nigeria & Europe.",
                  "We follow Nigerian data protection laws (NDPR).",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-2xl border border-[#C9A961]/20 bg-gradient-to-br from-[#C9A961]/5 to-transparent p-6"
                  >
                    <span className="font-mokoto text-4xl font-bold text-[#C9A961]">
                      ✓
                    </span>
                    <p className="font-poppins text-lg leading-relaxed font-light text-gray-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Final Trust Statement */}
            <div className="py-16 text-center">
              <p className="font-poppins mx-auto max-w-4xl text-2xl font-light text-gray-700 italic md:text-3xl">
                “Your privacy is not just a policy — it’s our promise.”
              </p>
              <p className="font-mokoto mt-6 text-4xl text-[#C9A961] md:text-5xl">
                ASHR Group
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
