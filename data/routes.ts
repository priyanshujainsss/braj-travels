import { RouteInfo } from "./types";

export const routes: RouteInfo[] = [
  {
    slug: "govardhan-to-delhi",
    from: "Govardhan",
    to: "Delhi",
    title: "Govardhan to Delhi Taxi",
    metaDescription:
      "Book a private one-way or round-trip taxi from Govardhan to Delhi. Complete AC car with driver, flexible pickup, fare confirmed on enquiry.",
    overview:
      "Delhi is one of the most requested outstation routes for travellers based in Govardhan and the wider Braj region — for flights, business, family visits and onward travel. We arrange this as a private car with driver, either one-way or as a round trip, planned around your travel dates.",
    whyTravel: [
      "Catching a flight or train connection from Delhi",
      "Visiting family or attending events in Delhi NCR",
      "Combining the trip with sightseeing in Agra or Jaipur on the way",
      "Business travel that needs a fixed departure time",
    ],
    pickupInfo:
      "Pickup can be arranged from Govardhan, Mathura, Vrindavan or a nearby location of your choice. Share your exact pickup point when you enquire.",
    travelConsiderations:
      "This is a highway route and travel time depends on traffic, time of day and weather — we won't quote a fixed duration here, but we're happy to discuss a realistic estimate for your travel date over call or WhatsApp. For one-way trips, let us know if you need a specific arrival time (for a flight, for example) so we can plan the departure accordingly.",
    faqs: [
      {
        question: "Can I book a one-way trip from Govardhan to Delhi?",
        answer:
          "Yes, one-way bookings are available for this route. You only pay for the leg you travel.",
      },
      {
        question: "Can I stop in Agra or Mathura on the way?",
        answer:
          "Yes, short stops can usually be arranged — mention this when you enquire so we can plan the timing.",
      },
      {
        question: "Is airport drop available in Delhi?",
        answer:
          "Yes, you can enter any Delhi airport terminal as your destination when booking.",
      },
    ],
    relatedRouteSlugs: ["mathura-to-delhi", "govardhan-to-agra"],
  },
  {
    slug: "govardhan-to-agra",
    from: "Govardhan",
    to: "Agra",
    title: "Govardhan to Agra Taxi",
    metaDescription:
      "Private one-way or round-trip taxi from Govardhan to Agra for Taj Mahal sightseeing or onward travel. AC car with driver.",
    overview:
      "Agra is a short outstation trip from Govardhan and a popular choice for a day trip to the Taj Mahal, Agra Fort and nearby sights, as well as for onward connections toward Delhi or Jaipur.",
    whyTravel: [
      "A day trip to the Taj Mahal and Agra Fort",
      "Combining Braj Darshan with a Taj Mahal visit",
      "Onward travel toward Delhi or Jaipur",
      "Family sightseeing trips over a weekend",
    ],
    pickupInfo:
      "Pickup is available from Govardhan, Mathura or Vrindavan. For a day trip, an early morning start usually works best — we can discuss timing when you enquire.",
    travelConsiderations:
      "Many customers do this as a same-day round trip. If you'd like time at the Taj Mahal and other sights without rushing, let us know so we can plan waiting time into the trip. Monument entry tickets are arranged by the customer, not included in the car booking.",
    faqs: [
      {
        question: "Can this be done as a same-day round trip?",
        answer:
          "Yes, Govardhan to Agra and back is commonly done as a day trip. Let us know your plan when booking so we can factor in waiting time.",
      },
      {
        question: "Do you arrange Taj Mahal entry tickets?",
        answer:
          "No, monument tickets are arranged by the customer directly. We provide the private car and driver for the journey and waiting time.",
      },
      {
        question: "Can I extend this trip to Jaipur?",
        answer:
          "Yes, Agra to Jaipur can be added as a multi-city extension — see our Multi-City Tours page or mention it when you enquire.",
      },
    ],
    relatedRouteSlugs: ["mathura-to-agra", "govardhan-to-jaipur"],
  },
  {
    slug: "govardhan-to-jaipur",
    from: "Govardhan",
    to: "Jaipur",
    title: "Govardhan to Jaipur Taxi",
    metaDescription:
      "Private taxi from Govardhan to Jaipur for sightseeing, family trips or onward Rajasthan travel. One-way and round-trip options available.",
    overview:
      "Jaipur is a common choice for travellers looking to extend a Braj trip into Rajasthan, whether for sightseeing, a family holiday or a longer road trip further into the state.",
    whyTravel: [
      "Sightseeing in Jaipur's forts and old city",
      "Extending a Braj Darshan trip into Rajasthan",
      "Family holidays and weekend trips",
      "Starting point for a wider Rajasthan road trip",
    ],
    pickupInfo:
      "Pickup can be arranged from Govardhan, Mathura or Vrindavan. This is a longer outstation route, so we'd recommend confirming your dates a few days in advance where possible.",
    travelConsiderations:
      "Given the distance, most customers travel this route as a one-way or multi-day round trip rather than a same-day return. If you're planning to stay a few days in Jaipur before returning, mention this when you enquire so we can plan the car and driver's schedule accordingly.",
    faqs: [
      {
        question: "Is this route suitable for a same-day return?",
        answer:
          "It's a longer route, so most customers plan it as one-way or a multi-day round trip rather than a same-day return.",
      },
      {
        question: "Can I combine this with an Agra stop?",
        answer:
          "Yes — Govardhan to Agra to Jaipur is a common multi-city routing. See Multi-City Tours or mention it in your enquiry.",
      },
      {
        question: "Can the car wait in Jaipur while I sightsee?",
        answer:
          "Yes, waiting and halting can be arranged as part of a round trip. Let us know your plan when booking.",
      },
    ],
    relatedRouteSlugs: ["mathura-to-jaipur", "govardhan-to-agra"],
  },
  {
    slug: "mathura-to-delhi",
    from: "Mathura",
    to: "Delhi",
    title: "Mathura to Delhi Taxi",
    metaDescription:
      "Book a private taxi from Mathura to Delhi. One-way and round-trip options, complete AC car with driver, pickup from Mathura or nearby Braj towns.",
    overview:
      "For travellers based in or near Mathura, Delhi is a frequent outstation trip — for flights, work, family visits and connections onward from the capital.",
    whyTravel: [
      "Flight or train connections from Delhi",
      "Business meetings and work travel",
      "Family visits in Delhi NCR",
      "Onward travel to other parts of North India",
    ],
    pickupInfo:
      "Pickup from Mathura, Vrindavan or Govardhan can be arranged — share your exact location when you enquire.",
    travelConsiderations:
      "As with any highway route, travel time varies with traffic and time of day. If you have a fixed arrival deadline in Delhi, mention it so we can plan the departure time with a reasonable buffer.",
    faqs: [
      {
        question: "Can I book just a one-way trip to Delhi?",
        answer:
          "Yes, one-way bookings are available and you only pay for the leg you travel.",
      },
      {
        question: "Can the driver drop me directly at the airport?",
        answer:
          "Yes, enter your specific Delhi airport terminal as the destination when you book.",
      },
      {
        question: "Is a round trip available on the same day?",
        answer:
          "Same-day round trips are possible depending on your schedule — mention your plan when enquiring and we'll confirm.",
      },
    ],
    relatedRouteSlugs: ["govardhan-to-delhi", "mathura-to-agra"],
  },
  {
    slug: "mathura-to-agra",
    from: "Mathura",
    to: "Agra",
    title: "Mathura to Agra Taxi",
    metaDescription:
      "Private taxi from Mathura to Agra for a Taj Mahal day trip or onward travel. AC car with driver, one-way and round-trip options.",
    overview:
      "Mathura to Agra is a short, popular route — ideal for a Taj Mahal day trip, a Braj-plus-Agra itinerary, or as the first leg of a longer journey toward Delhi or Jaipur.",
    whyTravel: [
      "Taj Mahal and Agra Fort day trips",
      "Combining Braj Darshan with Agra sightseeing",
      "Onward connections to Delhi or Jaipur",
      "Family day trips",
    ],
    pickupInfo:
      "Pickup is available directly from Mathura, or nearby Vrindavan and Govardhan on request.",
    travelConsiderations:
      "Most customers travel this as a same-day round trip with a few hours of sightseeing time in Agra. Let us know if you'd like more time at the monuments so waiting time can be planned into the trip.",
    faqs: [
      {
        question: "How is this usually booked — one-way or round trip?",
        answer:
          "Both are available. Same-day round trips are common for a Taj Mahal visit; one-way is useful if you're continuing onward from Agra.",
      },
      {
        question: "Can the driver wait while I visit the Taj Mahal?",
        answer:
          "Yes, waiting time can be included in a round-trip booking — mention your plan when you enquire.",
      },
      {
        question: "Can I add Jaipur to this trip?",
        answer:
          "Yes, Mathura–Agra–Jaipur is a workable multi-city routing. See Multi-City Tours for more.",
      },
    ],
    relatedRouteSlugs: ["govardhan-to-agra", "mathura-to-jaipur"],
  },
  {
    slug: "mathura-to-jaipur",
    from: "Mathura",
    to: "Jaipur",
    title: "Mathura to Jaipur Taxi",
    metaDescription:
      "Private taxi from Mathura to Jaipur for sightseeing or onward Rajasthan travel. One-way and round-trip options with a complete car and driver.",
    overview:
      "Mathura to Jaipur suits travellers extending a Braj visit into Rajasthan, or beginning a longer road trip from the Mathura/Govardhan region.",
    whyTravel: [
      "Jaipur sightseeing and old-city visits",
      "Extending a Braj Darshan trip into Rajasthan",
      "Family holidays and multi-day trips",
      "Start of a longer Rajasthan road trip",
    ],
    pickupInfo:
      "Pickup from Mathura, Vrindavan or Govardhan can be arranged — share your preferred location when booking.",
    travelConsiderations:
      "This is a longer route best planned a few days ahead where possible. Most customers travel one-way or as a multi-day round trip rather than a same-day return — let us know your plan so the car and driver's schedule can be arranged accordingly.",
    faqs: [
      {
        question: "Is a same-day return realistic on this route?",
        answer:
          "It's a longer distance, so most customers plan a one-way trip or a multi-day round trip instead of a same-day return.",
      },
      {
        question: "Can I stop at Agra on the way to Jaipur?",
        answer:
          "Yes, Mathura–Agra–Jaipur is a common routing — mention this when you enquire so we can plan the stop.",
      },
      {
        question: "Can I book this as part of a longer Rajasthan trip?",
        answer:
          "Yes, this route works well as the start of a longer customized tour — see Customized Tours for more.",
      },
    ],
    relatedRouteSlugs: ["govardhan-to-jaipur", "mathura-to-agra"],
  },
];

export function getRouteBySlug(slug: string): RouteInfo | undefined {
  return routes.find((r) => r.slug === slug);
}
