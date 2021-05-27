const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true' })
const nextTranslate = require('next-translate')
const { locales, defaultLocale } = require('./i18n')
const redirectsUrls = require('./redirects')

const nextConfig = {
  async redirects() {
    return redirectsUrls
  },
  i18n: { defaultLocale, locales },
  optimizeFonts: false,
  future: { webpack5: true },
}

module.exports = withBundleAnalyzer(nextTranslate(nextConfig))
