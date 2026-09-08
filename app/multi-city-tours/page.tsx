import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Multi-City Tours from Govardhan",
  description:
    "Plan a multi-city road trip from Govardhan across India — for example Govardhan to Agra to Jaipur to Udaipur. Custom itinerary, one car throughout.",
  path: "/multi-city-tours",
});

export default function MultiCityToursPage() {
  return (
    <ServicePageTemplate
      eyebrow="Multi-City Tours"
      title="Multi-City Tours from Govardhan"
      intro="Cover several cities in a single trip, with your own itinerary, pace and stops — all in one private-car booking."
      path="/multi-city-tours"
      ctaLabel="Plan Multi-City Trip"
      formTripType="Multi-City"
      bodyParagraphs={[
        "A multi-city tour covers several destinations in a single trip — for example Govardhan → Agra → Jaipur → Udaipur → Ahmedabad → Mumbai, or Govardhan → Ayodhya → Varanasi → Prayagraj.",
        "These are example routes, not fixed packages. You're welcome to request your own combination of cities and days — we'll work through a realistic day-by-day plan with you before confirming.",
      ]}
      bullets={[
        "Custom itinerary across multiple cities",
        "One car and driver for the entire journey",
        "Flexible day-by-day planning around your priorities",
        "Works for pilgrimage circuits, sightseeing or road trips",
      ]}
      faqs={[
        {
          question: "Can I choose my own cities instead of a fixed itinerary?",
          answer:
            "Yes, share the cities and rough number of days you have, and we'll help plan a realistic route.",
        },
        {
          question: "How many cities can be covered in one trip?",
          answer:
            "This depends on how many days you have available — we'd rather help you plan a pace that isn't rushed than fit in the maximum number of stops.",
        },
        {
          question: "Is the same car used for the whole multi-city trip?",
          answer:
            "Yes, one car and driver stays with you throughout the journey.",
        },
      ]}
      relatedLinks={[
        { label: "Pan-India Tours", href: "/pan-india-tours" },
        { label: "Customized Tours", href: "/customized-tours" },
        {
          label: "Planning a multi-city road trip (blog)",
          href: "/blog/planning-multi-city-india-road-trip",
        },
      ]}
    />
  );
}
