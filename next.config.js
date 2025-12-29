const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
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
