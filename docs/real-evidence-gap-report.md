# Real Evidence Gap Report

Scope: Vultr, Hostinger, and Namecheap money pages.

This report reflects the current repository state after Evidence Layer Infrastructure V2. No real screenshots have been added yet.

## Summary

| Page | Screenshots collected | Screenshots missing | Evidence collected | Evidence missing | Estimated completion |
| --- | ---: | ---: | --- | --- | ---: |
| `/blog/vultr-review-2026` | 0 | 7 | Structured evidence slots exist. | Real screenshots, signup notes, first-server timing, lowest plan, billing observations. | 15% |
| `/blog/hostinger-review-2026` | 0 | 7 | Structured evidence slots exist. | Real screenshots, signup notes, setup notes, entry pricing, upsell observations. | 15% |
| `/blog/namecheap-review-2026` | 0 | 7 | Structured evidence slots exist. | Real screenshots, search notes, checkout notes, DNS workflow notes, pricing observations. | 15% |

Completion estimate includes existing infrastructure, data fields, and screenshot slots. It does not imply real evidence has been collected.

## `/blog/vultr-review-2026`

Screenshots collected:

- None.

Screenshots missing:

- Dashboard: `public/screenshots/vultr/dashboard/dashboard.png`
- Product Catalog: `public/screenshots/vultr/product-catalog/product-catalog.png`
- Instance Creation: `public/screenshots/vultr/instance-creation/instance-creation.png`
- Billing Area: `public/screenshots/vultr/billing/billing.png`
- Account Overview: `public/screenshots/vultr/account-overview/account-overview.png`
- Pricing: `public/screenshots/vultr/pricing/pricing.png`
- Analytics: `public/screenshots/vultr/analytics/analytics.png`

Evidence collected:

- Evidence data model exists.
- Builder experience, performance notes, deployment notes, and pricing notes are present as pending verification text.
- Verification metadata supports `lastReviewed`, `lastVerified`, `pricingChecked`, `screenshotsUpdated`, and `reviewer`.

Evidence missing:

- Signup experience.
- Time to create first server.
- Lowest plan observed.
- Billing observations.
- Server creation workflow.
- SSH/firewall/deployment observations.

Estimated completion: 15%.

## `/blog/hostinger-review-2026`

Screenshots collected:

- None.

Screenshots missing:

- Dashboard: `public/screenshots/hostinger/dashboard/dashboard.png`
- Hosting Setup Flow: `public/screenshots/hostinger/hosting-setup/hosting-setup.png`
- hPanel: `public/screenshots/hostinger/hpanel/hpanel.png`
- Domain Management: `public/screenshots/hostinger/domain-management/domain-management.png`
- Billing Area: `public/screenshots/hostinger/billing/billing.png`
- Pricing: `public/screenshots/hostinger/pricing/pricing.png`
- Deployment: `public/screenshots/hostinger/deployment/deployment.png`

Evidence collected:

- Evidence data model exists.
- Builder experience, performance notes, deployment notes, and pricing notes are present as pending verification text.
- Verification metadata supports `lastReviewed`, `lastVerified`, `pricingChecked`, `screenshotsUpdated`, and `reviewer`.

Evidence missing:

- Signup experience.
- Setup experience.
- Entry pricing observed.
- Upsell observations.
- hPanel usability observations.
- Domain/SSL/WordPress workflow observations.

Estimated completion: 15%.

## `/blog/namecheap-review-2026`

Screenshots collected:

- None.

Screenshots missing:

- Domain Search: `public/screenshots/namecheap/domain-search/domain-search.png`
- Checkout: `public/screenshots/namecheap/checkout/checkout.png`
- Dashboard: `public/screenshots/namecheap/dashboard/dashboard.png`
- DNS Management: `public/screenshots/namecheap/dns-management/dns-management.png`
- Billing Area: `public/screenshots/namecheap/billing/billing.png`
- Pricing: `public/screenshots/namecheap/pricing/pricing.png`
- Setup: `public/screenshots/namecheap/setup/setup.png`

Evidence collected:

- Evidence data model exists.
- Builder experience, performance notes, deployment notes, and pricing notes are present as pending verification text.
- Verification metadata supports `lastReviewed`, `lastVerified`, `pricingChecked`, `screenshotsUpdated`, and `reviewer`.

Evidence missing:

- Search experience.
- Checkout flow.
- DNS workflow.
- First-year pricing observation.
- Renewal pricing observation.
- Add-on and privacy-option observations.

Estimated completion: 15%.

## Next Completion Milestone

The next milestone is not more structure. It is real collection:

1. Capture and redact the P0 screenshots for each provider.
2. Update image `src` values in `src/data/posts.ts`.
3. Replace pending observation text with factual notes.
4. Populate `pricingChecked`, `screenshotsUpdated`, `lastVerified`, and `reviewer`.
5. Keep evidence status as `partial` until every P0 screenshot and observation is present.
