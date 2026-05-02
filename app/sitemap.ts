import type { MetadataRoute } from "next";

const routes = [
  "",
  "/services",
  "/services/gutter-cleaning",
  "/services/roof-cleaning",
  "/services/roof-restoration",
  "/services/roof-painting",
  "/before-after",
  "/gallery",
  "/areas",
  "/about",
  "/contact",
  "/quote",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.primeroofcare.com.au";
  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/quote" ? 0.9 : 0.7,
  }));
}
