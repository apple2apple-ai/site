# apple2apple.ai — Company Website

The marketing site for **apple2apple.ai**, a studio building fully agentic AI products
(healthcare for small practices, websites for local business, trucking & logistics, and custom).

Built with **Next.js 16 + TypeScript + Tailwind CSS v4 + Framer Motion**. Fully static —
deploys anywhere.

---

## 1. Run it locally

```bash
npm install      # first time only
npm run dev      # http://localhost:3000
```

Other commands:

```bash
npm run build    # production build
npm run start    # serve the production build locally
npm run lint     # lint
```

---

## 2. Edit the content

Almost everything you'll want to tweak lives in **one file**:

### `src/lib/site.ts`
- `email` — the address shown on the site and used as the contact fallback.
- `formspreeEndpoint` — your contact-form endpoint (see step 3).
- `nav`, `social`, `tagline`, brand name.

### Section copy
Each section is its own component in `src/components/`:

| Section | File |
|---|---|
| Top nav | `Navbar.tsx` |
| Hero (headline) | `Hero.tsx` |
| Industries strip | `Marquee.tsx` |
| What we build (4 cards) | `Solutions.tsx` |
| How we work | `Approach.tsx` |
| Why us + stats | `WhyUs.tsx` |
| 4-step process | `Process.tsx` |
| Contact form | `Contact.tsx` |
| Footer | `Footer.tsx` |

Colors and the gradient theme live in `src/app/globals.css` (`--color-brand-*`).

---

## 3. Make the contact form deliver email (Formspree — free, no backend)

The form works out of the box, but until you configure it, it just opens the visitor's
email app addressed to you. To receive submissions in an inbox automatically:

1. Go to **https://formspree.io** and sign up (free tier is fine).
2. Create a new form. Set the **destination email** to where you want enquiries
   (e.g. `admin@apple2apple.ai` once that mailbox exists, or your personal email for now).
3. Formspree gives you an endpoint like `https://formspree.io/f/abcdwxyz`.
4. Paste it into `src/lib/site.ts`:
   ```ts
   formspreeEndpoint: "https://formspree.io/f/abcdwxyz",
   ```
5. Redeploy. Submissions now arrive in that inbox (and Formspree's dashboard).

> The first submission triggers a one-time "confirm this email" click from Formspree.

---

## 4. Deploy (recommended: Vercel — free)

Vercel is the easiest host for Next.js and makes the GoDaddy step trivial.

1. Push this folder to a GitHub repo (it's already a git repo — just add a remote and push).
2. Go to **https://vercel.com**, sign in with GitHub, click **Add New → Project**, and
   import the repo. Accept the defaults (Vercel auto-detects Next.js) and **Deploy**.
3. You'll get a live URL like `apple2apple.vercel.app`. Verify it looks right.

(Netlify works the same way; GitHub Pages needs a static export — ask if you want that route.)

---

## 5. Point `apple2apple.ai` (GoDaddy) at the site

### On Vercel
1. Open your project → **Settings → Domains**.
2. Add `apple2apple.ai` **and** `www.apple2apple.ai`. Vercel shows the exact DNS records
   to create — they'll be the values below.

### On GoDaddy
1. Log in → **My Products → Domains → `apple2apple.ai` → DNS** (Manage DNS).
2. Set these records (delete any conflicting "Parked"/Forwarding records first):

   | Type  | Name  | Value                          | TTL    |
   |-------|-------|--------------------------------|--------|
   | A     | `@`   | `76.76.21.21`                  | 1 hour |
   | CNAME | `www` | `cname.vercel-dns.com`         | 1 hour |

   > Always use the exact values **Vercel shows you** — the A-record IP can change. The table
   > above is Vercel's current standard; confirm against your dashboard.

3. Save. DNS usually propagates in minutes (can take up to a few hours).
4. Back on Vercel, the domain flips to **Valid / Active** and HTTPS is issued automatically.

### If you'd rather just "forward" the domain (simpler, less ideal)
GoDaddy → Domain → **Forwarding** → forward `apple2apple.ai` to your `vercel.app` URL.
This works but the browser address bar may show the vercel URL and it's weaker for SEO.
The A/CNAME approach above is the proper setup.

---

## Notes
- The whole site prerenders to static HTML, so it's fast and cheap to host anywhere.
- Replace `src/app/favicon.ico` with your own brand icon when ready.
- Social links in `site.ts` are placeholders (`#`) — fill them in when you have them.
