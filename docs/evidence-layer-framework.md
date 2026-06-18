# Evidence Layer Framework

Purpose: reusable evidence model for AI Builder Hub review, comparison, and best-tools money pages.

This framework is planning only. It defines what evidence should be collected before article claims are strengthened.

## Evidence Principles

- Evidence should appear near the claim it supports.
- Do not imply hands-on testing until a real test note or screenshot exists.
- Do not state exact discounts, renewal prices, uptime, speed, or support quality without dated evidence.
- Prefer plain labels such as `Evidence pending`, `Pricing checked`, and `Screenshot needed`.
- Keep affiliate disclosure separate from product claims.
- Screenshots must not expose private account data, billing details, API keys, user IDs, or customer information.

## Standard Evidence Blocks

### Builder Experience

Use this block to document what it felt like to use the product as a beginner or solo builder.

Fields:

| Field | Description |
| --- | --- |
| Account setup experience | How long account creation took, required steps, friction, and verification issues. |
| Onboarding experience | Whether the dashboard guided the user toward the intended task. |
| Dashboard usability | Whether key actions were easy to find without documentation. |
| Deployment workflow | Steps required to launch, connect, deploy, or configure the project. |
| Beginner risk | What a new user is most likely to misunderstand. |
| Evidence status | `pending`, `partial`, or `verified`. |

Example format:

```md
## Builder Experience

Status: Evidence pending
Last tested: Not yet tested

- Account setup:
- Onboarding:
- Dashboard usability:
- Deployment workflow:
- Beginner risk:
- Notes still needed:
```

### Performance Notes

Use this block only when a page makes performance, speed, uptime, reliability, crawl, deployment, or monitoring claims.

Fields:

| Field | Description |
| --- | --- |
| Deployment speed | How long a representative setup or deployment took. |
| Page load observations | Basic measured observations for a test page when applicable. |
| Uptime observations | Monitoring notes if tracking exists. |
| Monitoring observations | Dashboard, logs, metrics, or alerting evidence. |
| Test conditions | Region, plan, project type, date, and limitations. |

Example format:

```md
## Performance Notes

Status: Evidence pending
Test conditions: Not yet tested

- Deployment speed:
- Page load observations:
- Uptime observations:
- Monitoring observations:
- Limitations:
```

Rules:

- Do not compare providers using anecdotal speed claims.
- Do not write "fastest" unless there is a repeatable benchmark.
- Keep first-pass observations modest: "in our test setup" or "observed during setup" only after testing.

### Pricing Change Log

Use this block on every hosting, domain, VPS, SEO, ecommerce, and SaaS review.

Fields:

| Field | Description |
| --- | --- |
| Last observed pricing | Public pricing seen on the official pricing page. |
| Pricing checked | Date the pricing was checked. |
| Historical pricing changes | Any known change that affects recommendation quality. |
| Plan differences | Which limits matter for the target reader. |
| Renewal or hidden cost notes | Renewal, add-on, usage, storage, bandwidth, or seat caveats. |
| Evidence asset | Screenshot path or source note. |

Example format:

```md
## Pricing Change Log

Status: Evidence pending
Pricing checked: Not yet checked

| Item | Last observed | Notes | Evidence |
| --- | --- | --- | --- |
| Entry plan | TBD | Verify current public price and renewal behavior. | Screenshot needed |
| Renewal | TBD | Do not state until verified. | Screenshot needed |
| Add-ons | TBD | Watch for checkout upsells. | Screenshot needed |
```

### Deployment Notes

Use this block when the recommendation depends on setup work.

Recommended variants:

| Page type | Deployment notes needed |
| --- | --- |
| VPS review | Server creation, SSH, firewall, package install, app deployment, domain, SSL, logs, backups. |
| Hosting review | Site creation, WordPress install, domain connection, SSL, staging/backups if present. |
| Domain registrar review | Domain search, checkout, DNS record creation, nameserver update, transfer/renewal flow. |
| SEO tool review | Project setup, site audit setup, keyword workflow, export/report workflow. |
| Best-tools page | A short evidence row for each recommended tool, not a deep walkthrough for every provider. |

