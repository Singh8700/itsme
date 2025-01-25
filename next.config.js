/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/itsme',
  assetPrefix: '/itsme/',
  trailingSlash: true ,
}

module.exports = nextConfig
