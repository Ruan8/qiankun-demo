const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const { name } = require("./package");

module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        port: 8001,
    },
    lintOnSave: false,
    configureWebpack: {
        output: {
            library: `${name}-[name]`,
            libraryTarget: "umd", // 把微应用打包成 umd 库格式
            chunkLoadingGlobal: `webpackJsonp_${name}`,
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
    },
});
