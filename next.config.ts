import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // images: {
  //   domains: [
  //     "tnkas.shop",
  //     "www.tnkas.shop",
  //     'elegencia-react-ejev.vercel.app',
  //   ]
  // }
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
