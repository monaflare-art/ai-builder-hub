import Link from "next/link";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { href: "/tools", label: "Tools" },
      { href: "/blog", label: "Blog" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Categories",
    links: [
      { href: "/blog/best-vps-for-developers", label: "VPS & Cloud" },
      { href: "/blog/best-domain-registrars", label: "Domains" },
      { href: "/blog/best-ai-coding-tools", label: "AI Coding" },
      { href: "/blog/how-to-get-first-website-visitors", label: "Growth" },
    ],
  },
  {
    title: "Popular Guides",
    links: [
      { href: "/blog/hostinger-review-2026", label: "Hostinger Review" },
      { href: "/blog/vultr-vs-digitalocean-for-developers", label: "Vultr vs DigitalOcean" },
      { href: "/blog/semrush-vs-ahrefs", label: "Semrush vs Ahrefs" },
      { href: "/blog/how-to-deploy-nextjs-on-vps", label: "Deploy Next.js on VPS" },
    ],
  },
  {
    title: "Trust",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms" },
      { href: "/editorial-policy", label: "Editorial Policy" },
      { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.1fr_2fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label="AI Builder Hub home">
            <span className="flex size-9 items-center justify-center rounded-xl bg-slate-950 text-sm font-semibold text-white">
              AI
            </span>
            <span className="text-sm font-semibold text-slate-950">AI Builder Hub</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
            Practical tools, guides, reviews, and workflows for indie AI builders.
          </p>
          <p className="mt-6 text-sm text-slate-500">
            © {new Date().getFullYear()} AI Builder Hub.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-semibold text-slate-950">{group.title}</p>
              <div className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    className="text-sm text-slate-500 transition hover:text-slate-950"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
