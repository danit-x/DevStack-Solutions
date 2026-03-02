import { Blocks, Globe, ShieldCheck, Smartphone } from "lucide-react";

import { CallToActionBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { buildMetadata } from "@/lib/metadata";
import { processSteps, services, whatsappHref } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Websites, web apps, mobile apps, and maintenance services for Sri Lankan small businesses that want more online leads.",
  path: "/services"
});

const serviceIcons = [Globe, Blocks, Smartphone, ShieldCheck];

const includedItems = [
  "Responsive layouts for mobile and desktop",
  "WhatsApp-ready CTA placement",
  "Google Maps, hours, and contact details",
  "Fast-loading pages with clear structure",
  "On-page SEO metadata and social tags",
  "Simple handoff and launch guidance"
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Practical digital services for local businesses that need momentum"
        description="Whether you need a simple lead-generation website or a more custom product, DevStack Solutions keeps the work clear, fast, and focused on outcomes."
        actions={[
          {
            label: "Start on WhatsApp",
            href: whatsappHref,
            external: true
          },
          {
            label: "See Pricing",
            href: "/pricing",
            variant: "secondary"
          }
        ]}
        pills={["Websites", "Web Apps", "Mobile Apps", "Maintenance"]}
      />

      <section className="section-space pt-0">
        <div className="shell">
          <SectionHeading
            eyebrow="What we build"
            title="Choose the service level that matches your stage"
            description="You can launch with a simple website today and add custom features only when the business needs them."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = serviceIcons[index];

              return (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  bullets={service.bullets}
                  icon={Icon}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space bg-white/40">
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Included"
            title="Every website project starts with the essentials that move leads faster"
            description="The core build is structured around clarity, speed, and conversion rather than filler pages."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {includedItems.map((item) => (
              <div key={item} className="panel px-5 py-4 text-sm text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell">
          <SectionHeading
            eyebrow="Process"
            title="A simple project flow that avoids long delays"
            description="Most small business owners do not need a heavy discovery phase. The process is kept short so the website can launch quickly."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <article key={step.title} className="panel h-full p-6">
                <h3 className="text-2xl font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CallToActionBand
        eyebrow="Need a recommendation?"
        title="Tell us the type of business and we can point you to the right package"
        description="If you are not sure whether you need a basic website, a custom web app, or ongoing maintenance, send the brief and the recommendation can stay practical."
      />
    </>
  );
}
