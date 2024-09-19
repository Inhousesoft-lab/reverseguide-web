/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["src"],
  },
  // 이미지 호스트 설정
  images: {
    loader: "custom",
    loaderFile: "./src/utils/imageLoader.js",
  },
  reactStrictMode: true,
  // client모드일 경우, 네트워크 모듈 비활성화
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
