const path = require("path");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? "" : "",
  distDir: ".next",
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")]
  },
  api: {
    bodyParser: false
  }
};
