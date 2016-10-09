var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://127.0.0.1:82',
        './index.js'
    ],
    output: {
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {test: /\.js[x]?$/, loaders: ['babel-loader?presets[]=es2015&presets[]=react'], include: path.join(__dirname, '.')}
        ]
    }
};