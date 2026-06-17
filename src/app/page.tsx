import Link from "next/link";
import { PostCard } from "@/components/post-card";
import { ToolCard } from "@/components/tool-card";
import { posts } from "@/data/posts";
import { tools } from "@/data/tools";

const steps = ["AI idea", "Codex build", "Domain", "Deploy", "SEO"];

const recommendedStack = [
  {
    stage: "Domain",
    name: "Namecheap",
    href: "/tools/namecheap",
    copy: "Buy a memorable domain and manage DNS before launch.",
  },
  {
    stage: "Fast site",
    name: "Hostinger",
    href: "/tools/hostinger",
    copy: "Launch a WordPress, portfolio, or small business site with less setup.",
  },
  {
    stage: "Developer VPS",
    name: "Vultr",
    href: "/tools/vultr",
    copy: "Run Docker, APIs, background workers, and self-hosted experiments.",
  },
  {
    stage: "Commerce",
    name: "Shopify",
    href: "/tools/shopify",
    copy: "Validate products, digital downloads, and simple ecommerce workflows.",
  },
  {
    stage: "Growth",
    name: "Semrush",
    href: "/tools/semrush",
    copy: "Research keywords, compare competitors, and plan SEO content.",
  },
];

export default function Home() {
  return (
    <>
      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Build your first AI-powered online project.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              AI Builder Hub 帮助新手把 AI 工具、Codex、VPS、域名、建站平台和 SEO
              串成一条可执行的上线路径。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/tools"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Explore tools
              </Link>
              <Link
                href="/blog"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-950 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Read tutorials
              </Link>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/70">
            <div className="rounded-2xl border border-slate-200 bg-slate-950 p-4 text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-sm font-medium">Launch workspace</span>
                <span className="text-xs text-slate-400">v1 roadmap</span>
              </div>
              <div className="space-y-3 py-5">
                {steps.map((step, index) => (
                  <div key={step} className="flex items-center gap-3 rounded-xl bg-white/[0.04] p-3">
                    <span className="flex size-7 items-center justify-center rounded-lg bg-white text-xs font-semibold text-slate-950">
                      {index + 1}
                    </span>
                    <span className="text-sm text-slate-100">{step}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-white p-4 text-slate-950">
                <p className="text-sm font-semibold">Recommended starter stack</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Next.js + Tailwind + Vercel, then add VPS, domain, ecommerce, and SEO tools
                  only when the project needs them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                Start with recommended stack
              </h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                Pick the minimum set of tools for your current stage, then add more only when
                the project has real traffic, users, or revenue signals.
              </p>
            </div>
            <Link
              href="/affiliate-disclosure"
              className="text-sm font-semibold text-sky-700 hover:text-sky-900"
            >
              Affiliate disclosure
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {recommendedStack.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white hover:shadow-md hover:shadow-slate-200/70"
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  {item.stage}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-950 group-hover:text-sky-700">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.copy}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              Curated builder tools
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              从服务器、域名、电商、托管建站到 SEO，先理解每个工具在项目中的位置。
            </p>
          </div>
          <Link className="text-sm font-semibold text-sky-700 hover:text-sky-900" href="/tools">
            View all tools
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tools.slice(0, 3).map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              Tutorials for shipping
            </h2>
            <p className="mt-3 text-slate-600">
              不只收集工具，也记录新手把想法变成线上项目时最容易卡住的步骤。
            </p>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
