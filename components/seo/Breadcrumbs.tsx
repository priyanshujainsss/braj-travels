import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema } from "@/lib/structuredData";

export interface Crumb {
  name: string;
  path: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full = [{ name: "Home", path: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="border-b border-navy-100/60 bg-sand-50">
      <div className="container-content py-3">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-navy-500">
          {full.map((item, i) => {
            const isLast = i === full.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1.5">
                {i > 0 && <span aria-hidden="true">/</span>}
                {isLast ? (
                  <span className="font-medium text-navy-700" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="hover:text-saffron-600">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
      <JsonLd data={breadcrumbSchema(full)} />
    </nav>
  );
}
