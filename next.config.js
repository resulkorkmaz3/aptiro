/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has TypeScript errors.
    ignoreBuildErrors: false,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/#contact',
        permanent: false,
      },
      {
        source: '/portfolio',
        destination: '/#services',
        permanent: false,
      },
      {
        source: '/services',
        destination: '/#services',
        permanent: false,
      },
      {
        source: '/services/google-ads',
        destination: '/#services',
        permanent: false,
      },
      {
        source: '/services/web-design',
        destination: '/#services',
        permanent: false,
      },
      {
        source: '/services/ecommerce',
        destination: '/#services',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig

