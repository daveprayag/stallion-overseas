/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: true,
  },
};

module.exports = {
  images: {
    domains: ["cloud.appwrite.io"],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
  nextConfig,
};
