// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/public/' : '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: 'http://localhost:8080'
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
};