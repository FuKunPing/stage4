// 使用HTML模板
let HtmlPlugin = require('html-webpack-plugin')
// 每次打包前先清空上一次打包的数据
let {CleanWebpackPlugin} = require("clean-webpack-plugin")
// 独立打包css文件
let MiniCssExtractPlugin=require('mini-css-extract-plugin')
// const { loader } = require('mini-css-extract-plugin')

// vue插件
let VuePlugin=require('vue-loader/lib/plugin')

// 获取当前运行的环境是不是开发环境
let isDev=process.env.NODE_ENV=='development';
console.log(isDev);

module.exports = {
    // 扩展
    resolve:{
        //后缀名   (引入文件时，可以不写后缀名)
        extensions:['.js','.css','.less'], 
        // 别名
        alias:{
            '@css':'../css'
        }
    },

    entry:'./src/main.js',

    output: {
      path: __dirname+'/dist2',
      filename: '[hash:6]-tt-[name].js'
    },

    // 插件
    plugins:[
        new HtmlPlugin({
            template:"./src/testWeb.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename:'[name]-[contenthash:6].css'
        }),
        new VuePlugin()
    ],

    // loaders
    // 配置不同的loader来处理非js类型的文件
    module:{
        rules:[
            //处理css，less
            {
                test:/\.(css|less)$/,
                use:[
                    // isDev?'vue-style-loader':MiniCssExtractPlugin.loader
                    MiniCssExtractPlugin.loader,
                    // 'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                          modules: true //css模块化
                        }
                      },
                    'less-loader'
                
                ]
            },
            // 处理图片
            {
                test:/\.(jpg|JPG|png|gif|jpeg)$/,
                use:{
                    // 将图片保存在某个路径
                    // loader:'file-loader',
                    
                    //将图片转换成base64 Dataurl格式，没有图片路径和名字
                    loader:'url-loader',
                    options:{
                        // 不使用默认md5,hash值，指定名称
                        name:'[name]-[hash:6].[ext]',
                        // 输出路径
                        outputPath:'images/',
                        // 限制图片大小，超过就转换成file-loader
                        limit:30*1024
                    }
                    }
            },
            // babel处理ES6
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/ //不包括
            },
            // 处理vue文件
            {
                test:/\.vue$/,
                use:"vue-loader"
            }
        ]
    }
}