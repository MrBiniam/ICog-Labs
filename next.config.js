/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
    unoptimized: true, // Disable image optimization for production
  },
  // Enable static image optimization for better performance
  output: 'standalone',
}

module.exports = nextConfig
