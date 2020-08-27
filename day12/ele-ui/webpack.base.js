let HtmlPlugin = require('html-webpack-plugin')

let {CleanWebpackPlugin} = require("clean-webpack-plugin")

let MiniCssExtractPlugin=require('mini-css-extract-plugin')

let VuePlugin=require('vue-loader/lib/plugin')

let path=require('path')

module.exports = {
    resolve:{
        extensions:['.js','.css','.vue'], 
        alias:{
            '@silde':path.resolve(__dirname,'src/assets/slideShow')
        }
    },
    entry:'./src/main.js',
    output: {
      path: __dirname+'/dist2',
      filename: '[hash:6]-tt-[name].js'
    },
    plugins:[
        new HtmlPlugin({
            template:"./public/index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename:'[name]-[contenthash:6].css'
        }),
        new VuePlugin()
    ],
    module:{
        rules:[
            {
                test:/\.(css|less)$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    // "vue-style-loader"
                    'css-loader',
        
                ]
            },
            {
                test:/\.(jpg|JPG|png|gif|jpeg)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        name:'[name]-[hash:6].[ext]',
                        outputPath:'images/',
                        limit:30*1024,
                        esModule:false
                    }
                    }
            },
            {
                test:/\.(ttf|woff)$/,
                use:"file-loader"
            },
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.vue$/,
                use:"vue-loader"
            }
        ]
    }
}