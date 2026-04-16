import {
  ArrowRight,
  Blocks,
  Clock3,
  Globe,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Smartphone
} from "lucide-react";

import { CallToActionBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { CaseStudyCard } from "@/components/case-study-card";
import { PricingCard } from "@/components/pricing-card";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { SolutionFinder } from "@/components/solution-finder";
import { TestimonialCard } from "@/components/testimonial-card";
import { ButtonLink } from "@/components/ui/button-link";
import { buildMetadata } from "@/lib/metadata";
import {
  faqs,
  homeTrustItems,
  packages,
  portfolioItems,
  services,
  siteConfig,
  testimonials,
  whatsappHref
} from "@/lib/site";

export const metadata = buildMetadata({
  title: "Websites for businesses",
  description:
    "Modern websites, WhatsApp-first calls to action, and fast package delivery for small businesses that want more leads.",
  path: "/"
});

const serviceIcons = [Globe, Blocks, Smartphone, ShieldCheck];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  areaServed: {
    "@type": "Country",
    name: "Sri Lanka"
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "LK",
    addressRegion: "Western Province"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.9271,
    longitude: 79.8612
  },
  telephone: siteConfig.whatsappDisplay,
  email: siteConfig.email,
  priceRange: "LKR 30,000 – LKR 99,000",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "13:00"
    }
  ],
  sameAs: [whatsappHref],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Design & Development Packages",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Starter Website Package",
        price: "30000",
        priceCurrency: "LKR",
        description: "Up to 5 sections, mobile-first design, WhatsApp CTA, Google Maps, basic SEO.",
        eligibleRegion: { "@type": "Country", name: "Sri Lanka" }
      },
      {
        "@type": "Offer",
        name: "Standard Website Package",
        price: "50000",
        priceCurrency: "LKR",
        description: "Everything in Starter plus lead capture form, testimonials, gallery, analytics.",
        eligibleRegion: { "@type": "Country", name: "Sri Lanka" }
      },
      {
        "@type": "Offer",
        name: "Pro Website Package",
        price: "99000",
        priceCurrency: "LKR",
        description: "Everything in Standard plus advanced animations, portfolio, custom integrations, launch support.",
        eligibleRegion: { "@type": "Country", name: "Sri Lanka" }
      }
    ]
  }
};

const softwareServicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Software Development",
  name: "Web & Mobile Software Development — Sri Lanka",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url
  },
  areaServed: {
    "@type": "Country",
    name: "Sri Lanka"
  },
  description:
    "Custom website design, Next.js web app development, cross-platform mobile apps, and ongoing maintenance for Sri Lankan small and medium businesses.",
  offers: [
    {
      "@type": "Offer",
      name: "Website Design & Development",
      description: "Mobile-first, SEO-ready business websites with WhatsApp and Google Maps integrations."
    },
    {
      "@type": "Offer",
      name: "Web Application Development",
      description: "Custom portals, booking systems, dashboards, and workflow tools built with modern stacks."
    },
    {
      "@type": "Offer",
      name: "Mobile App Development",
      description: "Cross-platform mobile experiences for customer-facing products."
    },
    {
      "@type": "Offer",
      name: "Website Maintenance & Support",
      description: "Ongoing content updates, performance monitoring, and priority support."
    }
  ],
  keywords: [
    "web design Sri Lanka",
    "website development Sri Lanka",
    "small business website Colombo",
    "WhatsApp website Sri Lanka",
    "mobile app development Sri Lanka",
    "Next.js developer Sri Lanka",
    "affordable website Sri Lanka"
  ]
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={softwareServicesSchema} />

      <section className="section-space pb-12">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="eyebrow">Built for small/large businesses</span>
              <h1 className="balanced-title mt-6 text-5xl font-bold text-slate-950 sm:text-6xl">
                Modern websites that bring customers to your business
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                DevStack Solutions builds fast, mobile-first websites that help
                people discover your business, message you on WhatsApp, and find
                you on Google Maps without friction.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={whatsappHref} external size="large">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </ButtonLink>
                <ButtonLink href="/pricing" variant="secondary" size="large">
                  View Packages
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="rounded-full border border-[rgba(11,95,165,0.1)] bg-white/80 px-3 py-1.5">
                  Launch-ready in 3-5 days
                </span>
                <span className="rounded-full border border-[rgba(11,95,165,0.1)] bg-white/80 px-3 py-1.5">
                  Optimized for mobile search
                </span>
                <span className="rounded-full border border-[rgba(11,95,165,0.1)] bg-white/80 px-3 py-1.5">
                  Designed for direct leads
                </span>
              </div>
            </div>

            <div className="panel relative overflow-hidden p-6 sm:p-8">
              <div className="grid-overlay absolute inset-0 opacity-45" />
              <div className="relative space-y-5">
                <div className="rounded-[28px] bg-[linear-gradient(150deg,#0f172a_0%,#0b5fa5_72%,#0f9f76_100%)] p-5 text-white shadow-2xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-orange-100">
                        Lead-ready homepage
                      </p>
                      <p className="mt-2 text-2xl font-semibold">
                        Clear message. Fast load. Direct action.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/12 px-3 py-2 text-sm text-blue-50">
                      Mobile-first
                    </div>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl bg-white/10 p-4">
                      <Clock3 className="h-5 w-5 text-orange-100" />
                      <p className="mt-4 text-sm text-white/72">Fast delivery</p>
                      <p className="mt-1 text-lg font-semibold">3-5 days</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <MessageCircle className="h-5 w-5 text-emerald-200" />
                      <p className="mt-4 text-sm text-white/72">Lead channel</p>
                      <p className="mt-1 text-lg font-semibold">WhatsApp first</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <MapPin className="h-5 w-5 text-sky-200" />
                      <p className="mt-4 text-sm text-white/72">Local intent</p>
                      <p className="mt-1 text-lg font-semibold">Maps and search</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[28px] border border-slate-900/8 bg-white p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      What customers see
                    </p>
                    <div className="mt-4 space-y-3">
                      <div className="rounded-2xl bg-[rgba(249,115,22,0.08)] p-4">
                        <p className="text-sm text-slate-600">Headline</p>
                        <p className="mt-1 text-lg font-semibold text-slate-950">
                          Trusted website for your business
                        </p>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-2xl bg-[rgba(15,159,118,0.08)] p-4 text-sm text-slate-700">
                          WhatsApp CTA
                        </div>
                        <div className="rounded-2xl bg-[rgba(11,95,165,0.08)] p-4 text-sm text-slate-700">
                          Google Maps
                        </div>
                      </div>
                      <div className="rounded-2xl bg-[linear-gradient(135deg,rgba(11,95,165,0.07),rgba(15,159,118,0.07))] p-4 text-sm text-slate-700">
                        Reviews, services, hours, and lead form arranged for fast scanning.
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-slate-900/8 bg-[linear-gradient(180deg,rgba(11,95,165,0.05),rgba(15,159,118,0.04))] p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      What you get
                    </p>
                    <ul className="mt-4 space-y-3 text-sm text-slate-700">
                      <li className="rounded-2xl bg-white p-4">
                        Clean UI matched to your brand
                      </li>
                      <li className="rounded-2xl bg-white p-4">
                        SEO-ready metadata and structured content
                      </li>
                      <li className="rounded-2xl bg-white p-4">
                        Reusable sections for future growth
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="shell">
          <div className="panel flex flex-wrap items-center justify-center gap-x-4 gap-y-3 px-6 py-5 text-center">
            {homeTrustItems.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 text-sm font-medium text-slate-700"
              >
                <span>{item}</span>
                {index < homeTrustItems.length - 1 ? (
                  <span className="hidden text-slate-300 sm:inline">|</span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell">
          <SectionHeading
            eyebrow="Services"
            title="Digital services designed to help local businesses move faster"
            description="Choose a simple website package or expand into web apps, mobile apps, and ongoing maintenance when the business grows."
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

      <section className="section-space">
        <div className="shell">
          <SectionHeading
            eyebrow="Solution Finder"
            title="Not sure what you need?"
            description="Answer 3 quick questions and we'll recommend the best package for your goals."
            align="center"
          />
          <div className="mt-12">
            <SolutionFinder />
          </div>
        </div>
      </section>

      <section className="section-space bg-white/40">
        <div className="shell">
          <SectionHeading
            eyebrow="Packages"
            title="Simple packages for businesses that need a clean launch"
            description="Start with a practical site now, then expand later with more pages, richer content, or custom features."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((item) => (
              <PricingCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-50 border-y border-slate-200/50">
        <div className="shell">
          <SectionHeading
            eyebrow="Work"
            title="Case Studies: From Clunky to High-Converting"
            description="See how we've transformed ordinary online presences into mobile-first lead generators."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3 items-stretch">
            {portfolioItems.map((item) => (
              <CaseStudyCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white/40">
        <div className="shell">
          <SectionHeading
            eyebrow="Testimonials"
            title="Short, direct feedback from small business owners"
            description="Placeholder testimonials are included so the site structure is ready to swap in real client proof later."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions before a website project starts"
            description="These answers reduce friction for new leads and make it easier for business owners to message with confidence."
          />
          <FaqList items={faqs} />
        </div>
      </section>

      <CallToActionBand
        eyebrow="Ready to launch"
        title="Get your website this week"
        description="If you already know your business needs a stronger online presence, the fastest next step is a short WhatsApp message with your business type and what you need."
      />
    </>
  );
}
