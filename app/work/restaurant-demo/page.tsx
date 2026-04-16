import {
  Clock3,
  MapPin,
  MenuSquare,
  MessageCircle,
  MonitorSmartphone
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Restaurant Demo",
  description:
    "Demo restaurant website page showing a realistic restaurant layout with menu highlights, gallery, and WhatsApp-first ordering.",
  path: "/work/restaurant-demo"
});

const features = [
  {
    title: "Online menu display",
    description:
      "Present signature dishes, price ranges, and special promotions in a way customers can scan quickly on mobile.",
    icon: MenuSquare
  },
  {
    title: "WhatsApp ordering integration",
    description:
      "A direct order CTA helps customers place takeaway or reservation requests without friction.",
    icon: MessageCircle
  },
  {
    title: "Google Maps location",
    description:
      "Make it easy for nearby diners to find directions, opening hours, and contact details instantly.",
    icon: MapPin
  },
  {
    title: "Mobile-first design",
    description:
      "Optimized layouts keep menus, images, and booking actions usable for busy customers browsing on phones.",
    icon: MonitorSmartphone
  }
];

const galleryCards = [
  "Dining space",
  "Signature curry set",
  "Outdoor seating",
  "Chef special platter",
  "Dessert counter",
  "Evening ambience"
];

export default function RestaurantDemoPage() {
  return (
    <>
      <section className="section-space">
        <div className="shell">
          <div className="panel overflow-hidden">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="px-6 py-12 sm:px-10 lg:px-12">
                <span className="eyebrow">Restaurant demo</span>
                <h1 className="balanced-title mt-6 text-4xl font-bold text-slate-950 sm:text-5xl">
                  Spice Garden Restaurant
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  A polished restaurant website concept designed for local search,
                  quick menu browsing, and direct WhatsApp ordering. This layout
                  helps diners decide fast and take action without extra steps.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href="/contact" size="large">
                    Get a Website Like This
                  </ButtonLink>
                  <ButtonLink href="/work" variant="secondary" size="large">
                    Back to Work
                  </ButtonLink>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full border border-[rgba(11,95,165,0.1)] bg-white/80 px-3 py-1.5 text-sm text-slate-700">
                    Colombo-ready concept
                  </span>
                  <span className="rounded-full border border-[rgba(11,95,165,0.1)] bg-white/80 px-3 py-1.5 text-sm text-slate-700">
                    WhatsApp ordering
                  </span>
                  <span className="rounded-full border border-[rgba(11,95,165,0.1)] bg-white/80 px-3 py-1.5 text-sm text-slate-700">
                    Google Maps friendly
                  </span>
                </div>
              </div>

              <div className="relative min-h-[360px] border-t border-slate-900/8 bg-[linear-gradient(160deg,#0f172a_0%,#0b5fa5_58%,#f97316_100%)] p-6 lg:min-h-full lg:border-l lg:border-t-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_46%)]" />
                <div className="relative mx-auto flex h-full max-w-xl items-center">
                  <div className="w-full rounded-[30px] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur">
                    <div className="mb-4 flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                    </div>
                    <div className="grid gap-4">
                      <div className="rounded-[24px] bg-white/90 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-action)]">
                          Featured menu
                        </p>
                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                          <div className="h-28 rounded-2xl bg-[linear-gradient(135deg,rgba(249,115,22,0.16),rgba(245,158,11,0.16))]" />
                          <div className="space-y-3">
                            <div className="h-6 rounded-full bg-slate-200" />
                            <div className="h-6 rounded-full bg-slate-100" />
                            <div className="h-16 rounded-2xl bg-[rgba(11,95,165,0.08)]" />
                          </div>
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-3">
                        <div className="rounded-2xl bg-white/14 p-4 text-white">
                          <Clock3 className="h-5 w-5 text-orange-100" />
                          <p className="mt-4 text-sm text-white/70">Open daily</p>
                          <p className="mt-1 font-semibold">11 AM - 11 PM</p>
                        </div>
                        <div className="rounded-2xl bg-white/14 p-4 text-white">
                          <MessageCircle className="h-5 w-5 text-emerald-200" />
                          <p className="mt-4 text-sm text-white/70">Orders</p>
                          <p className="mt-1 font-semibold">WhatsApp fast</p>
                        </div>
                        <div className="rounded-2xl bg-white/14 p-4 text-white">
                          <MapPin className="h-5 w-5 text-sky-200" />
                          <p className="mt-4 text-sm text-white/70">Location</p>
                          <p className="mt-1 font-semibold">Map ready</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell">
          <SectionHeading
            eyebrow="Features"
            title="What this restaurant website demo is built to do"
            description="The structure mirrors what a strong local restaurant site needs: good photos, clear food presentation, and a fast path to inquiry or order."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article key={feature.title} className="panel h-full p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(249,115,22,0.16),rgba(11,95,165,0.14))] text-[var(--brand-trust)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold text-slate-950">
                    {feature.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space bg-white/40">
        <div className="shell">
          <SectionHeading
            eyebrow="Gallery"
            title="Gallery placeholders for dishes, atmosphere, and dining spaces"
            description="These blocks are ready to be replaced with real photography once the restaurant project goes live."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {galleryCards.map((item, index) => (
              <div
                key={item}
                className="panel overflow-hidden"
              >
                <div className="aspect-[4/3] bg-[linear-gradient(135deg,rgba(249,115,22,0.12),rgba(245,158,11,0.1),rgba(11,95,165,0.1))] p-5">
                  <div className="flex h-full items-end rounded-[24px] border border-white/60 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(255,255,255,0.45))] p-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-action)]">
                        Photo 0{index + 1}
                      </p>
                      <p className="mt-2 text-xl font-semibold text-slate-950">
                        {item}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell">
          <div className="panel overflow-hidden bg-[linear-gradient(145deg,#0f172a_0%,#0b5fa5_60%,#0f9f76_100%)] px-6 py-12 text-white sm:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-orange-50">
                Restaurant CTA
              </span>
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                Want a restaurant website that looks this polished?
              </h2>
              <p className="mt-4 text-base leading-8 text-white/80">
                This demo is structured to help restaurants convert search traffic
                into reservations, map visits, and direct WhatsApp orders.
              </p>
              <div className="mt-8">
                <ButtonLink
                  href="/contact"
                  size="large"
                  className="bg-white text-[var(--brand-deep)] hover:bg-white hover:text-[var(--brand-trust)]"
                >
                  Get a Website Like This
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
