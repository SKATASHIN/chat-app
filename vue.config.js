const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})

module.exports = {
  publicPath: '/test2', //リポジトリ名
  outputDir: 'docs' //docs
}