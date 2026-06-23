import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/data/posts";

type PostCardProps = {
  post: Post;
  eager?: boolean;
};

export function PostCard({ post, eager = false }: PostCardProps) {
  return (
    <article className="group rounded-[1.4rem] border border-slate-200/70 bg-white p-4 shadow-sm shadow-slate-200/50 transition hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl hover:shadow-slate-200/70">
      <Link
        href={`/blog/${post.slug}`}
        className="relative block aspect-[16/9] overflow-hidden rounded-[1.1rem] border border-slate-100 bg-slate-50"
      >
        <Image
          src={post.coverImage.src}
          alt={post.coverImage.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          loading={eager ? "eager" : "lazy"}
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
          unoptimized
        />
      </Link>
      <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
        <span className="rounded-full bg-amber-50 px-2.5 py-1 text-amber-700">{post.category}</span>
        <span aria-hidden="true">/</span>
        <time dateTime={post.date}>{post.date}</time>
        <span aria-hidden="true">/</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">
        <Link href={`/blog/${post.slug}`} className="hover:text-amber-700">
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-200 bg-[#fbfcf8] px-2.5 py-1 text-xs font-medium text-slate-500"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
