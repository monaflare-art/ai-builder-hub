import Link from "next/link";

const navItems = [
  { href: "/", label: "Start Here" },
  { href: "/tools", label: "Tools" },
  { href: "/blog?category=Reviews", label: "Reviews" },
  { href: "/blog?category=Comparisons", label: "Comparisons" },
  { href: "/blog", label: "Playbooks" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-100/80 bg-[#fffaf0]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="AI Builder Hub home">
          <span className="flex size-9 items-center justify-center rounded-xl bg-amber-300 text-slate-950 shadow-sm shadow-amber-200">
            ✦
          </span>
          <span className="text-base font-semibold tracking-tight text-slate-950">
            AI Builder Hub
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={`${item.label}-${item.href}`}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-slate-950 hover:shadow-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/blog"
          className="flex size-10 items-center justify-center rounded-full border border-amber-200 bg-white text-slate-700 transition hover:border-amber-300 hover:text-slate-950 md:hidden"
          aria-label="Browse guides"
        >
          <svg className="size-4" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="m21 21-4.2-4.2M10.8 18a7.2 7.2 0 1 1 0-14.4 7.2 7.2 0 0 1 0 14.4Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
}
