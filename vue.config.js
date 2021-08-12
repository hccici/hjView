const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}
console.log(resolve('docs/md-loader/index.js'))
module.exports = {
  pages: {
    index: 'examples/main.js', // 指定webpack编译入口
    docs: 'docs/main.js'
  },
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
  }
}