import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Airport Transfer from Govardhan & Mathura",
  description:
    "Private airport pickup and drop from Govardhan and Mathura. Enter any airport as your destination — availability depends on route and date.",
  path: "/airport-transfer",
});

export default function AirportTransferPage() {
  return (
    <ServicePageTemplate
      eyebrow="Airport Transfer"
      title="Private Airport Transfer from Govardhan and Mathura"
      intro="Private car pickup or drop to the airport of your choice, subject to route, date and vehicle availability."
      path="/airport-transfer"
      ctaLabel="Book Airport Transfer"
      formTripType="Airport Transfer"
      bodyParagraphs={[
        "Airport transfers can be booked either as a pickup from the airport or a drop to it — enter your specific airport and terminal as pickup or destination in the booking form.",
        "Airport transfer availability depends on route, date and vehicle availability, so we'd recommend booking with as much notice as possible, especially for early morning or late night flights.",
      ]}
      bullets={[
        "Pickup or drop, whichever you need",
        "Enter any airport in India as free text",
        "Can be combined with local sightseeing before or after your flight",
        "Early morning and late night transfers can be arranged on request",
      ]}
      faqs={[
        {
          question: "Can I book a transfer to any airport in India?",
          answer:
            "Yes, enter the airport and terminal in the booking form. Availability depends on route, date and vehicle availability.",
        },
        {
          question: "How early should I book an airport transfer?",
          answer:
            "As early as possible, especially for early morning or late night flights, so we can confirm availability with confidence.",
        },
        {
          question: "Can I combine an airport pickup with sightseeing?",
          answer:
            "Yes — mention this when you enquire and we can plan a combined itinerary.",
        },
      ]}
      relatedLinks={[
        { label: "Railway Station Transfer", href: "/railway-station-transfer" },
        { label: "One-Way Taxi", href: "/one-way-taxi" },
        { label: "Outstation Taxi", href: "/outstation-taxi" },
      ]}
    />
  );
}
