import { BadgeCheck } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  name: string;
  price: string;
  description: string;
  delivery: string;
  features: string[];
  featured?: boolean;
};

export function PricingCard({
  name,
  price,
  description,
  delivery,
  features,
  featured = false
}: PricingCardProps) {
  return (
    <article
      className={cn(
        "panel flex h-full flex-col p-6 transition-all duration-300",
        featured
          ? "border-[rgba(249,115,22,0.28)] bg-[linear-gradient(150deg,#0f172a_0%,#0b5fa5_72%,#0f9f76_100%)] text-white shadow-[0_36px_82px_-44px_rgba(11,95,165,0.52)]"
          : "hover:-translate-y-1 hover:border-[rgba(11,95,165,0.14)] hover:shadow-[0_30px_64px_-40px_rgba(11,95,165,0.3)]"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p
            className={cn(
              "text-sm font-semibold uppercase tracking-[0.18em]",
              featured ? "text-orange-100" : "text-[var(--brand-trust)]"
            )}
          >
            {name}
          </p>
          <p className="mt-4 text-4xl font-bold">{price}</p>
        </div>
        {featured ? (
          <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-100">
            Most Popular
          </span>
        ) : null}
      </div>
      <p
        className={cn(
          "mt-5 text-sm leading-7",
          featured ? "text-slate-300" : "text-slate-600"
        )}
      >
        {description}
      </p>
      <p
        className={cn(
          "mt-4 text-sm font-medium",
          featured ? "text-slate-200" : "text-slate-700"
        )}
      >
        Typical delivery: {delivery}
      </p>
      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
          <li
            key={feature}
            className={cn(
              "flex items-start gap-3 text-sm",
              featured ? "text-slate-200" : "text-slate-700"
            )}
          >
            <BadgeCheck
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                featured ? "text-orange-100" : "text-[var(--brand-growth)]"
              )}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <ButtonLink
          href="/contact"
          variant={featured ? "secondary" : "primary"}
          className={
            featured
              ? "w-full bg-white text-[var(--brand-deep)] hover:bg-white hover:text-[var(--brand-trust)]"
              : "w-full"
          }
        >
          Request Quote
        </ButtonLink>
      </div>
    </article>
  );
}
