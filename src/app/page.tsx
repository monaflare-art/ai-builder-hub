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
    why: "Helps turn rough product ideas into shippable code faster.",
    accent: "from-slate-900 to-slate-700",
  },
  {
    name: "Vercel",
    slug: "vercel",
    fallbackHref: "https://vercel.com/",
    category: "Deployment",
    note: "Fast frontend deployment for Next.js projects.",
    why: "Keeps frontend deploys simple when you need to publish quickly.",
    accent: "from-zinc-950 to-zinc-700",
  },
  {
    name: "DigitalOcean",
    slug: "digitalocean",
    fallbackHref: "https://www.digitalocean.com/",
    category: "Cloud",
    note: "Developer cloud for droplets, apps, and managed services.",
    why: "A familiar VPS path when projects outgrow simple hosting.",
    accent: "from-sky-500 to-blue-600",
  },
  {
    name: "SE Ranking",
    slug: null,
    fallbackHref: "https://seranking.com/",
    category: "SEO",
    note: "SEO platform for tracking rankings and finding growth opportunities.",
    why: "Helps turn published pages into measured search experiments.",
    accent: "from-indigo-500 to-violet-500",
  },
];

const guideSlugs = [
  "hostinger-review-2026",
  "vultr-review-2026",
  "semrush-review-2026",
  "best-vps-for-developers",
  "best-domain-registrars",
  "vultr-vs-digitalocean-for-developers",
  "hostinger-vs-siteground",
  "semrush-vs-ahrefs",
];

