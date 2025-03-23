/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/creative-agency-portfolio',
  assetPrefix: '/creative-agency-portfolio/',
  images: {
    unoptimized: true,
  },
  // Optional: Add trailingSlash for better compatibility with static hosting
  trailingSlash: true,
}

module.exports = nextConfig 