/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'zuravvski.local',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

module.exports = nextConfig
