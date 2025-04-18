/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/projet-boulangerie' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/projet-boulangerie/' : '',
  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === 'production' ? '/projet-boulangerie' : '',
  }
};

module.exports = nextConfig; 