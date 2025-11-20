/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['drive.google.com'],
  },
  // GitHub Pages configuration
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  basePath: '/gopalvenki',
  assetPrefix: '/gopalvenki',
}

module.exports = nextConfig
