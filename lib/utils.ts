export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "default" | "large";

export function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

export function buttonClassName(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "default",
  className?: string
) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(11,95,165,0.45)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent hover:-translate-y-1 hover:scale-[1.015] active:translate-y-0 active:scale-[0.985] [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:scale-110";
  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-[linear-gradient(135deg,var(--brand-action),#f59e0b)] text-white shadow-[0_20px_45px_-20px_rgba(249,115,22,0.58)] hover:shadow-[0_28px_52px_-18px_rgba(249,115,22,0.48)]",
    secondary:
      "border border-[rgba(11,95,165,0.14)] bg-white/88 text-[var(--brand-trust)] shadow-[0_18px_38px_-28px_rgba(11,95,165,0.35)] hover:bg-white hover:text-[var(--brand-deep)] hover:shadow-[0_24px_44px_-24px_rgba(11,95,165,0.32)]",
    ghost:
      "text-[var(--brand-trust)] hover:bg-[rgba(11,95,165,0.08)] hover:text-[var(--brand-deep)]"
  };
  const sizes: Record<ButtonSize, string> = {
    default: "px-5 py-3 text-sm",
    large: "px-6 py-3.5 text-sm sm:text-base"
  };

  return cn(base, variants[variant], sizes[size], className);
}
