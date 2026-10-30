# TD Captains Services — Owner and AI Development Handoff

Prepared October 29, 2026, for Troy Dube and the assistant helping him continue the website. Tim Dube requested this handoff, a `ProjectInfo.md` reference, preservation of outstanding work, and publication to GitHub.

## 1. Start here

The repository is https://github.com/TimDubePersonalAccount/TDCaptainsServices and the website Tim supplied is https://www.tdcaptainservicescorp.com/. Tim says the site is hosted on Vercel. The code and history were inspected locally and remote branch refs were fetched from GitHub. The live Vercel configuration and production deployment were not inspected.

Read `ProjectInfo.md` for the compact source map and environment variables. Read this file for the background and operational details. `AGENTS.md` directs coding assistants to these documents. These files are context, not evidence that every business statement or live integration has been approved.

Use `main` for a fresh checkout. There are historical branches with different architectures. Do not select one merely because its name sounds newer, or overwrite current code with an older folder.

### First session with an assistant

Give the assistant access to the actual cloned project folder, then ask:

> Read AGENTS.md, ProjectInfo.md, and HANDOFF.md. Check the current branch, working tree, and recent commits. Explain the current website and its unresolved business questions before making the change I request. Keep credentials out of Git and report what you actually tested.

Do not send an assistant a real SMTP password in a committed Markdown file. Local files and connected GitHub/Vercel accounts need their own access setup on Troy's computer.

## 2. Business and product scope

The site markets marine support on the Hudson River: captain services, launch service, maintenance, marine electronics, towing, and related assistance. Its main conversion paths are telephone links and emailed inquiries/service requests. There is no customer account system, database-backed inbox, payment checkout, appointment calendar, or dispatch management system in the inspected current source.

The interface is a Next.js site with a video-and-logo home hero, a process strip, service cards, detailed service pages, About and Contact pages, and a request form. It uses a fixed header and footer. The desktop and mobile navigation are separately rendered responsive layouts.

The newly preserved towing page draws on the old-site reference. It lists towing, fuel delivery, battery jump starts, soft ungroundings, dock-to-dock towing, salvage support, and dispatch. It names NYC, North Jersey, and the Lower Hudson Valley, with specific waterways. Those are existing source claims for Troy to verify, not a new verification of coverage or affiliation.

### Contact data: do not silently normalize it

| Purpose | Value in inspected material | Location |
| --- | --- | --- |
| General shared business phone | `(845) 535-4288` | `components/site-data.ts`; reused by header/footer/contact |
| Emergency hotline | `(845) 535-4290` | `components/site-data.ts`; new header links |
| Hudson TowBoat captain on call | `(845) 535-5100` | Towing page and old-site copy |
| TowBoatUS dispatch | `(800) 391-4869` | Towing page and old-site copy |
| Different historical business/launch number | `(845) 535-4280` | `OldSiteInfo.txt` |
| Historical business email | `CaptTroy@TDCaptainServicesCorp.com` | `OldSiteInfo.txt`; lowercase spelling also in older mail defaults |

Several numbers may serve different purposes. Ask Troy which are current, which support texts, and which should be displayed in each context. The towing page says “Call or text,” but its current action links use `tel:`; there is no separate `sms:` action.

`OldSiteInfo.txt` also includes historical membership pricing, average towing cost, membership benefits, and marina information. Preserve it as source material; do not publish its prices or claims as current without owner confirmation. It is not a specification that overrides the current code.

## 3. Repository and branch history

The history is small enough to trace end to end. The following covers every commit reachable from the local branches at the start of the handoff. Descriptions combine commit subjects, changed paths, relevant diffs, and the resulting source; the vague original subjects alone do not explain all behavior.

