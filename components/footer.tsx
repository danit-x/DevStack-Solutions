import Link from "next/link";
import { Mail, MapPin, MessageCircle } from "lucide-react";

import { siteConfig, whatsappHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-900/8 py-10">
      <div className="shell grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link href="/" className="text-xl font-bold text-slate-950">
            {siteConfig.name}
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
            Fast, clean, mobile-first websites for Sri Lankan small businesses
            that want more calls, form submissions, and WhatsApp inquiries.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Navigate
          </p>
          <ul className="mt-4 space-y-3">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-slate-700 hover:text-slate-950">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-orange-600" />
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                {siteConfig.whatsappDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-orange-600" />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-orange-600" />
              <span>Sri Lanka</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