const trustIndicators = [
  { value: `${tools.length} tools`, label: "Mapped and reviewed" },
  { value: "50+ guides", label: "Step-by-step" },
  { value: "No fluff", label: "Only what helps" },
  { value: "Updated regularly", label: "Kept current" },
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
    <div className="overflow-x-hidden bg-[#f8f0df]">
      <section className="relative overflow-hidden border-b border-amber-100/80 bg-[#fff4df]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(250,204,21,0.32),transparent_25%),radial-gradient(circle_at_82%_22%,rgba(125,211,252,0.18),transparent_22%),linear-gradient(180deg,#fff6e6_0%,#f8f0df_92%)]" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#f8f0df] to-transparent" />
        <div className="relative mx-auto grid min-h-[455px] max-w-7xl gap-7 px-5 pb-5 pt-6 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:pb-6 lg:pt-6">
          <div className="relative z-10 flex flex-col justify-center py-1">
            <p className="inline-flex w-fit rotate-[-2deg] items-center gap-2 rounded-full border border-amber-300 bg-white/78 px-4 py-2 text-sm font-bold text-slate-900 shadow-sm shadow-amber-100/70">
              <span className="text-amber-500">
                <Icon name="spark" />
              </span>
              Built for indie AI builders
            </p>
            <h1
              aria-label="Plan. Build. Deploy. Grow. Everything AI Builders Need."
              className="mt-4 max-w-3xl text-[2.75rem] font-black leading-[0.88] tracking-tight text-slate-950 sm:text-[4.45rem] lg:text-[4.55rem]"
            >
              <span className="block text-3xl font-black leading-none text-slate-950 sm:text-4xl lg:text-[2.35rem]">
                Plan. Build.
                <br />
                Deploy. Grow.
              </span>
              <span className="relative mt-5 inline-block">
                Everything AI
                <br />
                Builders Need.
                <span className="absolute -bottom-3 left-0 h-2.5 w-full rotate-[-1deg] rounded-full bg-amber-300/90" />
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-700">
              Curated tools, practical guides, honest reviews, and real-world workflows for AI
              builders, founders, developers, and indie makers.
            </p>
            <p className="mt-2 rotate-[-2deg] text-base font-semibold text-slate-900">
              Let&apos;s build something useful.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/tools"
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-orange-400 px-6 text-sm font-black text-slate-950 shadow-[0_8px_0_rgba(15,23,42,0.12)] ring-1 ring-orange-500/40 transition hover:-translate-y-1 hover:bg-amber-300"
              >
                Explore Tools
                <span className="ml-2">→</span>
              </Link>
              <Link
                href="/blog"
                className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 px-6 text-sm font-bold text-slate-950 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:bg-white"
              >
                Read Guides
              </Link>
            </div>
            <div className="mt-5 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {trustIndicators.map((item) => (
                <div key={item.value} className="flex items-start gap-2 rounded-2xl border border-white/80 bg-white/68 p-3 shadow-sm shadow-slate-200/60 backdrop-blur">
                  <span className="mt-0.5 text-amber-500">✦</span>
                  <div>
                    <p className="text-sm font-black text-slate-950">{item.value}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden min-h-[390px] lg:block">
            <div className="absolute bottom-3 left-4 right-2 h-[260px] rounded-[2.2rem] bg-[linear-gradient(150deg,#f4d29d_0%,#e9ad61_48%,#c98744_100%)] shadow-2xl shadow-amber-900/18" />
            <div className="absolute bottom-8 left-8 h-24 w-52 rotate-[-5deg] rounded-[1.5rem] border border-amber-200 bg-[#fff9df] shadow-xl shadow-amber-900/10" />
            <div className="absolute bottom-10 left-16 h-16 w-40 rotate-[-5deg] rounded-xl border-l-4 border-amber-300 bg-[repeating-linear-gradient(180deg,#fffdfa_0,#fffdfa_18px,#e8dfc8_19px)]" />
            <div className="absolute right-16 top-12 h-20 w-20 rounded-full bg-[#f3e0bf] shadow-lg shadow-amber-900/10">
              <div className="absolute inset-3 rounded-full border-[10px] border-white bg-[#7b4a2f]" />
              <div className="absolute -right-5 top-6 h-8 w-7 rounded-r-full border-4 border-white" />
            </div>

            <div className="absolute left-20 top-6 w-[72%] max-w-[500px] rotate-[2deg] rounded-[1.7rem] border-[9px] border-slate-950 bg-slate-950 shadow-2xl shadow-slate-900/20">
              <div className="rounded-[0.95rem] bg-[#fffdf6] p-4">
                <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex size-7 items-center justify-center rounded-lg bg-amber-300 text-slate-950">✦</span>
                    <p className="text-sm font-black text-slate-950">AI Builder Hub</p>
                  </div>
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-500">
                    Stack finder
                  </span>
                </div>
                <div className="mt-4">
                  <p className="text-xl font-black leading-tight text-slate-950">
                    Find the best tools
                    <br />
                    for your next project.
                  </p>
                  <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-3 text-sm font-semibold text-slate-400">
                    Search tools, guides, workflows...
                  </div>
                  <div className="mt-3 grid grid-cols-4 gap-2">
                    {["AI Tools", "Hosting", "VPS", "Domains"].map((label) => (
                      <div key={label} className="rounded-2xl border border-slate-200 bg-white p-2 text-center text-xs font-black text-slate-700 shadow-sm">
                        {label}
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {["Review", "Compare", "Launch"].map((label, index) => (
                      <div key={label} className="rounded-2xl bg-slate-50 p-3">
                        <div className={`h-11 rounded-xl ${index === 0 ? "bg-amber-100" : index === 1 ? "bg-sky-100" : "bg-emerald-100"}`} />
                        <p className="mt-2 text-xs font-black text-slate-800">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-4 w-48 rotate-[-6deg] rounded-[1.4rem] border border-amber-200 bg-amber-100 p-4 shadow-xl shadow-amber-900/10">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-700">sticky note</p>
              <p className="mt-3 text-lg font-black leading-tight text-slate-950">
                Pick one stack.
                <br />
                Ship this week.
              </p>
              <span className="absolute -right-4 top-8 text-4xl text-amber-500">↗</span>
            </div>

            <div className="absolute bottom-4 right-8 w-60 rotate-[5deg] rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-slate-950 text-white">✓</span>
                <div>
                  <p className="text-sm font-black text-slate-950">Launch checklist</p>
                  <p className="text-xs font-semibold text-slate-500">Domain · Deploy · Grow</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                {["Choose domain", "Deploy homepage", "Submit sitemap"].map((item) => (
                  <p key={item} className="rounded-full bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-4 max-w-7xl px-5 pb-14 sm:px-6 lg:px-8 lg:pb-16">
        <div className="rounded-[2.4rem] border border-slate-200/70 bg-white/88 p-5 shadow-2xl shadow-slate-200/70 backdrop-blur sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="relative inline-block text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                What Do You Want To Do?
                <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-amber-300/80" />
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                Start with the job in front of you, then follow the tools and guides that match it.
              </p>
            </div>
            <Link href="/blog" className="text-sm font-black text-blue-600 hover:text-blue-800">
              Browse all guides →
            </Link>
          </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {journeyCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group min-h-44 rounded-[1.35rem] border border-slate-200/70 bg-[linear-gradient(145deg,#ffffff_0%,#fff8e7_100%)] p-4 shadow-sm shadow-slate-200/70 transition hover:-translate-y-1 hover:rotate-[-1deg] hover:border-amber-200 hover:shadow-xl hover:shadow-slate-200/70"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl border border-amber-200 bg-white text-amber-600 shadow-sm transition group-hover:bg-amber-400 group-hover:text-slate-950">
                <Icon name={card.icon} />
              </span>
              <h3 className="mt-5 text-lg font-black tracking-tight text-slate-950">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{card.copy}</p>
            </Link>
          ))}
        </div>
        </div>
      </section>

      <section className="bg-[#f8f0df]">
        <div className="mx-auto max-w-7xl px-5 pb-14 sm:px-6 lg:px-8 lg:pb-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex flex-wrap items-end gap-3">
              <h2 className="relative inline-block text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Handpicked Builder Tools
                <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-amber-300/80" />
              </h2>
                <p className="max-w-xl pb-1 text-sm font-semibold leading-6 text-slate-600">
                  Tools I would actually consider when building, deploying, or growing a real project.
                </p>
              </div>
            </div>
            <Link href="/tools" className="text-sm font-black text-blue-600 hover:text-blue-800">
              View Full Stack →
            </Link>
          </div>
          <div className="relative mt-9">
            <p className="absolute -left-2 -top-5 hidden rotate-[-8deg] text-sm font-black text-red-500 lg:block">
              my favorite!
            </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {handpickedTools.map((item) => {
              const tool = findTool(item.slug);
              const href = tool ? `/tools/${tool.slug}` : item.fallbackHref;

              return (
                <Link
                  key={item.name}
                  href={href}
                  className="group flex min-h-[18rem] flex-col rounded-[1.35rem] border border-amber-100 bg-[#fffdf6] p-4 shadow-sm shadow-amber-900/5 transition hover:-translate-y-1 hover:rotate-[1deg] hover:border-amber-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className={`flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-xl font-black text-white shadow-sm`}>
                      {item.name.slice(0, 1)}
                    </span>
                    <span className="rounded-full border border-amber-200 bg-white px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-amber-700">
                      {item.category}
                    </span>
                  </div>
                  <div className="mt-5 flex-1">
                    <h3 className="text-xl font-black tracking-tight text-slate-950">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{tool?.shortDescription ?? item.note}</p>
                    <div className="mt-4 rounded-2xl bg-amber-50/80 p-3">
                      <p className="text-[11px] font-black uppercase tracking-[0.16em] text-amber-700">
                        Why it helps
                      </p>
                      <p className="mt-2 text-xs leading-5 text-slate-700">{item.why}</p>
                    </div>
                  </div>
                  <span className="mt-5 inline-flex w-fit items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-950">
                    Visit
                    <span className="ml-2 transition group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              );
            })}
          </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="relative inline-block text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Start With These Playbooks
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-amber-300/80" />
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Reviews, comparisons, and practical workflows for the moments when builders are
              actually choosing a stack.
            </p>
          </div>
          <Link href="/blog" className="text-sm font-black text-blue-600 hover:text-blue-800">
            View all guides →
          </Link>
        </div>
        {featuredGuides[0] ? (
          <div className="mt-9 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <article>
              <Link
                href={`/blog/${featuredGuides[0].slug}`}
                className="group block h-full overflow-hidden rounded-[1.6rem] border border-amber-100 bg-[#fffdf6] shadow-sm shadow-amber-900/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70"
              >
                <div className="relative aspect-[16/9] bg-slate-100">
                  <Image
                    src={featuredGuides[0].coverImage.src}
                    alt={featuredGuides[0].coverImage.alt}
                    fill
                    loading="eager"
                    sizes="(min-width: 1024px) 56vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    unoptimized
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-700">
                      {featuredGuides[0].category}
                    </span>
                    <span>{featuredGuides[0].readingTime}</span>
                  </div>
                  <h3 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
                    {featuredGuides[0].title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{featuredGuides[0].excerpt}</p>
                </div>
              </Link>
            </article>
            <div className="grid gap-4 sm:grid-cols-2">
              {featuredGuides.slice(1, 5).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group overflow-hidden rounded-[1.35rem] border border-amber-100 bg-[#fffdf6] shadow-sm shadow-amber-900/5 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70"
                >
                  <div className="relative aspect-[16/10] bg-slate-100">
                    <Image
                      src={post.coverImage.src}
                      alt={post.coverImage.alt}
                      fill
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                      unoptimized
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
                      <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-700">
                        {post.category}
                      </span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-black tracking-tight text-slate-950">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-6 lg:px-8 lg:pb-16">
        <div className="grid gap-6 rounded-[2rem] border border-amber-100 bg-[#fffdf6] p-6 shadow-sm shadow-amber-900/5 sm:p-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="inline-flex rotate-[-2deg] rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-amber-700">
              Built by an independent builder
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Why I Built This
            </h2>
          </div>
          <p className="text-base leading-8 text-slate-700">
            AI Builder Hub is built to make tool decisions easier for indie builders,
            developers, and founders. Instead of opening 20 tabs to compare hosting,
            domains, VPS providers, SEO tools, and AI coding platforms, this site
            organizes the practical choices builders actually face.
          </p>
        </div>
      </section>

      <section className="border-y border-amber-100/80 bg-[#fff7e8]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:py-16">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              For builders who want fewer tabs open.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              A calmer way to choose tools: one practical resource for hosting, domains,
              coding assistants, SEO, and the launch steps around them.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["For founders", "Choose a stack without wasting a week on tool research."],
              ["For developers", "Compare hosting, VPS, domains, and SEO tools before committing."],
              ["For indie makers", "Build, publish, measure, and improve with fewer detours."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-[1.4rem] border border-amber-100 bg-white/78 p-6 shadow-sm shadow-amber-900/5">
                <p className="text-sm font-black text-slate-950">{title}</p>
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
