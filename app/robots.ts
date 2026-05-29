import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://blazemorales.github.io/ARES_ROVERS_UNB_WEBSITE";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
