import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about AI Builder Hub, an independent content website for AI builders, developers, founders, and website owners.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
          About AI Builder Hub
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Independent guidance for builders choosing web tools.
        </h1>
        <div className="mt-8 space-y-6 text-base leading-8 text-slate-600">
          <p>
            AI Builder Hub is an independent content website for developers, AI builders, startup
            founders, hosting users, VPS users, domain buyers, and website owners who want to turn
            online project ideas into working websites.
          </p>
          <p>
            The site covers hosting, VPS providers, domain registrars, SEO tools, AI coding tools,
            ecommerce platforms, and website infrastructure. Its guides are written to help readers
            compare options, understand tradeoffs, and choose tools that fit their current stage.
          </p>
          <p>
            AI Builder Hub is operated as an independent publishing project. Reviews, tutorials, and
            comparison pages are editorially written. Some links may be affiliate links, but
            affiliate relationships do not guarantee positive coverage or placement.
          </p>
          <p>
            For more detail about how reviews are written, read the{" "}
            <Link
              href="/editorial-policy"
              className="font-medium text-sky-700 underline decoration-sky-200 underline-offset-4 hover:text-sky-900"
            >
              editorial policy
            </Link>{" "}
            and{" "}
            <Link
              href="/affiliate-disclosure"
              className="font-medium text-sky-700 underline decoration-sky-200 underline-offset-4 hover:text-sky-900"
            >
              affiliate disclosure
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
