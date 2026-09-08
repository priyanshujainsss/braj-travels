import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Outstation Taxi from Govardhan & Mathura",
  description:
    "Private outstation taxi from Govardhan and Mathura for one-way trips, round trips and multi-day journeys. Complete AC car with driver.",
  path: "/outstation-taxi",
});

export default function OutstationTaxiPage() {
  return (
    <ServicePageTemplate
      eyebrow="Outstation Taxi"
      title="Private Outstation Taxi from Govardhan and Mathura"
      intro="One-way trips, round trips and multi-day journeys — a complete private car with driver for travel beyond Braj."
      path="/outstation-taxi"
      ctaLabel="Get Outstation Fare"
      formTripType="One Way"
      bodyParagraphs={[
        "Outstation travel from Govardhan and Mathura covers everything from a quick one-way trip to a longer multi-day journey — for religious travel, family visits, sightseeing or business.",
        "Every outstation booking is a complete private car with driver. We confirm the fare based on your specific route, dates and trip type rather than publishing fixed rates online.",
      ]}
      bullets={[
        "One-way and round-trip options",
        "Multi-day journeys supported",
        "Direct booking, confirmed over call or WhatsApp",
        "Travel for religious, family, business or leisure purposes",
      ]}
      faqs={[
        {
          question: "What's the difference between one-way and round-trip?",
          answer:
            "One-way is for a single leg of travel; round-trip includes the return journey with the same car and driver. See our One-Way and Round-Trip pages for more.",
        },
        {
          question: "Can I travel outside Uttar Pradesh?",
          answer:
            "Yes, we arrange trips to destinations across India. Availability and fare are confirmed for your specific route and dates.",
        },
        {
          question: "How far in advance should I book?",
          answer:
            "For longer routes, booking a few days ahead helps, though shorter trips can often be arranged with less notice — enquire and we'll confirm availability.",
        },
      ]}
      relatedLinks={[
        { label: "One-Way Taxi", href: "/one-way-taxi" },
        { label: "Round-Trip Taxi", href: "/round-trip-taxi" },
        { label: "Multi-City Tours", href: "/multi-city-tours" },
        { label: "Popular Routes", href: "/routes" },
      ]}
    />
  );
}
