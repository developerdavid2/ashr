import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import WhatsAppButton from "@/components/custom/whatsapp-button";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins", // Changed to be consistent
  display: "swap",
});
// Initialize local fonts
const kapital = localFont({
  src: [
    { path: "./fonts/Kapital-Light.otf", weight: "300" },
    { path: "./fonts/Kapital-Regular.otf", weight: "400" },
    { path: "./fonts/Kapital-Medium.otf", weight: "500" },
    { path: "./fonts/Kapital-Demi.otf", weight: "600" },
  ],
  variable: "--font-kapital",
  display: "swap",
});

const kapitalStencil = localFont({
  src: [
    { path: "./fonts/Kapital-Light-Stencil.otf", weight: "300" },
    { path: "./fonts/Kapital-Regular-Stencil.otf", weight: "400" },
    { path: "./fonts/Kapital-Medium-Stencil.otf", weight: "500" },
    { path: "./fonts/Kapital-Demi-Stencil.otf", weight: "600" },
  ],
  variable: "--font-kapital-stencil",
  display: "swap",
});

const code = localFont({
  src: [
    {
      path: "./fonts/Code-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Code-Light.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-code",
  display: "swap",
});

const interVariable = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});
const mokoto = localFont({
  src: [
    {
      path: "./fonts/mokoto-regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-mokoto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ASHR",
  description: "Ashrae Group - Pioneering Innovation Across Industries",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${code.variable} ${mokoto.variable} ${interVariable.variable} ${poppins.variable} ${kapital.variable} ${kapitalStencil.variable} } font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Toaster />
        <WhatsAppButton />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
