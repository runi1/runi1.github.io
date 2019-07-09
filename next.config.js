const webpack = require('webpack')

const isProd = true

const assetPrefix = isProd ? '/runi1.github.io' : ''

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" }
    }
  },
  assetPrefix: assetPrefix,
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      }),
    )

    return config
  },
}