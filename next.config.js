/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/projet-boulangerie',
  assetPrefix: '/projet-boulangerie/',
};

module.exports = nextConfig; 