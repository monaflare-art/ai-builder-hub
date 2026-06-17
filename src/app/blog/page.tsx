import type { Metadata } from "next";
import Link from "next/link";
import { PostCard } from "@/components/post-card";
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

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Builder tutorials
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            面向新手的实践教程：如何选工具、如何部署、如何让 AI 辅助开发的项目真正上线。
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href="/blog"
              className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                selectedCategory
                  ? "border-slate-200 bg-white text-slate-600 hover:border-sky-200 hover:text-sky-700"
                  : "border-slate-950 bg-slate-950 text-white"
              }`}
            >
              All
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog?category=${encodeURIComponent(category)}`}
                className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                  selectedCategory === category
                    ? "border-slate-950 bg-slate-950 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-sky-200 hover:text-sky-700"
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
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
