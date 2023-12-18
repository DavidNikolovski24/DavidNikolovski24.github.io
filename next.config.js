/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    trailingSlash: true,
    output: 'export',

    images: {
      loader: 'custom',
      loaderFile: './my-loader.ts',
    },
  },
 };
 


module.exports = nextConfig;