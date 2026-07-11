# MEMORY.md

## Project Identity

- Project name: ai-builder-hub
- Repository:
- Main goal: Build an English/Chinese-friendly AI tools, tutorials, hosting, domain and builder-platform navigation site for beginners who want to launch online AI projects.
- Current stage: Navigation and tutorial site foundation

## Tech Stack

- Language: TypeScript
- Framework: Next.js App Router + React
- Package manager: npm
- Deployment: Vercel target

## Important Decisions

- The site uses local TypeScript data files for tools and posts; no login system and no database.
- Current canonical domain is `https://theaibuilderhub.com`.
- SEO surfaces include Next.js metadata, `sitemap.xml` and `robots.txt`.
- Affiliate links are supported through tool data fields while preserving official-link fallback.
- `geekape/geek-navigation` was evaluated on 2026-07-11 as a reference-only navigation/SEO architecture source. AI Builder Hub should reuse its crawlable IA, two-level taxonomy, detail-page, ranking, and reviewed-submission ideas, but must not fork, copy, vendor, or depend on the upstream project.

## Known Issues

- `MEMORY.md` was created on 2026-07-11 because the project previously had `AGENTS.md` but no project memory file.

## User Preferences

- 默认中文沟通
- 代码、命令、变量名用英文
- 结论先行
- 解释技术选择时说明业务影响

## External Resources

- GitHub:
  - geek-navigation reference: https://github.com/geekape/geek-navigation (`dev` commit `f5b0bcbe1d8f3ff12e454f7e5858554999a203c7`, MIT, reference only)
- Server:
- Deployment: Vercel
- Credentials location only:
