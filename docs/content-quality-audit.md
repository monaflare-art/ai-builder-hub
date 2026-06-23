# Content Quality Audit V1

Last updated: 2026-06-23

Scope: all 54 current blog articles in `src/data/posts.ts`. This is an audit only. No articles were rewritten, deleted, merged, or redirected.

## Scoring System

- Commercial Intent: 1-3 informational only, 4-6 some buying intent, 7-10 strong buying intent.
- EEAT Score: experience, evidence, originality, and credibility.
- Affiliate Potential: product fit, CTA opportunities, tool recommendations, and comparison opportunities.
- Content Quality Score: depth, usefulness, structure, uniqueness, and differentiation.
- Grade A: keep. Strong commercial value or already upgraded to money-page/comparison framework.
- Grade B: rewrite. Topic is worth keeping, but execution is too generic, evidence-light, or commercially underdeveloped.
- Grade C: delete, merge, or redirect later. Duplicate, too broad, low commercial value, or thin legacy content.

## Audit Table

| URL | Title | Category | Publish Date | Word Count | Commercial Intent | EEAT Score | Affiliate Potential | Content Quality Score | Action |
|---|---|---:|---:|---:|---:|---:|---:|---:|---|
| `/blog/how-to-build-your-first-website-with-codex` | How to Build Your First Website with Codex | AI Building | 2026-06-16 | 922 | 5 | 3 | 5 | 4 | Grade B - Rewrite into a hands-on Codex build log with screenshots, repo evidence, stack choices, and deployment proof. |
| `/blog/how-to-deploy-a-nextjs-app-to-vercel` | How to Deploy a Next.js App to Vercel | Deployment | 2026-06-16 | 852 | 5 | 3 | 5 | 4 | Grade B - Rewrite with real Vercel deployment screenshots, DNS steps, failure modes, and hosting/domain CTAs. |
| `/blog/best-vps-for-ai-builders` | Best VPS for AI Builders | Infrastructure | 2026-06-16 | 856 | 8 | 3 | 8 | 4 | Grade B - High-value topic but currently too thin; rebuild as a real best-list with provider matrix and evidence. |
| `/blog/vultr-vs-digitalocean-for-developers` | Vultr vs DigitalOcean for Developers | Comparisons | 2026-06-18 | 888 | 9 | 6 | 9 | 7 | Grade A - Keep; comparison framework exists. Needs real screenshots and measured deployment notes. |
| `/blog/how-to-choose-a-domain-name-for-your-ai-project` | How to Choose a Domain Name for Your AI Project | Domains | 2026-06-16 | 875 | 5 | 3 | 6 | 4 | Grade B - Rewrite around domain selection, registrar screenshots, TLD risk, brand checks, and registrar CTAs. |
| `/blog/how-to-start-an-affiliate-website` | How to Start an Affiliate Website | Affiliate | 2026-06-16 | 902 | 6 | 3 | 7 | 3 | Grade C - Merge into `/blog/how-to-start-an-affiliate-website-2026`; this older version is thin and duplicative. |
| `/blog/best-tools-for-solo-ai-founders` | Best Tools for Solo AI Founders | Tools | 2026-06-16 | 865 | 6 | 3 | 6 | 3 | Grade C - Merge into `AI Tools for Solopreneurs` or a future serious stack guide; current topic is broad and generic. |
| `/blog/how-to-build-a-saas-mvp-with-ai` | How to Build a SaaS MVP with AI | SaaS | 2026-06-16 | 916 | 5 | 3 | 6 | 3 | Grade C - Merge into `/blog/how-to-build-an-ai-saas-mvp`; duplicate legacy tutorial. |
| `/blog/ai-coding-tools-for-beginners` | AI Coding Tools for Beginners | AI Coding | 2026-06-16 | 887 | 5 | 3 | 5 | 4 | Grade B - Rewrite as a beginner buying guide for Codex, Cursor, Claude, Windsurf, Replit, Bolt, and Lovable. |
| `/blog/website-launch-checklist-for-indie-hackers` | Website Launch Checklist for Indie Hackers | Launch | 2026-06-16 | 839 | 4 | 3 | 4 | 3 | Grade C - Merge into `/blog/how-to-launch-a-website-in-one-day`; thin checklist with weak affiliate value. |
| `/blog/hostinger-review-2026` | Hostinger Review 2026 | Reviews | 2026-06-17 | 1118 | 10 | 7 | 9 | 8 | Grade A - Keep; money-page framework exists. Needs real Hostinger screenshots and pricing verification. |
| `/blog/namecheap-review-2026` | Namecheap Review 2026 | Reviews | 2026-06-17 | 1066 | 9 | 7 | 8 | 8 | Grade A - Keep; structure is strong. Needs real registrar checkout, DNS, renewal, and billing evidence. |
| `/blog/vultr-review-2026` | Vultr Review 2026 | Reviews | 2026-06-17 | 1067 | 10 | 7 | 9 | 8 | Grade A - Keep; strong VPS money page. Needs real server creation, dashboard, billing, and performance evidence. |
| `/blog/shopify-review-2026` | Shopify Review 2026 | Reviews | 2026-06-17 | 1507 | 9 | 3 | 8 | 4 | Grade B - Topic is valuable but article is generic. Rewrite with pricing, store setup, app ecosystem, screenshots, and alternatives. |
| `/blog/semrush-review-2026` | Semrush Review 2026 | Reviews | 2026-06-17 | 1063 | 10 | 7 | 9 | 8 | Grade A - Keep; strong SEO tool money page. Needs real keyword workflow and pricing screenshots. |
| `/blog/hostinger-vs-vultr` | Hostinger vs Vultr | Comparisons | 2026-06-17 | 1501 | 9 | 3 | 9 | 4 | Grade B - High commercial value, but current structure is placeholder-like. Rebuild as managed hosting vs VPS decision page. |
| `/blog/namecheap-vs-godaddy` | Namecheap vs GoDaddy | Comparisons | 2026-06-17 | 1490 | 9 | 3 | 8 | 4 | Grade B - Strong registrar comparison topic; needs renewal pricing, checkout, DNS, and upsell evidence. |
| `/blog/shopify-vs-wordpress` | Shopify vs WordPress | Comparisons | 2026-06-17 | 1504 | 9 | 3 | 8 | 4 | Grade B - Valuable ecommerce/CMS comparison but currently generic. Needs store evidence and real cost table. |
| `/blog/vercel-vs-netlify` | Vercel vs Netlify | Comparisons | 2026-06-17 | 1491 | 7 | 3 | 6 | 4 | Grade B - Rewrite around deployment workflows, pricing limits, forms/functions, and domain setup. |
| `/blog/claude-vs-codex` | Claude vs Codex | Comparisons | 2026-06-17 | 1502 | 7 | 3 | 6 | 4 | Grade B - Rewrite with real coding workflows and use-case tests; affiliate potential depends on available programs. |
| `/blog/how-to-buy-a-domain-name` | How to Buy a Domain Name | Tutorials | 2026-06-17 | 1812 | 7 | 3 | 8 | 5 | Grade B - Good buyer intent; needs screenshots, registrar matrix, renewal warnings, and clearer CTAs. |
| `/blog/how-to-connect-a-domain-to-vercel` | How to Connect a Domain to Vercel | Tutorials | 2026-06-17 | 1816 | 6 | 3 | 6 | 5 | Grade B - Keep and rewrite with exact DNS screenshots, Vercel verification states, and registrar-specific steps. |
| `/blog/how-to-launch-a-website-in-one-day` | How to Launch a Website in One Day | Tutorials | 2026-06-17 | 1818 | 6 | 3 | 7 | 5 | Grade B - Worth keeping, but needs a real one-day launch case study and stack recommendations. |
| `/blog/how-to-start-an-affiliate-website-2026` | How to Start an Affiliate Website | Tutorials | 2026-06-17 | 1806 | 8 | 3 | 8 | 5 | Grade B - Rewrite as a serious affiliate site blueprint with niche validation, tools, compliance, and evidence. |
| `/blog/how-to-build-an-ai-saas-mvp` | How to Build an AI SaaS MVP | Tutorials | 2026-06-17 | 1811 | 7 | 3 | 7 | 5 | Grade B - Worth keeping, but must become a build-plan with hosting, domain, AI coding, analytics, and launch proof. |
| `/blog/how-to-register-a-domain-name` | How to Register a Domain Name | Tutorials | 2026-06-17 | 1833 | 7 | 3 | 8 | 4 | Grade B - Valuable but overlaps with domain buying article; rewrite as exact registrar walkthrough or merge later. |
| `/blog/how-to-deploy-nextjs-on-hostinger` | How to Deploy Next.js on Hostinger | Tutorials | 2026-06-17 | 1829 | 8 | 3 | 8 | 4 | Grade B - High-value if factual; must verify Hostinger workflow and avoid generic deployment language. |
| `/blog/how-to-deploy-nextjs-on-vps` | How to Deploy Next.js on VPS | Tutorials | 2026-06-17 | 1819 | 8 | 3 | 8 | 5 | Grade B - Strong VPS conversion topic; needs real server setup, commands, screenshots, security checklist. |
| `/blog/how-to-create-a-business-website-with-ai` | How to Create a Business Website with AI | Tutorials | 2026-06-17 | 1816 | 6 | 3 | 7 | 4 | Grade B - Rewrite with specific business website example, AI tool workflow, hosting/domain CTAs, and launch proof. |
| `/blog/how-to-choose-the-right-hosting-provider` | How to Choose the Right Hosting Provider | Tutorials | 2026-06-17 | 1811 | 8 | 3 | 8 | 5 | Grade B - Good commercial topic; should become a hosting decision framework with provider comparison table. |
| `/blog/how-to-get-your-first-website-visitors` | How to Get Your First Website Visitors | Tutorials | 2026-06-17 | 1821 | 5 | 3 | 5 | 3 | Grade C - Merge into `/blog/how-to-get-first-website-visitors` or `/blog/how-to-get-traffic-to-a-new-website`; duplicate traffic topic. |
| `/blog/how-to-choose-a-vps` | How to Choose a VPS | Tutorials | 2026-06-17 | 1829 | 8 | 3 | 8 | 5 | Grade B - Strong commercial fit; rewrite with provider matrix, specs, regions, backups, and beginner pitfalls. |
| `/blog/how-to-buy-your-first-server` | How to Buy Your First Server | Tutorials | 2026-06-17 | 1831 | 8 | 3 | 8 | 5 | Grade B - High VPS buyer intent; rewrite as first server purchase walkthrough with Vultr/DigitalOcean/LightNode options. |
| `/blog/how-to-get-traffic-to-a-new-website` | How to Get Traffic to a New Website | Tutorials | 2026-06-17 | 1818 | 6 | 3 | 6 | 5 | Grade B - Keep if rebuilt around keyword research, analytics, SEO tools, and traffic experiments. |
| `/blog/how-to-use-ai-to-build-a-website` | How to Use AI to Build a Website | Tutorials | 2026-06-17 | 1820 | 6 | 3 | 7 | 4 | Grade B - Rewrite with real AI builder workflow and productized stack, not generic AI advice. |
| `/blog/how-to-build-an-online-business-with-ai` | How to Build an Online Business with AI | Tutorials | 2026-06-17 | 1816 | 4 | 3 | 5 | 3 | Grade C - Too broad. Merge into startup, SaaS, affiliate, or AI business ideas clusters. |
| `/blog/best-ai-website-builders` | Best AI Website Builders | Reviews | 2026-06-17 | 1538 | 9 | 3 | 9 | 4 | Grade B - Very high commercial potential; needs real tool list, tests, pricing, screenshots, and direct comparisons. |
| `/blog/best-ai-coding-tools` | Best AI Coding Tools | Reviews | 2026-06-17 | 1525 | 8 | 3 | 7 | 4 | Grade B - Strong topic; rewrite with Codex/Cursor/Claude/Windsurf/Replit/Bolt/Lovable workflows and scoring. |
| `/blog/best-vps-for-developers` | Best VPS for Developers | Reviews | 2026-06-17 | 1516 | 10 | 3 | 10 | 4 | Grade B - Highest rewrite priority; rebuild as real provider comparison with screenshots and specs. |
| `/blog/best-hosting-for-startups` | Best Hosting for Startups | Reviews | 2026-06-17 | 1122 | 9 | 6 | 9 | 7 | Grade A - Keep; money-page framework exists. Needs real provider evidence and pricing screenshots. |
| `/blog/cursor-vs-codex` | Cursor vs Codex | Comparisons | 2026-06-17 | 1517 | 7 | 3 | 6 | 4 | Grade B - Valuable AI coding comparison; needs real task tests and fewer generic sections. |
| `/blog/claude-vs-chatgpt-for-coding` | Claude vs ChatGPT for Coding | Comparisons | 2026-06-17 | 1517 | 7 | 3 | 6 | 4 | Grade B - Rewrite with coding benchmarks, workflow screenshots, and monetizable tool pathway. |
| `/blog/hostinger-vs-namecheap` | Hostinger vs Namecheap | Comparisons | 2026-06-17 | 1505 | 7 | 3 | 7 | 4 | Grade B - Topic is confusing but useful if reframed as hosting vs domain registrar, with buyer path and CTAs. |
| `/blog/how-to-launch-a-saas-mvp` | How to Launch a SaaS MVP | Tutorials | 2026-06-17 | 1818 | 7 | 3 | 7 | 5 | Grade B - Keep, but differentiate from AI SaaS MVP article; make it launch/deployment/payment-focused. |
| `/blog/ai-tools-for-solopreneurs` | AI Tools for Solopreneurs | Reviews | 2026-06-17 | 1494 | 7 | 3 | 7 | 4 | Grade B - Rewrite as a serious stack guide with categories, pricing, and use-case tests. |
| `/blog/best-domain-registrars` | Best Domain Registrars | Reviews | 2026-06-17 | 1502 | 10 | 3 | 9 | 4 | Grade B - Very high commercial value; rebuild with registrar table, renewal data, DNS workflows, and evidence. |
| `/blog/how-to-get-first-website-visitors` | How to Get First Website Visitors | Tutorials | 2026-06-17 | 1816 | 6 | 3 | 6 | 5 | Grade B - Keep as the primary traffic tutorial; needs SEO tool workflow, analytics screenshots, and case study. |
| `/blog/ai-workflow-automation-guide` | AI Workflow Automation Guide | Tutorials | 2026-06-17 | 1813 | 5 | 3 | 5 | 3 | Grade C - Too broad and not aligned with current tool directory; merge into future automation stack guide only if tools are added. |
| `/blog/how-to-build-a-startup-with-ai` | How to Build a Startup with AI | Tutorials | 2026-06-17 | 1833 | 5 | 3 | 6 | 4 | Grade B - Rewrite only if grounded in a concrete startup workflow, stack, validation steps, and tool choices. |
| `/blog/ai-business-ideas-for-beginners` | AI Business Ideas for Beginners | Tutorials | 2026-06-17 | 1824 | 3 | 3 | 4 | 3 | Grade C - Low commercial intent and too broad. Merge into startup/affiliate idea validation content. |
| `/blog/namecheap-vs-porkbun` | Namecheap vs Porkbun | Comparisons | 2026-06-18 | 863 | 9 | 6 | 8 | 7 | Grade A - Keep; upgraded comparison framework. Needs registrar screenshots and current renewal/pricing evidence. |
| `/blog/hostinger-vs-siteground` | Hostinger vs SiteGround | Comparisons | 2026-06-18 | 812 | 9 | 6 | 9 | 7 | Grade A - Keep; high commercial comparison framework. Needs real hosting setup/pricing evidence. |
| `/blog/semrush-vs-ahrefs` | Semrush vs Ahrefs | Comparisons | 2026-06-18 | 872 | 10 | 6 | 9 | 7 | Grade A - Keep; strong SEO comparison framework. Needs real keyword/report workflow evidence. |
| `/blog/bluehost-vs-siteground` | Bluehost vs SiteGround | Comparisons | 2026-06-18 | 807 | 9 | 6 | 8 | 7 | Grade A - Keep; high commercial framework. Needs hosting screenshots and pricing verification. |

## Grade Totals

| Grade | Count | Interpretation |
|---|---:|---|
| Grade A | 10 | Keep, improve evidence, pricing verification, and screenshot layers. |
| Grade B | 36 | Rewrite. These are the main rebuild queue. |
| Grade C | 8 | Do not rewrite first. Merge, redirect, or delete after traffic/indexing review. |

## Brutal Findings

- Most non-rewritten articles read like scaled AI tutorials: adequate length but weak evidence, weak specificity, and repeated section patterns.
- Several high-value pages have the right keyword but not the right buyer experience: "Best VPS", "Best Domain Registrars", "Shopify Review", and "Best AI Website Builders" are commercially valuable but underdeveloped.
- The upgraded money pages are structurally better, but many still rely on "Pending Verification" evidence blocks rather than real screenshots or hands-on observations.
- Duplicate clusters are diluting quality: affiliate website, SaaS MVP, traffic, website launch, and broad AI business topics should be consolidated.
- Current content volume is enough. Quality, evidence, and differentiation are the bottleneck.
