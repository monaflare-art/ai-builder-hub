import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-slate-500 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} AI Builder Hub. Built for indie AI builders.</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Link className="hover:text-slate-950" href="/about">
            About
          </Link>
          <Link className="hover:text-slate-950" href="/contact">
            Contact
          </Link>
          <Link className="hover:text-slate-950" href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="hover:text-slate-950" href="/terms">
            Terms
          </Link>
          <Link className="hover:text-slate-950" href="/affiliate-disclosure">
            Affiliate Disclosure
          </Link>
          <Link className="hover:text-slate-950" href="/editorial-policy">
            Editorial Policy
          </Link>
          <Link className="hover:text-slate-950" href="/tools">
            Tools
          </Link>
          <Link className="hover:text-slate-950" href="/blog">
            Blog
          </Link>
        </div>
      </div>
    </footer>
  );
}
