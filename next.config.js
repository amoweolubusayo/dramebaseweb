/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      domains: ["https://hackmd.io/_uploads", "ipfs.io"],
    },
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config) => {
      config.resolve.fallback = {
        fs: false,
      };
      return config;
    },
  };
  
