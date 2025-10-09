/* eslint-env node */

import process from 'node:process'

const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const repository = process.env.GITHUB_REPOSITORY?.split('/')?.[1] ?? ''
const githubBasePath = isGithubActions && repository ? `/${repository}` : undefined

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.29.39', 'localhost'],
  ...(githubBasePath
    ? {
        basePath: githubBasePath,
        assetPrefix: `${githubBasePath}/`,
        trailingSlash: true,
      }
    : {}),
}

export default nextConfig