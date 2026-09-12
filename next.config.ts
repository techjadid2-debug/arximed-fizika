import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "radix-ui",
      "katex",
      "react-markdown",
      "rehype-katex",
      "remark-math",
    ],
  },
};

export default nextConfig;
