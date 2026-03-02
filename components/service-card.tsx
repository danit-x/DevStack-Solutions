import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
};

export function ServiceCard({
  title,
  description,
  bullets,
  icon: Icon
}: ServiceCardProps) {
  return (
    <article className="panel h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(11,95,165,0.14)] hover:shadow-[0_30px_64px_-40px_rgba(11,95,165,0.32)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(11,95,165,0.12),rgba(249,115,22,0.16),rgba(15,159,118,0.12))] text-[var(--brand-trust)] ring-1 ring-black/5">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      <ul className="mt-5 space-y-3">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3 text-sm text-slate-700">
            <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-action)]" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
