/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  reactStrictMode: true,
  trailingSlash: false
}

module.exports = nextConfig