| Commit | Date | What changed / why it matters |
| --- | --- | --- |
| `d4f15b6` | 2026-03-16 | Initial Next.js/TypeScript/Tailwind site, basic routes/components, form skeleton, starter SVG assets, package lock, ignore rules. |
| `7842832` | 2026-03-16 | First rebuild: individual service routes and shared service/subservice components; Merriweather and Source Sans 3; navy/red/gold/neutral design; boat logos, images, GIF, and video assets. The old `/services` index was removed. |
| `3df0e59` | 2026-03-16 | Home-page composition, request CTA, hero/process/service/trust refinements, and service copy. |
| `a2ffdb3` | 2026-03-17 | Removed the home TrustSection rendering and changed navbar/process work. The TrustSection file remains available but is not mounted by current home. |
| `0034f1f` | 2026-03-17 | Added/reworked the process strip before development branching. |
| `eb8ad83` | 2026-03-17 | Service-specific links and request values, request-page query selection, component requestHref plumbing, and layout refinements. |
| `157d79a` | 2026-03-17 | Features milestone: removed the extra home request panel and made entire service cards links instead of nested link structures. |
| `e9be45b` | 2026-03-17 | PR #1 merged Features into Development. |
| `dbb5ceb` | 2026-03-17 | PR #2 merged Development into main at the March milestone. |
| `a86c30e` | 2026-04-15 | Separate Development implementation: JSON-driven service catalog, dynamic `[slug]` pages, subservice-aware forms/types, Nodemailer handlers, and asset moves into Website_Images. This is a historical alternative architecture. |
| `13c1315` | 2026-04-15 | Local main merged that Development implementation. This merge was on the divergent local history, not on the fetched GitHub main. |
| `e65c621` | 2026-04-19 | Divergent local main added Gmail SMTP example values, secure override, and a business-mail recipient fallback. Preserved on `handoff/legacy-main-2026-10-29`; do not assume these fallbacks exist on current main. |
| `8158fbd` | 2026-04-19 | Reformating_Website added working client form submission, contact/service-request POST handlers, required environment-variable mail helper, and service-page/layout refinements. Its subject says “injury page”; code concerns inquiry email. |
| `0e1c028` | 2026-04-19 | PR #4 merged that Reformating_Website work into remote main. |
| `7c510e2` | 2026-04-19 | Added SMTP verification before sending, configuration diagnostics with masked emails, delivery-result logs, and more detailed server-side error logs. |
| `c363eb1` | 2026-04-19 | PR #5 merged the mail diagnostics into remote main. |
| `51021be` | 2026-04-19 | Real phone placeholder/shared number, service section heading, and smaller subservice button/spacing adjustments. |
| `3c80efa` | 2026-04-19 | PR #6 merged those refinements into remote main; this was GitHub main when the handoff began. |

### Branches found at the start

| Branch / ref | Starting commit | Meaning |
| --- | --- | --- |
| `origin/main` | `3c80efa` | Latest fetched GitHub main before this handoff. Explicit service-route architecture. |
| Local `main` | `e65c621` | Diverged: 3 commits ahead and 6 behind its upstream. Different service architecture, not simply a later production copy. |
| `Reformating_Website` | `51021be` | Main working folder; contained unpublished edits/assets. Its existing committed history was already merged into remote main. |
| `Development` | `a86c30e` | Older JSON-driven alternative implementation. |
| `Features` | `157d79a` | March milestone. |

### Handoff publication approach

The divergent local main is retained under `handoff/legacy-main-2026-10-29`, preserving `e65c621`, `13c1315`, and their ancestry without forcing them over newer remote code. Local main is then recreated from fetched GitHub main, and the handoff/current website edits are merged normally from Reformating_Website.

This keeps current main's service architecture and mail behavior, makes the outstanding work available in a normal main download, and retains the alternate implementation for reference. Development and Features remain historical; there is no reason to copy current application files into every old branch. Publication uses ordinary pushes, not force pushes. Consult `git log --all --graph --oneline --decorate` for the final handoff commits and integration merge.

### The two original folders are linked worktrees

On Tim's machine the original locations were:

```text
Desktop/TD_Boat_Service_Website/Website/td-captains-site
Desktop/TD_Boat_Service_Website/Website/td-captains-site-main-publish
```

The first was on Reformating_Website; the second was on the divergent local main. `git worktree list` confirmed they share repository history and refs. Do not delete either as a supposed duplicate without checking worktree state. Troy does not need those absolute paths or both folders; a fresh ordinary clone is sufficient.

## 4. Outstanding work included in this handoff

These changes existed before the handoff request and are preserved, rather than claimed as newly designed here:

- `app/services/towing-services/page.tsx`: replaced the generic service template with a custom towing page, dedicated metadata, captain/dispatch calls, on-water services, coverage lists, BoatUS logo, and a towing reasons poster.
- `components/Navbar.tsx`: new desktop grid arrangement, centered pill navigation, revised brand wording, emergency call panel, mobile emergency link, and the large-screen breakpoint for desktop navigation.
- `components/site-data.ts`: emergency hotline constant.
- `components/InquiryForm.tsx`: five revised service options and labels; boat repair and drone photography options removed.
- `OldSiteInfo.txt`: historical towing, launch, membership, and contact copy.
- `public/Images/Boat_US_Logo.original.png`, `Boat_US_Logo.png`, and `Boat_US_Logo_transparent.png`.
- `public/Website_Images/Boat_US_Logo.png`, `Ocean_Blue.webp`, `Reasons_To_Buy_Poster.avif`, `Website_Improvements_1.jpeg`, and `Website_Improvements_2.jpeg`.

