import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Image handling
   *  - `dangerouslyAllowSVG` 允许直接加载 SVG（我们需要用来渲染占位符封面/头像）
   *  - 自定义 CSP，确保基础安全
   */
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy:
      "default-src 'self'; img-src * data: blob:; media-src 'none';",
    /** allow loading external placeholder images */
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**",
      },
    ],
  },

  /**
   * 将外部包标记为服务器端组件依赖，避免打包 Tailwind 的 ESM 代码
   * 参见：https://nextjs.org/docs/app/api-reference/next-config-js/serverExternalPackages
   */
  serverExternalPackages: ["tailwindcss"],
};

export default nextConfig;
