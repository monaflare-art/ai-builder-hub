import Link from "next/link";
import type { Post } from "@/data/posts";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
        <span>{post.category}</span>
        <span aria-hidden="true">/</span>
        <time dateTime={post.publishedAt}>{post.publishedAt}</time>
        <span aria-hidden="true">/</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">
        <Link href={`/blog/${post.slug}`} className="hover:text-sky-700">
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{post.description}</p>
    </article>
  );
}
