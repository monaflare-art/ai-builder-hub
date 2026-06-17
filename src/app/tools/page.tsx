import type { Metadata } from "next";
import { ToolCard } from "@/components/tool-card";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Tools",
  description: "AI Builder Hub 精选 VPS、域名、电商建站、托管建站和 SEO 工具。",
  alternates: {
    canonical: "/tools",
  },
};

export default function ToolsPage() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Tools for AI builders
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            这里先收录新手做线上项目最常遇到的基础工具：服务器、域名、电商、托管建站和 SEO。
            每个工具都保留未来 affiliate 链接字段，方便后续商业化。
          </p>
          <p className="mt-4 rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm leading-6 text-slate-600">
            Affiliate-ready 标记表示该工具已预留推荐链接字段；在 affiliateUrl 未配置前，页面仍使用普通工具详情页和官网链接。
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
