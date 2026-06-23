import type { ReactNode } from "react";
import { WarmContainer, WarmPage, WarmPanel } from "@/components/warm-page";

export function InfoPage({
  label,
  title,
  description,
  children,
}: {
  label: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <WarmPage>
      <WarmContainer className="py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="inline-flex rounded-full border border-amber-200 bg-white/75 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm shadow-amber-100/60">
              <span className="mr-2 text-amber-500">✦</span>
              {label}
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
          </div>
          <WarmPanel className="p-6 sm:p-8">
            <div className="space-y-7 text-base leading-8 text-slate-600">{children}</div>
          </WarmPanel>
        </div>
      </WarmContainer>
    </WarmPage>
  );
}
