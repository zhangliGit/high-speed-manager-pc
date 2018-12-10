let baseUrl = ''
if (process.env.url_env === 'testing') { // 测试环境
  baseUrl = 'http://testing'
} else if (process.env.url_env === 'development') { // 开发环境
  baseUrl = 'http://development'
} else if (process.env.url_env === 'production') { // 生产环境
  baseUrl = 'http://production'
}
export {
  baseUrl
}
