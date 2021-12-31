const withSvgr = require("next-plugin-svgr")
const withBundleAnalyzer = process.env.ANALYZE
  ? require("@next/bundle-analyzer")({ enabled: true })
  : (config) => config

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
}

const nextPlugins = [withSvgr]

/** @type {import('next').NextConfig} */
module.exports = (phase, defaultConfig) => {
  return withSvgr(withBundleAnalyzer(nextConfig))
}
