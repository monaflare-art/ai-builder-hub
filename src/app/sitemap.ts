import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";
import { tools } from "@/data/tools";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/tools", "/blog", "/affiliate-disclosure"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
  }));

  const toolRoutes = tools.map((tool) => ({
    url: `${siteConfig.url}/tools/${tool.slug}`,
    lastModified: now,
  }));

  const postRoutes = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [...routes, ...toolRoutes, ...postRoutes];
}
