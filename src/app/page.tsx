import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/posts";
import { tools, type Tool } from "@/data/tools";

type IconName = "spark" | "app" | "deploy" | "domain" | "traffic" | "server" | "code";

const journeyCards: {
  title: string;
  copy: string;
  href: string;
  icon: IconName;
}[] = [
  {
    title: "Build AI Apps",
    copy: "Plan MVPs, shape prompts, and turn product ideas into working interfaces.",
    href: "/blog/how-to-build-an-ai-saas-mvp",
    icon: "app",
  },
  {
    title: "Deploy & Host",
    copy: "Get projects online with Vercel, managed hosting, or a real VPS.",
    href: "/blog/how-to-choose-the-right-hosting-provider",
    icon: "deploy",
  },
  {
    title: "Find a Domain",
    copy: "Choose a clear name, register it safely, and connect DNS without panic.",
    href: "/blog/best-domain-registrars",
    icon: "domain",
  },
  {
    title: "Grow Traffic",
    copy: "Use search, content, and simple SEO workflows to bring in first visitors.",
    href: "/blog/how-to-get-first-website-visitors",
    icon: "traffic",
  },
  {
    title: "Manage Infrastructure",
    copy: "Compare VPS providers, servers, backups, regions, and deployment tradeoffs.",
    href: "/blog/best-vps-for-developers",
    icon: "server",
  },
  {
    title: "Developer Tools",
    copy: "Pick coding assistants and dev platforms that fit how you actually build.",
    href: "/blog/best-ai-coding-tools",
    icon: "code",
  },
];

const handpickedTools = [
  {
    name: "Cursor",
    slug: "cursor",
    fallbackHref: "https://www.cursor.com/",
    category: "AI Coding",
    note: "AI-first editor for building and refactoring faster.",
    accent: "from-slate-900 to-slate-700",
  },
  {
    name: "Vercel",
    slug: "vercel",
    fallbackHref: "https://vercel.com/",
    category: "Deployment",
    note: "Fast frontend deployment for Next.js projects.",
    accent: "from-zinc-950 to-zinc-700",
  },
  {
    name: "Supabase",
    slug: null,
    fallbackHref: "https://supabase.com/",
    category: "Backend",
    note: "Open-source backend stack for auth, database, and APIs.",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    name: "Namecheap",
    slug: "namecheap",
    fallbackHref: "https://www.namecheap.com/",
    category: "Domains",
    note: "Register domains and manage DNS before launch.",
    accent: "from-orange-500 to-amber-500",
  },
  {
    name: "DigitalOcean",
    slug: "digitalocean",
    fallbackHref: "https://www.digitalocean.com/",
    category: "Cloud",
    note: "Developer cloud for droplets, apps, and managed services.",
    accent: "from-sky-500 to-blue-600",
  },
  {
    name: "SE Ranking",
    slug: null,
    fallbackHref: "https://seranking.com/",
    category: "SEO",
    note: "SEO platform for tracking rankings and finding growth opportunities.",
    accent: "from-indigo-500 to-violet-500",
  },
];

const guideSlugs = [
  "hostinger-review-2026",
  "vultr-vs-digitalocean-for-developers",
  "best-vps-for-developers",
  "best-domain-registrars",
  "semrush-vs-ahrefs",
  "how-to-deploy-nextjs-on-vps",
];

const trustIndicators = [
  { value: `${tools.length} tools`, label: "Curated for builders" },
  { value: "50+ guides", label: "Reviews and playbooks" },
  { value: "No fluff", label: "Practical over generic" },
  { value: "Updated regularly", label: "Built as the stack changes" },
];

function findTool(slug: string | null): Tool | undefined {
  if (!slug) {
    return undefined;
  }

  return tools.find((tool) => tool.slug === slug);
}

