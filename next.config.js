/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    return config;
  },
  images: {
    remotePatterns: [
      {
        hostname: 'example.com',
        pathname: '/**',
      },
      {
        hostname: 'example.net',
        pathname: '/**',
      },
      {
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
    ],
  },
}
module.exports = nextConfig
