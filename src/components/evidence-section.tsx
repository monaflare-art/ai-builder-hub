import Image from "next/image";
import type { EvidenceScreenshot, PostEvidence } from "@/data/posts";

function formatStatus(status: string) {
  return status
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function EvidenceNoteList({ title, notes }: { title: string; notes: string[] }) {
  if (!notes.length) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="text-sm font-semibold text-slate-950">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
        {notes.map((note) => (
          <li key={note} className="flex gap-2">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ScreenshotCard({ screenshot }: { screenshot: EvidenceScreenshot }) {
  const verificationLabel = screenshot.verificationDate
    ? `Verified ${screenshot.verificationDate}`
    : "Verification pending";

  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-200/60">
      {screenshot.src ? (
        <div className="relative aspect-[16/9] bg-slate-100">
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            fill
            sizes="(min-width: 1024px) 360px, 100vw"
            className="object-cover"
            unoptimized
          />
        </div>
      ) : (
        <div className="flex aspect-[16/9] flex-col items-center justify-center bg-slate-100 px-5 text-center">
          <span className="rounded-full border border-dashed border-slate-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Screenshot pending
          </span>
          <p className="mt-3 text-sm font-medium text-slate-700">{screenshot.label}</p>
        </div>
      )}
      <figcaption className="border-t border-slate-200 p-4">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
          <span>{screenshot.type}</span>
          <span aria-hidden="true">/</span>
          <span>{screenshot.priority}</span>
          <span aria-hidden="true">/</span>
          <span>{formatStatus(screenshot.status)}</span>
        </div>
        <p className="mt-2 text-sm font-semibold text-slate-950">{screenshot.label}</p>
        <p className="mt-1 text-sm leading-6 text-slate-600">{screenshot.caption}</p>
        <p className="mt-2 text-xs font-medium text-slate-500">{verificationLabel}</p>
      </figcaption>
    </figure>
  );
}

export function EvidenceSection({ evidence }: { evidence?: PostEvidence }) {
  if (!evidence) {
    return null;
  }

  const metadata = evidence.verificationMetadata;

  return (
    <section className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Evidence Layer
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
            Verification Notes
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            This section tracks what has been verified, what still needs screenshots, and what
            should stay cautious until real product evidence is added.
          </p>
        </div>
        <span className="inline-flex w-fit rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
          {formatStatus(metadata.evidenceStatus)}
        </span>
      </div>

      <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <dt className="font-semibold text-slate-950">Last reviewed</dt>
          <dd className="mt-1 text-slate-600">{metadata.lastReviewed ?? "Pending"}</dd>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <dt className="font-semibold text-slate-950">Last verified</dt>
          <dd className="mt-1 text-slate-600">{metadata.lastVerified ?? "Pending"}</dd>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <dt className="font-semibold text-slate-950">Pricing checked</dt>
          <dd className="mt-1 text-slate-600">{metadata.pricingChecked ?? "Pending"}</dd>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <dt className="font-semibold text-slate-950">Screenshot updated</dt>
          <dd className="mt-1 text-slate-600">{metadata.screenshotsUpdated ?? "Pending"}</dd>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <dt className="font-semibold text-slate-950">Reviewer</dt>
          <dd className="mt-1 text-slate-600">{metadata.reviewer ?? "Pending"}</dd>
        </div>
      </dl>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <EvidenceNoteList title="Builder Experience" notes={evidence.builderExperience} />
        <EvidenceNoteList title="Performance Notes" notes={evidence.performanceNotes} />
        <EvidenceNoteList title="Deployment Notes" notes={evidence.deploymentNotes} />
        <EvidenceNoteList title="Pricing Notes" notes={evidence.pricingNotes} />
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-slate-950">Screenshot Evidence</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Missing screenshots are intentionally shown as pending instead of replaced with stock
          images. Real screenshots can be added later with verification dates.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {evidence.screenshots.map((screenshot) => (
            <ScreenshotCard key={`${screenshot.type}-${screenshot.label}`} screenshot={screenshot} />
          ))}
        </div>
      </div>

      <p className="mt-6 rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm leading-6 text-slate-600">
        {evidence.affiliateDisclosure}
      </p>
    </section>
  );
}
