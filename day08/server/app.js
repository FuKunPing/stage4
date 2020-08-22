const express = require('express');
const {User} = require('./model');
const app = express();

app.listen(4000);

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*")
  next();
})

// 获取数据库所有数据
app.get('/getAll',function(req,res){
  User.find(function(err,docs){
    if(err){
      res.send({status:'ERROR',data:null})
      return ;
    }
    res.send({status:'SUCCESS',data: docs});
  })
})

// 添加数据到数据库
app.get('/add',function(req,res){
  let emp=req.query.emp;
  let o=new User(emp);
  o.save(function(err,doc){
    if(err){
      res.send({status:"ERROR"})
      return ;
	}
	res.send({status:"SUCCESS"})
  })
})

// 删除员工数据
app.get('/delete',function(req,res){
  let emp=req.query.emp;
  User.deleteOne(emp,function(err){
    if(err){
      res.send({status:"ERROR"});
      return ;
    }
    res.send({status:"SUCCESS"});
  });
})


