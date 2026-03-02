import { CheckCircle2, Rocket, Wallet } from "lucide-react";

import { CallToActionBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { PricingCard } from "@/components/pricing-card";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/metadata";
import { packages, pricingAddOns, whatsappHref } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Pricing",
  description:
    "Starter, Standard, and Pro website packages for Sri Lankan small businesses, with clear delivery timelines and add-on options.",
  path: "/pricing"
});

const packageNotes = [
  {
    icon: Wallet,
    title: "Straightforward package tiers",
    description:
      "The structure is simple on purpose so business owners can compare options quickly."
  },
  {
    icon: Rocket,
    title: "Fast launch focus",
    description:
      "Packages prioritize the pieces that get a site online fast instead of adding complexity too early."
  },
  {
    icon: CheckCircle2,
    title: "Room to grow later",
    description:
      "Extra pages, stronger content, and custom features can be added after the first launch."
  }
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Packages made for business owners who want a clear decision"
        description="Choose the tier that fits your current stage, then expand the site only when it starts creating traction."
        actions={[
          {
            label: "Contact Us",
            href: "/contact"
          },
          {
            label: "WhatsApp Us",
            href: whatsappHref,
            external: true,
            variant: "secondary"
          }
        ]}
        pills={["Starter", "Standard", "Pro"]}
      />

      <section className="section-space pt-0">
        <div className="shell">
          <SectionHeading
            eyebrow="Packages"
            title="Three packages, one clear goal: launch a stronger online presence"
            description="Prices are left as placeholders so you can replace them with the exact numbers you want before launch."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((item) => (
              <PricingCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white/40">
        <div className="shell">
          <SectionHeading
            eyebrow="Why this works"
            title="The pricing page keeps the decision simple for busy owners"
            description="Each note answers the questions most people have before they send an inquiry."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {packageNotes.map((note) => {
              const Icon = note.icon;

              return (
                <article key={note.title} className="panel h-full p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-slate-950">
                    {note.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {note.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Add-ons"
            title="Optional extras when the base package is not enough"
            description="Keep the main package lean, then choose only the add-ons that directly support sales, bookings, or updates."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {pricingAddOns.map((item) => (
              <div key={item} className="panel px-5 py-4 text-sm text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToActionBand
        eyebrow="Need custom pricing?"
        title="If your scope is unusual, send the brief and get a tailored quote"
        description="The packages cover the most common small business needs, but custom workflows and product requirements can still be quoted separately."
      />
    </>
  );
}
