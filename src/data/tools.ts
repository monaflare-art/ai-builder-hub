export type Tool = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  audience: string;
  pricing: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  officialUrl: string;
  affiliateUrl: string | null;
  affiliateStatus: "pending" | "active" | "unavailable";
};

export const tools: Tool[] = [
  {
    slug: "vultr",
    name: "Vultr",
    category: "VPS 与云服务器",
    summary:
      "面向开发者的云服务器平台，适合部署网站、API、数据库、AI 自动化服务和自托管工具。",
    audience: "想学习 VPS 部署、Linux 运维、Docker 和独立项目上线的新手开发者。",
    pricing: "按小时或按月计费，入门云服务器通常从低月费套餐开始。",
    bestFor: "需要 VPS、Docker、自托管服务或后端实验的独立开发者。",
    pros: [
      "机房区域选择多，适合面向不同地区用户部署项目",
      "按小时计费，适合小规模试错和快速实验",
      "文档和社区教程丰富，容易找到部署范例",
    ],
    cons: [
      "需要掌握基础 Linux、SSH、防火墙和备份知识",
      "服务器安全、更新和监控需要自己负责",
    ],
    officialUrl: "https://www.vultr.com/",
    affiliateUrl: null,
    affiliateStatus: "pending",
  },
  {
    slug: "namecheap",
    name: "Namecheap",
    category: "域名与 DNS",
    summary:
      "常用域名注册商，适合买域名、管理 DNS，并把域名绑定到 Vercel、VPS 或建站平台。",
    audience: "第一次购买域名、配置解析、搭建个人品牌或产品站的新手。",
    pricing: "域名按年计费，不同后缀首年价格和续费价格不同。",
    bestFor: "购买项目域名、管理 DNS、配置 Vercel 或 VPS 解析的新手。",
    pros: [
      "域名搜索和购买流程清晰",
      "DNS 管理界面相对直观",
      "经常有首年优惠，适合项目早期试水",
    ],
    cons: [
      "续费价格需要提前确认",
      "部分高级 DNS 和邮箱功能需要额外配置或付费",
    ],
    officialUrl: "https://www.namecheap.com/",
    affiliateUrl: null,
    affiliateStatus: "pending",
  },
  {
    slug: "shopify",
    name: "Shopify",
    category: "电商建站",
    summary:
      "托管式电商平台，可以快速搭建在线商店，适合把 AI 生成内容、品牌素材或实体产品商业化。",
    audience: "想做跨境电商、数字产品、品牌独立站，但不想维护服务器的人。",
    pricing: "订阅制月费，可能叠加应用、主题和交易相关费用。",
    bestFor: "想快速上线在线商店、数字产品或品牌独立站的创业者。",
    pros: [
      "支付、订单、商品、主题和应用生态成熟",
      "不需要自己维护服务器和电商核心系统",
      "适合快速验证选品和销售页面",
    ],
    cons: [
      "月费、插件费和交易成本会逐步增加",
      "深度定制需要学习 Liquid、主题结构或借助开发者",
    ],
    officialUrl: "https://www.shopify.com/",
    affiliateUrl: null,
    affiliateStatus: "pending",
  },
  {
    slug: "hostinger",
    name: "Hostinger",
    category: "托管建站",
    summary:
      "面向入门用户的主机和建站平台，适合快速上线 WordPress、作品集、落地页和小型业务网站。",
    audience: "希望低门槛上线网站，不想一开始就处理复杂云服务器配置的创作者和小商家。",
    pricing: "主机套餐按周期计费，长期套餐通常单月成本更低。",
    bestFor: "快速上线 WordPress、作品集、落地页和小型业务网站。",
    pros: [
      "入门套餐价格友好",
      "包含主机、域名、邮箱、WordPress 等常见建站能力",
      "控制台对非技术用户比较友好",
    ],
    cons: [
      "灵活性不如自管 VPS",
      "高流量或复杂应用可能需要升级套餐或迁移架构",
    ],
    officialUrl: "https://www.hostinger.com/",
    affiliateUrl: null,
    affiliateStatus: "pending",
  },
  {
    slug: "semrush",
    name: "Semrush",
    category: "SEO 与增长",
    summary:
      "SEO、关键词研究、竞品分析和内容营销工具，适合为 AI 生成内容和网站项目寻找流量机会。",
    audience: "想做内容站、工具站、联盟营销或长期 SEO 增长的独立开发者和运营者。",
    pricing: "订阅制 SaaS 工具，价格更适合已有明确 SEO 计划的项目。",
    bestFor: "关键词研究、竞品分析、内容规划和长期 SEO 增长。",
    pros: [
      "关键词、反链、竞品和站点审计能力完整",
      "适合做内容选题和搜索流量规划",
      "报告能力较强，方便持续跟踪增长表现",
    ],
    cons: [
      "价格对早期个人项目偏高",
      "数据很多，新手需要时间建立分析框架",
    ],
    officialUrl: "https://www.semrush.com/",
    affiliateUrl: null,
    affiliateStatus: "pending",
  },
];

export function getToolBySlug(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}
