import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/data/posts";
import { tools } from "@/data/tools";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const recommendedTools = post.recommendedToolSlugs
    .map((toolSlug) => tools.find((tool) => tool.slug === toolSlug))
    .filter((tool) => tool !== undefined);

  return (
    <article className="bg-white">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 lg:px-8">
        <Link href="/blog" className="text-sm font-semibold text-sky-700 hover:text-sky-900">
          Back to blog
        </Link>
        <header className="mt-8 border-b border-slate-200 pb-10">
          <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-500">
            <span>{post.category}</span>
            <span aria-hidden="true">/</span>
            <time dateTime={post.publishedAt}>{post.publishedAt}</time>
            <span aria-hidden="true">/</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{post.description}</p>
        </header>
        <div className="mt-10 space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-slate-600">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Recommended Tools
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            根据这篇文章的主题，下面这些工具更适合作为下一步参考。
          </p>
          <div className="mt-6 grid gap-4">
            {recommendedTools.map((tool) => (
              <div
                key={tool.slug}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                      {tool.category}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-950">{tool.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{tool.bestFor}</p>
                  </div>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="inline-flex h-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    View tool
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
