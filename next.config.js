/** @type {import('next').NextConfig} */
const { join } = require('path')

const debug = process.env.NODE_ENV !== 'production'

const nextConfig = {
  unstable_runtimeJS: false,
  reactStrictMode: true,
  //assetPrefix: '',
  assetPrefix: !debug ? '/poweth-checker/' : '',
  sassOptions: {
    includePaths: [join(__dirname, 'src/styles')]
  },
}

module.exports = nextConfig
