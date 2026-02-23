import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Next.js supports this, but the TS type doesn't always include it yet.
    outputFileTracingIncludes: {
      "*": ["./node_modules/pdfkit/js/data/*.afm"],
    },
  } as any,
};

export default nextConfig;