Example format:

```md
## Deployment Notes

Status: Evidence pending
Workflow tested: Not yet tested

1. Setup step:
2. Configuration step:
3. Launch or verification step:
4. Common beginner mistake:
5. Evidence assets:
```

### Affiliate Disclosure Block

Use a consistent disclosure close to CTAs and wherever affiliate links become active.

Reusable format:

```md
Some links may be affiliate links. We may earn a commission at no extra cost to you. Our recommendations are based on fit, tradeoffs, pricing transparency, and available evidence, not on commission rates.
```

Status note options:

- `Affiliate status: active`
- `Affiliate status: pending`
- `Affiliate status: not-applied`
- `Affiliate status: unavailable`

Rules:

- Do not write "official partner" unless a partner claim is explicitly approved and evidenced.
- Do not invent coupon language.
- Do not imply the user receives a special deal unless the affiliate program provides one and it is verified.

### Verification Metadata

Use metadata to track review freshness.

Recommended fields:

| Field | Purpose |
| --- | --- |
| Last reviewed | Last editorial review date. |
| Last verified | Last time evidence was checked. |
| Pricing checked | Last time pricing was checked. |
| Screenshot updated | Last time screenshots were updated. |
| Affiliate status checked | Last time program status was verified. |
| Evidence owner | Optional note for who collected the evidence. |
| Evidence status | `pending`, `partial`, or `verified`. |

Example format:

```md
Verification metadata

- Last reviewed: 2026-06-18
- Last verified: Pending
- Pricing checked: Pending
- Screenshot updated: Pending
- Affiliate status checked: Pending
- Evidence status: pending
```

## Page-Type Evidence Requirements

### Tool Review

Minimum evidence:

- Pricing screenshot.
- Dashboard screenshot.
- Builder experience note.
- Setup or workflow screenshot.
- Billing/checkout caveat if the tool is paid.
- Alternatives table with evidence status.

### Best Tools Page

Minimum evidence:

- Comparison table.
- Evidence status by tool.
- At least one pricing or dashboard screenshot for each top recommendation.
- Explanation of why each tool is best for a specific user type.
- Clear "avoid if" guidance.

### Comparison Page

Minimum evidence:

- Side-by-side pricing table.
- Use-case decision table.
- Screenshots for both primary tools.
- Clear "choose neither if" section.
- Verification metadata for both tools.

### VPS Review

Minimum evidence:

- Pricing screenshot.
- Instance creation screenshot.
- Server dashboard screenshot.
- SSH/firewall/deployment note.
- Monitoring or logs screenshot.
- Snapshot/backups note.

### Hosting Review

Minimum evidence:

- Pricing screenshot.
- Dashboard screenshot.
- WordPress or site setup screenshot.
- Domain/SSL screenshot.
- Renewal-price caveat.
- Support/onboarding note if discussed.

### Domain Registrar Review

Minimum evidence:

- Domain search screenshot.
- Checkout/add-on screenshot.
- DNS management screenshot.
- Nameserver update screenshot.
- Renewal and privacy note.
- Transfer caveat if discussed.

## Evidence Status Labels

Use these labels consistently:

| Status | Meaning |
| --- | --- |
| Evidence pending | Placeholder exists, no real screenshot or test note yet. |
| Partially verified | Some screenshots or notes exist, but pricing or workflow is incomplete. |
| Verified | Claim is backed by a dated screenshot, test note, or reliable public source. |
| Needs refresh | Evidence exists but pricing, UI, or workflow may have changed. |

## File and Asset Naming Convention

Recommended future screenshot paths:

```txt
public/images/evidence/{slug}/dashboard.png
public/images/evidence/{slug}/pricing.png
public/images/evidence/{slug}/deployment.png
public/images/evidence/{slug}/billing.png
public/images/evidence/{slug}/domain-management.png
public/images/evidence/{slug}/analytics.png
public/images/evidence/{slug}/setup-flow.png
```

Use `.png` for screenshots unless file size becomes a problem. Prefer descriptive alt text and captions that state what the screenshot proves.
