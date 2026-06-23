import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WarmContainer, WarmPage, WarmPanel } from "@/components/warm-page";
import { getToolBySlug, tools } from "@/data/tools";

type ToolPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {};
  }

  return {
    title: tool.name,
    description: tool.shortDescription,
    alternates: {
      canonical: `/tools/${tool.slug}`,
    },
  };
}

export default async function ToolDetailPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const outboundUrl = tool.affiliateUrl ?? tool.officialWebsite;

  return (
    <WarmPage>
      <article>
        <WarmContainer className="py-14 lg:py-16">
          <Link href="/tools" className="text-sm font-semibold text-amber-700 hover:text-slate-950">
            ← Back to tools
          </Link>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
            <WarmPanel className="p-6 sm:p-8">
              <p className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">
                {tool.category}
              </p>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                {tool.name}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">{tool.shortDescription}</p>
              <p className="mt-5 leading-7 text-slate-600">{tool.longDescription}</p>
            </WarmPanel>
            <WarmPanel className="flex flex-col justify-between bg-white p-6 sm:p-8">
              <div>
                <p className="text-sm font-semibold text-slate-950">Builder decision</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Use this page to decide whether {tool.name} fits the project stage you are in now,
                  not the stack you imagine needing later.
                </p>
              </div>
              <div className="mt-6 rounded-2xl bg-[#fbfcf8] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Affiliate status
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-950">{tool.affiliateStatus}</p>
              </div>
            </WarmPanel>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={outboundUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-950 px-6 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Visit Official Website
            </a>
            <a
              href="#review"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-amber-200 bg-white px-6 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-50"
            >
              Read Full Review
            </a>
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-500">
            Some links may be affiliate links. We may earn a commission at no extra cost to you.
          </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <section className="rounded-[1.4rem] border border-amber-200 bg-amber-50/70 p-6 md:col-span-2">
            <h2 className="text-xl font-semibold text-slate-950">Quick Verdict</h2>
            <p className="mt-4 leading-7 text-slate-600">
              {tool.name} is best for {tool.bestFor.toLowerCase()}. Avoid it if{" "}
              {tool.notBestFor.toLowerCase()}
            </p>
          </section>
          <section className="rounded-[1.4rem] border border-slate-200/70 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-950">Best For</h2>
            <p className="mt-4 leading-7 text-slate-600">{tool.bestFor}</p>
          </section>
          <section className="rounded-[1.4rem] border border-slate-200/70 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-950">Avoid If</h2>
            <p className="mt-4 leading-7 text-slate-600">{tool.notBestFor}</p>
          </section>
          <section className="rounded-[1.4rem] border border-slate-200/70 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-950">Pricing Summary</h2>
            <p className="mt-4 leading-7 text-slate-600">{tool.pricingSummary}</p>
          </section>
          <section className="rounded-[1.4rem] border border-slate-200/70 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-950">Official website</h2>
            <a
              href={tool.officialWebsite}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block break-all leading-7 text-amber-700 hover:text-slate-950"
            >
              {tool.officialWebsite}
            </a>
          </section>
          <section id="review" className="rounded-[1.4rem] border border-slate-200/70 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-950">Pros</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              {tool.pros.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-[1.4rem] border border-slate-200/70 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-950">Cons</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              {tool.cons.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-sky-500" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-[1.4rem] border border-slate-200/70 bg-white p-6 md:col-span-2">
            <h2 className="text-xl font-semibold text-slate-950">Affiliate status</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Current status: <span className="font-semibold text-slate-950">{tool.affiliateStatus}</span>.
              When an approved affiliate link is configured, the primary CTA can use it automatically. Until
              then, it links to the official website only.
            </p>
          </section>
          <section className="rounded-[1.4rem] border border-slate-200/70 bg-white p-6 md:col-span-2">
            <h2 className="text-xl font-semibold text-slate-950">Alternatives</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {tool.alternatives.map((alternative) => {
                const alternativeTool = tools.find((item) => item.slug === alternative);

                return alternativeTool ? (
                  <Link
                    key={alternative}
                    href={`/tools/${alternativeTool.slug}`}
                    className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-950"
                  >
                    {alternativeTool.name}
                  </Link>
                ) : (
                  <span
                    key={alternative}
                    className="rounded-full border border-slate-200 bg-[#fbfcf8] px-3 py-1.5 text-sm font-medium text-slate-600"
                  >
                    {alternative}
                  </span>
                );
              })}
            </div>
          </section>
          <section className="rounded-[1.4rem] border border-slate-200/70 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-950">Evidence Placeholder</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              {tool.evidenceNeeded.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-amber-500" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-[1.4rem] border border-slate-200/70 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-950">Screenshot Placeholder</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              {tool.screenshotNeeded.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-violet-500" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
        </WarmContainer>
      </article>
    </WarmPage>
  );
}
