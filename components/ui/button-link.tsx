import Link from "next/link";
import type { ReactNode } from "react";

import {
  buttonClassName,
  cn,
  type ButtonSize,
  type ButtonVariant
} from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "default",
  className,
  external
}: ButtonLinkProps) {
  const classes = cn(buttonClassName(variant, size), className);
  const isExternal = external ?? href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
