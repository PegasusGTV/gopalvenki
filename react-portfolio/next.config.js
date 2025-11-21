/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['drive.google.com'],
    unoptimized: true,
  },
  // GitHub Pages configuration
  trailingSlash: true,
  basePath: '/gopalvenki',
  assetPrefix: '/gopalvenki',
}

module.exports = nextConfig
