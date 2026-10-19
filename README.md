# Algojo Law

Responsive single-page website for Algojo Law, built from the Figma design
"Legal Services Homepage" (desktop 1440 px and mobile 390 px frames).

Stack: Vite, React, TypeScript, Tailwind CSS v4. No backend.

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build     # type-check + production build into dist/
npm run lint      # oxlint
```

## Structure

- `src/sections/` — one component per page section (header & hero, credentials,
  practice areas, why choose us, process, attorneys, approach, insights,
  testimonials, FAQ, consultation, footer)
- `src/components/` — shared UI (`Button`, `Eyebrow`, `SectionHeader`,
  `NotchCard`, `Logo`) and `Icon` (stroke icons exported from the Figma file)
- `src/assets/images/` — images exported from the Figma file
- `src/index.css` — design tokens (colors, fonts) from the Figma file

## Placeholder content

The design intentionally uses placeholders (`[Phone number]`, `[Attorney Name]`,
`[00]+` metrics, sample testimonial, etc.). Replace them with verified firm
information before publishing.

The consultation form and newsletter sign-up are not connected to any service;
submitting them only shows a status message. Connect a form handler of your
choice before relying on them.

## Deploy to GitHub Pages

`.github/workflows/deploy.yml` builds and deploys on every push to `main`. The
base path is taken from the repository name automatically, so the site works
at `https://<owner>.github.io/<repository>/`.

One-time setup: in the repository on GitHub, go to **Settings → Pages** and set
**Source** to **GitHub Actions**.
