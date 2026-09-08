import { MetadataRoute } from "next";
import { siteUrl } from "@/data/business";
import { services } from "@/data/services";
import { routes } from "@/data/routes";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/about",
    "/services",
    "/our-car",
    "/routes",
    "/blog",
    "/faq",
    "/contact",
    "/book",
    "/privacy-policy",
    "/terms-and-conditions",
    "/cancellation-policy",
  ];

  const servicePaths = services.map((s) => s.href);
  const routePaths = routes.map((r) => `/routes/${r.slug}`);
  const blogPaths = blogPosts.map((p) => `/blog/${p.slug}`);

  const allPaths = [...staticPaths, ...servicePaths, ...routePaths, ...blogPaths];

  return allPaths.map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
