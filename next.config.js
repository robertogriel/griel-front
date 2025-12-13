/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BIRTH_DATE: process.env.BIRTH_DATE,
    DOMAIN_CHECK_API: process.env.DOMAIN_CHECK_API,
    BACKEND_API: process.env.BACKEND_API
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
