/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    return config;
  },
}
module.exports = nextConfig

module.exports = nextConfig
module.exports = {
    images: {
    domains: ['lh3.googleusercontent.com', 'example.com', 'example.net'],
    },
}
