import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "AI Builder Hub terms for informational content, third-party services, affiliate links, and content accuracy limitations.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <InfoPage
      label="Terms"
      title="Terms of Use"
      description="The practical ground rules for using this independent builder resource."
    >
          <p>
            AI Builder Hub publishes educational content about AI tools, hosting, VPS providers,
            domains, SEO tools, website infrastructure, and online project workflows. By using this
            site, you understand that the content is informational.
          </p>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Informational content only
            </h2>
            <p className="mt-3">
              Content on AI Builder Hub is not legal, financial, tax, security, or professional
              hosting advice. Readers should evaluate third-party services directly before buying,
              subscribing, or deploying important projects.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Third-party services
            </h2>
            <p className="mt-3">
              AI Builder Hub is not responsible for the pricing, policies, uptime, support,
              security, refunds, or service quality of third-party companies linked from this site.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Affiliate links
            </h2>
            <p className="mt-3">
              Some links may be affiliate links. If you purchase through those links, AI Builder Hub
              may earn a commission at no extra cost to you. Affiliate relationships do not
              guarantee positive reviews.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Content accuracy
            </h2>
            <p className="mt-3">
              AI Builder Hub aims to keep content useful and accurate, but product features,
              pricing, and terms can change. Always verify current details on the official provider
              website before making a decision.
            </p>
          </section>
    </InfoPage>
  );
}
