/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/itsme',
  assetPrefix: '',
  trailingSlash: false ,
}

module.exports = nextConfig
