const items = [
  "Healthcare",
  "Local Business",
  "Trucking & Logistics",
  "Operations",
  "Customer Support",
  "Scheduling",
  "Billing & Claims",
  "Field Services",
  "Inventory",
  "Compliance",
];

export default function Marquee() {
  return (
    <section className="relative border-y border-border/60 bg-bg-soft/40 py-7">
      <div className="mb-4 text-center text-xs uppercase tracking-[0.2em] text-muted/70">
        Domains we build for
      </div>
      <div className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-lg font-medium text-muted/80 transition-colors hover:text-text"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
