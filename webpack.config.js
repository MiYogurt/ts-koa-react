const webpack = require('webpack');
const path = require('path');

module.exports =  {
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        path.resolve(__dirname , "src/client/index.tsx")
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "src/server/assets/javascripts"),
        publicPath: '/assets/javascripts/'
    },

    devtool: "source-map",

    resolve: {
        extensions: [".webpack.js", ".web.js", "ts","tsx", ".js"]
    },

    module: {
        rules: [
            { 
                test: /\.tsx?$/,
                include: [ path.resolve(__dirname, "src/client") ], 
                exclude:[ path.resolve(__dirname, "src/server") ] , 
                use: "awesome-typescript-loader" 
            },
            { test: /\.js$/, enforce: "pre", use: "source-map-loader" }
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: [
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NamedModulesPlugin()
	]
};