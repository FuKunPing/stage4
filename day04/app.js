let exp = require('express');
let app = exp();

app.listen(4000);

app.use(exp.static('./routerdemo/dist'))

app.get('/getSinger',(req,res)=>{
  let name = req.query.name;
  res.send(name);
})