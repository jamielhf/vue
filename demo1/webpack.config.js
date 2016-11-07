var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        publicPath: 'dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
               // 使用vue-loader 加载 .vue 结尾的文件
                test: /\.vue$/,
                loader: 'vue'
            },

            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.js$/,
                loader: 'babel?presets=es2015',
                exclude: /node_modules/
            },
            {
                // edit this for additional asset file types
                test: /\.(png|jpg|gif)$/,
                exclude: /node_modules/,
                loader: 'file?name=[name].[ext]?[hash]'
            }
        ]
    },
    // example: if you wish to apply custom babel options
    // instead of using vue-loader's default:
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            vue: 'vue/dist/vue.js',
            vueRouter: 'vue-router/dist/vue-router.js'
        }
    },

};

