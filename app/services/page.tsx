import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { BookingCTA } from "@/components/booking/BookingCTA";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/data/services";

export const metadata = buildMetadata({
  title: "Our Services",
  description:
    "Local sightseeing, Braj Darshan, outstation taxi, Pan-India tours and customized trips — a complete private car with driver from Govardhan.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Services", path: "/services" }]} />
      <PageHero
        eyebrow="Services"
        title="Private car travel for every kind of trip"
        description="From a short local sightseeing trip to a longer Pan-India journey, every booking is a complete car with a driver."
      />
      <section className="section-y">
        <Container>
          <ServicesGrid services={services} />
        </Container>
      </section>
      <BookingCTA />
    </>
  );
}
