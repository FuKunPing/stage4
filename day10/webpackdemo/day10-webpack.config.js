// 使用HTML模板
let HtmlPlugin = require('html-webpack-plugin')
// 每次打包前先清空上一次打包的数据
let {CleanWebpackPlugin} = require("clean-webpack-plugin")
// 独立打包css文件
let MiniCssExtractPlugin=require('mini-css-extract-plugin')

module.exports = {
    mode: 'development', // 环境
    // 入口文件
    // 从哪个文件开始查找相关的依赖
    // entry: "./src/index.js", // 单一入口
    // 多入口 
    // entry: [
    //   './src/index.js',
    //   './src/index2.js'
    // ],
    
    entry: {
        a: "./src/js/index.js",
        b: "./src/js/index2.js"
      },

    // a,b --chunkname
    /* entry: {
      a: ["./src/index.js","./src/index2.js"],
      b: "./src/index2.js"
    }, */
  

    // 出口，输出路径
    // 指定打包生成文件的保存位置
    output: {
      // __dirname表示的是当前项目的路径
      path: __dirname+'/dist2',
      filename: '[hash:6]-tt-[name].js'
    },

    // 插件
    plugins:[
        new HtmlPlugin({
            template:'./src/testWeb.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // filename:'index-[name].css'
            filename:'[name]-[contenthash:6].css'
        })
    ],

    // loaders
    // 配置不同的loader来处理非js类型的文件
    module:{
        rules:[
            // 处理css
            // 使用的加载器的加载顺序：从后向前，从下向上
            // 先使用css-loader让webpack认识css文件，然后再分析打包，再去使用style-loader将样式内联到模板中 
            /* {
                test:/\.css$/,
                // 合并写法：从后向前
                use:['style-loader','css-loader']
            } */

            /* {
                test:/\.css$/,
                use:"style-loader"
            }, */
            
            /* {
                // 以.css结尾的文件
                test:/\.css$/,
                use:'css-loader'
            } */

            {
                // 以.css结尾的文件
                test:/\.(c|le)ss$/,
                use:[
                /* {
                    loader:'style-loader',
                    options:{
                        injectType:'singletonStyleTag' //让页面只出现一个style标签，但是无效
                    }
                }, */
                // 将css独立打包成css文件，此时就不需要再将样式内联到HTML中了，也就不需要style-loader了
                MiniCssExtractPlugin.loader,
                'css-loader',
                // less
                'less-loader'
                
            ]
            },         
        ]
    }
}