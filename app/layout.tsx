import "./globals.css";
import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Prime Roof Care | Roof Cleaning, Gutter Cleaning & Restoration Adelaide",
  description:
    "Local, licensed and insured roof & gutter specialists based in Aldinga Beach and servicing Adelaide. Gutter cleaning, roof cleaning, full restoration and professional roof painting.",
  openGraph: {
    title: "Prime Roof Care",
    description:
      "Adelaide gutter cleaning, roof cleaning, restoration & painting. Licensed and insured.",
    images: ["/hero-roof.jpg"],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#10b981",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />

        <FloatingWhatsApp
          phone="0469097690"
          message="Hi! I'd like a roof or gutter quote in Adelaide."
          offset={20}
        />
      </body>
    </html>
  );
}
