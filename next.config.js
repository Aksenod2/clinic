/** @type {import('next').NextConfig} */
const isExport = process.env.NEXT_EXPORT === 'true'
const isGithubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig = {
  ...(isExport && {
    output: 'export',
    trailingSlash: true,
    ...(isGithubPages && {
      basePath: '/clinic',
      assetPrefix: '/clinic',
    }),
  }),
  images: {
    ...(isExport && { unoptimized: true }),
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