The reference images and duplicate/source logos are retained intentionally to fulfill Tim's request to publish outstanding assets. Not all are rendered by current pages. The new documentation consists of this handoff, ProjectInfo.md, an AGENTS.md entry point, a project-specific README, and a sanitized environment template/ignore exception. No `.env.local`, node_modules, or generated build output belongs in the commit.

## 5. Current application architecture

### Routes and composition

App Router pages live under `app/`. Server components are the default. Navbar and InquiryForm use client state. The layout sets global metadata, Google fonts, global CSS, Navbar, content, and Footer. The home page renders Hero, HowItWorksStrip, and ServicesGrid; TrustSection exists but is not currently included.

The five service URLs each have their own `page.tsx`. Captain, launch, maintenance, and electronics use the reusable ServiceDetail component. Towing has its own layout. There is no CMS or current JSON service loader. Shared card/menu data are in `components/site-data.ts`; page copy and form options are partly duplicated elsewhere, so a service change often touches multiple files.

`app/request-service/page.tsx` awaits Next.js searchParams, takes the first `service` value if an array, and passes it as the form's initial selection. ServiceDetail/SubserviceTile propagate requestHref; they do not create booking records.

### Styling and media

Tailwind 4 is imported from `app/globals.css`, with CSS variables exposed through `@theme inline`. There is no traditional tailwind.config file in the inspected project. Source Sans 3 is the sans font and Merriweather the serif font, fetched through `next/font/google` during builds.

Historical token names do not literally describe hues: ocean-950 is navy, ocean-900 is red, ocean-800 and sand-400 are gold, and mist values are light neutrals. Reuse existing tokens and check contrast instead of assuming “ocean” always means blue.

The hero references `/Videos/BoatBackgroundVideo.mp4` and `/Images/Boat_Logo_transparent.png`. New towing media include `/Images/Boat_US_Logo_transparent.png` and `/Website_Images/Reasons_To_Buy_Poster.avif`. Preserve exact filename case and URL roots. Windows can hide case mistakes that fail on Linux hosting. The historical Development branch moved media paths; cherry-picking only one half of that change can break assets.

There are sizeable existing media assets (roughly 14 MB hero video and 8 MB GIF) and newly preserved multi-megabyte JPEG references. No media optimization or deletion was performed during this documentation handoff.

## 6. Inquiry and email behavior

### Request flow

1. InquiryForm collects HTML form fields and prevents normal browser submission.
2. It posts JSON to `/api/contact` in contact mode or `/api/service-request` otherwise.
3. The route trims values, checks required fields, and validates the email shape.
4. The Node.js route obtains the transporter, sender, and recipient from `lib/mail.ts`.
5. It logs masked configuration, verifies SMTP connectivity/authentication, then calls sendMail.
6. It returns a JSON message. The client displays success/error and resets the form on success.

Both endpoints use `runtime = "nodejs"`; this mail transport is not suitable for conversion to a static-only export. Required fields are name, email, phone, message; service requests additionally require boatLocation and requestedService. Contact's boat location is optional and no requestedService is needed in contact mode.

The sender is the configured server mailbox. The customer's email is `replyTo`, not the authenticated sender. Submitted strings are escaped before insertion into HTML email. Success responses do not prove that the destination inbox received the email; confirm receipt separately. Inquiries are not persisted, so there is no database recovery path in this app.

### Environment variables

Copy `.env.example` to ignored `.env.local` and replace placeholders privately. The example is a setup aid, not a working credential. The production Vercel environment must be configured independently.

| Name | Requirement and behavior |
| --- | --- |
| SMTP_HOST | Required; provider's SMTP hostname. The template uses smtp.gmail.com as an example, not a verified live provider. |
| SMTP_PORT | Required; numeric string. Current implementation checks NaN, not the complete valid TCP port range. |
| SMTP_SECURE | Optional; exact string true enables implicit TLS, exact false disables implicit TLS. If unset, true when port is 465. Use provider guidance for the port/TLS combination. |
| SMTP_USER | Required provider username. |
| SMTP_PASS | Required SMTP credential. If the provider requires an app password, use that credential privately. |
| SERVICE_REQUEST_FROM_EMAIL | Required sender address authorized by the provider. |
| SERVICE_REQUEST_TO_EMAIL | Required recipient for BOTH contact and service-request messages. No current fallback. |

