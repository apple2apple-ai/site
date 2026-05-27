"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute -top-32 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-brand-blue/20 blur-[120px] animate-blob" />
        <div className="absolute -top-10 right-[8%] h-[26rem] w-[26rem] rounded-full bg-brand-violet/20 blur-[110px] animate-blob [animation-delay:-6s]" />
        <div className="absolute top-40 left-[6%] h-[24rem] w-[24rem] rounded-full bg-brand-cyan/15 blur-[110px] animate-blob [animation-delay:-12s]" />
      </div>

      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-cyan" />
              </span>
              An AI product studio · building autonomous software
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-7 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
          >
            We build <span className="gradient-text">fully agentic</span> AI products
            for the businesses that run the world.
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            From healthcare practices and local shops to trucking fleets — apple2apple.ai
            designs, builds, and ships intelligent agents that do real work, end to end.
            You bring the requirement. We bring the product.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 transition-transform hover:scale-[1.03]"
            >
              Tell us your requirement
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-6 py-3 text-sm font-semibold text-text backdrop-blur transition-colors hover:border-brand-blue/50"
            >
              See what we build
            </a>
          </motion.div>
        </div>

        {/* Floating agent-pipeline visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="glass glow-ring rounded-2xl p-2 animate-float">
            <div className="rounded-xl bg-bg-soft/80 p-5 sm:p-7">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                <span className="ml-3 font-mono text-xs text-muted">agent · run</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { step: "01", title: "Understand", desc: "Ingest the goal, data & constraints" },
                  { step: "02", title: "Act", desc: "Plan, call tools & take actions autonomously" },
                  { step: "03", title: "Deliver", desc: "Verified output, shipped to production" },
                ].map((c) => (
                  <div
                    key={c.step}
                    className="rounded-lg border border-border bg-surface/60 p-4 text-left"
                  >
                    <div className="font-mono text-xs text-brand-cyan">{c.step}</div>
                    <div className="mt-2 text-sm font-semibold text-text">{c.title}</div>
                    <div className="mt-1 text-xs leading-relaxed text-muted">{c.desc}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-lg border border-brand-blue/30 bg-brand-blue/5 px-4 py-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                <span className="font-mono text-xs text-muted">
                  status: <span className="text-green-400">agents online</span> — turning requirements into shipped software
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
