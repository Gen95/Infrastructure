const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = env => {
    const isDev = env.NODE_ENV === "dev";
    return {
        mode: isDev ? "development" : "production",
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'main.js'
        },
        devServer: {
            overlay: true,
            open: isDev,
            port: 3000,
            watchContentBase: true,
            contentBase: 'dist'
        },
        module: {
            rules: [
                {
                    test: /\.handlebars$/,
                    loader: 'handlebars-loader'
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: '/node_modules/'
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new webpack.LoaderOptionsPlugin({
                options: {
                    handlebarsLoader: {}
                }
            }),
            new HtmlWebpackPlugin({
                template: "./src/index.handlebars"
            }),
        ],
        devtool: isDev ? 'source-map' : false
    }
};

// module.exports = (env, options) => {
//     let production = options.mode === 'production';

//     conf.devtool = production
//                     ? false
//                     : 'eval-sourcemap';

//     return conf;
// };