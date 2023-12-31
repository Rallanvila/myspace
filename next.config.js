/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
      {
        protocol: 'https',
        hostname: 'media.tenor.com',
        port: '',
        pathname: '/0-ApwvpOkCsAAAAd/**',
      },
    ],
  },
};

module.exports = nextConfig;
