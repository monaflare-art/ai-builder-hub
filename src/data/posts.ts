export type Post = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  recommendedToolSlugs: string[];
  sections: {
    heading: string;
    body: string[];
  }[];
};

export const posts: Post[] = [
  {
    slug: "ai-project-launch-checklist",
    title: "AI 项目上线前的 7 步检查清单",
    description:
      "从想法验证、域名、部署、SEO 到基础监控，帮你把 AI 辅助开发的项目真正发布出去。",
    publishedAt: "2026-06-16",
    readingTime: "6 min read",
    category: "上线教程",
    recommendedToolSlugs: ["vultr", "namecheap", "hostinger"],
    sections: [
      {
        heading: "先定义一个小到能发布的版本",
        body: [
          "新手最容易卡在功能太多。第一版只需要回答三个问题：用户是谁、他们要完成什么动作、你用什么页面承接这个动作。",
          "如果你正在用 Codex 或其他 AI 编程工具，把需求拆成首页、核心功能页、数据文件、部署配置和 README，通常会比一次性描述整个产品更稳。",
        ],
      },
      {
        heading: "准备域名和部署环境",
        body: [
          "内容站、导航站和工具站可以优先用 Vercel 部署，省掉服务器维护。需要后台任务、数据库代理或自托管服务时，再考虑 VPS。",
          "域名建议尽早购买，并把 DNS 解析流程记录在项目文档里。以后换平台时，你会感谢现在的自己。",
        ],
      },
      {
        heading: "上线后立刻补齐 SEO 基础",
        body: [
          "每个页面都应该有清晰标题、描述、规范 URL、站点地图和 robots。内容页要有稳定 slug，并尽量让标题直接回答搜索意图。",
          "第一版不要追求复杂增长系统，先保证搜索引擎能读懂你的网站。",
        ],
      },
    ],
  },
  {
    slug: "vps-vs-vercel-for-beginners",
    title: "新手该选 VPS 还是 Vercel？",
    description:
      "用实际项目场景比较 VPS 和 Vercel：什么时候省心优先，什么时候需要服务器控制权。",
    publishedAt: "2026-06-16",
    readingTime: "5 min read",
    category: "部署入门",
    recommendedToolSlugs: ["vultr", "hostinger", "namecheap"],
    sections: [
      {
        heading: "静态站和前端应用优先 Vercel",
        body: [
          "如果你的项目是 Next.js 网站、博客、导航站、落地页或轻量 API，Vercel 的部署体验会更适合第一版。",
          "它把 HTTPS、预览环境、自动构建和全球 CDN 都整合好了，新手可以把注意力放在产品内容上。",
        ],
      },
      {
        heading: "需要长期进程时再考虑 VPS",
        body: [
          "当你需要 Docker、定时任务、爬虫、队列、自托管数据库或特殊运行环境，VPS 会给你更多控制权。",
          "代价是你要负责 SSH、安全更新、防火墙、备份和监控。它很强，但不是所有项目第一天就需要。",
        ],
      },
    ],
  },
  {
    slug: "affiliate-tool-site-foundation",
    title: "如何搭一个可扩展的联盟工具导航站",
    description:
      "用本地 TS 数据文件先跑通工具字段、详情页和内容页，为未来 affiliate 链接和 SEO 内容打基础。",
    publishedAt: "2026-06-16",
    readingTime: "7 min read",
    category: "网站架构",
    recommendedToolSlugs: ["semrush", "shopify", "namecheap"],
    sections: [
      {
        heading: "先把工具数据结构设计清楚",
        body: [
          "工具导航站的核心不是页面数量，而是字段稳定。名称、分类、简介、适合人群、优缺点、官网链接和 affiliate 链接应该从第一版就固定下来。",
          "早期用本地 TS 数据文件足够了。等内容规模变大，再迁移到 CMS 或数据库会更自然。",
        ],
      },
      {
        heading: "每个工具都应该有独立详情页",
        body: [
          "详情页能承接搜索流量，也方便之后补充教程、案例、优惠信息和替代工具比较。",
          "列表页负责发现，详情页负责解释和转化。把这两个职责分清，网站会更容易扩展。",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
