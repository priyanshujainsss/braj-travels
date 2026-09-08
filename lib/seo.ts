import { Metadata } from "next";
import { business, siteUrl } from "@/data/business";

interface PageMetaInput {
  title: string;
  description: string;
  path: string; // e.g. "/local-sightseeing"
  ogImage?: string;
}

/**
 * Builds a consistent Metadata object (title, description, canonical,
 * Open Graph, Twitter) for a single page. Use on every route's page.tsx.
 */
export function buildMetadata({
  title,
  description,
  path,
  ogImage = "/images/og/braj-travels-og.jpg",
}: PageMetaInput): Metadata {
  const url = `${siteUrl}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${business.name}`,
      description,
      url,
      siteName: business.name,
      images: [{ url: `${siteUrl}${ogImage}`, width: 1200, height: 630 }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${business.name}`,
      description,
      images: [`${siteUrl}${ogImage}`],
    },
  };
}

export function titleTemplate(pageTitle: string): string {
  return `${pageTitle} | ${business.name}`;
}
