import Link from "next/link";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { href: "/tools", label: "Tools" },
      { href: "/blog", label: "Blog" },
      { href: "/blog?category=Comparisons", label: "Comparisons" },
      { href: "/blog?category=Tutorials", label: "Guides" },
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
    title: "Trust",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms" },
      { href: "/editorial-policy", label: "Editorial Policy" },
      { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-amber-100 bg-[#fff7e8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.1fr_2fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label="AI Builder Hub home">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-amber-300 text-base font-black text-slate-950 shadow-sm shadow-amber-200">
              ✦
            </span>
            <span className="text-sm font-black text-slate-950">AI Builder Hub</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
            Practical tools, guides, reviews, and workflows for indie AI builders.
          </p>
          <p className="mt-6 text-sm text-slate-500">
            © {new Date().getFullYear()} AI Builder Hub.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
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
