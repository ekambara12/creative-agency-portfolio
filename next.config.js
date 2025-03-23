/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/creative-agency-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/creative-agency-portfolio/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'out',
}

module.exports = nextConfig 