/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["src"],
  },
  images: {
    domains: ["images.unsplash.com"],
  },
  reactStrictMode: true,
};

export default nextConfig;
