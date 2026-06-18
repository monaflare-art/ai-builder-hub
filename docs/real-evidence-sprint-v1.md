# Real Evidence Sprint V1

Scope: collect and publish real evidence for three money pages only.

Target pages:

- `/blog/vultr-review-2026`
- `/blog/hostinger-review-2026`
- `/blog/namecheap-review-2026`

Rules:

- Do not invent experience.
- Do not fabricate performance results.
- Do not create fake pricing history.
- Do not generate artificial screenshots.
- Use only real screenshots captured from the product or public pricing pages.
- Remove or blur private data before publishing.
- Leave evidence status as pending until screenshots and observations are actually collected.

## Verification Metadata Fields

Each target page supports:

- `lastReviewed`
- `lastVerified`
- `pricingChecked`
- `screenshotsUpdated`
- `reviewer`

Populate these only when real evidence exists.

## Vultr Evidence Checklist

Page: `/blog/vultr-review-2026`

### Screenshots to Capture

| Evidence | Expected file path | Purpose | Status |
| --- | --- | --- | --- |
| Dashboard | `public/screenshots/vultr/dashboard/dashboard.png` | Show Vultr server management and dashboard navigation. | Pending verification |
| Product Catalog | `public/screenshots/vultr/product-catalog/product-catalog.png` | Show compute/product options visible during provider evaluation. | Pending verification |
| Instance Creation | `public/screenshots/vultr/instance-creation/instance-creation.png` | Show first-server creation workflow, region, image, plan, and SSH choices. | Pending verification |
| Billing Area | `public/screenshots/vultr/billing/billing.png` | Show billing or usage visibility with private data removed. | Pending verification |
| Account Overview | `public/screenshots/vultr/account-overview/account-overview.png` | Show account-level navigation and operational context. | Pending verification |
| Pricing | `public/screenshots/vultr/pricing/pricing.png` | Verify lowest observed public plan and pricing caveats. | Pending verification |
| Analytics | `public/screenshots/vultr/analytics/analytics.png` | Show monitoring, metrics, logs, or usage graph if available. | Pending verification |

### Observations to Record

| Observation | Field | Status |
| --- | --- | --- |
| Signup experience | `builderExperience` | Pending verification |
| Time to create first server | `builderExperience` / `deploymentNotes` | Pending verification |
| Lowest plan observed | `pricingNotes` / `pricingChecked` | Pending verification |
| Billing observations | `pricingNotes` / `builderExperience` | Pending verification |

### Capture Notes

- Record region, operating system image, server size, and whether SSH key setup is required.
- Do not publish IP addresses, account IDs, invoices, payment methods, or private project names.
- Do not claim performance until a separate measured test exists.

## Hostinger Evidence Checklist

Page: `/blog/hostinger-review-2026`

### Screenshots to Capture

| Evidence | Expected file path | Purpose | Status |
| --- | --- | --- | --- |
| Dashboard | `public/screenshots/hostinger/dashboard/dashboard.png` | Show Hostinger account dashboard and site management navigation. | Pending verification |
| Hosting Setup Flow | `public/screenshots/hostinger/hosting-setup/hosting-setup.png` | Show onboarding or first-site setup flow. | Pending verification |
| hPanel | `public/screenshots/hostinger/hpanel/hpanel.png` | Show hPanel controls relevant to beginners. | Pending verification |
| Domain Management | `public/screenshots/hostinger/domain-management/domain-management.png` | Show domain, DNS, SSL, or connection workflow. | Pending verification |
| Billing Area | `public/screenshots/hostinger/billing/billing.png` | Show checkout, billing, renewal, or add-on details with private data removed. | Pending verification |
| Pricing | `public/screenshots/hostinger/pricing/pricing.png` | Verify entry pricing and renewal caveats. | Pending verification |
| Deployment | `public/screenshots/hostinger/deployment/deployment.png` | Show WordPress install, site launch, SSL, or deployment workflow. | Pending verification |

### Observations to Record

| Observation | Field | Status |
| --- | --- | --- |
| Signup experience | `builderExperience` | Pending verification |
| Setup experience | `builderExperience` / `deploymentNotes` | Pending verification |
| Entry pricing observed | `pricingNotes` / `pricingChecked` | Pending verification |
| Upsell observations | `pricingNotes` / `builderExperience` | Pending verification |

### Capture Notes

- Capture first-year price and renewal caveats separately.
- Note whether domain, email, SSL, backups, and WordPress features require a specific plan.
- Do not publish account email, domain ownership data, invoices, or payment details.

## Namecheap Evidence Checklist

Page: `/blog/namecheap-review-2026`

### Screenshots to Capture

| Evidence | Expected file path | Purpose | Status |
| --- | --- | --- | --- |
| Domain Search | `public/screenshots/namecheap/domain-search/domain-search.png` | Show search results, TLD options, and first-year pricing. | Pending verification |
| Checkout | `public/screenshots/namecheap/checkout/checkout.png` | Show checkout flow, add-ons, and privacy options with private data removed. | Pending verification |
| Dashboard | `public/screenshots/namecheap/dashboard/dashboard.png` | Show domain dashboard and management navigation. | Pending verification |
| DNS Management | `public/screenshots/namecheap/dns-management/dns-management.png` | Show DNS records, nameserver settings, or domain connection workflow. | Pending verification |
| Billing Area | `public/screenshots/namecheap/billing/billing.png` | Show billing or renewal details with private data removed. | Pending verification |
| Pricing | `public/screenshots/namecheap/pricing/pricing.png` | Verify first-year and renewal pricing observations. | Pending verification |
| Setup | `public/screenshots/namecheap/setup/setup.png` | Show registration, nameserver, or first-domain setup flow. | Pending verification |

### Observations to Record

| Observation | Field | Status |
| --- | --- | --- |
| Search experience | `builderExperience` | Pending verification |
| Checkout flow | `builderExperience` / `pricingNotes` | Pending verification |
| DNS workflow | `deploymentNotes` | Pending verification |
| Pricing observations | `pricingNotes` / `pricingChecked` | Pending verification |

### Capture Notes

- Use a non-sensitive domain search example.
- Do not publish owned domains, account email, billing data, or payment methods.
- Record renewal pricing and privacy/add-on behavior separately from first-year price.

## Publishing Sequence

1. Capture screenshots and redact sensitive information.
2. Add image files to the expected paths.
3. Update the relevant `src/data/posts.ts` evidence record with `src`, `verificationDate`, and status.
4. Add real observations to `builderExperience`, `deploymentNotes`, and `pricingNotes`.
5. Populate `pricingChecked`, `screenshotsUpdated`, `lastVerified`, and `reviewer` only after evidence is real.
6. Run `npm run lint` and `npm run build`.
