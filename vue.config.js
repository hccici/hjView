const path = require('path')
const packageName = require('./package.json').name;
function resolve(dir) {
  return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}
const _pages = {
  index: 'docs/main.js',
  examples: 'examples/main.js'
}
function getPages() {
  const pagekeys = process.env.VUE_APP_PAGE.split(',')
  const pages = {}
  pagekeys.forEach(key => {
    pages[key] = _pages[key]
  })
  return pages
}

module.exports = {
  pages: getPages(),
  // 扩展 webpack 配置，使其能够编译md文件
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            {
              loader: 'vue-loader',
              options: {
                compilerOptions: {
                  preserveWhitespace: false
                }
              }
            },
            {
              loader: resolve('docs/md-loader/index.js')
            }
          ]
        },
      ]
    },
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    },
  },
  lintOnSave: false,// 目前使用eslint的话会报错，到时候用eslint的
  // 这里也要设置，即使__webpack_public_path__后面被设置了，这是因为在一些引用是被固定写在index.html里的也要加前缀。乾坤加载这部份资源应该能正确加载，后续引入才使用__webpack_public_path__设置的
  publicPath: process.env.NODE_ENV === 'production' ? '/hjView/' : '/',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
}


