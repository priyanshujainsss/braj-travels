import Link from "next/link";
import { Service } from "@/data/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.href}
      className="group flex flex-col rounded-lg border border-navy-100 bg-white p-5 no-underline transition-colors hover:border-saffron-300"
    >
      <h3 className="text-base font-semibold text-navy-800 group-hover:text-saffron-600">
        {service.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-500">
        {service.shortDescription}
      </p>
      <span className="mt-4 text-sm font-medium text-saffron-600">
        Learn more
      </span>
    </Link>
  );
}
