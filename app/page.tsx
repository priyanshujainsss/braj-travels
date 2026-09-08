import Link from "next/link";
import { Hero } from "@/components/hero/Hero";
import { TrustPoints } from "@/components/home/TrustPoints";
import { HowBookingWorks } from "@/components/home/HowBookingWorks";
import { BookingCTA } from "@/components/booking/BookingCTA";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { RouteCard } from "@/components/routes/RouteCard";
import { FAQSection } from "@/components/faq/FAQSection";
import { VehicleGallery } from "@/components/vehicle/VehicleGallery";
import { VehicleFeatures } from "@/components/vehicle/VehicleFeatures";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { services } from "@/data/services";
import { routes } from "@/data/routes";
import { generalFaqs } from "@/data/faqs";
import { vehicleImages, vehicleFeatures, vehicleDescriptor } from "@/data/vehicle";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Private Taxi & Tour Service from Govardhan",
  description:
    "Book a complete AC car with driver from Govardhan for local sightseeing, Braj Darshan, outstation journeys, Pan-India travel and customized tours.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustPoints />

      <section className="section-y">
        <Container>
          <SectionHeading
            title="Our Services"
            description="A complete private car with driver, for every kind of trip from Govardhan and Mathura."
          />
          <div className="mt-8">
            <ServicesGrid services={services} />
          </div>
          <div className="mt-8">
            <LinkButton href="/services" variant="outline">
              Explore All Services
            </LinkButton>
          </div>
        </Container>
      </section>

      <section className="section-y bg-sand-50">
        <Container>
          <SectionHeading
            title="Why Choose Braj Travels"
            description="A straightforward, private-car travel experience with no shared seating and no self-drive confusion."
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Complete Car Booking",
              "Driver Included",
              "AC Car",
              "GPS Tracking",
              "Flexible Travel Plans",
              "Direct Booking",
              "Local Base in Govardhan",
              "Outstation Travel",
              "Pan-India Travel",
            ].map((point) => (
              <li
                key={point}
                className="rounded-lg border border-navy-100 bg-white px-4 py-3 text-sm font-medium text-navy-700"
              >
                {point}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section-y">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              title={vehicleDescriptor}
              description="Travel comfortably with an AC car and a professional driver for local sightseeing, Braj Darshan, outstation journeys and customized trips."
            />
            <div className="mt-6">
              <VehicleFeatures features={vehicleFeatures} />
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <LinkButton href="/our-car" variant="secondary">
                Book This Car
              </LinkButton>
            </div>
          </div>
          <VehicleGallery images={vehicleImages} />
        </Container>
      </section>

      <section className="section-y bg-navy-800">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div>
            <p className="text-sm font-medium text-saffron-300">
              Local Sightseeing
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              Govardhan, Mathura &amp; Vrindavan
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-200">
              Flexible sightseeing with a private car and driver — pick your
              stops and pace.
            </p>
            <Link
              href="/local-sightseeing"
              className="mt-4 inline-block text-sm font-medium text-saffron-300 hover:text-saffron-200"
            >
              Explore Local Sightseeing →
            </Link>
          </div>
          <div>
            <p className="text-sm font-medium text-saffron-300">Braj Darshan</p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              Private Darshan by Car
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-200">
              A customized itinerary across Braj&rsquo;s key sites, built around
              what matters to you.
            </p>
            <Link
              href="/braj-darshan"
              className="mt-4 inline-block text-sm font-medium text-saffron-300 hover:text-saffron-200"
            >
              Plan Braj Darshan →
            </Link>
          </div>
          <div>
            <p className="text-sm font-medium text-saffron-300">
              Outstation &amp; Pan-India
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              Beyond Braj, Across India
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-200">
              One-way, round-trip or multi-day travel — from Govardhan to
              destinations across India.
            </p>
            <Link
              href="/pan-india-tours"
              className="mt-4 inline-block text-sm font-medium text-saffron-300 hover:text-saffron-200"
            >
              See Pan-India Travel →
            </Link>
          </div>
        </Container>
      </section>

      <section className="section-y">
        <Container>
          <SectionHeading
            title="Popular Routes"
            description="A few frequently requested outstation routes from Govardhan and Mathura."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((route) => (
              <RouteCard key={route.slug} route={route} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-y bg-sand-50">
        <Container>
          <SectionHeading
            title="Customized Tours"
            description="Family trips, pilgrimage journeys or a longer road trip — tell us your plan and we'll build the itinerary."
          />
          <div className="mt-6">
            <LinkButton href="/customized-tours" variant="secondary">
              Plan My Trip
            </LinkButton>
          </div>
        </Container>
      </section>

      <section className="section-y">
        <Container>
          <SectionHeading title="How Booking Works" align="center" />
          <div className="mt-8">
            <HowBookingWorks />
          </div>
        </Container>
      </section>

      <section className="section-y bg-sand-50">
        <Container className="max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" align="center" />
          <div className="mt-8">
            <FAQSection faqs={generalFaqs.slice(0, 8)} />
          </div>
          <div className="mt-6 text-center">
            <Link href="/faq" className="text-sm font-medium text-saffron-600">
              View all FAQs →
            </Link>
          </div>
        </Container>
      </section>

      <BookingCTA />
    </>
  );
}
