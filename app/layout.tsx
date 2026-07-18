import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import ScrollTopButton from "@/components/scroll/ScrollTopButton";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import "./globals.css";

// Titles / headings: Montserrat (variable).
const title = localFont({
  src: "../public/fonts/Montserrat-Variable.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-title",
});

// Body / subtitles: Open Sauce Sans. (400 reuses the 500 file — same family.)
const body = localFont({
  src: [
    { path: "../public/fonts/OpenSauceSans-500.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/OpenSauceSans-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/OpenSauceSans-600.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/OpenSauceSans-700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Bitlane | Stress Free Moving Experience",
  description:
    "Bitlane is a Kingston moving company serving the GTA, Ottawa, and Montreal. Residential, commercial, and specialty moves with one clear all inclusive price.",
};

export const viewport: Viewport = {
  themeColor: "#231F20",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${title.variable} ${body.variable}`}>
      <body className="bg-ink font-sans text-paper antialiased">
        <Nav />
        {children}
        <Footer />
        <ScrollTopButton />
        <SmoothScroll />
      </body>
    </html>
  );
}
