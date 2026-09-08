import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { VehicleGallery } from "@/components/vehicle/VehicleGallery";
import { VehicleFeatures } from "@/components/vehicle/VehicleFeatures";
import { BookingCTA } from "@/components/booking/BookingCTA";
import { LinkButton } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { vehicleImages, vehicleFeatures, vehicleDescriptor } from "@/data/vehicle";

export const metadata = buildMetadata({
  title: "Our Vehicle — Comfortable AC Car with Driver",
  description:
    "Travel comfortably in an AC car with a professional driver for local sightseeing, Braj Darshan, airport transfers, outstation journeys and customized trips.",
  path: "/our-car",
});

export default function OurCarPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Our Car", path: "/our-car" }]} />
      <PageHero eyebrow="Our Vehicle" title={vehicleDescriptor} />

      <section className="section-y">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <VehicleGallery images={vehicleImages} />

          <div>
            <p className="text-navy-600 leading-relaxed">
              Travel comfortably in an AC car with a professional driver for
              local sightseeing, Braj Darshan, airport transfers, outstation
              journeys and customized trips. This is a complete-car booking —
              the vehicle and driver are booked together, not shared with
              other passengers.
            </p>
            <p className="mt-4 text-navy-600 leading-relaxed">
              Comfortable private-car travel for families and small groups,
              with adequate luggage space for outstation trips.
            </p>

            <div className="mt-6">
              <VehicleFeatures features={vehicleFeatures} />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/book" variant="primary">
                Book This Car
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-y bg-sand-50">
        <Container className="max-w-2xl">
          <h2 className="text-xl font-semibold text-navy-800">
            GPS-Tracked Vehicle
          </h2>
          <p className="mt-3 text-navy-600 leading-relaxed">
            Our vehicle is equipped with live GPS tracking for added
            operational visibility and travel confidence. We do not publish a
            public live location for the vehicle; tracking is used
            operationally rather than shared as a public feature.
          </p>
        </Container>
      </section>

      <BookingCTA />
    </>
  );
}

