/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true, // This was removed as it's no longer a valid experimental flag in newer Next.js versions
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
