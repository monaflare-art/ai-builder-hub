import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "AI Builder Hub affiliate disclosure and editorial independence policy.",
  alternates: {
    canonical: "/affiliate-disclosure",
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <InfoPage
      label="Affiliate Disclosure"
      title="Affiliate Disclosure"
      description="How affiliate links may support the site without changing editorial independence."
    >
          <p>
            AI Builder Hub may use affiliate links on tool pages, review pages, tutorials, or
            resource lists. If you click one of these links and make a purchase, we may earn a
            commission at no extra cost to you.
          </p>
          <p>
            Affiliate links do not change the price you pay. They help support the time required to
            research, write, update, and maintain independent builder-focused content.
          </p>
          <p>
            Affiliate relationships do not determine whether a tool is included, how it is
            described, or where it appears in our recommendations. Affiliate relationships do not
            guarantee positive reviews, and critical notes should remain visible when they are
            relevant to the reader.
          </p>
          <p>
            We aim to keep recommendations practical, transparent, and based on the use case. You
            should still review each product&apos;s pricing, terms, refund policy, and feature limits
            before subscribing or purchasing.
          </p>
    </InfoPage>
  );
}