function Icon({ name }: { name: IconName }) {
  const common = "h-6 w-6";

  if (name === "spark") {
    return (
      <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 2.75 14.8 9.2l6.45 2.8-6.45 2.8L12 21.25 9.2 14.8 2.75 12 9.2 9.2 12 2.75Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "app") {
    return (
      <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M7.5 6.5h9a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M9 10.5h6M9 13.5h3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    );
  }

  if (name === "deploy") {
    return (
      <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="m12 4 6.5 7h-4v6h-5v-6h-4L12 4Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path d="M6 20h12" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    );
  }

  if (name === "domain") {
    return (
      <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4.5 12h15M12 4c2.4 2.5 2.4 13.5 0 16M12 4c-2.4 2.5-2.4 13.5 0 16" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  if (name === "traffic") {
    return (
      <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 18h14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <path d="M7 15v-4M12 15V7M17 15v-6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <path d="m15.5 6.5 1.5-1.5 1.5 1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      </svg>
    );
  }

  if (name === "server") {
    return (
      <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 5.5h12v5H6zM6 13.5h12v5H6z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M9 8h.01M9 16h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 8-4 4 4 4M15 8l4 4-4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="m13 6-2 12" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

export default function Home() {
  const featuredGuides = guideSlugs
    .map((slug) => posts.find((post) => post.slug === slug))
    .filter((post): post is NonNullable<typeof post> => Boolean(post));

  return (
    <div className="overflow-x-hidden bg-[#fbfcf8]">
      <section className="overflow-hidden border-b border-slate-200/70 bg-[radial-gradient(circle_at_12%_8%,rgba(251,191,36,0.22),transparent_28%),radial-gradient(circle_at_84%_12%,rgba(56,189,248,0.16),transparent_28%),linear-gradient(180deg,#fffaf0_0%,#fbfcf8_82%)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-12 pt-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-16 lg:pt-18">
          <div className="relative z-10 flex flex-col justify-center">
            <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-amber-200/80 bg-white/75 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm shadow-amber-100/60">
              <span className="text-amber-500">
                <Icon name="spark" />
              </span>
              Built for indie AI builders
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight text-slate-950 sm:text-6xl lg:text-6xl">
              Plan.
              <br />
              Build.
              <br />
              Deploy.
              <br />
              Grow.
              <span className="mt-5 block text-balance text-4xl text-slate-800 sm:text-5xl lg:text-5xl">
                Everything AI Builders Need.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Curated tools, practical guides, honest reviews, and real-world workflows for AI
              builders, founders, developers, and indie makers.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/tools"
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-950 px-6 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Explore Tools
              </Link>
              <Link
                href="/blog"
                className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/85 px-6 text-sm font-semibold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200 hover:bg-white"
              >
                Read Guides
              </Link>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {trustIndicators.map((item) => (
                <div key={item.value} className="rounded-2xl border border-white/80 bg-white/70 p-4 shadow-sm shadow-slate-200/60 backdrop-blur">
                  <p className="text-sm font-semibold text-slate-950">{item.value}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[400px] lg:min-h-[470px]">
            <div className="absolute left-10 top-8 hidden h-24 w-24 rounded-full border border-amber-200 bg-white/35 lg:block" />
            <div className="absolute right-2 top-2 hidden h-36 w-36 rounded-full bg-emerald-100/50 blur-2xl lg:block" />
            <div className="relative mx-auto max-w-[520px] rounded-[2rem] border border-white/90 bg-white/80 p-4 shadow-2xl shadow-slate-300/40 backdrop-blur">
              <div className="rounded-[1.5rem] border border-slate-200/75 bg-white p-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-950">Builder OS</p>
                    <p className="mt-1 text-xs text-slate-500">From idea to launch</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Live stack
                  </span>
                </div>
                <div className="grid gap-3 py-5 sm:grid-cols-2">
                  {[
                    ["Plan", "Choose the buyer and workflow"],
                    ["Build", "Use AI coding with guardrails"],
                    ["Deploy", "Ship on Vercel, hosting, or VPS"],
                    ["Grow", "Turn content into first traffic"],
                  ].map(([title, copy]) => (
                    <div key={title} className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-sm font-semibold text-slate-950">{title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl bg-slate-950 p-5 text-white">
                  <p className="text-sm font-semibold">Today&apos;s playbook</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Pick one problem, choose one stack, launch one useful page, then improve it
                    with real feedback.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-3 left-0 hidden max-w-[260px] rotate-[-4deg] rounded-3xl border border-amber-200 bg-amber-50 p-5 shadow-lg shadow-amber-200/40 lg:block">
              <p className="text-sm font-semibold text-slate-950">Builder note</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Start small. Publish sooner. Replace guesses with evidence.
              </p>
            </div>
            <div className="absolute bottom-10 right-0 hidden max-w-[220px] rotate-3 rounded-3xl border border-sky-100 bg-white p-5 shadow-lg shadow-sky-100/70 lg:block">
              <p className="text-sm font-semibold text-slate-950">Next step</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Compare tools only when they unblock the next build.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              What Do You Want To Do?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Start with the job in front of you, then follow the tools and guides that match it.
            </p>
          </div>
          <Link href="/blog" className="text-sm font-semibold text-slate-700 hover:text-slate-950">
            Browse all guides
          </Link>
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {journeyCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-[1.4rem] border border-slate-200/70 bg-white p-6 shadow-sm shadow-slate-200/50 transition hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl hover:shadow-slate-200/70"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 transition group-hover:bg-amber-400 group-hover:text-slate-950">
                <Icon name={card.icon} />
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.copy}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Handpicked Tools
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                Personally selected and reviewed.
              </p>
            </div>
            <Link href="/tools" className="text-sm font-semibold text-sky-700 hover:text-sky-900">
              View all tools
            </Link>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {handpickedTools.map((item) => {
              const tool = findTool(item.slug);
              const href = tool ? `/tools/${tool.slug}` : item.fallbackHref;

              return (
                <Link
                  key={item.name}
                  href={href}
                  className="group flex min-h-56 flex-col rounded-[1.4rem] border border-slate-200/70 bg-[#fbfcf8] p-5 shadow-sm shadow-slate-200/50 transition hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className={`flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-lg font-bold text-white shadow-sm`}>
                      {item.name.slice(0, 1)}
                    </span>
                    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-500">
                      {tool ? "Tool page" : "Profile pending"}
                    </span>
                  </div>
                  <div className="mt-6 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {item.category}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{tool?.shortDescription ?? item.note}</p>
                  </div>
                  <span className="mt-6 inline-flex items-center text-sm font-semibold text-slate-950">
                    Visit
                    <span className="ml-2 transition group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Guides & Playbooks
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Reviews, comparisons, and practical workflows for the moments when builders are
              actually choosing a stack.
            </p>
          </div>
          <Link href="/blog" className="text-sm font-semibold text-sky-700 hover:text-sky-900">
            View all guides
          </Link>
        </div>
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {featuredGuides.map((post, index) => (
            <article
              key={post.slug}
              className={index === 0 ? "lg:col-span-2" : undefined}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block h-full overflow-hidden rounded-[1.5rem] border border-slate-200/70 bg-white shadow-sm shadow-slate-200/50 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70"
              >
                <div className="relative aspect-[16/9] bg-slate-100">
                  <Image
                    src={post.coverImage.src}
                    alt={post.coverImage.alt}
                    fill
                    sizes={index === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-700">
                      {post.category}
                    </span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-20">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Trusted by builders worldwide
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Join builders learning how to launch faster, choose better tools, and turn ideas
              into useful online projects.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["For founders", "Pick a stack without losing a week to tool research."],
              ["For developers", "Compare infrastructure choices before you commit."],
              ["For indie makers", "Build, publish, measure, and improve with fewer detours."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-[1.4rem] bg-[#fbfcf8] p-6">
                <p className="text-sm font-semibold text-slate-950">{title}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="overflow-hidden rounded-[2rem] border border-amber-200/70 bg-[linear-gradient(135deg,#fff7df_0%,#ffffff_48%,#e8f7ff_100%)] p-6 shadow-sm shadow-slate-200/60 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-amber-700">Builder newsletter</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                Get practical tools, deployment guides, and builder insights directly in your inbox.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                A calm note for people shipping real projects: useful tools, honest tradeoffs,
                and the next guide worth reading.
              </p>
            </div>
            <form className="flex flex-col gap-3 rounded-[1.4rem] bg-white/80 p-3 shadow-sm sm:flex-row">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="h-12 min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-300 focus:ring-4 focus:ring-amber-100"
              />
              <button
                type="submit"
                className="h-12 rounded-2xl bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
