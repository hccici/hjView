const path = require('path')
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
    }
  },
  lintOnSave: false,// 目前使用eslint的话会报错，到时候用eslint的
  publicPath: process.env.NODE_ENV === 'production'
    ? '/hjView/'
    : '/'
}