// next.config.mjs

import withBundleAnalyzer from '@next/bundle-analyzer';
import path from 'path';

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})({
  reactStrictMode: true,
  webpack(config) {
    // Add custom Webpack configuration here
    config.module.rules.push({
      test: /\.(pdf|svg|eot|otf|ttf|woff|woff2)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/[path][name].[hash][ext]',
      },
    });

    return config;
  },
});
