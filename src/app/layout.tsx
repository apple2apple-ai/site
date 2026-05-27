import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://apple2apple.ai";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "apple2apple.ai — Agentic AI products, built end to end",
    template: "%s · apple2apple.ai",
  },
  description:
    "apple2apple.ai designs and ships fully agentic AI products for healthcare, local business, logistics & trucking, and beyond. Tell us your requirement — we build it.",
  keywords: [
    "agentic AI",
    "AI products",
    "AI agents",
    "healthcare AI",
    "local business AI",
    "trucking AI",
    "logistics automation",
    "apple2apple.ai",
  ],
  authors: [{ name: "apple2apple.ai" }],
  openGraph: {
    title: "apple2apple.ai — Agentic AI products, built end to end",
    description:
      "We design and ship fully agentic AI products across healthcare, local business, and logistics. Tell us your requirement — we build it.",
    url: SITE_URL,
    siteName: "apple2apple.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "apple2apple.ai — Agentic AI products, built end to end",
    description:
      "Fully agentic AI products for healthcare, local business, and logistics. Tell us your requirement — we build it.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">{children}</body>
    </html>
  );
}
