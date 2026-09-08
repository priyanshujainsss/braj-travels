import { FAQ } from "@/data/types";

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="divide-y divide-navy-100 rounded-lg border border-navy-100 bg-white">
      {faqs.map((faq) => (
        <details key={faq.question} className="group p-5 open:bg-sand-50">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-navy-800 marker:content-none">
            {faq.question}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="shrink-0 text-navy-400 transition-transform group-open:rotate-45"
            >
              <path
                d="M12 5v14M5 12h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-navy-500">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
