const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  swcMinify: true,
  compress: true,
  images: {
    disableStaticImages: true,
  },
  experimental: {
    optimizePackageImports: ["react-bootstrap", "react-icons"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|avif|ico|svg|pdf)$/i,
      type: "asset/resource",
    });

    return config;
  },
};

module.exports = nextConfig;
