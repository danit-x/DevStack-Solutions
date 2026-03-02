import { ArrowRight, MessageCircle } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { whatsappHref } from "@/lib/site";

type CallToActionBandProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function CallToActionBand({
  eyebrow,
  title,
  description
}: CallToActionBandProps) {
  return (
    <section className="section-space pt-8">
      <div className="shell">
        <div className="panel overflow-hidden border-white/10 bg-[linear-gradient(140deg,#0f172a_0%,#0b5fa5_58%,#0f9f76_100%)] px-6 py-12 text-white shadow-[0_32px_80px_-42px_rgba(11,95,165,0.5)] sm:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-orange-50">
                {eyebrow}
              </span>
              <h2 className="balanced-title mt-5 text-3xl font-bold sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <ButtonLink
                href="/contact"
                variant="secondary"
                size="large"
                className="w-full justify-center bg-white text-[var(--brand-deep)] hover:bg-white hover:text-[var(--brand-trust)] lg:w-auto"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href={whatsappHref}
                variant="ghost"
                size="large"
                external
                className="w-full justify-center text-white/85 hover:bg-white/10 hover:text-white lg:w-auto"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
