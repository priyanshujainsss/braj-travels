import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "One-Way Taxi from Govardhan & Mathura",
  description:
    "Book a one-way private taxi from Govardhan or Mathura. Pay for the leg you travel — no need to book a return journey you don't need.",
  path: "/one-way-taxi",
});

export default function OneWayTaxiPage() {
  return (
    <ServicePageTemplate
      eyebrow="One-Way Taxi"
      title="One-Way Taxi from Govardhan and Mathura"
      intro="Book a one-way trip to your destination — useful for onward travel, drop-offs and journeys where you won't need a return leg."
      path="/one-way-taxi"
      ctaLabel="Get One-Way Fare"
      formTripType="One Way"
      bodyParagraphs={[
        "A one-way taxi from Govardhan or Mathura is a common choice for travellers heading to an airport, railway station, or a city they're continuing onward from — anywhere you don't need the car to bring you back.",
        "We don't publish fixed one-way rates, since fare depends on the specific route, date and vehicle availability. Share your pickup and destination and we'll confirm the fare directly.",
      ]}
      bullets={[
        "Pay for the leg you travel — no return leg required",
        "Any destination in India, entered as free text",
        "Good for airport and railway station drop-offs",
        "Fare confirmed on call or WhatsApp for your specific route",
      ]}
      faqs={[
        {
          question: "How is one-way different from round-trip pricing?",
          answer:
            "One-way covers a single leg of travel; a round trip includes the return journey. Fare structures differ, so let us know which you need when booking.",
        },
        {
          question: "Can I book a one-way taxi to any city in India?",
          answer:
            "Yes, enter your destination as free text — any city, town, airport or station. Availability and fare are confirmed for your specific route.",
        },
        {
          question: "Is airport drop available for one-way bookings?",
          answer:
            "Yes, enter the airport and terminal as your destination and we'll confirm timing and fare.",
        },
      ]}
      relatedLinks={[
        { label: "Round-Trip Taxi", href: "/round-trip-taxi" },
        { label: "Outstation Taxi", href: "/outstation-taxi" },
        { label: "Airport Transfer", href: "/airport-transfer" },
      ]}
    />
  );
}
