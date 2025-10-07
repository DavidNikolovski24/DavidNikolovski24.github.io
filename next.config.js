/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export', // Next.js 14 static HTML
  images: { unoptimized: true }, // needed for GitHub Pages
  basePath: '/DavidNikolovski24.github.io', // your repo name
  assetPrefix: '/DavidNikolovski24.github.io/',
  trailingSlash: true, // ensures paths end with /
};

module.exports = nextConfig;
