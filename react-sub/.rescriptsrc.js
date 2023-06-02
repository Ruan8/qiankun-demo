const path = require("path");
const { name } = require("./package");

module.exports = {
    webpack: (config) => {
        config.output.library = `${name}-[name]`;
        config.output.libraryTarget = "umd";
        config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
        config.output.globalObject = "window";
        config.resolve.alias = {
            "@": path.resolve(__dirname, "./src"),
        };
        return config;
    },

    devServer: (_) => {
        const config = _;
        config.headers = {
            "Access-Control-Allow-Origin": "*",
        };
        return config;
    },
};
