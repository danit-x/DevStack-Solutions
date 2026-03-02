import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions: HeroAction[];
  pills?: string[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  pills = []
}: PageHeroProps) {
  return (
    <section className="section-space">
      <div className="shell">
        <div className="panel relative overflow-hidden px-6 py-12 sm:px-10 lg:px-14">
          <div className="grid-overlay absolute inset-0 opacity-40" />
          <div className="relative max-w-3xl">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="balanced-title mt-6 text-4xl font-bold text-slate-950 sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {actions.map((action) => (
                <ButtonLink
                  key={action.label}
                  href={action.href}
                  variant={action.variant ?? "primary"}
                  size="large"
                  external={action.external}
                >
                  {action.label}
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              ))}
            </div>
            {pills.length > 0 ? (
              <div className="mt-8 flex flex-wrap gap-2">
                {pills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-slate-900/10 bg-slate-50/90 px-3 py-1.5 text-sm text-slate-700"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
