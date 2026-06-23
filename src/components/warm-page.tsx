import type { ReactNode } from "react";
import Link from "next/link";

export function WarmPage({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`min-h-screen bg-[radial-gradient(circle_at_10%_0%,rgba(251,191,36,0.16),transparent_26%),radial-gradient(circle_at_90%_8%,rgba(56,189,248,0.12),transparent_28%),linear-gradient(180deg,#fffaf0_0%,#fbfcf8_34%,#ffffff_100%)] ${className}`}
    >
      {children}
    </div>
  );
}

export function WarmContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>
  );
}

export function WarmHero({
  label,
  title,
  description,
  children,
}: {
  label?: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-amber-100/80">
      <WarmContainer className="py-14 lg:py-18">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            {label ? (
              <p className="inline-flex rounded-full border border-amber-200 bg-white/75 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm shadow-amber-100/60">
                <span className="mr-2 text-amber-500">✦</span>
                {label}
              </p>
            ) : null}
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>
          </div>
          {children ? <div>{children}</div> : null}
        </div>
      </WarmContainer>
    </section>
  );
}

export function WarmPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[1.6rem] border border-slate-200/70 bg-white/85 shadow-sm shadow-slate-200/60 ${className}`}
    >
      {children}
    </div>
  );
}

export function WarmLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex h-11 items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
    >
      {children}
    </Link>
  );
}
