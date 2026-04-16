import { BadgeCheck, Zap } from "lucide-react";

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
        "group relative flex h-full flex-col overflow-hidden rounded-[28px] border p-6 transition-all duration-500 ease-out",
        featured
          ? [
              "border-[rgba(249,115,22,0.35)]",
              "bg-[linear-gradient(150deg,#0f172a_0%,#0b5fa5_72%,#0f9f76_100%)]",
              "text-white",
              "shadow-[0_36px_82px_-44px_rgba(11,95,165,0.52),inset_0_1px_0_rgba(255,255,255,0.08)]",
              "hover:-translate-y-2 hover:shadow-[0_52px_100px_-40px_rgba(11,95,165,0.64),0_0_0_1px_rgba(249,115,22,0.28),inset_0_1px_0_rgba(255,255,255,0.12)]"
            ].join(" ")
          : [
              "border-[rgba(15,23,42,0.07)]",
              "bg-white/75 backdrop-blur-md",
              "shadow-[0_20px_56px_-30px_rgba(11,95,165,0.2),inset_0_1px_0_rgba(255,255,255,0.9)]",
              "hover:-translate-y-2 hover:border-[rgba(11,95,165,0.2)] hover:bg-white/90",
              "hover:shadow-[0_36px_80px_-32px_rgba(11,95,165,0.32),inset_0_1px_0_rgba(255,255,255,1)]"
            ].join(" ")
      )}
    >
      {/* Glassmorphism shimmer overlay */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          featured
            ? "bg-[radial-gradient(ellipse_at_top_left,rgba(249,115,22,0.06),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(15,159,118,0.07),transparent_55%)]"
            : "bg-[radial-gradient(ellipse_at_top_right,rgba(11,95,165,0.045),transparent_60%)]"
        )}
      />

      {/* Top row */}
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p
            className={cn(
              "text-xs font-bold uppercase tracking-[0.22em]",
              featured ? "text-orange-200" : "text-[var(--brand-trust)]"
            )}
          >
            {name}
          </p>
          <p className="mt-4 text-4xl font-bold tracking-tight">{price}</p>
        </div>
        {featured ? (
          <span className="flex items-center gap-1.5 rounded-full bg-white/12 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-orange-100 ring-1 ring-white/10">
            <Zap className="h-3 w-3" />
            Most Popular
          </span>
        ) : null}
      </div>

      {/* Description */}
      <p
        className={cn(
          "relative mt-5 text-sm leading-7",
          featured ? "text-slate-300" : "text-slate-600"
        )}
      >
        {description}
      </p>

      {/* Delivery badge */}
      <p
        className={cn(
          "relative mt-4 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold",
          featured
            ? "bg-white/10 text-slate-200"
            : "bg-[rgba(11,95,165,0.07)] text-slate-700"
        )}
      >
        Delivery: {delivery}
      </p>

      {/* Features */}
      <ul className="relative mt-6 flex-1 space-y-3">
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
                featured ? "text-orange-200" : "text-[var(--brand-growth)]"
              )}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="relative mt-8">
        <ButtonLink
          href="/contact"
          variant={featured ? "secondary" : "primary"}
          className={
            featured
              ? "w-full bg-white text-[var(--brand-deep)] shadow-[0_16px_40px_-16px_rgba(255,255,255,0.5)] hover:bg-white hover:text-[var(--brand-trust)] hover:shadow-[0_20px_48px_-16px_rgba(255,255,255,0.6)]"
              : "w-full"
          }
        >
          Request Quote
        </ButtonLink>
      </div>
    </article>
  );
}
