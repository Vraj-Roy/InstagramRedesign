const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production", // Ensures that TerserPlugin is used
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        // TerserPlugin options
        terserOptions: {
          compress: {
            drop_console: true, // Remove console statements
          },
        },
        extractComments: false, // Disable extraction of comments to a separate file
      }),
    ],
  },
};
