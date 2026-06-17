import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/data/posts";
import { tools } from "@/data/tools";
import { siteConfig } from "@/lib/site";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

function getHeadingId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getRelatedPosts(slug: string) {
  const currentPost = getPostBySlug(slug);

  if (!currentPost) {
    return [];
  }

  return posts
    .filter((post) => post.slug !== currentPost.slug)
    .map((post) => {
      const categoryScore = post.category === currentPost.category ? 4 : 0;
      const tagScore = post.tags.filter((tag) => currentPost.tags.includes(tag)).length;

      return {
        post,
        score: categoryScore + tagScore,
      };
    })
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
    })
    .slice(0, 3)
    .map(({ post }) => post);
}

function renderParagraphWithLinks(text: string) {
  const linkPattern = /\[([^\]]+)\]\((\/(?:tools|blog)\/[a-z0-9-]+)\)/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(linkPattern)) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    parts.push(
      <Link
        key={`${match[2]}-${match.index}`}
        href={match[2]}
        className="font-medium text-sky-700 underline decoration-sky-200 underline-offset-4 hover:text-sky-900"
      >
        {match[1]}
      </Link>,
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

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
    description: post.excerpt,
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
  const relatedPosts = getRelatedPosts(post.slug);
  const postUrl = `${siteConfig.url}/blog/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    articleSection: post.category,
    keywords: post.tags.join(", "),
    timeRequired: post.readingTime,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteConfig.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  return (
    <article className="bg-white">
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm font-medium text-slate-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-sky-700">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="hover:text-sky-700">
                Blog
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-950">{post.title}</li>
          </ol>
        </nav>
        <header className="mt-8 border-b border-slate-200 pb-10">
          <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-500">
            <span>{post.category}</span>
            <span aria-hidden="true">/</span>
            <time dateTime={post.date}>{post.date}</time>
            <span aria-hidden="true">/</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>
        <aside className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Table of contents
          </h2>
          <ol className="mt-4 space-y-2 text-sm font-medium text-slate-700">
            {post.sections.map((section) => (
              <li key={section.heading}>
                <a href={`#${getHeadingId(section.heading)}`} className="hover:text-sky-700">
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </aside>
        <div className="mt-10 space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading} id={getHeadingId(section.heading)} className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-slate-600">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{renderParagraphWithLinks(paragraph)}</p>
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
            Start with the tools that match this guide before adding more software to your
            stack. These recommendations link to internal tool pages first, so you can compare
            pricing, use cases, and current affiliate status before visiting any official site.
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
                    <p className="mt-2 text-sm text-slate-500">{tool.pricing}</p>
                  </div>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="inline-flex h-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    View tool details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Related Articles
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Continue with closely related guides from the same builder workflow.
          </p>
          <div className="mt-6 grid gap-4">
            {relatedPosts.map((relatedPost) => (
              <article key={relatedPost.slug} className="rounded-2xl border border-slate-200 p-5">
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
                  <span>{relatedPost.category}</span>
                  <span aria-hidden="true">/</span>
                  <span>{relatedPost.readingTime}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-950">
                  <Link href={`/blog/${relatedPost.slug}`} className="hover:text-sky-700">
                    {relatedPost.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{relatedPost.excerpt}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-sky-100 bg-sky-50 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Ready to choose your next tool?
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Compare the recommended stack, read the disclosure, and pick only the tools that fit
            your project stage. Some links may become affiliate links when approved, but the guide
            remains focused on practical fit.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/tools"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Explore recommended tools
            </Link>
            <Link
              href="/affiliate-disclosure"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-950 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Read affiliate disclosure
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
