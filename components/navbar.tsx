"use client";

import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-slate-900/10 bg-[rgba(255,250,244,0.92)] shadow-[0_8px_32px_-12px_rgba(11,95,165,0.14)] backdrop-blur-2xl"
          : "border-transparent bg-[rgba(255,250,244,0.72)] backdrop-blur-xl"
      )}
    >
      <nav className="shell flex min-h-20 items-center justify-between gap-6 py-4">
        <Link
          href="/"
          className="group text-lg font-bold text-slate-950 transition-all duration-300 hover:text-[var(--brand-trust)] sm:text-xl"
        >
          DevStack{" "}
          <span className="text-[var(--brand-trust)] transition-colors duration-300 group-hover:text-[var(--brand-deep)]">
            Solutions
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {siteConfig.navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[var(--brand-trust)] after:transition-[width] after:duration-300 hover:text-slate-950 hover:after:w-full",
                  isActive
                    ? "text-[var(--brand-trust)] after:w-full"
                    : "text-slate-600"
                )}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Navbar WhatsApp CTA with enhanced hover */}
          <ButtonLink href={whatsappHref} external>
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(11,95,165,0.12)] bg-white text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(11,95,165,0.28)] hover:shadow-[0_8px_24px_-8px_rgba(11,95,165,0.24)] active:translate-y-0 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-900/8 bg-white/96 backdrop-blur-2xl md:hidden">
          <div className="shell flex flex-col gap-2 py-4">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200",
                  pathname === item.href
                    ? "bg-[rgba(11,95,165,0.08)] text-[var(--brand-trust)]"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
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
