/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BIRTH_DATE: process.env.BIRTH_DATE
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
