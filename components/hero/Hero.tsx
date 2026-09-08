import Image from "next/image";
import { LinkButton } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CallButton } from "@/components/ui/CallButton";
import { Container } from "@/components/ui/Container";
import { vehicleImages } from "@/data/vehicle";

export function Hero() {
  const heroImage = vehicleImages.find((img) => img.type === "hero") ?? vehicleImages[0];

  return (
    <section className="bg-navy-800">
      <Container className="grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_1fr] lg:py-20">
        <div>
          <p className="text-sm font-medium text-saffron-300">
            Govardhan, Mathura, Uttar Pradesh
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[42px]">
            Private Taxi &amp; Tour Service from Govardhan
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-100">
            Book a complete AC car with driver for local sightseeing, Braj
            Darshan, outstation journeys, Pan-India travel and customized
            tours.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <LinkButton href="/book" variant="primary">
              Book Your Trip
            </LinkButton>
            <WhatsAppButton variant="secondary" />
            <CallButton
              variant="outline"
              className="border-navy-500 text-white hover:bg-navy-700"
            />
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}

