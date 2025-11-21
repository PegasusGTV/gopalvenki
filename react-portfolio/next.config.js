/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['drive.google.com'],
  },
  // GitHub Pages configuration
  trailingSlash: true,
  basePath: '/gopalvenki',
  assetPrefix: '/gopalvenki',
}

module.exports = nextConfig
