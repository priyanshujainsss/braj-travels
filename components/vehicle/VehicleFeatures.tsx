export function VehicleFeatures({ features }: { features: readonly string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-2.5 text-navy-700">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="mt-0.5 shrink-0 text-saffron-500"
          >
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm">{feature}</span>
        </li>
      ))}
    </ul>
  );
}
