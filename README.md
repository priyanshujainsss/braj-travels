# Braj Travels — Website

Production-ready Next.js website for Braj Travels, a private taxi and tour
service based in Govardhan, Mathura, Uttar Pradesh.

Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 14** (App Router, Server Components by default)
- **TypeScript**
- **Tailwind CSS**
- **next/image**, **next/font** (Inter)
- Next.js Metadata API, `sitemap.ts`, `robots.ts`
- JSON-LD structured data (Organization, LocalBusiness, Service, FAQPage, BreadcrumbList)

No backend/database — bookings are collected as enquiries and handed off to
WhatsApp or a phone call for manual confirmation. See "Booking model" below.

## Requirements

- Node.js **18.18 or later** (Node 20 LTS recommended)
- npm 9+

## Getting Started

```bash
npm install
cp .env.example .env.local   # then edit values as needed
npm run dev
```

Visit `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env.local` and set:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production domain, used for canonical URLs, sitemap, robots.txt and Open Graph tags. No trailing slash. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number in international format, digits only (e.g. `919719294193`). |
| `NEXT_PUBLIC_PHONE_NUMBER` | Phone number in international format with `+` (e.g. `+919719294193`). |

If these are not set, the site falls back to the values already configured
in `data/business.ts`.

## Available Scripts

```bash
npm run dev      # start local dev server
npm run build    # production build
npm run start    # run the production build locally
npm run lint     # run ESLint
```

## Project Structure

```
app/                  Routes (App Router) — one folder per URL, each with page.tsx
  [service]/           10 static service pages (local-sightseeing, braj-darshan, etc.)
  routes/[slug]/        Dynamic popular-route pages, statically generated
  blog/[slug]/           Dynamic blog post pages, statically generated
  sitemap.ts             Dynamic sitemap
  robots.ts               Dynamic robots.txt
  layout.tsx               Root layout (fonts, header/footer, JSON-LD)
  not-found.tsx / error.tsx / loading.tsx

components/
  layout/          Header, Footer, MobileNav, StickyMobileCTA
  hero/             Hero (homepage), PageHero (inner pages)
  booking/           BookingForm, BookingCTA
  vehicle/            VehicleGallery, VehicleFeatures
  services/            ServiceCard, ServicesGrid, ServicePageTemplate
  routes/               RouteCard
  faq/                    FAQSection
  seo/                     JsonLd, Breadcrumbs
  ui/                       Button, Container, CallButton, WhatsAppButton, SectionHeading

lib/
  whatsapp.ts        createWhatsAppUrl() — single source of truth for wa.me links
  phone.ts             tel: link helper
  seo.ts                buildMetadata() — consistent title/description/canonical/OG/Twitter
  structuredData.ts     JSON-LD builders

data/
  business.ts        NAP (name/address/phone), site URL
  services.ts          10 services
  routes.ts              6 popular routes with unique content
  faqs.ts                  Site-wide FAQ
  vehicle.ts               Vehicle images + features (see below)
  blog.ts                   10 blog posts
  types.ts                   Shared TypeScript types

public/images/vehicle/   Vehicle photos (see "Replacing vehicle images")
public/images/og/            Open Graph share image
```

## Booking Model

The booking form (`components/booking/BookingForm.tsx`) is an **enquiry
form**, not a live booking/payment system. On submit it:

1. Validates the required fields client-side.
2. Shows a confirmation message ("Your trip enquiry has been received...").
3. Offers a pre-filled WhatsApp link (built via `lib/whatsapp.ts`) and a
   `tel:` call link so the customer can send the enquiry immediately.

No data is stored or sent to a server. If you later want to persist
enquiries (e.g. to a database or a notification service), you can add a
form submission handler in `BookingForm.tsx` without changing any other
part of the site.

## Replacing Vehicle Images

Vehicle images are centralized in `data/vehicle.ts` and currently point to
**representative placeholder images** in `public/images/vehicle/` — not
real photos of the vehicle.

To replace them with real photos:

1. Add your photos to `public/images/vehicle/` (recommended: `.webp`,
   under ~300KB each, roughly 4:3 aspect ratio).
2. Update the `src` and `alt` fields in `data/vehicle.ts` — no component
   changes are needed, since every page pulls images from this file.
3. Keep alt text descriptive, e.g. `"AC car used for Braj
   Travels outstation trips"` rather than generic text like `"car"`.

## Changing the Phone Number or WhatsApp Number

Update `data/business.ts` (`phoneDisplay`, `phoneRaw`, `whatsappRaw`), or
set `NEXT_PUBLIC_PHONE_NUMBER` / `NEXT_PUBLIC_WHATSAPP_NUMBER` as
environment variables — these take priority over the values in
`data/business.ts`. Every button and link in the site reads from
`lib/phone.ts` and `lib/whatsapp.ts`, so there's nowhere else to update.

## Changing the Domain

Set `NEXT_PUBLIC_SITE_URL` in your environment (or in Vercel's project
settings). This feeds the canonical URLs, sitemap, robots.txt and Open
Graph tags via `lib/seo.ts` and `data/business.ts`.

## Adding a New Route Page

1. Add an entry to the `routes` array in `data/routes.ts` (slug, from/to,
   overview, FAQs, etc. — see existing entries for the shape).
2. The page is generated automatically at `/routes/[slug]` via
   `generateStaticParams()` in `app/routes/[slug]/page.tsx`.
3. It will also appear automatically in `/routes`, the footer, and
   `app/sitemap.ts`.

## Adding a New Blog Post

1. Add an entry to the `blogPosts` array in `data/blog.ts` (slug, title,
   meta description, content sections, related links).
2. The page is generated automatically at `/blog/[slug]`.
3. It will appear automatically on `/blog` and in `app/sitemap.ts`.

## Adding a New Service Page

1. Add the service to `data/services.ts`.
2. Create a folder under `app/your-service-slug/page.tsx` using
   `components/services/ServicePageTemplate.tsx` as a template (copy one
   of the existing service pages, e.g. `app/one-way-taxi/page.tsx`, and
   adjust the copy).
3. Add the route to `app/sitemap.ts`'s `staticPaths` (or `servicePaths`,
   since it already maps from `data/services.ts`).

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, "Add New Project" → import the repository.
3. Vercel auto-detects Next.js — no custom build settings are required.
4. Add the environment variables from `.env.example` under
   **Project Settings → Environment Variables**.
5. Deploy. Subsequent pushes to your default branch redeploy automatically.

## Content & Trust Guidelines Followed

This project intentionally avoids:

- Any mention of vehicle count or fleet size (positioned around the
  vehicle and service, not fleet size).
- Fabricated testimonials, ratings, or "X+ happy customers" claims — see
  `components/home/ReviewsPlaceholder.tsx`.
- Invented pricing — every page uses "Get Fare Estimate" / "Request Fare
  Estimate" language instead of published rates.
- A public live GPS map or exposed tracking endpoints.
- Fake business branches, addresses, or years of experience.
- The vehicle's specific make/model name (e.g. "Ertiga") anywhere on the
  site — the vehicle is described generically as an "AC car with driver"
  so that customers don't assume a particular price bracket based on the
  model. See `vehicleName` / `vehicleDescriptor` in `data/vehicle.ts` if
  this positioning ever needs to change.

If any of this business positioning changes in the future (e.g. a second
vehicle is added), update the relevant copy in `data/vehicle.ts`,
`app/our-car/page.tsx`, and `data/faqs.ts`.
