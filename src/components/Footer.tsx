import Logo from "./Logo";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-soft/40">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">{site.tagline}</p>
          </div>

          <nav className="flex flex-col gap-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted/70">Explore</span>
            {site.nav.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted transition-colors hover:text-text">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted/70">Get in touch</span>
            <a href={`mailto:${site.email}`} className="text-sm text-muted transition-colors hover:text-text">
              {site.email}
            </a>
            <a href="#contact" className="text-sm text-muted transition-colors hover:text-text">
              Start a project
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted/70">{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}
