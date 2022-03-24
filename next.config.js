/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['vn', 'en'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  experimental: { esmExternals: true }
}

module.exports = nextConfig
