import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BookingCTA } from "@/components/booking/BookingCTA";
import { buildMetadata } from "@/lib/seo";
import { business } from "@/data/business";

export const metadata = buildMetadata({
  title: "About Braj Travels",
  description:
    "Braj Travels is a Govardhan, Mathura-based private taxi and tour service focused on comfortable, flexible travel with a driver.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About", path: "/about" }]} />
      <PageHero
        eyebrow="About Us"
        title="A private taxi and tour service based in Govardhan"
      />
      <section className="section-y">
        <Container className="max-w-2xl space-y-5 text-navy-600 leading-relaxed">
          <p>
            Braj Travels is a private taxi and tour service based in{" "}
            {business.addressLocality}, focused on comfortable, flexible
            travel with a driver — not a shared taxi, and not a self-drive
            rental.
          </p>
          <p>
            We arrange local sightseeing around Govardhan, Mathura and
            Vrindavan, private Braj Darshan itineraries, outstation taxi
            trips, and longer Pan-India travel, along with customized tours
            built around what our customers actually want to see and do.
          </p>
          <p>
            Every trip is booked as a complete private car with a driver.
            Bookings are confirmed directly with us over phone or WhatsApp —
            we check availability, share the fare for your specific route and
            dates, and confirm the trip with you before you travel.
          </p>
          <p>
            Our base is {business.addressLocality}, and we&rsquo;re happy to
            discuss travel plans ranging from a short local sightseeing trip
            to a longer multi-city journey across India.
          </p>
        </Container>
      </section>
      <BookingCTA />
    </>
  );
}
