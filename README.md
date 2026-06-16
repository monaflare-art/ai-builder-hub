# AI Builder Hub

AI Builder Hub 是一个 Next.js + Tailwind 导航与教程站，面向想用 AI 工具、Codex、VPS、域名和建站平台做线上项目的新手。

当前 canonical 域名：`https://ai-builder-hub-theta.vercel.app`

## 功能

- 首页：项目定位、上线路径、精选工具和教程入口
- `/tools`：工具列表页
- `/tools/[slug]`：单个工具详情页
- `/blog`：教程文章列表页
- `/blog/[slug]`：单篇文章页
- `/affiliate-disclosure`：联盟链接披露页面
- 本地 TS 数据文件，无登录系统，无数据库
- Next.js metadata、`sitemap.xml`、`robots.txt`
- 响应式布局，可部署到 Vercel

## 预置工具

- Vultr
- Namecheap
- Shopify
- Hostinger
- Semrush

工具数据位于 `src/data/tools.ts`，字段包含名称、分类、简介、适合人群、定价说明、最佳适用场景、优点、缺点、官网链接、affiliate 链接和 affiliate 状态。

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

## 构建

```bash
npm run build
npm run start
```

## 部署到 Vercel

1. 将项目推送到 GitHub。
2. 在 Vercel 创建新项目并导入该仓库。
3. Framework Preset 选择 Next.js。
4. Build Command 使用默认值 `npm run build`。
5. Output Directory 保持默认。
6. 部署完成后，把 `src/lib/site.ts` 里的 `siteConfig.url` 改成你的正式域名。

## 内容扩展

- 替换 affiliateUrl：在 `src/data/tools.ts` 找到对应工具，把 `affiliateUrl: null` 改成你的 affiliate 链接，并把 `affiliateStatus` 从 `pending` 改成 `active`。工具详情页主按钮会优先使用 `affiliateUrl`；如果为空，会自动使用 `officialUrl`。
- 新增工具：在 `src/data/tools.ts` 添加一条工具记录。需要填写 `slug`、`name`、`category`、`summary`、`audience`、`pricing`、`bestFor`、`pros`、`cons`、`officialUrl`、`affiliateUrl`、`affiliateStatus`。
- 新增文章：在 `src/data/posts.ts` 添加一条文章记录。需要填写 `slug`、`title`、`excerpt`、`date`、`readingTime`、`category`、`tags`、`recommendedToolSlugs` 和 `sections`。`recommendedToolSlugs` 会控制文章底部的 Recommended Tools 区块，正文可以使用 `[Tool Name](/tools/tool-slug)` 插入内部工具链接。
- 修改站点名称、描述和站点 URL：编辑 `src/lib/site.ts`。
