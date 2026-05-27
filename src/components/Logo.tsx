type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export default function Logo({ className = "", showWordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="a2a-grad" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22d3ee" />
            <stop offset="0.5" stopColor="#4f7cff" />
            <stop offset="1" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="32" height="32" rx="9" fill="url(#a2a-grad)" fillOpacity="0.14" />
        <rect x="1" y="1" width="32" height="32" rx="9" stroke="url(#a2a-grad)" strokeOpacity="0.55" strokeWidth="1.2" />
        {/* two facing nodes connected — "apple to apple" / parity */}
        <circle cx="11" cy="17" r="3.4" fill="url(#a2a-grad)" />
        <circle cx="23" cy="17" r="3.4" fill="url(#a2a-grad)" />
        <path d="M11 17 H23" stroke="url(#a2a-grad)" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M17 10.5 V23.5" stroke="url(#a2a-grad)" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" />
      </svg>
      {showWordmark && (
        <span className="text-[15px] font-semibold tracking-tight text-text">
          apple2apple<span className="gradient-text">.ai</span>
        </span>
      )}
    </span>
  );
}
