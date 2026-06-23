import type { Metadata } from "next";
import Link from "next/link";
import { ToolCard } from "@/components/tool-card";
import { WarmContainer, WarmHero, WarmPage, WarmPanel } from "@/components/warm-page";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Tools",
  description: "AI Builder Hub 精选 VPS、域名、电商建站、托管建站和 SEO 工具。",
  alternates: {
    canonical: "/tools",
  },
};

export default function ToolsPage() {
  const categories = Array.from(new Set(tools.map((tool) => tool.category)));
  const topTools = ["cursor", "vercel", "namecheap", "digitalocean", "vultr", "semrush"]
    .map((slug) => tools.find((tool) => tool.slug === slug))
    .filter((tool) => tool !== undefined);

  return (
    <WarmPage>
      <WarmHero
        label="Tool library"
        title="Choose the stack that helps you ship."
        description="A warm, practical directory for AI builders comparing coding tools, domains, hosting, VPS, SEO platforms, and launch infrastructure."
      >
        <WarmPanel className="p-5">
          <p className="text-sm font-semibold text-slate-950">Start here</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {[
              ["Build", "AI coding tools"],
              ["Deploy", "Hosting and VPS"],
              ["Launch", "Domains and DNS"],
              ["Grow", "SEO and traffic"],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl bg-[#fbfcf8] p-4">
                <p className="text-sm font-semibold text-slate-950">{title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{copy}</p>
              </div>
            ))}
          </div>
        </WarmPanel>
      </WarmHero>

      <WarmContainer className="py-14 lg:py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              Handpicked starting points
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              These are the tools builders most often need before a project becomes real.
            </p>
          </div>
          <Link
            href="/affiliate-disclosure"
            className="text-sm font-semibold text-amber-700 hover:text-slate-950"
          >
            Affiliate disclosure
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {topTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </WarmContainer>

      <section className="border-y border-slate-200/70 bg-white/70">
        <WarmContainer className="py-14 lg:py-16">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Browse by builder job
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <a
                key={category}
                href={`#${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-amber-50 hover:text-slate-950"
              >
                {category}
              </a>
            ))}
          </div>
          <div className="mt-10 space-y-12">
            {categories.map((category) => {
              const categoryTools = tools.filter((tool) => tool.category === category);

              return (
                <section key={category} id={category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                      {category}
                    </h3>
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                      {categoryTools.length} tools
                    </span>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {categoryTools.map((tool) => (
                      <ToolCard key={tool.slug} tool={tool} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </WarmContainer>
      </section>
    </WarmPage>
  );
}
