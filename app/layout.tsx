import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import ScrollTopButton from "@/components/scroll/ScrollTopButton";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import "./globals.css";

const bricolage = localFont({
  src: "../public/fonts/BricolageGrotesque-Variable.woff2",
  weight: "200 800",
  style: "normal",
  display: "swap",
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "Bitlane | Stress Free Moving Experience",
  description:
    "Bitlane is a Kingston moving company serving the GTA, Ottawa, and Montreal. Residential, commercial, and specialty moves with one clear all inclusive price.",
};

export const viewport: Viewport = {
  themeColor: "#050506",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={bricolage.variable}>
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
