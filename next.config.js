/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/itsme',
  assetPrefix: '/itsme/',
  trailingSlash: false ,
}

module.exports = nextConfig
