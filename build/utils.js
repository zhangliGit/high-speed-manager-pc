'use strict'
const path = require('path')
const pagePath = path.resolve(__dirname,'../src/pages')
const glob = require('glob')
const modulesDir = glob.sync(pagePath + '/*')

exports.entries = function () {
  let entries = {};
  modulesDir.forEach((file) => {
    const pageDir = file.split('/')[file.split('/').length-1]
    entries[pageDir] = `./src/pages/${pageDir}/index.js`
  })
  return entries
}
exports.assetsPath = function (_path) {
  const assetsSubDirectory = 'static';
  return path.posix.join(assetsSubDirectory, _path)
}
exports.devHttpPlugins = function () {
  let devHttpPlugin = []
  modulesDir.forEach((file) => {
    const pageDir = file.split('/')[file.split('/').length-1]
    let httpP = new HtmlWebpackPlugin({
      filename: pageDir + '.html',
      template: 'index.html',
      chunks: [pageDir],
      inject: true
    })
    devHttpPlugin.push(httpP)
  })
  return devHttpPlugin
}

exports.prodHttpPlugins = function () {
  let prodHttpPlugin = []
  modulesDir.forEach((file) => {
    const pageDir = file.split('/')[file.split('/').length-1]
    let httpP = new HtmlWebpackPlugin({
      filename: process.env.NODE_ENV === 'testing'
        ? 'index.html'
        : path.resolve(__dirname, `../dist/${pageDir}/index.html`),
      template: 'index.html',
      chunks: ['manifest', 'vendor', pageDir],
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    })
    prodHttpPlugin.push(httpP)
  })
  return prodHttpPlugin
}