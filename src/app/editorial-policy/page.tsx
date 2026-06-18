import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description:
    "AI Builder Hub editorial policy for reviews, comparisons, pricing, screenshots, evidence, and affiliate links.",
  alternates: {
    canonical: "/editorial-policy",
  },
};

const policySections = [
  {
    title: "How reviews are written",
    body:
      "Reviews are written around practical use cases for builders, founders, and website owners. They focus on what a tool is best for, who should avoid it, pricing considerations, pros, cons, alternatives, and evidence that still needs verification.",
  },
  {
    title: "How comparison pages are structured",
    body:
      "Comparison pages are organized around user intent. They may include quick verdicts, side-by-side tables, pricing notes, ease-of-use observations, support notes, alternatives, and final recommendations based on use case rather than a single universal winner.",
  },
  {
    title: "How pricing is handled",
    body:
      "Pricing can change without notice. AI Builder Hub aims to describe pricing in plain language and label pricing checks or pending verification when exact plan details need to be refreshed.",
  },
  {
    title: "How updates are made",
    body:
      "Pages may be updated when products change, screenshots are refreshed, affiliate status changes, or reader corrections identify outdated information.",
  },
  {
    title: "How evidence is labeled",
    body:
      "Screenshots, builder notes, deployment notes, pricing notes, and performance notes are labeled clearly. If a claim has not been directly verified yet, it should be marked as pending verification rather than presented as tested experience.",
  },
  {
    title: "How affiliate links are handled",
    body:
      "Some pages may include affiliate links. Affiliate relationships do not determine whether a tool receives a positive review, and they do not guarantee placement in a recommendation block.",
  },
];

export default function EditorialPolicyPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
          Editorial Policy
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          How AI Builder Hub writes and updates content.
        </h1>
        <div className="mt-8 space-y-8 text-base leading-8 text-slate-600">
          {policySections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                {section.title}
              </h2>
              <p className="mt-3">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
