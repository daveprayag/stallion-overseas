const webpack = require("webpack");

const nextConfig = {
  images: {
    domains: [
      "cloud.appwrite.io",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
    ],
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
