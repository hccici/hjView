module.exports = {
  pages: {
    index: 'examples/main.js' // 指定webpack编译入口
  },
  // 扩展 webpack 配置，使 packages 加入编译
  /* chainWebpack: config => {
    config.module
      .rule('js')
      .include
        .add('/packages')
        .end()
      .use('babel')
        .loader('babel-loader')
        .tap(options => {
          // 修改它的选项...
          return options
        })  
  } */
}