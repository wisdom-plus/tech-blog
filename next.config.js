/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
        port: "",
        pathname: "/assets/*/**",
      },
    ],
    localPatterns: [
      {
        pathname: "/logo.png",
      },
      {
        pathname: "/logo-black.png",
      },
      {
        pathname: "/logo-white.png",
      },
      {
        pathname: "/card/*.png",
      },
    ],
  },
};

module.exports = nextConfig;
