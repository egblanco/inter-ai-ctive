/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "open-ai-file.s3.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
