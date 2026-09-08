import { business, siteUrl } from "@/data/business";
import { FAQ } from "@/data/types";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: business.name,
    url: siteUrl,
    logo: `${siteUrl}/images/og/braj-travels-og.jpg`,
    telephone: business.phoneRaw,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.legalCity,
      addressRegion: business.state,
      addressCountry: "IN",
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description:
      "Private taxi and tour service based in Govardhan, Mathura, offering local sightseeing, Braj Darshan, outstation and Pan-India travel with a complete car and driver.",
    url: siteUrl,
    telephone: business.phoneRaw,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.legalCity,
      addressRegion: business.state,
      addressCountry: "IN",
    },
    areaServed: business.serviceAreas,
    priceRange: "$$",
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: input.name,
    name: input.name,
    description: input.description,
    url: `${siteUrl}${input.path}`,
    provider: {
      "@type": "LocalBusiness",
      name: business.name,
      telephone: business.phoneRaw,
      address: {
        "@type": "PostalAddress",
        addressLocality: business.legalCity,
        addressRegion: business.state,
        addressCountry: "IN",
      },
    },
    areaServed: "India",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
