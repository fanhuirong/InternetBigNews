/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  reactStrictMode: true,
  PUBLIC_URL: "https://fanhuirong.github.io/InternetBigNews/",
  assetPrefix: './'
}
module.exports = nextConfig
