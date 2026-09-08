const steps = [
  {
    title: "Send Trip Details",
    detail: "Share your pickup, destination, dates and passengers.",
  },
  {
    title: "We Check Availability",
    detail: "We confirm whether the vehicle is free for your dates.",
  },
  {
    title: "Get Fare & Confirmation",
    detail: "We share the fare and confirm your booking over call or WhatsApp.",
  },
  {
    title: "Travel with Braj Travels",
    detail: "Your driver arrives at the agreed pickup point and time.",
  },
];

export function HowBookingWorks() {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <li key={step.title} className="rounded-lg border border-navy-100 bg-white p-5">
          <span className="text-sm font-semibold text-saffron-600">
            {i + 1}
          </span>
          <p className="mt-2 text-base font-semibold text-navy-800">
            {step.title}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-navy-500">
            {step.detail}
          </p>
        </li>
      ))}
    </ol>
  );
}
