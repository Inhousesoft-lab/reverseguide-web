/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["src"],
  },
  images: {
    domains: [
      "images.unsplash.com",
      "www.kotga.or.kr",
      "www.segyebiz.com",
      "cdn.gukjenews.com",
      "imgs.jobkorea.co.kr",
    ],
  },
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

export default nextConfig;
