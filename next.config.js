/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  eslint: {
    dirs: ['app', 'pages', 'utils', 'components', 'hooks', 'types', 'public'],
  },
}

module.exports = nextConfig
