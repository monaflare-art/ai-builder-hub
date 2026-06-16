import Link from "next/link";
import type { Tool } from "@/data/tools";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
            {tool.category}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-slate-950">{tool.name}</h3>
        </div>
        <span className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-500 transition group-hover:border-sky-200 group-hover:text-sky-700">
          View
        </span>
      </div>
      <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{tool.summary}</p>
      <div className="mt-5 space-y-2 text-sm">
        <p className="font-medium text-slate-950">Best for: {tool.bestFor}</p>
        <p className="text-slate-500">{tool.pricing}</p>
      </div>
    </Link>
  );
}
