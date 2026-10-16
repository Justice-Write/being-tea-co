# Being Tea Co replacement-candidate roadmap

Reconciled September 27, 2026. This supersedes the stale August persona decision queue.

- [x] Integrate the preserved journal checkpoint and September 24 review branch locally.
- [x] Keep the site brand-only, as directed by the owner in the newer internal roadmap.
- [x] Require explicit approval and the Alaska release date for every journal route and sitemap entry.
- [x] Keep B01–B05 approved; B06–B12 withheld until individual approval. B10–B12 also require specialist review.
- [x] Keep unreleased previews noindex and public release hosts explicitly gated.
- [x] Build and pass 13 rendered-route tests on Windows.
- [x] Source-check every citation in B06–B12 (2026-10-14). All sources exist; 10 required wording edits. Brief: https://claude.ai/code/artifact/8c4549c7-02b8-43de-8a0a-79915a7c0441
- [ ] Obtain B10 teaware/cultural, B11 cultural/source and B12 health-language practitioner reads (questions listed in the brief).
- [ ] Obtain exact editorial approval for each remaining draft.
- [ ] Owner chooses whether this replaces WordPress, the destination and rollback/release operator. 2026-10-13: owner chose a noindex Cloudflare workers.dev preview first; beingteaco.com DNS cutover from WordPress.com is a separate later step.
- [ ] Approve and execute a separate public release, then verify actual routes and metadata.
- [ ] Complete real provider lifecycle tests before any newsletter, commerce, paid links or account service is represented as active.

The private legacy source is a separate snapshot, not the release candidate. Persona accounts are not changed by this work. The private founder reference remains private.

See `ROADMAP-EXECUTION-2026-09-27.md`. No default-branch merge has occurred. The portfolio installation hold was lifted for Being Tea Co by the owner on 2026-10-13.

## Changelog

- 2026-10-16 — Branch `review/journal-b06-b12-20261016` (ad3e02e) carries the 10 source-check edits and re-dates B06–B12 to Mondays Oct 19–Nov 30. Not merged; no article approved. Confirmed article routes render per request (no prerendered HTML), so the Alaska date gate needs no redeploy.
- 2026-10-14 — B06–B12 source check complete (brief linked above). Proposed re-dating B06–B12 to consecutive Mondays Oct 19–Nov 30 pending owner approval.
- 2026-10-13 — Owner lifted the installation hold for Being Tea Co; chose Cloudflare preview first for this candidate and GitHub Pages for Steep Timer (live 2026-10-14 at https://justice-write.github.io/Steep-Timer/).
