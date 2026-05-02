import type { Metadata } from "next";
import QuotePageClient from "@/components/QuotePageClient";

export const metadata: Metadata = {
  title: "Request a Fast Roof Quote",
  description:
    "Request a fast quote from Prime Roof Care for roof cleaning, gutter cleaning, roof restoration, repairs and coating across Adelaide, Victoria and Tasmania.",
  alternates: {
    canonical: "/quote",
  },
};

export default function QuotePage() {
  return <QuotePageClient />;
}
