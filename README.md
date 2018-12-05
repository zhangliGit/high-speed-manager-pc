## web-multi-product

**基于vue+webpack构建的多页面项目模块，适用于web端，基于elementUI框架**

### 项目开发

```
npm i or yarn install // 安装依赖

npm run dev // 本地开发调试
```

### webpack打包功能

+ 多页面打包


+ 多环境打包配置

> 新建配置文件，配置不同环境的接口地址

```
let baseUrl = ''
if (process.env.NODE_ENV === 'testing') { // 测试环境
  baseUrl = ''
} else if (process.env.NODE_ENV === 'development') { // 开发环境
  baseUrl = ''
} else if (process.env.NODE_ENV === 'production') { // 生产环境
  baseUrl = ''
}
export {
  baseUrl
}
```

+ 模块按需打包加载

+ 模块代码分割 


### 本地启动服务开发

```
npm run dev // 启动开发环境调试

npm run dev--test // 启动测试环境调试

npm run dev--pro // 启动生产环境调试
```

### 打包构建

```
npm run build // 打包正式环境

npm run build--dev // 打包开发环境

npm run build--test // 打包测试环境
```
