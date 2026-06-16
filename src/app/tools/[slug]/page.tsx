import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    description: tool.summary,
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

  const outboundUrl = tool.affiliateUrl ?? tool.officialUrl;

  return (
    <article className="bg-white">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8">
        <Link href="/tools" className="text-sm font-semibold text-sky-700 hover:text-sky-900">
          Back to tools
        </Link>
        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-slate-500">{tool.category}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {tool.name}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{tool.summary}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={outboundUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Visit Official Website
            </a>
            <a
              href="#review"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-950 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Read Full Review
            </a>
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-500">
            Some links may be affiliate links. We may earn a commission at no extra cost to you.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <section className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-950">适合人群</h2>
            <p className="mt-4 leading-7 text-slate-600">{tool.audience}</p>
          </section>
          <section className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-950">Best for</h2>
            <p className="mt-4 leading-7 text-slate-600">{tool.bestFor}</p>
          </section>
          <section className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-950">Pricing</h2>
            <p className="mt-4 leading-7 text-slate-600">{tool.pricing}</p>
          </section>
          <section className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-950">官网链接</h2>
            <a
              href={tool.officialUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block break-all leading-7 text-sky-700 hover:text-sky-900"
            >
              {tool.officialUrl}
            </a>
          </section>
          <section id="review" className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-950">优点</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              {tool.pros.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-950">缺点</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              {tool.cons.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-sky-500" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:col-span-2">
            <h2 className="text-xl font-semibold text-slate-950">Affiliate status</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Current status: <span className="font-semibold text-slate-950">{tool.affiliateStatus}</span>.
              When an affiliate link is configured, the primary CTA will use it automatically. Until then,
              it links to the official website.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
