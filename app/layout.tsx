import "./globals.css";
import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.primeroofcare.com.au"),
  title: {
    default:
      "Prime Roof Care | Roof Cleaning, Gutters & Restoration Across Adelaide, Victoria & Tasmania",
    template: "%s | Prime Roof Care",
  },
  description:
    "Prime Roof Care provides roof cleaning, gutter cleaning, roof restoration, repairs and roof coating across Adelaide, Victoria and Tasmania.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Prime Roof Care | Roof Cleaning, Gutters & Restoration Across Adelaide, Victoria & Tasmania",
    description:
      "Professional roof cleaning, gutter cleaning, roof restoration, repairs and coating across Adelaide, Victoria and Tasmania.",
    url: "https://www.primeroofcare.com.au",
    siteName: "Prime Roof Care",
    images: ["/hero-roof.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Roof Care",
    description:
      "Roof cleaning, gutter cleaning, restoration and coating across Adelaide, Victoria and Tasmania.",
    images: ["/hero-roof.jpg"],
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
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: "Prime Roof Care",
    url: "https://www.primeroofcare.com.au",
    logo: "https://www.primeroofcare.com.au/logo.png",
    image: "https://www.primeroofcare.com.au/hero-roof.jpg",
    telephone: "+61469097690",
    email: "primeroofcare@gmail.com",
    areaServed: ["Adelaide", "Victoria", "Tasmania"],
    serviceType: [
      "Roof cleaning",
      "Gutter cleaning",
      "Roof restoration",
      "Roof repairs",
      "Roof coating",
    ],
    sameAs: ["https://www.primeroofcare.com.au"],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
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
