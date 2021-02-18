module.exports = {
    assetsDir: "static",
    publicPath: "./",
    productionSourceMap: false,
    pages: {
        index: {
            entry: "examples/main.js",
            template: "public/index.html",
            filename: "index.html"
        }
    },
    devServer: {},
    css: {
        extract: false
    },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV == "production")
            config.externals = {
                vue: {
                    commonjs: "vue",
                    commonjs2: "vue",
                    amd: "Vue",
                    umd: "Vue"
                },
                'vue-gl':{
                    commonjs: "vue-gl",
                    commonjs2: "vue-gl",
                    amd: "VueGL",
                    umd: "VueGL"
                },
                three: {
                    commonjs: "three",
                    commonjs2: "three",
                    amd: "THREE",
                    umd: "THREE"
                }
            }
    },
    chainWebpack: (config) => {
        config.module
            .rule("raw")
            .test(/\.atlas$/)
            .use("raw-loader")
            .loader("raw-loader")
            .end()
    }
}
