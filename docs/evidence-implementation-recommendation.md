# Evidence Implementation Recommendation

Scope: architecture recommendation only. No implementation is included in this phase.

## Current Content Structure

Current content lives primarily in `src/data/posts.ts`.

Relevant characteristics:

- Blog posts are static TypeScript data.
- Each post contains `sections` with `heading` and `body` arrays.
- Cover and inline images already exist through `coverImage` and `inlineImages`.
- Recommended tools are connected through `recommendedToolSlugs`.
- Rewrite Sprint V1 added evidence and screenshot placeholders directly inside article body sections.

This approach was appropriate for the first rewrite sprint because it was fast, simple, and avoided feature work.

## Options Reviewed

### Option 1: Store evidence blocks inside `posts.ts`

Description:

Continue storing evidence notes as normal article section text.

Pros:

- Lowest implementation complexity.
- No schema migration required.
- Works with the current renderer.
- Easy to edit while rewriting content.

Cons:

- Hard to track verification freshness.
- Hard to query all pages with missing pricing screenshots.
- Easy for evidence labels to drift across articles.
- Screenshot metadata, verification dates, and status labels become buried in prose.

Best fit:

- Short-term placeholder content.
- One-off editorial notes.

Recommendation:

- Use only as a temporary bridge.

### Option 2: Add reusable evidence fields to the post content model

Description:

Extend each post with a structured `evidence` object while keeping article content in `posts.ts`.

Example shape:

```ts
type EvidenceStatus = "pending" | "partial" | "verified" | "needs-refresh";

type EvidenceAsset = {
  type:
    | "dashboard"
    | "pricing"
    | "billing"
    | "deployment"
    | "domain-management"
    | "analytics"
    | "setup-flow";
  src?: string;
  alt: string;
  caption: string;
  status: EvidenceStatus;
  priority: "P0" | "P1" | "P2";
  lastUpdated?: string;
};

type PostEvidence = {
  status: EvidenceStatus;
  lastReviewed?: string;
  lastVerified?: string;
  pricingChecked?: string;
  screenshotUpdated?: string;
  builderExperience?: string[];
  performanceNotes?: string[];
  pricingChangeLog?: string[];
  deploymentNotes?: string[];
  affiliateDisclosure?: string;
  assets: EvidenceAsset[];
};
```

Pros:

- Keeps static-site simplicity.
- No database required.
- Evidence can be rendered consistently later.
- Missing assets can be audited with scripts.
- Verification metadata becomes visible and maintainable.

Cons:

- Requires a small schema migration.
- Requires renderer updates when evidence should display as structured UI.
- Some body placeholders need to be removed or transformed after migration.

Best fit:

- AI Builder Hub's next stage.
- Static affiliate review site with recurring evidence refreshes.

Recommendation:

- Preferred approach for Evidence Layer V1 implementation.

### Option 3: Create shared evidence components and separate evidence data

Description:

Move evidence into separate files, such as `src/data/evidence.ts`, and render with shared components.

Pros:

- Clean separation between article prose and evidence assets.
- Easier to maintain as the site grows beyond 50 articles.
- Evidence can power future audit pages or editorial workflows.
- Reusable components can enforce disclosure and metadata standards.

Cons:

- More moving parts.
- Higher implementation cost.
- Requires joining post slugs to evidence records.
- Overkill before screenshots exist.

Best fit:

- Later stage when 20+ money pages have real screenshots and dated verification data.

Recommendation:

- Plan for this as a later migration, not the immediate next step.

## Recommended Approach

Use a two-stage path:

### Stage 1: Structured evidence fields inside posts

Add a lightweight `evidence` object to selected money pages first.

Why:

- Keeps the site static.
- Avoids databases and infrastructure changes.
- Gives every money page consistent status, metadata, and screenshot slots.
- Lets the team ship evidence incrementally.

Initial target pages:

- `hostinger-review-2026`
- `namecheap-review-2026`
- `vultr-review-2026`
- `semrush-review-2026`
- `best-hosting-for-startups`

Initial fields:

```ts
evidence: {
  status: "pending",
  lastReviewed: "2026-06-18",
  lastVerified: undefined,
  pricingChecked: undefined,
  screenshotUpdated: undefined,
  builderExperience: [],
  performanceNotes: [],
  pricingChangeLog: [],
  deploymentNotes: [],
  assets: [
    {
      type: "pricing",
      status: "pending",
      priority: "P0",
      alt: "...",
      caption: "..."
    }
  ]
}
```

### Stage 2: Shared evidence renderer

After screenshots and notes exist, add small reusable components:

- `EvidenceStatusBadge`
- `EvidenceMetadata`
- `EvidenceScreenshotGrid`
- `PricingChangeLog`
- `BuilderExperienceNotes`
- `AffiliateDisclosureNote`

The article renderer can show these blocks near the relevant sections without changing the core post model again.

### Stage 3: Separate evidence data file

When more than 20 money pages have evidence, move evidence data to a dedicated file:

```txt
src/data/evidence.ts
```

This makes recurring refreshes and audits easier.

## Future Scalability

The recommended model supports:

- Static generation on Vercel.
- Evidence status audits with simple scripts.
- Screenshot freshness checks.
- Category-specific evidence requirements.
- Better affiliate compliance because disclosure status can be tracked.
- Later migration to MDX or a CMS if needed, without requiring it now.

## Implementation Complexity

| Approach | Complexity | Short-term fit | Long-term fit |
| --- | --- | --- | --- |
| Keep evidence in article body only | Low | Good | Weak |
| Add `evidence` object to posts | Medium-low | Strong | Good |
| Separate evidence data and components | Medium | Okay | Strong |
| Database/CMS | High | Poor | Possible later |

## Migration Considerations

When implementation starts:

1. Do not remove existing placeholders until structured evidence renders correctly.
2. Add evidence fields to the five rewritten money pages first.
3. Keep all evidence asset paths optional until screenshots exist.
4. Use `pending` as the default status.
5. Add a script to list missing P0 evidence assets by post slug.
6. Only strengthen article claims after the evidence status changes from `pending` to `partial` or `verified`.
7. Keep affiliate disclosure copy consistent across content and CTA areas.

## Final Recommendation

For the next implementation pass, use structured evidence fields inside `posts.ts` for the first five money pages.

Do not create a database. Do not introduce a CMS. Do not build a large editorial dashboard.

The right next step is a small static content-model extension that can later migrate into shared evidence data once enough screenshots and verification notes exist.
