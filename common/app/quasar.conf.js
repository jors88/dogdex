module.exports = function (ctx) {
  return {
    plugins: [
      'axios'
    ],
    css: [
      'app.styl'
    ],
    extras: [
      ctx.theme.mat ? 'roboto-font' : null,
      'material-icons',
      'ionicons',
      'mdi',
      'fontawesome'
    ],
    supportIE: false,
    build: {
      scopeHoisting: true,
      vueRouterMode: 'history',
      distDir: '../../client',
      publicPath: '/',
      extendWebpack (cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        })
      }
    },
    devServer: {
      open: true,
      port: 7000,
      proxy: {
        '/api': {
          target: 'https://thedogdex.herokuapp.com',
          changeOrigin: true
        }
      }
    },
    framework: 'all',
    animations: 'all',
    ssr: {
      pwa: false
    },
    pwa: {},
    cordova: {},
    electron: {}
  }
}
