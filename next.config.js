/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This helps with routing on GitHub Pages
  basePath: '/aj-portfolio',
  assetPrefix: '/aj-portfolio/',
}

module.exports = nextConfig
