'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
      chunks: [pageDir],
      minify:{
        removeAttributeQuotes: true,
        collapseWhitespace: true //折叠空白区域 也就是压缩代码
      },
      hash:true, //向html引入的链接后面增加一段hash值,消除缓存
      filename: pageDir + '.html',
      template: './index.html'
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
      chunks: ['manifest', 'vendor', pageDir, 'common'],
      minify:{
        removeAttributeQuotes: true,
        collapseWhitespace: true //折叠空白区域 也就是压缩代码
      },
      hash:true, //向html引入的链接后面增加一段hash值,消除缓存
      filename: `${pageDir}.html`,
      template: './index.html'
    })
    prodHttpPlugin.push(httpP)
  })
  return prodHttpPlugin
}