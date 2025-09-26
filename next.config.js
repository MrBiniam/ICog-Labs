/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'i-cog-labs.vercel.app', 'vercel-storage.com'],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  // Enable static image optimization for better performance
  output: 'standalone',
}

module.exports = nextConfig
