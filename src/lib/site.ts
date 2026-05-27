// Central place to edit site-wide values.
export const site = {
  name: "apple2apple.ai",
  shortName: "apple2apple",
  domain: "apple2apple.ai",
  email: "admin@apple2apple.ai",
  tagline: "Agentic AI products, built end to end.",
  // Replace with your real Formspree form ID once created at https://formspree.io
  // Example: "https://formspree.io/f/abcdwxyz"
  formspreeEndpoint: "https://formspree.io/f/your-form-id",
  social: {
    linkedin: "#",
    x: "#",
    github: "#",
  },
  nav: [
    { label: "What we build", href: "#solutions" },
    { label: "How we work", href: "#approach" },
    { label: "Why us", href: "#why" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
