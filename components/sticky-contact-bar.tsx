"use client";

import { MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappHref } from "@/lib/site";

/**
 * StickyContactBar — mobile-only bottom bar for instant contact actions.
 * Hidden on md+ viewports so it never competes with desktop nav.
 */
export function StickyContactBar() {
  const callHref = `tel:${siteConfig.whatsappNumber}`;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      aria-label="Quick contact bar"
    >
      {/* frosted glass backing */}
      <div className="border-t border-white/20 bg-[rgba(15,23,42,0.82)] shadow-[0_-16px_48px_-12px_rgba(11,95,165,0.36)] backdrop-blur-2xl">
        {/* safe-area padding so it clears iOS home indicator */}
        <div className="flex items-stretch gap-px pb-[env(safe-area-inset-bottom)]">

          {/* Call button */}
          <a
            href={callHref}
            aria-label="Call us"
            className="group flex flex-1 flex-col items-center justify-center gap-1.5 py-4 text-white/80 transition-all duration-300 hover:bg-white/5 hover:text-white active:bg-white/10"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/8 transition-all duration-300 group-hover:border-white/25 group-hover:bg-white/15 group-hover:shadow-[0_4px_16px_-4px_rgba(255,255,255,0.20)]">
              <Phone className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60 group-hover:text-white/90">
              Call
            </span>
          </a>

          {/* Thin divider */}
          <div className="w-px self-stretch bg-white/8" />

          {/* WhatsApp button — primary action */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="group relative flex flex-[2] flex-col items-center justify-center gap-1.5 overflow-hidden py-4 text-white transition-all duration-300 active:scale-[0.98]"
          >
            {/* green glow background */}
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,211,102,0.22),rgba(15,159,118,0.18))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(37,211,102,0.35)] bg-[rgba(37,211,102,0.18)] shadow-[0_4px_20px_-4px_rgba(37,211,102,0.4)] transition-all duration-300 group-hover:border-[rgba(37,211,102,0.6)] group-hover:shadow-[0_6px_28px_-4px_rgba(37,211,102,0.55)]">
              <MessageCircle className="h-4 w-4 text-[#25d366] transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span className="relative text-[10px] font-bold uppercase tracking-[0.18em] text-white/80 group-hover:text-white">
              WhatsApp Us
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