Do not prefix these secrets with NEXT_PUBLIC_. Do not copy a real `.env.local` into a repo upload, chat handoff, screenshot, or archive. The checked-in `.env.example` must remain placeholder-only. `.gitignore` ignores `.env*` except the explicitly allowed example.

### Diagnostics and current limitations

The routes log incoming requests, masked config, verification success, delivery metadata, and detailed server errors. SMTP_PASS itself is not intentionally logged. Accepted/rejected recipients and provider responses can still contain addresses or other operational information, so restrict log sharing appropriately.

No rate limiter, CAPTCHA, honeypot, service allowlist, input-length cap, or dedicated schema validator is present in these routes. These are possible follow-up improvements, not features supplied by this handoff. Malformed JSON reaches the generic catch and produces 500 rather than a deliberate 400. Non-string values are coerced through toString where supported. Validate changes against both endpoints rather than assuming browser validation protects direct API calls.

## 7. Setup on Troy's computer

### Obtain the repository

Accept Tim's GitHub collaborator invitation using the intended GitHub account once it is known. Then clone the repo in GitHub Desktop and select main. A ZIP download contains source but not normal Git history/branch operations; cloning is preferable for ongoing work.

Terminal equivalent:

```sh
git clone https://github.com/TimDubePersonalAccount/TDCaptainsServices.git
cd TDCaptainsServices
git switch main
git status
npm ci
npm run dev
```

Open http://localhost:3000. Run commands from the directory containing package.json. Use the committed npm lockfile; no package-manager migration or dependency upgrade is needed just to open the project.

Use `Copy-Item .env.example .env.local` in PowerShell, or copy the file in your file manager, then edit the new file privately. Pages can be inspected without working SMTP, but valid inquiry sends require configuration. Restart the local process after changing environment variables.

### Assistant access

An assistant must be connected to the cloned folder or an authorized repository tool to read the source. GitHub collaborator access is granted to Troy's GitHub identity, not directly to the email address associated with his ChatGPT login. Connection/setup in his own assistant account still has to be completed there. Do not share Tim's personal login or tokens as a shortcut.

This handoff does not assert that an invitation has been sent or accepted. Troy's new GitHub identity was still pending when Tim requested these documents. Vercel membership and deployment permissions were also not granted by adding documentation.

## 8. Vercel and release workflow

The repository has a standard Next.js build and no tracked custom Vercel project configuration. Do not invent a project/team ID from the folder name. In the actual Vercel dashboard, identify the project by connected repository and production domain, then inspect its production branch, build command, root directory, Node version, environment scopes, and domain assignment.

Suggested release sequence for future changes:

1. Fetch main and create a focused branch.
2. Make the requested edit, keeping business facts and unrelated user work intact.
3. Run lint/build and relevant manual checks below.
4. Push the branch and review its diff/preview if the integration creates one.
5. Merge to the actual production branch when ready.
6. Inspect the Vercel deployment result and live routes. Check a controlled email receipt separately when mail behavior changed.

Pushing main can automatically deploy if Vercel is configured that way. This handoff request explicitly includes publishing outstanding changes; the exact live deployment result is outside the locally verified checks. Updating Vercel environment values may require a new deployment before the running site uses them. A source push alone does not transfer existing Vercel secrets or account access to Troy.

If a release must be undone, identify the specific commit/deployment and prefer a reviewable revert or Vercel rollback over rewriting shared Git history. Do not blindly reset main to an older branch; the historical implementations differ materially.

## 9. Validation performed during handoff

| Check | Result / limit |
| --- | --- |
| Fetched origin and read remote refs | Succeeded; initial main/Reformating refs matched the values in section 3. |
| Reviewed history | All 18 starting reachable commits catalogued; relevant source/diffs reviewed across both implementations. |
| Reviewed pending changes | Four modified source files plus historical text and eight new image/reference files identified. |
| npm run lint | Passed, exit 0. |
| Default npm run build | Failed fetching the two Google fonts due to local TLS trust. |
| Build with process-local system trust | Passed, including TypeScript and generation of the application routes. |
| Local production HTTP smoke checks | Nine page URLs (including a towing-service query) and both newly referenced towing images returned 200. |
| API validation smoke checks | Both POST routes returned 400 for missing fields and invalid emails; these cases stop before SMTP, so no email was sent. |
| Real SMTP send and inbox receipt | Not tested; do not infer success from build or API input validation. |
| Live Vercel deployment and domain | Not verified. |
| Visual/mobile/keyboard acceptance | Not completed during this documentation handoff. |

