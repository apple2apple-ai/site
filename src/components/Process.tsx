import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    n: "01",
    title: "Share your requirement",
    desc: "Tell us the problem, the workflow, or the rough idea. No spec required — we'll shape it with you.",
  },
  {
    n: "02",
    title: "We scope & design",
    desc: "We map your domain, define the agents, and agree on what the first version delivers.",
  },
  {
    n: "03",
    title: "Build & prototype",
    desc: "We build a real, working product and put it in front of you fast — then refine on feedback.",
  },
  {
    n: "04",
    title: "Ship & support",
    desc: "We deploy to production, integrate with your tools, and keep improving it over time.",
  },
];

export default function Process() {
  return (
    <section className="relative border-y border-border/60 bg-bg-soft/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="The process"
          title={
            <>
              From your idea to a shipped product in{" "}
              <span className="gradient-text">four steps</span>
            </>
          }
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-bg font-mono text-sm font-semibold text-brand-cyan">
                    {s.n}
                  </div>
                  <h3 className="mt-5 font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
