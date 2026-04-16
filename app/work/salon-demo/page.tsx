import {
  BadgeCheck,
  Brush,
  HeartHandshake,
  Scissors,
  Sparkles,
  SprayCan
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Salon Demo",
  description:
    "Demo salon website page showing service blocks, before and after placeholders, WhatsApp booking, and testimonials.",
  path: "/work/salon-demo"
});

const salonServices = [
  { name: "Hair", icon: Scissors, copy: "Cuts, color, styling, and treatment packages." },
  { name: "Makeup", icon: Brush, copy: "Party, event, and soft-glam makeup bookings." },
  { name: "Skincare", icon: Sparkles, copy: "Facials, cleanups, and glow-focused treatments." },
  { name: "Bridal", icon: HeartHandshake, copy: "Bridal dressing packages with consultation-ready presentation." }
];

const transformations = [
  "Hair transformation",
  "Skin glow session",
  "Bridal makeup finish",
  "Event-ready styling"
];

const demoTestimonials = [
  {
    quote:
      "The layout makes the salon feel premium and gives customers a very clear path to book on WhatsApp.",
    name: "Nethmi Jayasekara"
  },
  {
    quote:
      "This concept is exactly the kind of site that helps showcase services and before-after results without clutter.",
    name: "Ishani Fernando"
  }
];

export default function SalonDemoPage() {
  return (
    <>
      <section className="section-space">
        <div className="shell">
          <div className="panel overflow-hidden">
            <div className="grid lg:grid-cols-[1fr_1fr]">
              <div className="px-6 py-12 sm:px-10 lg:px-12">
                <span className="eyebrow">Salon demo</span>
                <h1 className="balanced-title mt-6 text-4xl font-bold text-slate-950 sm:text-5xl">
                  Glow Beauty Salon
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  A refined salon website concept built to showcase beauty
                  services, make booking feel effortless, and reinforce trust
                  with visuals and social proof.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href="/contact" size="large">
                    Get a Website Like This
                  </ButtonLink>
                  <ButtonLink href="/work" variant="secondary" size="large">
                    Back to Work
                  </ButtonLink>
                </div>
                <div className="mt-8 rounded-[28px] bg-[linear-gradient(135deg,rgba(11,95,165,0.07),rgba(15,159,118,0.07),rgba(249,115,22,0.06))] p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[var(--brand-growth)] shadow-soft">
                      <BadgeCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-trust)]">
                        WhatsApp booking
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        A prominent booking button lets customers ask about
                        availability, bridal slots, and package details in one tap.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[360px] border-t border-slate-900/8 bg-[linear-gradient(155deg,#fff4f0_0%,#f4fbff_48%,#eefbf5_100%)] p-6 lg:min-h-full lg:border-l lg:border-t-0">
                <div className="grid h-full gap-4 sm:grid-cols-2">
                  <div className="rounded-[28px] border border-white/60 bg-white/80 p-5 shadow-soft">
                    <div className="h-48 rounded-[24px] bg-[linear-gradient(135deg,rgba(249,115,22,0.16),rgba(236,72,153,0.1))]" />
                    <div className="mt-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-action)]">
                        Hero image placeholder
                      </p>
                      <p className="mt-2 text-lg font-semibold text-slate-950">
                        Premium salon look
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <div className="rounded-[28px] border border-white/60 bg-white/80 p-5 shadow-soft">
                      <div className="h-28 rounded-[22px] bg-[linear-gradient(135deg,rgba(11,95,165,0.1),rgba(15,159,118,0.08))]" />
                      <p className="mt-4 text-sm font-semibold text-slate-950">
                        Service grid
                      </p>
                    </div>
                    <div className="rounded-[28px] border border-white/60 bg-[linear-gradient(135deg,#0f172a_0%,#0b5fa5_100%)] p-5 text-white shadow-soft">
                      <SprayCan className="h-6 w-6 text-orange-100" />
                      <p className="mt-4 text-sm text-white/70">Customer action</p>
                      <p className="mt-1 text-lg font-semibold">Book on WhatsApp</p>
                    </div>
                    <div className="rounded-[28px] border border-white/60 bg-white/80 p-5 shadow-soft">
                      <div className="h-16 rounded-[20px] bg-[rgba(15,159,118,0.1)]" />
                      <p className="mt-4 text-sm font-semibold text-slate-950">
                        Before / after proof
                      </p>
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
            eyebrow="Services"
            title="Core beauty services presented in a clean, premium layout"
            description="This structure gives each service category enough space to feel polished while keeping booking actions easy to reach."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {salonServices.map((service) => {
              const Icon = service.icon;

              return (
                <article key={service.name} className="panel h-full p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(236,72,153,0.12),rgba(11,95,165,0.12),rgba(15,159,118,0.1))] text-[var(--brand-trust)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold text-slate-950">
                    {service.name}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {service.copy}
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
            eyebrow="Before / After"
            title="Transformation gallery placeholders ready for real client visuals"
            description="Beauty businesses sell trust and visible results. These blocks are designed to be replaced with real work samples."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {transformations.map((item, index) => (
              <div key={item} className="panel overflow-hidden">
                <div className="aspect-[3/4] bg-[linear-gradient(145deg,rgba(236,72,153,0.1),rgba(249,115,22,0.1),rgba(11,95,165,0.08))] p-4">
                  <div className="grid h-full grid-cols-2 gap-3">
                    <div className="rounded-[24px] bg-white/75" />
                    <div className="rounded-[24px] bg-white/95 shadow-soft" />
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-action)]">
                    Set 0{index + 1}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell">
          <SectionHeading
            eyebrow="Testimonials"
            title="Placeholder proof for a service-driven beauty brand"
            description="These are sample testimonial placements showing how short, credible feedback can sit close to the booking call to action."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {demoTestimonials.map((item) => (
              <article key={item.name} className="panel h-full p-6">
                <p className="text-lg leading-8 text-slate-800">“{item.quote}”</p>
                <p className="mt-8 font-semibold text-slate-950">{item.name}</p>
                <p className="mt-1 text-sm text-slate-500">Demo Client Testimonial</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell">
          <div className="panel overflow-hidden bg-[linear-gradient(145deg,#0f172a_0%,#0b5fa5_62%,#0f9f76_100%)] px-6 py-12 text-white sm:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-orange-50">
                Salon CTA
              </span>
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                Want a beauty website with this level of polish?
              </h2>
              <p className="mt-4 text-base leading-8 text-white/80">
                This salon concept is structured for premium presentation,
                strong booking visibility, and easy mobile browsing.
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
