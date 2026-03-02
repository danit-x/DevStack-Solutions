import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

function buildAbsoluteUrl(path = "/") {
  return path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;
}

export function buildMetadata({
  title,
  description,
  path = "/"
}: MetadataInput): Metadata {
  const canonical = buildAbsoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
