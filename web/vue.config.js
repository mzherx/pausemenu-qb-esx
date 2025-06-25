const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: "./",
    outputDir: "",
    transpileDependencies: true,
    productionSourceMap: false,
    configureWebpack: {
        performance: {
            hints: process.env.NODE_ENV === 'production' ? 'warning' : false
        }
    }
})
