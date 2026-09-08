import { Container } from "@/components/ui/Container";

const points = [
  { label: "Complete Car Booking", detail: "Not shared, not self-drive" },
  { label: "Driver Included", detail: "Every trip, every route" },
  { label: "AC Car", detail: "Comfortable family travel" },
  { label: "GPS-Tracked Vehicle", detail: "Operational visibility" },
];

export function TrustPoints() {
  return (
    <section className="border-y border-navy-100 bg-white">
      <Container className="grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
        {points.map((point) => (
          <div key={point.label}>
            <p className="text-sm font-semibold text-navy-800">{point.label}</p>
            <p className="mt-1 text-xs text-navy-400">{point.detail}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
