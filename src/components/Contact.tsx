"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const isConfigured = !site.formspreeEndpoint.includes("your-form-id");

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Until Formspree is configured, fall back to opening the user's email client.
    if (!isConfigured) {
      const data = new FormData(form);
      const subject = encodeURIComponent(`Project enquiry from ${data.get("name") || "website"}`);
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company")}\n\n${data.get("message")}`
      );
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(site.formspreeEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-[30rem] w-[40rem] -translate-x-1/2 rounded-full bg-brand-blue/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl px-5">
        <div className="overflow-hidden rounded-3xl border border-border bg-surface/60 glass">
          <div className="grid lg:grid-cols-5">
            {/* Left: pitch */}
            <div className="relative border-b border-border p-8 sm:p-10 lg:col-span-2 lg:border-b-0 lg:border-r">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-soft px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted">
                  Contact
                </span>
                <h2 className="mt-5 text-3xl font-bold tracking-tight">
                  Have a <span className="gradient-text">requirement?</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Tell us what you&apos;re trying to build or the problem you&apos;re trying to
                  solve. We&apos;ll get back to you with how we&apos;d approach it — usually within
                  a day.
                </p>

                <a
                  href={`mailto:${site.email}`}
                  className="mt-8 inline-flex items-center gap-2.5 text-sm font-medium text-text transition-colors hover:text-brand-cyan"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-bg-soft text-brand-cyan">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                  </span>
                  {site.email}
                </a>
              </Reveal>
            </div>

            {/* Right: form */}
            <div className="p-8 sm:p-10 lg:col-span-3">
              {status === "success" ? (
                <div className="flex h-full min-h-[18rem] flex-col items-center justify-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-violet text-white">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">Message sent</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted">
                    Thanks for reaching out — we&apos;ll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name" name="name" type="text" placeholder="Jane Doe" required />
                    <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
                  </div>
                  <Field label="Company / project" name="company" type="text" placeholder="Acme Clinic" />
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text/90">
                      What do you want to build?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about the problem, the workflow, or the idea..."
                      className="w-full resize-none rounded-xl border border-border bg-bg-soft px-4 py-3 text-sm text-text placeholder:text-muted/60 outline-none transition-colors focus:border-brand-blue/60"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-400">
                      Something went wrong. Please email us directly at{" "}
                      <a href={`mailto:${site.email}`} className="underline">
                        {site.email}
                      </a>
                      .
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "submitting" ? "Sending..." : "Send your requirement"}
                    {status !== "submitting" && (
                      <span className="transition-transform group-hover:translate-x-0.5">→</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-text/90">
        {label}
        {required && <span className="text-brand-cyan"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-bg-soft px-4 py-3 text-sm text-text placeholder:text-muted/60 outline-none transition-colors focus:border-brand-blue/60"
      />
    </div>
  );
}
