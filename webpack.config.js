const path = require('path');

module.exports =  {
    entry: path.resolve(__dirname , "src/client/index.tsx"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "src/server/assets/javascripts")
    },

    devtool: "source-map",

    resolve: {
        extensions: [".webpack.js", ".web.js", "ts","tsx", ".js"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/,include: [ path.resolve(__dirname, "src/client") ], use: "awesome-typescript-loader" },
            { test: /\.js$/, enforce: "pre", use: "source-map-loader" }
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};