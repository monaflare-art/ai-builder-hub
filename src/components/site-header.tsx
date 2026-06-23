import Link from "next/link";

const navItems = [
  { href: "/tools", label: "Tools" },
  { href: "/blog", label: "Blog" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="AI Builder Hub home">
          <span className="flex size-8 items-center justify-center rounded-lg bg-slate-950 text-sm font-semibold text-white">
            AI
          </span>
          <span className="text-sm font-semibold text-slate-950">AI Builder Hub</span>
        </Link>
        <nav className="hidden items-center gap-1 sm:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
