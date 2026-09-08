import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section-y">
      <Container className="max-w-lg text-center">
        <p className="text-sm font-medium text-saffron-600">404</p>
        <h1 className="mt-2 text-2xl font-bold text-navy-800">
          Page not found
        </h1>
        <p className="mt-3 text-navy-500">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <LinkButton href="/" variant="primary">
            Go to Homepage
          </LinkButton>
          <LinkButton href="/book" variant="outline">
            Book a Trip
          </LinkButton>
        </div>
        <p className="mt-6 text-sm text-navy-400">
          Or browse our{" "}
          <Link href="/services" className="text-saffron-600 hover:text-saffron-700">
            services
          </Link>{" "}
          and{" "}
          <Link href="/routes" className="text-saffron-600 hover:text-saffron-700">
            popular routes
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
