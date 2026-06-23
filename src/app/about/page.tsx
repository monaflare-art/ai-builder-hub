import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/info-page";

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
    <InfoPage
      label="About AI Builder Hub"
      title="Independent guidance for builders choosing web tools."
      description="A small publishing project for people turning AI ideas into real websites, apps, and online businesses."
    >
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
    </InfoPage>
  );
}
