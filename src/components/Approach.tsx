import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const features = [
  {
    title: "Agentic by design",
    desc: "Our products don't just answer — they plan, decide, and act. Software that gets the job done, not just chats about it.",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" strokeWidth="2" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "End-to-end ownership",
    desc: "From the first conversation to a deployed, maintained product. Design, build, integrate, ship — one accountable team.",
    icon: (
      <>
        <path d="M4 7l8-4 8 4v10l-8 4-8-4z" strokeWidth="2" strokeLinejoin="round" />
        <path d="M4 7l8 4 8-4M12 11v10" strokeWidth="2" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Domain-aware, not generic",
    desc: "We learn how your industry actually works — its rules, edge cases, and language — so the agents make sense in the real world.",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" strokeWidth="2" />
        <path d="M21 21l-4.3-4.3" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Ship fast, iterate faster",
    desc: "A working prototype in weeks, not quarters. We put it in front of real users and improve relentlessly from there.",
    icon: (
      <>
        <path d="M13 2L4.5 13H11l-1 9 8.5-11H12z" strokeWidth="2" strokeLinejoin="round" />
      </>
    ),
  },
];

export default function Approach() {
  return (
    <section id="approach" className="relative scroll-mt-24 border-y border-border/60 bg-bg-soft/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A studio built to turn ideas into <span className="gradient-text">autonomous software</span>
            </>
          }
          subtitle="Four principles that shape everything we ship."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="card-hover h-full rounded-2xl border border-border bg-surface/50 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-violet/10 text-brand-cyan">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    {f.icon}
                  </svg>
                </div>
                <h3 className="mt-5 font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
