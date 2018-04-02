'use strict'
const path=require('path');
const htmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    //入口
    entry:{
        main:'./src/main.js'
    },
    output:{
        //所有产出路径
        path:path.join(__dirname,'dist'),
        filename:'build.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // style-loader!css-loader!autoprefixer-loader
                loader:'style-loader!css-loader!autoprefixer-loader'
            },
            {
                test:/\.less$/,
                loader:'style-loader!css-loader!autoprefixer-loader!less-loader'
            },
            {
                test:/\.(jpg|png|svg|woff|woff2|ttf|gif)$/,
                loader:'url-loader',
                options:{
                    limit:4096,
                    name:'[name].[ext]'
                }

            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude: /node_modules/,
                options:{
                    presets:['es2015'],
                    plugins:['transform-runtime']
                }
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]
    },
    // plugins:[
    //     new htmlWebpackPlugin({
    //         template:'./src/index.html'
    //     })
    // ]
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]

}