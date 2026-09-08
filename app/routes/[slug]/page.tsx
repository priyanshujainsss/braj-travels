import { notFound } from "next/navigation";
import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FAQSection } from "@/components/faq/FAQSection";
import { BookingForm } from "@/components/booking/BookingForm";
import { BookingCTA } from "@/components/booking/BookingCTA";
import { RouteCard } from "@/components/routes/RouteCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/structuredData";
import { buildMetadata } from "@/lib/seo";
import { routes, getRouteBySlug } from "@/data/routes";

export function generateStaticParams() {
  return routes.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const route = getRouteBySlug(params.slug);
  if (!route) return {};
  return buildMetadata({
    title: route.title,
    description: route.metaDescription,
    path: `/routes/${route.slug}`,
  });
}

export default function RouteDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const route = getRouteBySlug(params.slug);
  if (!route) notFound();

  const related = routes.filter((r) => route.relatedRouteSlugs.includes(r.slug));

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Routes", path: "/routes" },
          { name: `${route.from} to ${route.to}`, path: `/routes/${route.slug}` },
        ]}
      />
      <PageHero eyebrow="Route Guide" title={route.title} description={route.overview} />

      <section className="section-y">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6 text-navy-600 leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-navy-800">
                Why travellers book this route
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                {route.whyTravel.map((reason) => (
                  <li key={reason} className="flex items-start gap-2.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-saffron-500"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-navy-800">
                Pickup information
              </h2>
              <p className="mt-2 text-sm">{route.pickupInfo}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-navy-800">
                Travel considerations
              </h2>
              <p className="mt-2 text-sm">{route.travelConsiderations}</p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
              <a href="/one-way-taxi" className="text-saffron-600 hover:text-saffron-700">
                One-way option
              </a>
              <a href="/round-trip-taxi" className="text-saffron-600 hover:text-saffron-700">
                Round-trip option
              </a>
            </div>
          </div>

          <div>
            <BookingForm defaultTripType="One Way" />
          </div>
        </Container>
      </section>

      <section className="section-y bg-sand-50">
        <Container className="max-w-2xl">
          <h2 className="text-lg font-semibold text-navy-800">
            Frequently Asked Questions
          </h2>
          <div className="mt-5">
            <FAQSection faqs={route.faqs} />
          </div>
        </Container>
        <JsonLd data={faqSchema(route.faqs)} />
      </section>

      {related.length > 0 && (
        <section className="section-y">
          <Container>
            <h2 className="text-lg font-semibold text-navy-800">
              Related Routes
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {related.map((r) => (
                <RouteCard key={r.slug} route={r} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <BookingCTA />
    </>
  );
}
