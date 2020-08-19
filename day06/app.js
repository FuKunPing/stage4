let exp=require("express");
let got=require('got')
let app=exp()

app.listen(4000);

// 设置消息头
app.use(function(req,res,next){
    // 允许所有路径跨域
    res.header("Access-Control-Allow-Origin", "*");
    next();
})

app.get('/getdata',function(req,res){
    // res.send('over')
    let url=req.query.url;
    got(url).then(data=>{
        res.send(data.body);
    })

})
