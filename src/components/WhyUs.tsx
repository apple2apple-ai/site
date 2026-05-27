import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const reasons = [
  "We build the whole product, not a proof of concept that dies in a slide deck.",
  "AI agents tuned to your workflow — not a generic chatbot bolted onto your business.",
  "Fast, transparent collaboration: you always know what's being built and why.",
  "Security and reliability treated as features, not afterthoughts.",
];

const stats = [
  { value: "End-to-end", label: "From requirement to production" },
  { value: "Weeks", label: "To a working prototype" },
  { value: "100%", label: "Custom to your domain" },
  { value: "24/7", label: "Agents that never clock out" },
];

export default function WhyUs() {
  return (
    <section id="why" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why apple2apple.ai"
              title={
                <>
                  A partner that ships,{" "}
                  <span className="gradient-text">not just advises</span>
                </>
              }
              subtitle="We're a young studio with a simple obsession: building agentic products that actually work in the messy real world."
            />
            <ul className="mt-8 space-y-4">
              {reasons.map((r, i) => (
                <Reveal key={r} delay={i * 0.07}>
                  <li className="flex gap-3.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-violet text-white">
                      <svg width="13" height="13" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M2.5 6.2l2.2 2.2L9.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed text-text/90">{r}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="card-hover rounded-2xl border border-border bg-surface/50 p-6"
                >
                  <div className="text-2xl font-bold tracking-tight gradient-text sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-2 text-xs leading-relaxed text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
