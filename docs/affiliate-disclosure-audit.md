# Affiliate Disclosure Audit

Last audited: 2026-06-18

Scope:

- Tool pages
- Review pages
- Comparison pages
- Global disclosure access

## Summary

| Area | Disclosure support | Status |
| --- | --- | --- |
| Global footer | Links to `/affiliate-disclosure`. | Pass |
| Home page | Links to affiliate disclosure. | Pass |
| Dedicated disclosure page | Exists at `/affiliate-disclosure` with editorial independence language. | Pass |
| Tool detail pages | CTA area includes: "Some links may be affiliate links. We may earn a commission at no extra cost to you." | Pass |
| Tools index | Shows affiliate-ready labels and explains affiliate-ready behavior. | Pass |
| Blog article bottom CTA | Includes affiliate disclosure language and link to `/affiliate-disclosure`. | Pass |
| Rewritten review money pages | Include `Affiliate CTA Block` section with disclosure text. | Pass |
| Comparison pages from Comparison Sprint V1 | Include `Affiliate CTA Block` section with disclosure text. | Pass |
| Evidence-backed pages | Evidence section includes affiliate disclosure note where evidence data exists. | Pass |

## Tool Pages

Status: Pass.

Evidence:

- Tool detail pages use `tool.affiliateUrl ?? tool.officialWebsite`.
- When no approved affiliate link exists, the button falls back to the official website.
- The page explicitly states that some links may be affiliate links and may earn a commission at no extra cost.
- The page shows current `affiliateStatus`.

Gap:

- None blocking application submission.

## Review Pages

Status: Mostly pass.

Reviewed high-value review pages:

| Page | Disclosure support | Gap |
| --- | --- | --- |
| `/blog/vultr-review-2026` | Affiliate CTA Block plus evidence disclosure. | No blocker. |
| `/blog/namecheap-review-2026` | Affiliate CTA Block plus evidence disclosure. | No blocker. |
| `/blog/semrush-review-2026` | Affiliate CTA Block plus evidence disclosure. | No blocker. |
| `/blog/hostinger-review-2026` | Affiliate CTA Block plus evidence disclosure. | No blocker. |
| `/blog/shopify-review-2026` | Article-level bottom CTA disclosure exists, but it has not yet been rewritten into the money-page framework. | Not blocking Shopify application, but should be upgraded later. |

## Comparison Pages

Status: Pass for current highest-value pages.

Reviewed comparison pages:

| Page | Disclosure support | Gap |
| --- | --- | --- |
| `/blog/vultr-vs-digitalocean-for-developers` | Affiliate CTA Block and evidence disclosure. | No blocker. |
| `/blog/namecheap-vs-porkbun` | Affiliate CTA Block and evidence disclosure. | No blocker. |
| `/blog/hostinger-vs-siteground` | Affiliate CTA Block and evidence disclosure. | No blocker. |
| `/blog/semrush-vs-ahrefs` | Affiliate CTA Block and evidence disclosure. | No blocker. |
| `/blog/bluehost-vs-siteground` | Affiliate CTA Block and evidence disclosure. | No blocker. |
| `/blog/shopify-vs-wordpress` | Article-level bottom CTA disclosure exists, but comparison framework rewrite is not applied. | Should be upgraded before heavier Shopify promotion. |

## Missing Areas

No critical disclosure blocker for affiliate applications.

Actionable gaps:

1. Upgrade `/blog/shopify-review-2026` to the money-page framework before aggressive Shopify promotion.
2. Upgrade `/blog/shopify-vs-wordpress` to the comparison framework before aggressive Shopify promotion.
3. Once any affiliate URL becomes active, test both the outbound CTA and disclosure visibility on the relevant tool page.
4. Keep disclosure text near article CTAs and tool CTAs; do not rely only on the footer.
