
// 开发环境
let {merge} = require('webpack-merge')
let base = require('./webpack.base.js')

// 文件合并
module.exports=merge(base,{
    mode:"development",
    devtool:"cheap-module-eval-source-map",
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
})