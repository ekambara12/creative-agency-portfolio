/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optional: Add trailingSlash for better compatibility with static hosting
  trailingSlash: true,
}

module.exports = nextConfig 