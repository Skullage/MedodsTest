const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/MedodsTest/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/style.scss";`
      }
    }
  }
})
