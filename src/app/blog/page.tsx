import type { Metadata } from "next";
import { PostCard } from "@/components/post-card";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "AI Builder Hub 教程文章，覆盖 AI 项目上线、部署、SEO 和工具站搭建。",
};

export default function BlogPage() {
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
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
