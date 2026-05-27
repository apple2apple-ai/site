import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Solution = {
  title: string;
  blurb: string;
  points: string[];
  icon: React.ReactNode;
  accent: string;
};

const solutions: Solution[] = [
  {
    title: "Healthcare for small practices",
    blurb:
      "Agentic tools that take the busywork off small clinics and practices — so they can focus on patients, not paperwork.",
    points: ["Intake & scheduling agents", "Claims & billing automation", "Patient follow-ups & reminders"],
    accent: "from-brand-cyan/25 to-transparent",
    icon: (
      <path d="M12 3v18M3 12h18" strokeWidth="2.5" strokeLinecap="round" />
    ),
  },
  {
    title: "Websites for local business",
    blurb:
      "Modern, fast websites with built-in AI — handling enquiries, bookings, and leads around the clock for local businesses.",
    points: ["AI-powered lead capture", "Booking & enquiry agents", "Always-on, SEO-ready sites"],
    accent: "from-brand-blue/25 to-transparent",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="2" />
        <path d="M3 9h18" strokeWidth="2" />
      </>
    ),
  },
  {
    title: "Trucking & logistics",
    blurb:
      "Software for fleets and carriers — automating dispatch, documents, and the endless coordination that keeps freight moving.",
    points: ["Dispatch & load agents", "Document & compliance automation", "Driver & customer comms"],
    accent: "from-brand-violet/25 to-transparent",
    icon: (
      <>
        <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="7" cy="17" r="1.6" strokeWidth="2" />
        <circle cx="18" cy="17" r="1.6" strokeWidth="2" />
      </>
    ),
  },
  {
    title: "...and your idea",
    blurb:
      "Have a different domain or a problem you can't find software for? That's exactly our sweet spot. We build custom agentic products from the ground up.",
    points: ["Custom AI agents & workflows", "From prototype to production", "Built around your operations"],
    accent: "from-brand-cyan/20 via-brand-violet/20 to-transparent",
    icon: (
      <>
        <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" strokeWidth="1.8" strokeLinejoin="round" />
      </>
    ),
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="What we build"
          title={
            <>
              Real products for <span className="gradient-text">real industries</span>
            </>
          }
          subtitle="We don't sell demos. We ship working, agentic software tailored to how a specific industry actually operates."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <article className="group card-hover relative h-full overflow-hidden rounded-2xl border border-border bg-surface/50 p-7">
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${s.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-bg-soft text-brand-cyan">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      {s.icon}
                    </svg>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{s.blurb}</p>
                  <ul className="mt-5 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-sm text-text/90">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-blue/15 text-brand-cyan">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M2 5l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
