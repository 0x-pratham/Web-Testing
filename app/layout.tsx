import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import ScrollProgress from "@/components/layout/ScrollProgress";
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

  openGraph: {
    title: "Cosmolix Private Limited",
    description: "Custom Software Development, AI Solutions, Cloud Platforms and IT Services.",
    url: "https://cosmolix.com",
    siteName: "Cosmolix",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cosmolix Private Limited",
    description: "Custom Software Development, AI Solutions, Cloud Platforms and IT Services.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },

  alternates: {
    canonical: "https://cosmolix.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${mono.variable} h-full antialiased scroll-smooth`}
    >
      <body
        className={`
          ${sora.variable}
          ${inter.variable}
          ${mono.variable}
          font-sans
          bg-[#F5F1EA]
          text-neutral-900
          h-full
          flex
          flex-col
        `}
      >
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}