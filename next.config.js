/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This helps with routing on GitHub Pages
  basePath: '/aj-portfolio',
  assetPrefix: '/aj-portfolio/',
}

module.exports = nextConfig
