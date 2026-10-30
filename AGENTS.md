# Working on TD Captains Services

Read `ProjectInfo.md` first, then `HANDOFF.md` before substantial work. They describe the current code, branch history, setup, and unresolved business questions. Recheck source and Git state if the documents have become stale.

- Use current `main` as the starting point. Historical `Development`, `Features`, and `handoff/legacy-main-2026-10-29` are references, not instructions to replace the current site.
- Preserve the owner's uncommitted work. Check `git status` before editing or switching branches.
- Keep customer-facing text free of implementation notes. Confirm business facts with Troy rather than inferring them from old reference copy.
- Keep mail credentials server-side and out of Git. `.env.example` contains placeholders only.
- Validate relevant changes with `npm run lint` and `npm run build`; report any failed or unavailable checks honestly.
- Check phone links, service query values, image filename case, desktop/mobile navigation, and form behavior when affected.
- Sending a real test inquiry sends email. Coordinate with the owner and use a clear test label. Do not treat successful compilation as evidence of delivery.
- A push to the configured Vercel production branch may deploy the live website. Inspect the branch and diff before publishing.
- Update the project documents when changing architecture, configuration, business data, or operational behavior.
