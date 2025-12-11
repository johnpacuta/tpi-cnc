import type { MetadataRoute } from "next";

// Helper to build absolute URLs safely
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";
const url = (path: string) => `${BASE_URL}${path.startsWith("/") ? "" : "/"}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static top-level routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: url("/"), lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: url("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: url("/services"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: url("/service"), lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: url("/products"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: url("/training"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: url("/consulting"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: url("/privacy"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: url("/terms"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: url("/support"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: url("/maintenance"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: url("/supply"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: url("/quote"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: url("/products"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: url("/3d-printing"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: url("/renishaw-products"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: url("/spare-parts"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  // Known nested static routes
  const nestedStaticRoutes: MetadataRoute.Sitemap = [
    { url: url("/productive-robotics/blaze-welding-robot"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: url("/services/3d-printing-part-manufacturing"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  return [
    ...staticRoutes,
    ...nestedStaticRoutes,
  ];
}
