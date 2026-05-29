import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://blazemorales.github.io/ARES_ROVERS_UNB_WEBSITE";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
