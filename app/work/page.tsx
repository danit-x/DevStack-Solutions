import { Building2, Image as ImageIcon, Search } from "lucide-react";

import { CallToActionBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/metadata";
import { portfolioItems, whatsappHref } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Work",
  description:
    "Sample portfolio layouts for restaurants, salons, and retail stores built to generate leads and WhatsApp inquiries.",
  path: "/work"
});

const projectAngles = [
  {
    icon: Building2,
    title: "Built for local search intent",
    description:
      "Service areas, Google Maps, opening hours, and fast mobile layouts help nearby customers act quickly."
  },
  {
    icon: ImageIcon,
    title: "Designed for visual industries",
    description:
      "Restaurants, salons, and retail stores need layouts that show products and spaces clearly without slowing down the page."
  },
  {
    icon: Search,
    title: "Structured for conversion",
    description:
      "Every layout is designed around direct action: message, call, book, visit, or submit a form."
  }
];

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Sample project directions for the businesses that most often need fast website wins"
        description="The portfolio uses placeholders so the structure is ready now, while still being easy to replace with real case studies and screenshots later."
        actions={[
          {
            label: "Start Your Project",
            href: "/contact"
          },
          {
            label: "Chat on WhatsApp",
            href: whatsappHref,
            external: true,
            variant: "secondary"
          }
        ]}
        pills={["Restaurant", "Salon", "Retail Store"]}
      />

      <section className="section-space pt-0">
        <div className="shell">
          <SectionHeading
            eyebrow="Portfolio"
            title="Website directions that match real small business categories"
            description="Each concept is framed around the pages and calls to action that matter most for that industry."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <ProjectCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white/40">
        <div className="shell">
          <SectionHeading
            eyebrow="Project goals"
            title="What these portfolio examples are meant to communicate"
            description="Strong business websites do not need noise. They need clarity, confidence, and obvious next steps."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projectAngles.map((angle) => {
              const Icon = angle.icon;

              return (
                <article key={angle.title} className="panel h-full p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-slate-950">
                    {angle.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {angle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CallToActionBand
        eyebrow="Want your own case study here?"
        title="Launch the site first, then replace the placeholders with real project proof"
        description="The current portfolio cards are structured for speed, so your real screenshots, testimonials, and metrics can slot in later without redesigning the whole page."
      />
    </>
  );
}
