/** @type {import('next').NextConfig} */
const nextConfig = {
  // 允许指定域的图片
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
