import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "AI Builder Hub affiliate disclosure and editorial independence policy.",
};

export default function AffiliateDisclosurePage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Affiliate Disclosure
        </h1>
        <div className="mt-8 space-y-6 text-base leading-8 text-slate-600">
          <p>
            AI Builder Hub may use affiliate links on tool pages, review pages, tutorials, or
            resource lists. If you click one of these links and make a purchase, we may earn a
            commission at no extra cost to you.
          </p>
          <p>
            Affiliate relationships do not determine whether a tool is included, how it is
            described, or where it appears in our recommendations. Our goal is to help beginners
            understand which AI, hosting, domain, ecommerce, and SEO tools fit their project stage.
          </p>
          <p>
            We aim to keep recommendations practical, transparent, and based on the use case. You
            should still review each product&apos;s pricing, terms, refund policy, and feature limits
            before subscribing or purchasing.
          </p>
        </div>
      </div>
    </section>
  );
}
