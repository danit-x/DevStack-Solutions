import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Force WebP for all optimised images — best compression for slow LK connections
    formats: ["image/webp"],
    // Aggressively cache images at the CDN edge
    minimumCacheTTL: 86400,
    // Allowed external domains if any third-party images are ever used
    remotePatterns: [],
    // Serve smallest breakpoints for mobile-first display
    deviceSizes: [390, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 64, 128, 256],
    // Enable SVG inline (for icon.svg)
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  // Compress all text responses (HTML, CSS, JS, JSON) via gzip
  compress: true,
  // Generate ETags for static assets so browsers skip re-downloads
  generateEtags: true,
  // Strip X-Powered-By header (minor security + ~12 byte saving per response)
  poweredByHeader: false,
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        // Instruct browsers to cache static assets aggressively
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable"
        },
        // Security hardening
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }
      ]
    },
    {
      // HTML responses should not be cached by intermediaries
      source: "/",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=0, must-revalidate"
        }
      ]
    }
  ]
};

export default nextConfig;
