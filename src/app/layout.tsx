import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - AI 工具与建站教程导航`,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "AI tools",
    "Codex",
    "VPS",
    "domain",
    "Next.js",
    "Vercel",
    "AI 建站",
    "独立开发",
  ],
  openGraph: {
    title: `${siteConfig.name} - AI 工具与建站教程导航`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - AI 工具与建站教程导航`,
    description: siteConfig.description,
  },
  verification: {
    google: [
      "6hJz0SerCcUIgbLqf3lc3y_wWXaurNZVrfYblU5fKwQ",
      "WG6PGTlp7psk_mynzAuC0mM1a7A0DmwHKq7MV1Mz9AI",
    ],
  },
  other: {
    "impact-site-verification": "87c7ab99-a363-4c0b-90bb-da1318e93aa9",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script
          async
          src="https://analytics.your-domain.com/script.js"
          data-website-id="umami-aibuilderhub-prod"
        />
      </head>
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
