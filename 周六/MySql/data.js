let mysql=require('mysql');

let connect =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123',
    database:'web'
})
connect.connect();

// 查询
let sql_r='select * from stus';
connect.query(sql_r,(err,result,fields)=>{
    console.log(err);
    // console.log(result);
    result.forEach(val=>{
        let id=val.id;
        let name=val.name;
        let b=val.birth;
        let str=`${b.getFullYear()}-${b.getMonth()+1}-${b.getDate()}`;
        console.log(`id:${id},name:${name},birth:${str}`);
    })
    connect.end();
})


let sql_a=`insert into stus values (101,'wangwu',?)`;
/* connect.query({
    sql:sql_a,
    values:[new Date()]
},(err,result,fields)=>{
    console.log(err);
    console.log(result);
    connect.end();
}) */