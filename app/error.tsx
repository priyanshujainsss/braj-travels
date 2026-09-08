"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <section className="section-y">
      <Container className="max-w-lg text-center">
        <h1 className="text-2xl font-bold text-navy-800">
          Something went wrong
        </h1>
        <p className="mt-3 text-navy-500">
          Please try again, or contact us directly by phone or WhatsApp if
          the problem continues.
        </p>
        <div className="mt-6">
          <Button onClick={() => reset()} variant="primary">
            Try Again
          </Button>
        </div>
      </Container>
    </section>
  );
}
