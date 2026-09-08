import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RouteCard } from "@/components/routes/RouteCard";
import { BookingCTA } from "@/components/booking/BookingCTA";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/data/routes";

export const metadata = buildMetadata({
  title: "Popular Routes",
  description:
    "Popular outstation taxi routes from Govardhan and Mathura, including Delhi, Agra and Jaipur — one-way and round-trip options.",
  path: "/routes",
});

export default function RoutesIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Routes", path: "/routes" }]} />
      <PageHero
        eyebrow="Popular Routes"
        title="Popular Taxi Routes from Govardhan & Mathura"
        description="A few frequently requested outstation routes. Don't see your destination here? Any city in India can be entered when you book."
      />
      <section className="section-y">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((route) => (
              <RouteCard key={route.slug} route={route} />
            ))}
          </div>
        </Container>
      </section>
      <BookingCTA />
    </>
  );
}
