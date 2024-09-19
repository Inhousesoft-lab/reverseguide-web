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
      "file1.jobkorea.co.kr",
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
  // home 페이지로 리다이렉트
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
