// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, 'dist/index.html'),
    assetsRoot: path.resolve(__dirname, 'dist'),
    //assetsSubDirectory: 'static',
    assetsSubDirectory: 'src',
    assetsPublicPath: '/',
    //assetsPublicPath: 'http://andylei18.github.io/vue-shopping/dist/',
    //assetsPublicPath: 'http://localhost:63342/vue-shopping/dist/',
    productionSourceMap: true
  },
  dev: {
    port: 8888,
    proxyTable: {

    }
  },
  API_ROOT:(process.env.NODE_ENV === 'production')
    ? 'http://www.baidu.com/'
    : 'http://localhost:9090/',
  CookieDomain : (process.env.NODE_ENV === 'production')
    ? '.baidu.com'
    :''
}
