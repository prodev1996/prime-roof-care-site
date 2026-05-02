import "./globals.css";
import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.primeroofcare.com.au"),
  title: "Prime Roof Care | Roof Cleaning, Gutter Cleaning & Restoration",
  description:
    "Professional roof and gutter care operating in Adelaide, Victoria and Tasmania. Gutter cleaning, roof cleaning, roof restoration, repairs and roof painting.",
  openGraph: {
    title: "Prime Roof Care",
    description:
      "Roof cleaning, gutter cleaning, restoration and painting across Adelaide, Victoria and Tasmania.",
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
  themeColor: "#059669",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp
          phone="0469097690"
          message="Hi! I'd like a roof or gutter quote."
          offset={20}
        />
      </body>
    </html>
  );
}
