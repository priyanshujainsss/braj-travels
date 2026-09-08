import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Railway Station Transfer from Govardhan & Mathura",
  description:
    "Private railway station pickup and drop from Govardhan and Mathura. Enter any station as your destination, and combine with sightseeing or onward travel.",
  path: "/railway-station-transfer",
});

export default function RailwayStationTransferPage() {
  return (
    <ServicePageTemplate
      eyebrow="Railway Station Transfer"
      title="Railway Station Transfer from Govardhan and Mathura"
      intro="Private car pickup or drop at any railway station, with the option to combine it with sightseeing or an onward outstation trip."
      path="/railway-station-transfer"
      ctaLabel="Book Station Transfer"
      formTripType="Railway Station Transfer"
      bodyParagraphs={[
        "Mathura Junction is the nearest major station for many travellers, but we arrange pickup or drop at any Indian railway station — enter the station name in the booking form as free text.",
        "Station transfers can also be combined with local sightseeing beforehand, or an onward outstation trip afterward, all within the same private-car booking.",
      ]}
      bullets={[
        "Any railway station, entered as free text",
        "Can be combined with local sightseeing or onward outstation travel",
        "Pickup coordination confirmed by phone or WhatsApp on the travel day",
        "Suitable for both arrivals and departures",
      ]}
      faqs={[
        {
          question: "Can you pick me up from any railway station?",
          answer:
            "Yes, enter the station name in the booking form — any Indian railway station can be entered as pickup or drop.",
        },
        {
          question: "Can I combine a station pickup with sightseeing?",
          answer:
            "Yes, this is a common request — mention your plan when you enquire so it can be built into the itinerary.",
        },
        {
          question: "How will the driver find me at the station?",
          answer:
            "We coordinate pickup details — like the exact platform or exit gate — by phone or WhatsApp closer to your arrival.",
        },
      ]}
      relatedLinks={[
        { label: "Airport Transfer", href: "/airport-transfer" },
        { label: "Local Sightseeing", href: "/local-sightseeing" },
        { label: "Outstation Taxi", href: "/outstation-taxi" },
      ]}
    />
  );
}
