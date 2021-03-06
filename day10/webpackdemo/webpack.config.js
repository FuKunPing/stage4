// 使用HTML模板
let HtmlPlugin = require('html-webpack-plugin')
// 每次打包前先清空上一次打包的数据
let {CleanWebpackPlugin} = require("clean-webpack-plugin")
// 独立打包css文件
let MiniCssExtractPlugin=require('mini-css-extract-plugin')
// const { loader } = require('mini-css-extract-plugin')

// vue插件
let VuePlugin=require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development', // 环境
    devtool:
        "cheap-module-eval-source-map",
    // 扩展
    resolve:{
        //后缀名   (引入文件时，可以不写后缀名)
        extensions:['.js','.css','.less'], 
        // 别名
        alias:{
            '@css':'../css'
        }
    },
   /*  entry: {
        aaa: "./src/js/index.js",
        bbb: "./src/js/index2.js"
      }, */
    entry:'./src/main.js',
    output: {
      // __dirname表示的是当前项目的路径
      path: __dirname+'/dist2',
      filename: '[hash:6]-tt-[name].js'
    },

    // 插件
    plugins:[
       /*  new HtmlPlugin({
            //指定生成文件的名称
            filename:'a.html', 
            //指定使用的模板
            template:'./src/testWeb.html', 
            // 指定使用哪些chunks(entry中的key)
            chunks:['aaa'],
        }),
        new HtmlPlugin({
            filename:'b.html',
            template:'./src/testWeb.html',
            chunks:['bbb'],
            minify:{
                // 删除注释
                removeComments:true,
                // 删除空白和换行
                collapseWhitespace:true,
                // 删除css中空白和换行
                minifyCSS:true
            }
        }), */
        new HtmlPlugin({
            template:"./src/testWeb.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // filename:'index-[name].css'
            filename:'[name]-[contenthash:6].css'
        }),
        new VuePlugin()
    ],

    // 配置webpack-dev-server
    devServer:{
        // 在内存中的路径
        contentBase:__dirname + '/dist',
        // 主机名
        host:"localhost",
        // 端口号
        port:4001,
        // 自动打开浏览器
        open:true,
        overlay:{
            // 出错时显示在页面
            errors:true
        },
        // 开启热加载
        hot:true,
        // 请求代理
        proxy:{      
        }
    },



    // loaders
    // 配置不同的loader来处理非js类型的文件
    module:{
        rules:[
            //处理css，less
            {
                test:/\.(css|less)$/,
                use:[
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