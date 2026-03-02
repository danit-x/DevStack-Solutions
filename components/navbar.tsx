"use client";

import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/8 bg-[rgba(255,250,244,0.88)] backdrop-blur-xl">
      <nav className="shell flex min-h-20 items-center justify-between gap-6 py-4">
        <Link href="/" className="text-lg font-bold text-slate-950 sm:text-xl">
          DevStack <span className="text-[var(--brand-trust)]">Solutions</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition",
                pathname === item.href
                  ? "text-[var(--brand-trust)]"
                  : "text-slate-600 hover:text-slate-950"
              )}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href={whatsappHref} external>
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(11,95,165,0.12)] bg-white text-slate-950 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-900/8 bg-white/95 md:hidden">
          <div className="shell flex flex-col gap-2 py-4">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-medium",
                  pathname === item.href
                    ? "bg-[rgba(11,95,165,0.08)] text-[var(--brand-trust)]"
                    : "text-slate-700 hover:bg-slate-50"
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href={whatsappHref} external className="mt-2 justify-center">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
