/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/creative-agency-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/creative-agency-portfolio' : '',
  trailingSlash: true,
}

module.exports = nextConfig 