/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const repoName = 'creative-agency-portfolio';

const nextConfig = {
  output: 'export',
  basePath: isProduction ? `/${repoName}` : '',
  assetPrefix: isProduction ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // For debugging only
  distDir: process.env.DIST_DIR || 'out',
}

console.log('Next.js config:', {
  env: process.env.NODE_ENV,
  basePath: nextConfig.basePath,
  assetPrefix: nextConfig.assetPrefix,
  isProduction
});

module.exports = nextConfig 