import { Service } from "@/data/types";
import { ServiceCard } from "./ServiceCard";

export function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  );
}
