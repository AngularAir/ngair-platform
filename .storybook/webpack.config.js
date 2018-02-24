const path = require('path');
const webpack = require('webpack');

const libPath = path.resolve('libs');

module.exports = {
  module: {
    rules: [
    ]
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/@ngair-platform/, function(resource) {
      resource.request = resource.request.replace(/@ngair-platform/, libPath);
    })
  ]
}
