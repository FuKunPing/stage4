
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
        open:false,
        overlay:{
            // 出错时显示在页面
            errors:true
        },
        historyApiFallback:true,
        // 开启热加载
        hot:true,
        // 请求代理
        proxy:[{ 
            context:["/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg","/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg","/v8/fcg-bin/v8.fcg","/v8/fcg-bin/fcg_v8_singer_track_cp.fcg"],
            target:"https://c.y.qq.com/",
            changeOrigin:true,
            headers:{
                referer:"https://c.y.qq.com",
                host:"c.y.qq.com"
            }
        }],
        before(app){
            app.get('/singer/:id',(req,res)=>{
                res.redirect('/singer')
            })
        }
    },
})