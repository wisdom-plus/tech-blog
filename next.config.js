/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  eslint: {
    dirs: ['app', 'pages', 'utils', 'components', 'hooks', 'types', 'public', 'api'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
        pathname: '/assets/*/**',
      },
    ],
    localPatterns: [
      {
        pathname: '/logo.png',
      },
      {
        pathname: '/logo-black.png',
      },
      {
        pathname: '/logo-white.png',
      },
      {
        pathname: '/card/*.png',
      },
    ],
  },
}

module.exports = nextConfig
