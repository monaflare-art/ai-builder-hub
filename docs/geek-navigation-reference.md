# geek-navigation Reference Evaluation

Date: 2026-07-11

Status: reference only. Do not fork, copy, vendor, or add `geekape/geek-navigation` as a runtime dependency.

## Upstream Snapshot

- Repository: https://github.com/geekape/geek-navigation
- Purpose: navigation site for independent developers.
- License: MIT.
- Default branch checked: `dev`.
- Reference commit checked: `f5b0bcbe1d8f3ff12e454f7e5858554999a203c7`.
- Main architecture observed:
  - `geekape-nav-main`: Nuxt 2 universal frontend.
  - `geekape-nav-admin`: Ant Design Pro admin console.
  - `geekape-nav-server`: Egg.js API with MongoDB models for categories, nav items, tags, users, audit status, views, and stars.

## Current AI Builder Hub Baseline

AI Builder Hub already uses its own Next.js App Router architecture:

- Static local data in `src/data/tools.ts` and `src/data/posts.ts`.
- Indexable routes for `/tools`, `/tools/[slug]`, `/blog`, and `/blog/[slug]`.
- Static params and page-level metadata on tool and blog detail pages.
- Central SEO surfaces through Next metadata, `src/app/sitemap.ts`, and `src/app/robots.ts`.
- Affiliate-aware tool fields without a database or login system.

This should remain the architecture. geek-navigation is a design and SEO reference, not an implementation dependency.

## Information Architecture Patterns

Reusable patterns:

- Use a two-level taxonomy: top-level intent group, then concrete subcategory.
- Make the category tree visible as navigation, not only as filters.
- Treat every item as a first-class detail page with name, description, logo or visual identity, tags, category, outbound URL, and related items.
- Add discovery modules above the full directory: latest items, most viewed items, most liked items, and curated recommendations.
- Separate user-submitted candidates from approved public items.
- Keep tags as cross-cutting descriptors instead of replacing categories.

Recommended adaptation for AI Builder Hub:

- Keep the current flat `tool.category` field for now, but define a future taxonomy map such as `Build`, `Deploy`, `Launch`, `Grow`, `Operate`, and `Monetize`.
- Add category landing pages only when each category has enough tools and supporting articles to deserve an indexable page.
- Keep tags or use-case labels separate from canonical category names, for example `beginner`, `AI coding`, `static site`, `VPS`, `SEO`, `affiliate`.

## Category Organization Patterns

geek-navigation stores parent categories and child categories separately, then returns a nested tree for the frontend. The useful pattern is not the database model, but the editorial distinction:

- Parent category: broad reader intent.
- Child category: concrete resource type.
- Nav item: individual website or tool.
- Tag: flexible attribute that can span categories.

For AI Builder Hub, a practical category model is:

| Parent intent | Child examples | Existing fit |
| --- | --- | --- |
| Build | AI Coding, Website Builder, CMS | `AI Coding`, `CMS / Website Builder` |
| Deploy | VPS / Cloud, Hosting, Deployment | `VPS / Cloud`, `Hosting`, `Deployment` |
| Launch | Domain, CDN / DNS / Deployment | `Domain`, `CDN / DNS / Deployment` |
| Grow | SEO, Analytics, Content | `SEO` |
| Sell | Ecommerce, Payments, Affiliate | `Ecommerce` |
| China Stack | Domestic Cloud, ICP-ready infrastructure | `国内云` |

Do not migrate the data model immediately. Use this table as a planning layer for future category pages and internal links.

## SEO Strategy Patterns

geek-navigation moved from SPA to Nuxt SSR because the previous single-page version was weak for SEO. The reusable lesson is direct: navigation sites should render category and detail content as crawlable HTML, not hide the core directory behind client-only search.

Reusable SEO patterns:

- Server-render or statically generate directory and detail pages.
- Give each item a stable, shareable detail URL.
- Give each category a crawlable section or page with useful copy, not only a visual filter.
- Put category names, item names, short descriptions, and tags in initial HTML.
- Use internal links between directory sections, detail pages, comparison articles, and recommended tools.
- Use detail pages to capture long-tail queries around individual tools.
- Add freshness and trust signals for resource directories: reviewed date, pricing checked date, evidence status, and screenshot status.

AI Builder Hub should keep its current static generation approach because it is simpler and already SEO-friendly. The next SEO improvements should be:

- Add indexable category pages when content depth justifies them.
- Add breadcrumb and `ItemList` structured data on category/tool directory pages.
- Add richer tool detail metadata, including `bestFor`, `pricingSummary`, and evidence status where appropriate.
- Add reciprocal links from tool pages to relevant reviews, comparisons, and category hubs.

## SSR Implementation Notes

geek-navigation uses Nuxt 2 `mode: "universal"` and `asyncData` on public pages. The homepage fetches categories, ranking data, and category nav lists before render. The detail page fetches the nav item and random related items before render. This makes the core directory visible in server-rendered HTML.

AI Builder Hub does not need Nuxt, Egg.js, MongoDB, view counters, star counters, or an admin console to adopt the useful part. Next.js App Router already provides the equivalent SEO surface through static generation, `generateStaticParams`, and `generateMetadata`.

Implementation boundary:

- Keep Next.js App Router.
- Keep local TypeScript data until editing volume requires a CMS or admin workflow.
- Do not add MongoDB, Egg.js, Nuxt, Element UI, Ant Design Pro, or geek-navigation packages.
- Do not copy upstream UI, screenshots, data, category names, icons, or code.

## Reusable Design Patterns

Adoptable ideas:

- Directory card: logo or visual marker, title, one-line description, category, and primary action.
- Detail page: hero summary, direct outbound action, tags, related/random alternatives, evidence/trust section.
- Ranking modules: latest, most useful, most visited, or editor picks. For AI Builder Hub, use editorial and evidence-backed ranking instead of raw view/like counters.
- Submission workflow: future public suggestion form can collect URL, category, tags, description, and source notes, then keep submissions unpublished until reviewed.
- Search experience: local site search should route to internal detail pages first, then optionally offer external search.

Avoidable patterns:

- Client-only navigation as the primary discovery mechanism.
- Public likes/views as trust signals without anti-spam and editorial controls.
- User-submitted resources appearing publicly before review.
- Database-backed admin complexity before the site has enough editorial volume.

## Recommended Backlog

1. Define a canonical taxonomy map without changing current data.
2. Add category landing pages once each category has at least 5 tools or 3 strong supporting articles.
3. Add structured data for directory/category pages.
4. Add an editorial `featured`, `latest`, or `recommendedStack` layer instead of popularity counters.
5. Add a reviewed submission workflow only after manual tool intake becomes a recurring bottleneck.

## Decision

AI Builder Hub should incorporate geek-navigation's reusable navigation and SEO ideas while preserving its own architecture:

- Use it as a reference for crawlable IA, category hierarchy, item detail pages, ranking modules, and reviewed submissions.
- Do not introduce it as a dependency.
- Do not fork, copy, or vendor upstream source code.
- Do not migrate away from Next.js App Router or local typed data during this stage.
