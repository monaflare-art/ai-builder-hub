import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact AI Builder Hub for affiliate partnerships, correction requests, editorial inquiries, and general questions.",
  alternates: {
    canonical: "/contact",
  },
};

const contactCategories = [
  "Affiliate partnerships",
  "Correction requests",
  "Editorial inquiries",
  "General questions",
];

export default function ContactPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Contact AI Builder Hub
        </h1>
        <div className="mt-8 space-y-6 text-base leading-8 text-slate-600">
          <p>
            AI Builder Hub welcomes relevant partnership, correction, and editorial messages related
            to hosting, VPS, domains, SEO tools, AI coding tools, and website infrastructure.
          </p>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-slate-950">Website name</dt>
                <dd>AI Builder Hub</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-950">Website URL</dt>
                <dd>https://theaibuilderhub.com</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-950">Contact email</dt>
                <dd>
                  <a
                    href="mailto:contact@theaibuilderhub.com"
                    className="font-medium text-sky-700 underline decoration-sky-200 underline-offset-4 hover:text-sky-900"
                  >
                    contact@theaibuilderhub.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <p>
            Until the domain email is fully configured, inquiries can be handled by the site owner
            through the active site administration workflow.
          </p>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Suitable inquiries
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              {contactCategories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
