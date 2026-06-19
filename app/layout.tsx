import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase:
    new URL(
      "https://cosmolix.com"
    ),

  title: {
    default:
      "Cosmolix Private Limited",

    template:
      "%s | Cosmolix",
  },

  description:
    "Custom Software Development, AI Solutions, Cloud Platforms and IT Services.",

  keywords: [
    "AI Development",
    "Software Company",
    "Cloud Solutions",
    "IT Services",
    "Cosmolix",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${mono.variable} h-full antialiased`}
    >
      <body
        className={`
          ${sora.variable}
          ${inter.variable}
          ${mono.variable}
          min-h-full flex flex-col
        `}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}