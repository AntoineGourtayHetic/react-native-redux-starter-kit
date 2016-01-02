var path = require('path'),
    webpack = require('webpack');

var dev = process.env.NODE_ENV === 'DEV' ? true : false,
    debug = process.env.DEBUG === 'true' ? true : false,
    production = process.env.NODE_ENV === 'PROD' ? true : false;

module.exports = {
    debug: true,
    devtool: 'source-map',
    entry: {
        'index.ios': ['./src/index.jsx'],
        'index.android': ['./src/index.jsx'],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            include: [
                path.resolve(__dirname, 'src'),
                path.resolve(__dirname, 'node_modules/react-native/Libraries/react-native'),
                path.resolve(__dirname, 'node_modules/react-native-navbar'),
                path.resolve(__dirname, 'node_modules/@exponent'),
                path.resolve(__dirname, 'node_modules/react-native-clone-referenced-element')
            ],
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0', 'react'],
            },
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: [
            'node_modules',
            './src/',
            './src/components',
            './src/scripts/',
            './src/scripts/actions/',
            './src/scripts/containers/',
            './src/scripts/reducers/'
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __PROD__  : production,
            __DEV__   : dev,
            __DEBUG__ : debug
        })
    ]
};
