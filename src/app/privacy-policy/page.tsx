import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "AI Builder Hub privacy policy covering basic analytics, external links, affiliate links, cookies, and contact information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <InfoPage
      label="Privacy Policy"
      title="Privacy Policy"
      description="Plain-language privacy notes for readers browsing AI Builder Hub."
    >
          <p>
            AI Builder Hub is a small independent content website. This policy explains the basic
            privacy considerations for visitors who read articles, browse tool pages, or click
            external links.
          </p>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Basic analytics
            </h2>
            <p className="mt-3">
              The site may use basic analytics to understand aggregate page views, referral sources,
              and content performance. Analytics data should be used to improve content and site
              quality, not to identify individual readers.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              External and affiliate links
            </h2>
            <p className="mt-3">
              The site links to third-party websites, including hosting providers, domain
              registrars, SEO tools, and other software services. Some outbound links may be
              affiliate links. Third-party websites have their own privacy policies and tracking
              practices.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Cookies</h2>
            <p className="mt-3">
              AI Builder Hub may use cookies or similar technologies for analytics, site
              functionality, or affiliate attribution. Visitors can manage cookies through their
              browser settings.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Contact</h2>
            <p className="mt-3">
              For privacy-related questions, use{" "}
              <a
                href="mailto:contact@theaibuilderhub.com"
                className="font-medium text-sky-700 underline decoration-sky-200 underline-offset-4 hover:text-sky-900"
              >
                contact@theaibuilderhub.com
              </a>
              . Until the domain email is fully configured, inquiries can be handled by the site
              owner through the active site administration workflow.
            </p>
          </section>
    </InfoPage>
  );
}
