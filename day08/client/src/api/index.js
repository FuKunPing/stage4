import {ajax} from 'jquery'

// 获取所有用户信息，发送ajax请求，app.js处理数据库
function getAllEmps(){
  return new Promise((resolve,reject)=>{
    ajax({
      url: 'http://localhost:4000/getAll',
      success(result){
        // console.log(result)
        if(result.status=="SUCCESS"){
          resolve(result.data)
        }else{
          reject('error')
        }
      },
      error(){
        reject('error')
      }
    })
  })
}

// 添加用户
function addEmp(emp){
  // console.log(emp)
    return new Promise((resolve,reject)=>{
		ajax({
			url:"http://localhost:4000/add",
			data:{emp:emp},
			success(result){
				console.log(result)
				resolve(result)
			},
			error(err){
				reject(err)
			}
		})
    })
}



export default {
  getAllEmps,
  addEmp
}