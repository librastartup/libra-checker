const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: [ '/', '/about/', '/address/', '/transaction/', '/redirect/'  ],
      })
    ]
  }
}
