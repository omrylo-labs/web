# Omrylo Web

Official V1 landing page for Omrylo, an AI-powered story world product.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- App Router
- Static export for Cloudflare Pages

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

The build generates the static export in:

```text
out/
```

## Cloudflare Pages Deployment

Use these Cloudflare Pages settings:

- Framework preset: Next.js (Static HTML Export)
- Production branch: main
- Build command: `npx next build`
- Build output directory: `out`

After deployment, connect the custom domains:

- `omrylo.com`
- `www.omrylo.com`

## V1 Scope

This repository is only for the first official Omrylo static landing page.

V1 does not include backend logic, API routes, database, authentication,
waitlist collection, analytics, tracking scripts, payments, AI chat, admin
dashboard, or a blog system.
