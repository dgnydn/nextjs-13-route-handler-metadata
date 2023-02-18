/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.hashnode.com"],
  },
};

module.exports = nextConfig;
