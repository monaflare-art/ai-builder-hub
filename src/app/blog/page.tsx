import type { Metadata } from "next";
import Link from "next/link";
import { PostCard } from "@/components/post-card";
import { WarmContainer, WarmHero, WarmPage, WarmPanel } from "@/components/warm-page";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "AI Builder Hub 教程文章，覆盖 AI 项目上线、部署、SEO 和工具站搭建。",
  alternates: {
    canonical: "/blog",
  },
};

type BlogPageProps = {
  searchParams?: Promise<{ category?: string }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const categories = Array.from(new Set(posts.map((post) => post.category)));
  const params = searchParams ? await searchParams : {};
  const selectedCategory =
    params.category && categories.includes(params.category) ? params.category : undefined;
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;
  const priorityPosts = [
    "hostinger-review-2026",
    "vultr-vs-digitalocean-for-developers",
    "best-vps-for-developers",
  ]
    .map((slug) => posts.find((post) => post.slug === slug))
    .filter((post) => post !== undefined);

  return (
    <WarmPage>
      <WarmHero
        label="Guides & playbooks"
        title="Read when you are choosing what to build next."
        description="Reviews, comparisons, deployment guides, and practical builder workflows. Less feed, more field notes for shipping."
      >
        <WarmPanel className="p-5">
          <p className="text-sm font-semibold text-slate-950">Start with high-intent guides</p>
          <div className="mt-4 space-y-3">
            {priorityPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-2xl bg-[#fbfcf8] p-4 transition hover:bg-amber-50"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">
                  {post.category}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-950">{post.title}</p>
              </Link>
            ))}
          </div>
        </WarmPanel>
      </WarmHero>

      <WarmContainer className="py-14 lg:py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Browse builder resources
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Filter by topic, then pick the guide closest to the decision in front of you.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href="/blog"
              className={`rounded-full border px-3 py-1.5 text-sm font-semibold transition ${
                selectedCategory
                  ? "border-amber-200 bg-white text-slate-600 hover:bg-amber-50 hover:text-slate-950"
                  : "border-slate-950 bg-slate-950 text-white"
              }`}
            >
              All
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog?category=${encodeURIComponent(category)}`}
                className={`rounded-full border px-3 py-1.5 text-sm font-semibold transition ${
                  selectedCategory === category
                    ? "border-slate-950 bg-slate-950 text-white"
                    : "border-amber-200 bg-white text-slate-600 hover:bg-amber-50 hover:text-slate-950"
                }`}
              >
                {category}
              </Link>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
            {selectedCategory ? ` in ${selectedCategory}` : ""}.
          </p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <PostCard key={post.slug} post={post} eager={index < 3} />
          ))}
        </div>
      </WarmContainer>
    </WarmPage>
  );
}
