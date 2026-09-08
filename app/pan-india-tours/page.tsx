import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pan-India Tours by Private Car from Govardhan",
  description:
    "Travel from Govardhan to destinations across India — Delhi, Agra, Jaipur, Udaipur, Varanasi, Ayodhya, Haridwar, Rishikesh and more. Fare confirmed by route and dates.",
  path: "/pan-india-tours",
});

export default function PanIndiaToursPage() {
  const destinations = [
    "Delhi",
    "Agra",
    "Jaipur",
    "Udaipur",
    "Ahmedabad",
    "Mumbai",
    "Haridwar",
    "Rishikesh",
    "Ayodhya",
    "Varanasi",
    "Prayagraj",
    "Amritsar",
    "Manali",
    "Goa",
  ];

  return (
    <ServicePageTemplate
      eyebrow="Pan-India Tours"
      title="Travel from Govardhan to Destinations Across India"
      intro={`Whether it's ${destinations.slice(0, 3).join(", ")} or a longer road trip, we plan travel from Govardhan to destinations across India.`}
      path="/pan-india-tours"
      ctaLabel="Plan a Pan-India Trip"
      formTripType="Customized Tour"
      bodyParagraphs={[
        `Braj Travels is based in Govardhan, and we arrange private-car travel from here to destinations across India — including ${destinations.join(", ")}, and others on request.`,
        "Destination availability and fare are confirmed based on route, dates and vehicle availability. We don't operate branches or offices at these destinations — this is travel from Govardhan/Mathura to your chosen destination, with the same car and driver for the journey.",
      ]}
      bullets={[
        "Long-distance and multi-day travel from Govardhan",
        "Route and stops planned around your dates",
        "One driver, one car, throughout the trip",
        "Destination entered as free text — any city, town or region in India",
      ]}
      faqs={[
        {
          question: "Do you have offices or branches at these destinations?",
          answer:
            "No. Braj Travels is based in Govardhan, Mathura — we arrange travel from here to destinations across India, not local service within those cities.",
        },
        {
          question: "How is the fare decided for long-distance trips?",
          answer:
            "Fare depends on route, dates, trip type and vehicle availability, and is confirmed with you directly rather than published as a fixed rate.",
        },
        {
          question: "Can I plan a multi-city Pan-India trip?",
          answer:
            "Yes — see our Multi-City Tours page, or describe your plan when you enquire and we'll help build the itinerary.",
        },
      ]}
      relatedLinks={[
        { label: "Multi-City Tours", href: "/multi-city-tours" },
        { label: "Customized Tours", href: "/customized-tours" },
        { label: "Outstation Taxi", href: "/outstation-taxi" },
      ]}
    />
  );
}
