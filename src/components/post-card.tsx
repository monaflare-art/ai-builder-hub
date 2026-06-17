import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/data/posts";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
      <Link
        href={`/blog/${post.slug}`}
        className="relative block aspect-[16/9] overflow-hidden rounded-xl border border-slate-100 bg-slate-50"
      >
        <Image
          src={post.coverImage.src}
          alt={post.coverImage.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-300 hover:scale-[1.02]"
          unoptimized
        />
      </Link>
      <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
        <span>{post.category}</span>
        <span aria-hidden="true">/</span>
        <time dateTime={post.date}>{post.date}</time>
        <span aria-hidden="true">/</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">
        <Link href={`/blog/${post.slug}`} className="hover:text-sky-700">
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
