import { ArrowUpRight, MapPin, MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  features: string[];
  result: string;
  tone: "warm" | "cool" | "blush";
};

const previewThemes: Record<ProjectCardProps["tone"], string> = {
  warm: "from-orange-100 via-amber-50 to-white",
  cool: "from-cyan-100 via-sky-50 to-white",
  blush: "from-emerald-50 via-orange-50 to-white"
};

export function ProjectCard({
  title,
  category,
  description,
  features,
  result,
  tone
}: ProjectCardProps) {
  return (
    <article className="panel overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(11,95,165,0.14)] hover:shadow-[0_30px_68px_-42px_rgba(11,95,165,0.32)]">
      <div
        className={cn(
          "relative aspect-[4/3] overflow-hidden border-b border-slate-900/8 bg-gradient-to-br p-5",
          previewThemes[tone]
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),transparent_52%)]" />
        <div className="relative mx-auto h-full max-w-md rounded-[28px] border border-white/80 bg-[linear-gradient(160deg,#0f172a_0%,#0b5fa5_100%)] p-4 shadow-2xl">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="grid h-[calc(100%-1.25rem)] grid-cols-[1.3fr_0.7fr] gap-3">
            <div className="space-y-3">
              <div className="h-24 rounded-2xl bg-white/12" />
              <div className="h-12 rounded-2xl bg-white/8" />
              <div className="grid grid-cols-2 gap-3">
                <div className="h-20 rounded-2xl bg-white/10" />
                <div className="h-20 rounded-2xl bg-[rgba(249,115,22,0.22)]" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-16 rounded-2xl bg-white/12" />
              <div className="h-20 rounded-2xl bg-white/8" />
              <div className="h-20 rounded-2xl bg-[rgba(15,159,118,0.18)]" />
            </div>
          </div>
        </div>
        <span className="absolute bottom-5 right-5 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
          Screenshot placeholder
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-trust)]">
              {category}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-950">{title}</h3>
          </div>
          <ArrowUpRight className="h-6 w-6 text-slate-300" />
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {features.map((feature) => (
            <span
              key={feature}
              className="rounded-full border border-[rgba(11,95,165,0.08)] bg-[rgba(11,95,165,0.06)] px-3 py-1.5 text-sm text-slate-700"
            >
              {feature}
            </span>
          ))}
        </div>
        <div className="mt-6 rounded-3xl bg-[linear-gradient(135deg,rgba(11,95,165,0.06),rgba(15,159,118,0.05))] p-4">
          <div className="flex items-start gap-3 text-sm text-slate-700">
            <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-action)]" />
            <span>{result}</span>
          </div>
          <div className="mt-3 flex items-start gap-3 text-sm text-slate-700">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-growth)]" />
            <span>Prepared for mobile visitors, Google Maps traffic, and WhatsApp-led follow-up.</span>
          </div>
        </div>
      </div>
    </article>
  );
}
