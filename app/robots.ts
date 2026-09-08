import { MetadataRoute } from "next";
import { siteUrl } from "@/data/business";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/private", "/internal", "/api"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
