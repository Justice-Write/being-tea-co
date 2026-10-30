# Free brew notes: local layout and delivery readiness

Updated 2026-10-27. This extends the existing free observation sheet only. It is not a paid-product selection or launch approval. WordPress production has not been changed in this work.

## Artifacts and source

- public/downloads/brew-notes.html: reflowable HTML alternative and links to the two local PDF proofs; noindex/nofollow; no signup/payment.
- public/downloads/being-tea-brew-notes-a4.pdf: one A4 page.
- public/downloads/being-tea-brew-notes-letter.pdf: one US Letter page.
- scripts/build-brew-notes.py: optional offline generator; requires existing Python reportlab and pypdf packages. Run `python scripts/build-brew-notes.py --output-dir output/pdf` from the repository root. It writes proof files only; it does not publish or connect providers. Its fresh manifest starts with visual review pending, so a rebuild does not inherit an old review claim.
- docs/free-brew-notes-manifest.json: reviewed final file sizes, page sizes and SHA-256 values.
- docs/free-brew-notes-local-delivery.json: actual local app HTTP checks.

The PDFs are blank print worksheets, not interactive forms or tagged accessible PDFs. Use the HTML version for selectable/reflowable text. Both PDF footers explicitly identify local layout proof status and Akiko as a fictional editorial persona. No health, tasting, origin or qualification claim has been added.

## Verification

PASSED: both PDFs reopened with pypdf, exactly one page, correct A4/Letter dimensions, required text present, unencrypted. Both final pages rendered using Poppler and visually inspected; initial heading collision corrected and final render has no clipping/overlap. Poppler emitted missing Symbol/ArialUnicode fallback warnings; the final ASCII text renders correctly with the used fonts. Physical print remains UNRUN.

PASSED: actual vinext dev server on localhost:8796 returned HTTP 200/application/pdf for both files, with downloaded bytes matching the recorded SHA-256 hashes. HTML returned 200 with both PDF links, noindex and accessibility limitations present. These download checks used no mocks. Initial IPv4 127.0.0.1 connection was refused; using the app's advertised localhost address succeeded. The temporary dev server was stopped after verification.

PASSED: npm test (build plus 13 existing rendered-route tests), npm run typecheck. Existing route tests retain their preexisting ASSETS stub; they are not the evidence for real PDF delivery.

UNRUN: production hosting/upload, actual printer proof, payment/refund/receipt/entitlement, support delivery and tax lifecycle. No paid provider is selected or configured, so there is no basis to mark those as working. New pricing, product, provider/account access and publication remain owner decisions. No installation, Git push, live content update, financial action or unrelated-project write occurred.

## Remaining smallest owner decisions

For eventual paid commerce: choose/approve the exact product/final files; confirm price/currency, seller/support/refund/markets; approve the merchant account connection and delivery provider. The coordinator is collecting these; no duplicate request was sent. Do not replace the newer WordPress site with this older repository.
