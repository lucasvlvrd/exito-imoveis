import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Force dynamic so MAINTENANCE_MODE is re-evaluated at request time
// instead of being baked into a static robots.txt at build time.
export const dynamic = "force-dynamic";

export default function robots(): MetadataRoute.Robots {
  if (process.env.MAINTENANCE_MODE === "true") {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
