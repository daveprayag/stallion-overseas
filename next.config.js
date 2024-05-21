const webpack = require("webpack");

const nextConfig = {
  images: {
    domains: ["cloud.appwrite.io"],
  },
  webpack(config) {
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /^isomorphic-form-data$/,
        `${config.context}/form-data-mock.js`
      )
    );
    config.resolve.alias.canvas = false;

    return config;
  },
};

module.exports = nextConfig;
