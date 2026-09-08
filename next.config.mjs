/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
  },
  eslint: {
    // Lint runs separately via `npm run lint`; don't block builds on it.
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
