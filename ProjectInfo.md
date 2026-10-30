# TD Captains Services — Project Information

Last reviewed: October 29, 2026. Read `HANDOFF.md` for history, setup, operational checks, and known issues.

## Purpose and ownership

This is the customer-facing marine services website for Troy Dube's business. Tim Dube created and developed the repository and is handing it over so Troy can continue with an AI coding assistant.

- Repository: https://github.com/TimDubePersonalAccount/TDCaptainsServices
- Website supplied by Tim: https://www.tdcaptainservicescorp.com/
- Hosting supplied by Tim: Vercel. The current project ID, team, production branch, domain settings, and deployment status were not verified during this handoff.
- Start from `main`. The original development branch is spelled `Reformating_Website` (one "t" in Reformating).
- GitHub collaborator access, Vercel access, local clone access, and an assistant's connected-account permissions are separate. An invitation or downloaded repository does not configure all four.

## Stack and commands

| Item | Repository configuration |
| --- | --- |
| Framework | Next.js 16.1.6, App Router |
| UI | React / React DOM 19.2.3 |
| Language | TypeScript, strict mode, `@/*` points to the project root |
| Styling | Tailwind CSS 4 via PostCSS; tokens in `app/globals.css` |
| Mail | Nodemailer ^8.0.5; Node.js route handlers |
| Package manager | npm, with committed `package-lock.json` |
| Development | `npm ci`, then `npm run dev` |
| Validation | `npm run lint`, `npm run build` |
| Production locally | `npm run build`, then `npm start` |
| Automated tests | No test script or dedicated test suite currently supplied |

Validation on the handoff machine used Node v24.22.1 and npm 11.19.1. This is an observed environment, not an `engines` requirement in package.json.

## Routes and source map

| Route / concern | Files |
| --- | --- |
| Global shell, title template, fonts | `app/layout.tsx` |
| Home | `app/page.tsx`, `components/Hero.tsx`, `components/HowItWorksStrip.tsx`, `components/ServicesGrid.tsx` |
| About | `app/about/page.tsx` |
| General contact | `app/contact/page.tsx` → `components/InquiryForm.tsx` in contact mode → `app/api/contact/route.ts` |
| Service request | `app/request-service/page.tsx` → `components/InquiryForm.tsx` → `app/api/service-request/route.ts` |
| Captain for hire | `app/services/captain-for-hire/page.tsx` |
| Launch service | `app/services/launch-service/page.tsx` |
| Maintenance | `app/services/maintenance/page.tsx` |
| Marine electronics | `app/services/marine-electronics/page.tsx` |
| Towing | `app/services/towing-services/page.tsx` (custom page) |
| Standard service layout | `components/ServiceDetail.tsx`, `components/SubserviceTile.tsx` |
| Navigation / footer | `components/Navbar.tsx`, `components/Footer.tsx` |
| Shared business/menu/card data | `components/site-data.ts` |
| Mail transport / validation / escaping | `lib/mail.ts` |
| Images and video | `public/Images/`, `public/Videos/`, `public/Website_Images/` |
| Historical business copy | `OldSiteInfo.txt` — reference only, not verified current facts |

There is no current `/services` index page. Service pages use explicit folders, not a dynamic `[slug]` route. The older `Development` implementation used `data/services.json`, `lib/services.ts`, and a dynamic route; do not confuse that historical architecture with current `main`.

## Forms and configuration

The forms send email; they do not save inquiries to a database or create confirmed bookings. Both API routes require name, email, phone, and message. Service requests additionally require boatLocation and requestedService. Contact boatLocation is optional.

Put real values in ignored `.env.local` for local development and the Vercel project's environment settings for deployments. Start from the committed, placeholder-only `.env.example`.

| Variable | Use |
| --- | --- |
| `SMTP_HOST` | SMTP server hostname |
| `SMTP_PORT` | Numeric SMTP port |
| `SMTP_SECURE` | Optional string `true` or `false`; omitted means true for port 465 |
| `SMTP_USER` | Mail account username |
| `SMTP_PASS` | Mail account's SMTP credential / provider app password |
| `SERVICE_REQUEST_FROM_EMAIL` | Required sender permitted by the provider |
| `SERVICE_REQUEST_TO_EMAIL` | Required destination for both forms |

Do not commit `.env.local`, credentials, provider tokens, or `.vercel` metadata. There is no recipient fallback in current `lib/mail.ts`. The historical Gmail default commit is preserved separately and is not a reason to assume the live mail configuration.

## Brand and business facts requiring care

Current shared source uses general phone `(845) 535-4288` and emergency hotline `(845) 535-4290`. The towing page separately uses captain-on-call `(845) 535-5100` and TowBoatUS dispatch `(800) 391-4869`. `OldSiteInfo.txt` also has `(845) 535-4280`; Troy must confirm the intended numbers before changing them.

The design uses navy, red, gold, white, and warm neutral colors, Merriweather headings, Source Sans 3 body text, a video hero, and the supplied boat logo. Token names are historical: `ocean-900` is red and `ocean-800` is gold, not shades of blue. Preserve image filename case for Linux/Vercel.

## Immediate maintenance priorities

1. Confirm business phone numbers, service scope, company wording, and towing affiliation with Troy.
2. Reconcile home-page repair/drone cards with the five-option request form; those two query values currently have no matching option.
3. Replace draft About/Contact and towing-page editorial copy with approved customer wording.
4. Verify Vercel's actual production branch and all SMTP values; test delivery with Troy's agreement and confirm inbox receipt.
5. Review desktop dropdown keyboard behavior, expanded state, and close behavior; test the new header at tablet and desktop widths.

## Handoff validation

ESLint passed. Production build and TypeScript checks passed using a process-local `NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1` setting after the default build could not fetch Google Fonts due to local TLS trust. No certificate verification was disabled and no config change was committed. Actual mail delivery, the live Vercel deployment, and visual approval remain unverified. See `HANDOFF.md` for exact scope and follow-up checks.
