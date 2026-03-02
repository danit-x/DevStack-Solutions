import { Clock3, Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/metadata";
import { businessHours, siteConfig, whatsappHref } from "@/lib/site";
import { buttonClassName } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact DevStack Solutions through the website form or WhatsApp to start your next website project.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your business and the website you want to launch"
        description="Use the form for a structured brief or jump straight to WhatsApp if you want the fastest response."
        actions={[
          {
            label: "WhatsApp Us",
            href: whatsappHref,
            external: true
          },
          {
            label: "View Pricing",
            href: "/pricing",
            variant: "secondary"
          }
        ]}
        pills={["Fast replies", "WhatsApp-first", "Sri Lanka"]}
      />

      <section className="section-space pt-0">
        <div className="shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />

          <div className="space-y-6">
            <div className="panel p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Quick contact
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className={`${buttonClassName("primary", "large")} mt-5 flex w-full justify-center`}
              >
                <PhoneCall className="h-4 w-4" />
                WhatsApp {siteConfig.whatsappDisplay}
              </a>
              <div className="mt-6 space-y-4 text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-4 w-4 text-orange-600" />
                  <span>Fastest replies usually happen on WhatsApp.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-orange-600" />
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-orange-600" />
                  <span>Sri Lanka</span>
                </div>
              </div>
            </div>

            <div className="panel p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Clock3 className="h-5 w-5 text-sky-600" />
                <h2 className="text-2xl font-semibold text-slate-950">
                  Business Hours
                </h2>
              </div>
              <div className="mt-5 space-y-3">
                {businessHours.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700"
                  >
                    <span>{item.day}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel overflow-hidden">
              <div className="grid-overlay flex min-h-[320px] items-center justify-center bg-slate-100/70 p-8 text-center">
                <div className="max-w-sm">
                  <MapPin className="mx-auto h-10 w-10 text-orange-600" />
                  <h2 className="mt-4 text-2xl font-semibold text-slate-950">
                    Map embed placeholder
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Replace this block with your Google Maps embed before launch
                    so local visitors can tap directions directly from the site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
