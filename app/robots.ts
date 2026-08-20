import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/gracias"],
    },
    sitemap: "https://www.studiovmp.com/sitemap.xml",
    host: "https://www.studiovmp.com",
  };
}