const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: `${__dirname}/dist`,
        filename: 'main.js',
    },
    resolve: {
        extensions: [".vue", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
}
