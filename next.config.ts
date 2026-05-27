import type { NextConfig } from "next";
/*Subindo no gh pages*/
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ARES_ROVERS_UNB_WEBSITE",
  assetPrefix: "/ARES_ROVERS_UNB_WEBSITE/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
