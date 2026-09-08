export function SectionHeading({
  title,
  description,
  align = "left",
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <h2 className="text-2xl sm:text-3xl font-semibold text-navy-800">{title}</h2>
      {description && (
        <p className="mt-3 text-base text-navy-500 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
