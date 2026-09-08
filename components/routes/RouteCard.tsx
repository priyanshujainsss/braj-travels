import Link from "next/link";
import { RouteInfo } from "@/data/types";

export function RouteCard({ route }: { route: RouteInfo }) {
  return (
    <Link
      href={`/routes/${route.slug}`}
      className="group flex flex-col rounded-lg border border-navy-100 bg-white p-5 no-underline transition-colors hover:border-saffron-300"
    >
      <h3 className="text-base font-semibold text-navy-800 group-hover:text-saffron-600">
        {route.from} to {route.to}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-500">
        {route.overview.slice(0, 110)}…
      </p>
      <span className="mt-4 text-sm font-medium text-saffron-600">
        View route details
      </span>
    </Link>
  );
}
