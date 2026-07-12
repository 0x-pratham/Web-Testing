import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cosmolix.com"),
  title: {
    default: "Cosmolix | Beyond Limits",
    template: "%s | Cosmolix",
  },
  description: "Custom Software Development, AI Solutions, Cloud Platforms and IT Services.",
  keywords: ["AI Development", "Software Company", "Cloud Solutions", "IT Services", "Cosmolix"],
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
    icon: "/brand/cosmolix-mark.png",
    shortcut: "/brand/cosmolix-mark.png",
    apple: "/brand/cosmolix-mark.png",
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
      className={`${manrope.variable} h-full antialiased scroll-smooth`}
    >
      <body
        className={`
          ${manrope.variable}
          bg-[#F5F1EA]
          text-neutral-900
          h-full
          flex
          flex-col
          m-0
          p-0
        `}
      >
        <ScrollProgress />
        <Navbar />
        {/* Anti-stretching clean matrix tracking layer */}
        <main className="w-full flex-grow p-0 m-0 space-y-0 gap-0 block">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}