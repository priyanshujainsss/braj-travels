import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-navy-100 bg-sand-50">
      <Container className="py-10 lg:py-14">
        {eyebrow && (
          <p className="text-sm font-medium text-saffron-600">{eyebrow}</p>
        )}
        <h1 className="mt-2 max-w-2xl text-3xl font-bold text-navy-800 sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-500">
            {description}
          </p>
        )}
        {children && <div className="mt-6 flex flex-wrap gap-3">{children}</div>}
      </Container>
    </section>
  );
}
