# TD Captains Services

Marine services website for Troy Dube, built by Tim Dube with Next.js, React, TypeScript, and Tailwind CSS. Hosted on Vercel according to the project owner.

- Website: https://www.tdcaptainservicescorp.com/
- Repository: https://github.com/TimDubePersonalAccount/TDCaptainsServices
- Start with [ProjectInfo.md](ProjectInfo.md) for the project map and [HANDOFF.md](HANDOFF.md) for the full owner/AI handoff, history, configuration, and known issues.
- Coding assistants should read [AGENTS.md](AGENTS.md).

## Local setup

Clone the repository and select `main`, then run from the folder containing package.json:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Copy `.env.example` to `.env.local` and fill in real SMTP settings privately to enable inquiry email. Without those values the pages can be inspected, but valid email submissions will fail. Do not commit credentials.

## Validation and production

```sh
npm run lint
npm run build
npm start
```

There is no dedicated test suite yet. The handoff documents record the checks performed, a local Google Fonts TLS workaround, and the remaining manual checks. Build success does not verify email delivery or the live website.

The forms send email via Node.js API routes; this is not a static-only site. Configure SMTP variables separately in Vercel. Verify the actual Vercel production branch before publishing: a push to that branch may deploy the live website.

## Branches

Use `main` for ongoing work. `Reformating_Website` contains the website edits and handoff integration source. `Development` and `Features` are historical. `handoff/legacy-main-2026-10-29` preserves the older divergent local implementation; its JSON-driven services and mail defaults are not the current main architecture.
