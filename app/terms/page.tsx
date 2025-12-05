// app/terms-of-use/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use – ASHR Group",
  description:
    "Legal terms and conditions for using ASHR Group websites and services across automotive, interiors, ceramics, and industrial divisions.",
};

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

export default function TermsOfUsePage() {
  return (
    <>
      {/* HERO — IDENTICAL TO PRIVACY POLICY */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-24 md:py-32 lg:py-40">
        <h1
          className="font-mokoto pointer-events-none absolute top-[20%] left-1/2 -translate-x-1/2 text-[10rem] whitespace-nowrap text-gray-400/10 select-none sm:text-[14rem] md:text-[18rem] lg:text-[22rem]"
          style={{
            lineHeight: 1,
            maskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 80%)",
          }}
        >
          TERMS
        </h1>

        <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="space-y-6 text-center">
            <span className="inline-block rounded-full border border-[#C9A961]/30 bg-[#C9A961]/10 px-6 py-3 text-sm font-medium tracking-wider text-[#C9A961] uppercase backdrop-blur-xl">
              Last Updated • December 2025
            </span>

            <h2 className="font-kapital mb-4 text-4xl leading-tight sm:mb-6 md:text-6xl lg:text-7xl xl:text-8xl">
              <span className="text-main/80 font-bold">Terms</span>{" "}
              <span className="font-bold text-[#C9A961]">of Use</span>
            </h2>

            <p className="font-poppins mx-auto max-w-4xl text-lg leading-relaxed font-light text-gray-600 md:text-xl">
              Welcome to ASHR Group. By using our websites and services, you
              agree to these terms — written clearly and fairly.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-white py-20 md:py-28 lg:py-36">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="space-y-16">
            {/* Full Terms – Elegant Sections */}
            <div className="mx-auto max-w-4xl space-y-12">
              {[
                {
                  title: "Acceptance of Terms",
                  content:
                    "By accessing or using any ASHR Group website (including ashrgroup.com.ng and all subsidiary domains), you agree to be bound by these Terms of Use and our Privacy Policy.",
                },
                {
                  title: "Use of Our Services",
                  content:
                    "You may use our websites for lawful purposes only. You agree not to copy, reproduce, distribute, or create derivative works from any content without our written permission.",
                },
                {
                  title: "Intellectual Property",
                  content:
                    "All content, logos, images, and designs on our websites are owned by ASHR Group or its subsidiaries (ASHR Run & Drive, High Taste Ceramics, ASHR Designs, Simtex). Unauthorized use is prohibited.",
                },
                {
                  title: "Accuracy of Information",
                  content:
                    "We strive to keep all product specifications, pricing, and availability accurate. However, errors may occur. We reserve the right to correct them and are not liable for inaccuracies.",
                },
                {
                  title: "Limitation of Liability",
                  content:
                    "ASHR Group is not liable for indirect, incidental, or consequential damages arising from the use of our websites or services. Our total liability shall not exceed the amount paid by you (if any).",
                },
                {
                  title: "Governing Law",
                  content:
                    "These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be resolved in the courts of Lagos State.",
                },
                {
                  title: "Changes to Terms",
                  content:
                    "We may update these terms from time to time. Continued use of our websites constitutes acceptance of the updated terms.",
                },
                {
                  title: "Contact Us",
                  content: (
                    <>
                      Questions about these terms? Reach out:
                      <br />
                      Email{" "}
                      <ClickableLink href="mailto:legal@ashrgroup.com.ng">
                        info@ashrgroup.com.ng
                      </ClickableLink>{" "}
                      or call{" "}
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

            {/* Plain Words Summary */}
            <div className="space-y-8 text-center">
              <h2 className="font-kapital text-4xl text-gray-900 md:text-6xl">
                In <span className="text-[#C9A961]">Plain Words</span>
              </h2>
              <div className="mx-auto grid max-w-4xl gap-8 text-left md:grid-cols-2">
                {[
                  "All content belongs to ASHR Group — no copying without permission.",
                  "Product details are accurate at time of publishing, but confirm before purchase.",
                  "We’re not responsible for indirect losses (e.g., missed opportunities).",
                  "You must use our sites lawfully and respectfully.",
                  "Prices and availability may change without notice.",
                  "Nigerian law applies — disputes handled in Lagos courts.",
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

            {/* Final Statement */}
            <div className="py-16 text-center">
              <p className="font-poppins mx-auto max-w-4xl text-2xl font-light text-gray-700 italic md:text-3xl">
                “Excellence in everything we do — including how we treat you.”
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