The successful build command in PowerShell was:

```powershell
$env:NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS = '1'
npm run build
```

This used the machine's trusted certificates for the build process; it did not disable TLS verification, and no persistent environment or Next.js config change was made. Use this only if the same trust issue occurs. Keep the distinction between a local font download problem and an application compile error.

No new automated test suite was added. There is currently no npm test script. The installed dependencies were used for local checks; a clean npm ci on a new machine is still an onboarding check.

## 10. Known issues and next decisions

### Confirm business facts first

- Resolve the general-phone discrepancy and the separate towing/emergency roles in section 2.
- Confirm the public business name/capitalization, actual contact mailbox, current service boundaries, and TowBoatUS affiliation wording.
- Confirm membership links/prices and any claims before migrating more OldSiteInfo content.
- Ask Troy which services should remain offered. Do not infer that removing a form option means removing the business service everywhere.

### Repair and drone card/form mismatch

`components/site-data.ts` still has Boat Repair and Drone Aerial Photography cards linking to `/request-service?service=boat-repair` and `/request-service?service=drone-photography`. The pending form edits remove those values from its select options. The page passes the query value through without checking the allowed values. Confirm desired service scope, then either restore supported options or change/remove the cards and links consistently. A submitted arbitrary requestedService is currently accepted server-side when nonempty.

### Draft public copy

About contains prompts such as “Use this area...” and credential/story placeholders. Contact still says its area is ready for live contact details. The new towing content refers to “the old site” and “without the clutter.” These are visible editorial artifacts, not final approved business copy. Replace them with owner-approved descriptions in a separate focused change.

### Navigation and accessibility

The desktop service menu opens on mouse hover and onClick sets its state to true; it does not toggle closed on repeated click. Its button lacks aria-expanded, and there is no explicit Escape/outside-click/focus-close handling. The closed menu uses opacity/pointer-events rather than removal from the tree, so keyboard focus behavior should be tested. The mobile menu does have an expanded state and separate service-menu state. Review at narrow mobile, tablet, 1024px, and larger desktop widths; the new desktop grid has fixed side-column sizes and needs actual visual inspection for overlap.

### Mail and reliability

Valid configuration, network access, provider authentication, sender authorization, and destination inbox delivery all remain operational checks. Consider schema validation, limits, spam controls, and reducing per-request SMTP verification overhead if needed. Keep both routes' contracts aligned with the form. These items were documented, not silently changed during handoff.

### Maintenance backlog

- Review placeholder metadata and add actual location/social/SEO assets when supplied.
- Check video load size, motion preferences, mobile behavior, and image optimization before expanding media further.
- Keep source/reference media that are useful, but decide later whether large unused references belong in a separate assets archive.
- Plan dependency/security updates separately with current advisory information and a fresh build; this handoff did not audit installed packages for vulnerabilities.

## 11. Manual acceptance checklist for the next website change

1. Run lint and build. Report real errors and the command/environment used.
2. Open home, About, Contact, Request Service, and all five service routes.
3. Check hero video/logo loading and all newly referenced towing images on a case-sensitive deployment.
4. Check desktop and mobile navigation, active links, service dropdown, keyboard navigation, and menu close behavior.
5. Check general, emergency, captain-on-call, and dispatch tel targets against approved business data; do not place test calls inadvertently.
6. Follow every service CTA and confirm the intended form option is selected, including the known repair/drone mismatch.
7. Check required fields and optional contact boat location. Invalid submissions should not send mail.
8. With Troy's agreement and a clearly labelled test, submit one contact inquiry and one service request in the intended environment. Confirm success/error UI, inbox arrival, content formatting, and Reply-To behavior.
9. Inspect the actual deployment result and live domain after publication. Record what was checked and what remains unknown.

## 12. Keeping this handoff useful

Treat the current checked-out source and Git refs as authoritative when these documents age. Update ProjectInfo for architecture/configuration changes, and add concise dated notes here for major operational decisions. Keep historical commit facts distinguishable from present behavior and owner-approved business facts. Never mark an integration “working” solely because its code exists or a build passed.
