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
  nextConfig,
};
