import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Round-Trip Taxi from Govardhan & Mathura",
  description:
    "Book a round-trip private taxi from Govardhan or Mathura — for day trips or longer multi-day journeys, with the same car and driver throughout.",
  path: "/round-trip-taxi",
});

export default function RoundTripTaxiPage() {
  return (
    <ServicePageTemplate
      eyebrow="Round-Trip Taxi"
      title="Round-Trip Taxi from Govardhan and Mathura"
      intro="Return journeys and multi-day trips, with the same private car and driver for the entire booking."
      path="/round-trip-taxi"
      ctaLabel="Request Round-Trip Fare"
      formTripType="Round Trip"
      bodyParagraphs={[
        "A round trip keeps the same car and driver with you for the whole journey — useful for day trips, short family visits, or longer outstation journeys where you'll also need transport at the destination.",
        "For multi-day round trips, waiting or halting time at the destination is discussed and agreed upfront, so there are no surprises once you're on the road.",
      ]}
      bullets={[
        "Same car and driver for the whole trip",
        "Suited to day trips and multi-day itineraries",
        "Halting and waiting time discussed before you travel",
        "Return date logic built into the booking form",
      ]}
      faqs={[
        {
          question: "How is waiting time at the destination handled?",
          answer:
            "This is discussed and agreed as part of confirming your round-trip booking — mention your plan when you enquire.",
        },
        {
          question: "Can I book a multi-day round trip?",
          answer:
            "Yes, round trips can be planned across several days depending on your itinerary.",
        },
        {
          question: "Do I need to know my exact return date to book?",
          answer:
            "A rough return date is enough to start with — we can confirm final details closer to your travel dates.",
        },
      ]}
      relatedLinks={[
        { label: "One-Way Taxi", href: "/one-way-taxi" },
        { label: "Multi-City Tours", href: "/multi-city-tours" },
        { label: "Outstation Taxi", href: "/outstation-taxi" },
      ]}
    />
  );
}
